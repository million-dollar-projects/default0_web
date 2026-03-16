import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/blog";
import SiteChrome from "@/components/site-chrome";
import { Locale, getSiteContent, isLocale } from "@/lib/site-content";

type PageProps = {
  params: { locale: string; slug: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const post = await getBlogPostBySlug(params.locale, params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description
  };
}

function renderLine(line: string, key: number) {
  if (line.startsWith("### ")) {
    return (
      <h3 key={key} className="mt-6 text-xl font-semibold">
        {line.replace(/^###\s+/, "")}
      </h3>
    );
  }

  if (line.startsWith("## ")) {
    return (
      <h2 key={key} className="mt-8 text-2xl font-semibold">
        {line.replace(/^##\s+/, "")}
      </h2>
    );
  }

  if (line.startsWith("- ")) {
    return (
      <li key={key} className="ml-5 list-disc text-base leading-relaxed text-text">
        {line.replace(/^- /, "")}
      </li>
    );
  }

  if (line.trim() === "") {
    return <div key={key} className="h-2" />;
  }

  return (
    <p key={key} className="text-base leading-relaxed text-text">
      {line}
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
          <div className="mt-8 space-y-2">{lines.map((line, index) => renderLine(line, index))}</div>
        </article>
      </main>
    </SiteChrome>
  );
}
