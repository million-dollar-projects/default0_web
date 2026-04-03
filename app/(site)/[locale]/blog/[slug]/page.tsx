import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getBlogPostBySlug, getBlogPostLocalesBySlug, getBlogPosts } from "@/lib/blog";
import SiteChrome from "@/components/site-chrome";
import { Locale, getSiteContent, isLocale, locales } from "@/lib/site-content";
import { absoluteUrl, buildAvailableLanguageAlternates, buildBreadcrumbList } from "@/lib/seo";

type PageProps = {
  params: { locale: string; slug: string };
};

const pillarClusterSlugs = new Set([
  "mac-mute-on-unlock",
  "mac-mute-on-output-change",
  "mac-mute-on-bluetooth-disconnect",
  "mac-mute-on-wifi-change",
  "mac-mute-when-app-opens",
  "mac-mute-on-first-login",
  "mac-3-auto-mute-rules-for-remote-meetings"
]);

const pillarGuideCopyByLocale: Partial<
  Record<
    Locale,
    {
      badge: string;
      title: string;
      description: string;
      cta: string;
    }
  >
> = {
  "zh-CN": {
    badge: "专题总览",
    title: "回到 Mac 自动静音专题页",
    description: "如果你想把这篇文章放回整套规则里看，可以回到专题页统一查看解锁、输出切换、蓝牙断开、Wi‑Fi 变化和应用启动这几类高风险触发器。",
    cta: "查看 Mac 自动静音专题页"
  },
  ko: {
    badge: "핵심 가이드",
    title: "Mac 자동 음소거 전체 가이드로 돌아가기",
    description: "이 글을 전체 규칙 흐름 안에서 다시 보고 싶다면, 잠금 해제, 출력 변경, Bluetooth 해제, Wi‑Fi 변경, 앱 실행을 한 번에 정리한 메인 페이지를 확인하세요.",
    cta: "Mac 자동 음소거 가이드 보기"
  },
  ja: {
    badge: "総合ガイド",
    title: "Mac 自動ミュートの全体ページへ戻る",
    description: "この設定を単体ではなく全体のルール設計として見たいなら、ロック解除、出力切替、Bluetooth 切断、Wi‑Fi 変化、アプリ起動をまとめた総合ガイドに戻ってください。",
    cta: "Mac 自動ミュート総合ガイドを見る"
  },
  de: {
    badge: "Zentraler Guide",
    title: "Zurück zur Mac Auto-Mute Übersicht",
    description: "Wenn du diesen Artikel im Zusammenhang mit dem gesamten Regel-Setup sehen willst, öffne die zentrale Übersicht für Entsperren, Ausgabewechsel, Bluetooth-Abbruch, WLAN-Wechsel und App-Start.",
    cta: "Mac Auto-Mute Leitfaden öffnen"
  },
  es: {
    badge: "Guía central",
    title: "Volver a la guía principal de silencio automático en Mac",
    description: "Si quieres ver este artículo dentro del conjunto completo de reglas, vuelve a la guía central con desbloqueo, cambio de salida, desconexión Bluetooth, cambios de Wi‑Fi y apertura de apps.",
    cta: "Abrir la guía principal"
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const post = await getBlogPostBySlug(params.locale, params.slug);
  if (!post) return {};
  const availableLocales = await getBlogPostLocalesBySlug(params.slug);
  const canonicalPath = `/${params.locale}/blog/${params.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: canonicalPath,
      languages: buildAvailableLanguageAlternates(availableLocales, (locale) => `/${locale}/blog/${params.slug}`)
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: canonicalPath,
      publishedTime: post.date,
      modifiedTime: post.lastModified,
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

export async function generateStaticParams() {
  const params = await Promise.all(
    locales.map(async (locale) => {
      const posts = await getBlogPosts(locale);
      return posts.map((post) => ({ locale, slug: post.slug }));
    })
  );

  return params.flat();
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
        <Link key={`link-${index}`} href={normalizeHref(href, locale)} className="text-[#11110f] underline decoration-[#11110f]/35 underline-offset-4">
          {label}
        </Link>
      );
    } else {
      nodes.push(
        <code key={`code-${index}`} className="bg-[#efece2] px-1.5 py-0.5 text-sm text-[#1d1d18]">
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
      <figure key={key} className="my-8 overflow-hidden border border-[#1d1d18]/18 bg-[#f1ede2]">
        {/* External stock-image URLs are user/content-driven, so a plain img is more robust than Next Image domain allowlists here. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-[clamp(220px,38vw,420px)] w-full object-cover"
          referrerPolicy="no-referrer"
        />
        {caption ? <figcaption className="border-t border-[#1d1d18]/18 px-4 py-3 text-sm text-[#5b5b54]">{caption}</figcaption> : null}
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
  const availableLocales = await getBlogPostLocalesBySlug(post.slug);
  const languageHrefMap = Object.fromEntries(
    locales.map((targetLocale) => [
      targetLocale,
      availableLocales.includes(targetLocale) ? `/${targetLocale}/blog/${post.slug}` : `/${targetLocale}/blog`
    ])
  ) as Partial<Record<Locale, string>>;

  const lines = post.body.split("\n");
  const canonicalPath = `/${locale}/blog/${post.slug}`;
  const pillarGuide = pillarClusterSlugs.has(post.slug) ? pillarGuideCopyByLocale[locale] : null;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.lastModified,
      inLanguage: locale,
      mainEntityOfPage: absoluteUrl(canonicalPath),
      url: absoluteUrl(canonicalPath),
      image: absoluteUrl("/og-default0.svg"),
      articleSection: "Mac Auto Mute",
      isPartOf: {
        "@type": "Blog",
        name: `${content.brand} ${content.labels.blog}`,
        url: absoluteUrl(`/${locale}/blog`)
      },
      author: {
        "@type": "Organization",
        name: content.brand,
        url: absoluteUrl(`/${locale}`)
      },
      publisher: {
        "@type": "Organization",
        name: content.brand,
        url: absoluteUrl(`/${locale}`),
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/android-chrome-512x512.png")
        }
      }
    },
    buildBreadcrumbList([
      { name: content.brand, path: `/${locale}` },
      { name: content.labels.blog, path: `/${locale}/blog` },
      { name: post.title, path: canonicalPath }
    ])
  ];

  return (
    <SiteChrome content={content} locale={locale} sectionPrefix={`/${locale}`} languageHrefMap={languageHrefMap} minimal>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="mx-auto w-container py-16 sm:py-20">
        <div className="mb-8">
          <Link href={`/${locale}/blog`} className="inline-flex min-h-11 items-center border border-[#1d1d18]/20 bg-white px-5 py-2 text-sm font-medium text-[#151512] transition hover:border-[#1d1d18]/45">
            {content.labels.backToBlog}
          </Link>
        </div>

        <article className="border border-[#1d1d18]/16 bg-white p-6 sm:p-10">
          <p className="text-sm text-[#5a5a53]">{post.date}</p>
          <h1 className="mt-2 break-words text-[clamp(2rem,4.6vw,3.6rem)] font-semibold tracking-[-0.025em] text-[#12120f]">{post.title}</h1>
          {post.description ? <p className="mt-4 text-[#4e4e47]">{post.description}</p> : null}
          {pillarGuide ? (
            <div className="mt-6 border border-[#1b1b17]/16 bg-[#eee9de] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#56564f]">{pillarGuide.badge}</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#151512]">{pillarGuide.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#4f4f48]">{pillarGuide.description}</p>
              <Link href={`/${locale}/mac-auto-mute`} className="mt-4 inline-flex text-sm font-semibold text-[#12120f] underline decoration-[#12120f]/30 underline-offset-4">
                {pillarGuide.cta}
              </Link>
            </div>
          ) : null}
          <div className="mt-8 space-y-2">{lines.map((line, index) => renderLine(line, index, locale))}</div>
        </article>
      </main>
    </SiteChrome>
  );
}
