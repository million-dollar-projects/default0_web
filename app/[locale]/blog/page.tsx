import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/blog";
import { getSiteContent, isLocale } from "@/lib/site-content";
import SiteChrome from "@/components/site-chrome";

type PageProps = {
  params: { locale: string };
};

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale)) return {};
  const content = getSiteContent(params.locale);
  return {
    title: `${content.brand} | ${content.labels.blog}`,
    description: content.hero.description
  };
}

export default async function BlogPage({ params }: PageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;
  const content = getSiteContent(locale);
  const posts = await getBlogPosts(locale);

  return (
    <SiteChrome content={content} locale={locale} sectionPrefix={`/${locale}`}>
      <main className="mx-auto w-container py-16 sm:py-20">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{content.labels.blog}</h1>
        </div>

        {posts.length === 0 ? (
          <p className="text-muted">{content.labels.blogEmpty}</p>
        ) : (
          <ul className="grid gap-4">
            {posts.map((post) => (
              <li key={post.slug} className="rounded-xl2 border border-line bg-surface p-6">
                <p className="text-sm text-muted">{post.date}</p>
                <h2 className="mt-2 text-xl font-semibold">
                  <Link href={`/${locale}/blog/${post.slug}`} className="transition hover:text-brand">
                    {post.title}
                  </Link>
                </h2>
                {post.description ? <p className="mt-2 text-muted">{post.description}</p> : null}
              </li>
            ))}
          </ul>
        )}
      </main>
    </SiteChrome>
  );
}
