import { promises as fs } from "fs";
import path from "path";
import type { Locale } from "@/lib/site-content";

export type BlogPostMeta = {
  title: string;
  description: string;
  date: string;
  slug: string;
  locale: Locale;
  lastModified: string;
  draft: boolean;
};

export type BlogPost = BlogPostMeta & {
  body: string;
};

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function getFrontmatter(content: string): string {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  return match?.[1] ?? "";
}

function getBody(content: string): string {
  const match = content.match(/^---\n[\s\S]*?\n---\n?([\s\S]*)$/);
  return (match?.[1] ?? content).trim();
}

function getStringField(frontmatter: string, key: string): string {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*\"([^\"]*)\"\\s*$`, "m"));
  return match?.[1] ?? "";
}

function getBooleanField(frontmatter: string, key: string, fallback: boolean): boolean {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(true|false)\\s*$`, "m"));
  if (!match) return fallback;
  return match[1] === "true";
}

function isLocale(value: string): value is Locale {
  return ["en", "zh-CN", "ko", "ja", "de", "es"].includes(value);
}

async function getAllBlogPosts(): Promise<(BlogPostMeta & { fileName: string })[]> {
  let files: string[] = [];

  try {
    files = await fs.readdir(BLOG_DIR);
  } catch {
    return [];
  }

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const fullPath = path.join(BLOG_DIR, file);
        const stats = await fs.stat(fullPath);
        const source = await fs.readFile(fullPath, "utf8");
        const frontmatter = getFrontmatter(source);
        const slugFromFile = file.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.mdx$/, "");
        const localeRaw = getStringField(frontmatter, "locale");
        const locale: Locale = isLocale(localeRaw) ? localeRaw : "zh-CN";

        return {
          title: getStringField(frontmatter, "title") || slugFromFile,
          description: getStringField(frontmatter, "description"),
          date: getStringField(frontmatter, "date"),
          slug: getStringField(frontmatter, "slug") || slugFromFile,
          locale,
          lastModified: stats.mtime.toISOString(),
          draft: getBooleanField(frontmatter, "draft", false),
          fileName: file
        };
      })
  );

  return posts
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPosts(locale: Locale): Promise<BlogPostMeta[]> {
  const posts = await getAllBlogPosts();
  return posts
    .filter((post) => post.locale === locale)
    .map(({ fileName: _fileName, ...meta }) => meta);
}

export async function getBlogPostBySlug(locale: Locale, slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  const meta = posts.find((post) => post.locale === locale && post.slug === slug);
  if (!meta) return null;

  const source = await fs.readFile(path.join(BLOG_DIR, meta.fileName), "utf8");

  const { fileName: _fileName, ...cleanMeta } = meta;
  return {
    ...cleanMeta,
    body: getBody(source)
  };
}
