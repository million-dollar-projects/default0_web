import { promises as fs } from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { Locale, locales } from "@/lib/site-content";
import { SITE_URL } from "@/lib/seo";

const STATIC_ROUTES: ReadonlyArray<{
  path: string;
  file: string;
  locales: readonly Locale[];
}> = [
  { path: "", file: "app/[locale]/page.tsx", locales },
  { path: "/blog", file: "app/[locale]/blog/page.tsx", locales },
  { path: "/feedback", file: "app/[locale]/feedback/page.tsx", locales },
  { path: "/privacy", file: "app/[locale]/privacy/page.tsx", locales },
  { path: "/terms", file: "app/[locale]/terms/page.tsx", locales },
  { path: "/mac-auto-mute", file: "app/[locale]/mac-auto-mute/page.tsx", locales: ["en"] }
] as const;

function withBase(pathname: string): string {
  return `${SITE_URL}${pathname}`;
}

async function getSourceLastModified(relativeFilePath: string): Promise<Date> {
  const fullPath = path.join(process.cwd(), relativeFilePath);
  const stats = await fs.stat(fullPath);
  return stats.mtime;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticLastModifiedEntries = await Promise.all(
    STATIC_ROUTES.map(async (route) => [route.path, await getSourceLastModified(route.file)] as const)
  );
  const staticLastModifiedMap = new Map(staticLastModifiedEntries);

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.flatMap((route) =>
    route.locales.map((locale) => ({
      url: withBase(`/${locale}${route.path}`),
      lastModified: staticLastModifiedMap.get(route.path)
    }))
  );

  const postEntries: MetadataRoute.Sitemap = (
    await Promise.all(
      locales.map(async (locale) => {
        const posts = await getBlogPosts(locale);
        return posts.map((post) => ({
          url: withBase(`/${locale}/blog/${post.slug}`),
          lastModified: post.lastModified ? new Date(post.lastModified) : new Date(post.date)
        }));
      })
    )
  ).flat();

  return [...staticEntries, ...postEntries];
}
