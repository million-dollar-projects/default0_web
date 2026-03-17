import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { locales } from "@/lib/site-content";
import { SITE_URL } from "@/lib/seo";

const STATIC_PATHS = ["", "/blog", "/feedback", "/privacy"] as const;

function withBase(pathname: string): string {
  return `${SITE_URL}${pathname}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    STATIC_PATHS.map((path) => ({
      url: withBase(`/${locale}${path}`),
      lastModified: new Date()
    }))
  );

  const postEntries: MetadataRoute.Sitemap = (
    await Promise.all(
      locales.map(async (locale) => {
        const posts = await getBlogPosts(locale);
        return posts.map((post) => ({
          url: withBase(`/${locale}/blog/${post.slug}`),
          lastModified: post.date ? new Date(post.date) : new Date()
        }));
      })
    )
  ).flat();

  return [...staticEntries, ...postEntries];
}
