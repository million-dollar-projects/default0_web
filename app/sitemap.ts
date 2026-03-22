import { promises as fs } from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { locales } from "@/lib/site-content";
import { SITE_URL } from "@/lib/seo";

const STATIC_PATHS = ["", "/blog", "/feedback", "/privacy", "/terms"] as const;
const STATIC_ROUTE_FILES: Record<(typeof STATIC_PATHS)[number], string> = {
  "": "app/[locale]/page.tsx",
  "/blog": "app/[locale]/blog/page.tsx",
  "/feedback": "app/[locale]/feedback/page.tsx",
  "/privacy": "app/[locale]/privacy/page.tsx",
  "/terms": "app/[locale]/terms/page.tsx"
};

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
    STATIC_PATHS.map(async (staticPath) => [staticPath, await getSourceLastModified(STATIC_ROUTE_FILES[staticPath])] as const)
  );
  const staticLastModifiedMap = new Map(staticLastModifiedEntries);

  const staticEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    STATIC_PATHS.map((path) => ({
      url: withBase(`/${locale}${path}`),
      lastModified: staticLastModifiedMap.get(path)
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
