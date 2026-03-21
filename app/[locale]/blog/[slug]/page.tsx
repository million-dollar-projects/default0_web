import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getBlogPostBySlug } from "@/lib/blog";
import SiteChrome from "@/components/site-chrome";
import { Locale, getSiteContent, isLocale } from "@/lib/site-content";
import { buildLanguageAlternates } from "@/lib/seo";

type PageProps = {
  params: { locale: string; slug: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const post = await getBlogPostBySlug(params.locale, params.slug);
  if (!post) return {};
  const canonicalPath = `/${params.locale}/blog/${params.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: canonicalPath,
      languages: buildLanguageAlternates((locale) => `/${locale}/blog/${params.slug}`)
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: canonicalPath,
      images: [{ url: "/og-default0.svg", width: 1200, height: 630, alt: "Default0 preview" }]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-default0.svg"]
    }
  };
}

function normalizeHref(href: string, locale: Locale): string {
  if (href.startsWith("/blog/")) {
    return `/${locale}${href}`;
  }

  return href;
}

function renderInlineContent(line: string, locale: Locale): ReactNode[] {
  const pattern = /(\[[^\]]+\]\([^)]+\)|`[^`]+`)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of line.matchAll(pattern)) {
    const token = match[0];
    const index = match.index ?? 0;

    if (index > lastIndex) {
      nodes.push(line.slice(lastIndex, index));
    }

    const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      nodes.push(
        <Link key={`link-${index}`} href={normalizeHref(href, locale)} className="text-brand underline-offset-4 hover:underline">
          {label}
        </Link>
      );
    } else {
      nodes.push(
        <code key={`code-${index}`} className="rounded bg-page px-1.5 py-0.5 text-sm">
          {token.slice(1, -1)}
        </code>
      );
    }

    lastIndex = index + token.length;
  }

  if (lastIndex < line.length) {
    nodes.push(line.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : [line];
}

function renderLine(line: string, key: number, locale: Locale) {
  const imageMatch = line.match(/^!\[([^\]]*)\]\((\S+?)(?:\s+"([^"]+)")?\)$/);
  if (imageMatch) {
    const [, alt, src, caption] = imageMatch;

    return (
      <figure key={key} className="my-8 overflow-hidden rounded-xl2 border border-line bg-page/40">
        {/* External stock-image URLs are user/content-driven, so a plain img is more robust than Next Image domain allowlists here. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" className="h-auto w-full object-cover" referrerPolicy="no-referrer" />
        {caption ? <figcaption className="border-t border-line px-4 py-3 text-sm text-muted">{caption}</figcaption> : null}
      </figure>
    );
  }

  if (line.startsWith("### ")) {
    return (
      <h3 key={key} className="mt-6 text-xl font-semibold">
        {renderInlineContent(line.replace(/^###\s+/, ""), locale)}
      </h3>
    );
  }

  if (line.startsWith("## ")) {
    return (
      <h2 key={key} className="mt-8 text-2xl font-semibold">
        {renderInlineContent(line.replace(/^##\s+/, ""), locale)}
      </h2>
    );
  }

  if (line.startsWith("- ")) {
    return (
      <li key={key} className="ml-5 list-disc text-base leading-relaxed text-text">
        {renderInlineContent(line.replace(/^- /, ""), locale)}
      </li>
    );
  }

  if (line.trim() === "") {
    return <div key={key} className="h-2" />;
  }

  return (
    <p key={key} className="text-base leading-relaxed text-text">
      {renderInlineContent(line, locale)}
    </p>
  );
}

export default async function BlogDetailPage({ params }: PageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const content = getSiteContent(locale);
  const post = await getBlogPostBySlug(locale, params.slug);
  if (!post) {
    notFound();
  }

  const lines = post.body.split("\n");

  return (
    <SiteChrome content={content} locale={locale} sectionPrefix={`/${locale}`}>
      <main className="mx-auto w-container py-16 sm:py-20">
        <div className="mb-8">
          <Link href={`/${locale}/blog`} className="inline-flex min-h-11 items-center rounded-full border border-line bg-surface px-5 py-2 text-sm font-medium transition hover:border-brand">
            {content.labels.backToBlog}
          </Link>
        </div>

        <article className="rounded-xxl border border-line bg-surface p-6 sm:p-10">
          <p className="text-sm text-muted">{post.date}</p>
          <h1 className="mt-2 break-words text-3xl font-semibold tracking-tight sm:text-4xl">{post.title}</h1>
          {post.description ? <p className="mt-4 text-muted">{post.description}</p> : null}
          <div className="mt-8 space-y-2">{lines.map((line, index) => renderLine(line, index, locale))}</div>
        </article>
      </main>
    </SiteChrome>
  );
}
