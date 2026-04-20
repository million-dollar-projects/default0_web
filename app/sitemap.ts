import { promises as fs } from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { getBlogPostLocalesBySlug, getBlogPosts } from "@/lib/blog";
import { Locale, locales } from "@/lib/site-content";
import { SITE_URL, buildAbsoluteAvailableLanguageAlternates } from "@/lib/seo";

const STATIC_ROUTES: ReadonlyArray<{
  path: string;
  file: string;
  locales: readonly Locale[];
}> = [
  { path: "", file: "app/(site)/[locale]/page.tsx", locales },
  { path: "/blog", file: "app/(site)/[locale]/blog/page.tsx", locales },
  { path: "/mac-auto-mute", file: "app/(site)/[locale]/mac-auto-mute/page.tsx", locales: ["en", "zh-CN", "ko", "ja", "de", "es"] },
  {
    path: "/prevent-accidental-speaker-playback-mac",
    file: "app/(site)/[locale]/prevent-accidental-speaker-playback-mac/page.tsx",
    locales: ["en"]
  },
  {
    path: "/mute-mac-on-bluetooth-disconnect",
    file: "app/(site)/[locale]/mute-mac-on-bluetooth-disconnect/page.tsx",
    locales: ["en"]
  },
  {
    path: "/auto-mute-when-meeting-app-opens-mac",
    file: "app/(site)/[locale]/auto-mute-when-meeting-app-opens-mac/page.tsx",
    locales: ["en"]
  }
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
      lastModified: staticLastModifiedMap.get(route.path),
      alternates: {
        languages: buildAbsoluteAvailableLanguageAlternates(route.locales, (targetLocale) => `/${targetLocale}${route.path}`)
      }
    }))
  );

  const postEntries: MetadataRoute.Sitemap = (
    await Promise.all(
      locales.map(async (locale) => {
        const posts = await getBlogPosts(locale);
        return Promise.all(
          posts.map(async (post) => {
            const availableLocales = await getBlogPostLocalesBySlug(post.slug);
            return {
              url: withBase(`/${locale}/blog/${post.slug}`),
              lastModified: post.lastModified ? new Date(post.lastModified) : new Date(post.date),
              alternates: {
                languages: buildAbsoluteAvailableLanguageAlternates(availableLocales, (targetLocale) => `/${targetLocale}/blog/${post.slug}`)
              }
            };
          })
        );
      })
    )
  ).flat();

  return [...staticEntries, ...postEntries];
}
