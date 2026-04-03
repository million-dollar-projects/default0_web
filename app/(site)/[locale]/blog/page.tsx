import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/blog";
import { getSiteContent, isLocale, locales } from "@/lib/site-content";
import SiteChrome from "@/components/site-chrome";
import { absoluteUrl, buildBreadcrumbList, buildLanguageAlternates } from "@/lib/seo";

type PageProps = {
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const featuredGuideByLocale: Partial<
  Record<
    string,
    {
      badge: string;
      title: string;
      description: string;
      href: string;
      cta: string;
    }
  >
> = {
  en: {
    badge: "Featured guide",
    title: "Mac auto mute setup for Default0",
    description:
      "Start with the main guide if you want one page that explains automatic mute for Mac, the core trigger rules, and how to prevent accidental speaker playback in real workflows.",
    href: "/en/mac-auto-mute",
    cta: "Open the Mac auto mute pillar page"
  },
  ja: {
    badge: "Featured guide",
    title: "Mac 自動ミュートの総合ガイド",
    description:
      "ロック解除、出力切替、Bluetooth 切断、Wi‑Fi 変化、会議アプリ起動まで、Default0 で Mac の自動ミュートをどう組み立てるかを1ページで確認できます。",
    href: "/ja/mac-auto-mute",
    cta: "総合ガイドを見る"
  },
  "zh-CN": {
    badge: "Featured guide",
    title: "Mac 自动静音专题页",
    description:
      "如果你想先看完整的自动静音思路，这里会把解锁、输出切换、蓝牙断开、Wi‑Fi 变化和应用启动这几类高风险场景串起来。",
    href: "/zh-CN/mac-auto-mute",
    cta: "查看专题页"
  },
  ko: {
    badge: "Featured guide",
    title: "Mac 자동 음소거 핵심 가이드",
    description:
      "잠금 해제, 출력 변경, Bluetooth 해제, Wi‑Fi 변경, 앱 실행 같은 순간을 어떻게 먼저 음소거할지 한 페이지로 정리한 안내입니다.",
    href: "/ko/mac-auto-mute",
    cta: "가이드 보기"
  },
  de: {
    badge: "Featured guide",
    title: "Mac Auto-Mute Leitfaden",
    description:
      "Eine zentrale Übersicht für Entsperren, Ausgabewechsel, Bluetooth-Abbruch, WLAN-Wechsel und App-Start, damit Lautsprecherwiedergabe nicht überraschend nach außen geht.",
    href: "/de/mac-auto-mute",
    cta: "Leitfaden öffnen"
  },
  es: {
    badge: "Featured guide",
    title: "Guía de silencio automático en Mac",
    description:
      "Una guía central para desbloqueo, cambio de salida, desconexión Bluetooth, cambios de Wi‑Fi y apertura de apps, pensada para reducir audio inesperado por altavoz.",
    href: "/es/mac-auto-mute",
    cta: "Abrir guía"
  }
};

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale)) return {};
  const content = getSiteContent(params.locale);
  const canonicalPath = `/${params.locale}/blog`;
  return {
    title: `${content.brand} | ${content.labels.blog}`,
    description: content.hero.description,
    alternates: {
      canonical: canonicalPath,
      languages: buildLanguageAlternates((locale) => `/${locale}/blog`)
    },
    openGraph: {
      title: `${content.brand} | ${content.labels.blog}`,
      description: content.hero.description,
      url: canonicalPath,
      images: [{ url: "/og-default0.svg", width: 1200, height: 630, alt: `${content.brand} preview` }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${content.brand} | ${content.labels.blog}`,
      description: content.hero.description,
      images: ["/og-default0.svg"]
    }
  };
}

export default async function BlogPage({ params }: PageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;
  const content = getSiteContent(locale);
  const posts = await getBlogPosts(locale);
  const featuredGuide = featuredGuideByLocale[locale];
  const canonicalPath = `/${locale}/blog`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${content.brand} ${content.labels.blog}`,
      description: content.hero.description,
      inLanguage: locale,
      url: absoluteUrl(canonicalPath),
      isPartOf: {
        "@type": "WebSite",
        name: content.brand,
        url: absoluteUrl(`/${locale}`)
      },
      about: {
        "@type": "SoftwareApplication",
        name: content.brand,
        operatingSystem: "macOS",
        applicationCategory: "UtilitiesApplication"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: `${content.brand} ${content.labels.blog}`,
      description: content.hero.description,
      inLanguage: locale,
      url: absoluteUrl(canonicalPath),
      publisher: {
        "@type": "Organization",
        name: content.brand,
        url: absoluteUrl(`/${locale}`),
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/android-chrome-512x512.png")
        }
      },
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.lastModified,
        inLanguage: locale,
        url: absoluteUrl(`/${locale}/blog/${post.slug}`)
      }))
    },
    buildBreadcrumbList([
      { name: content.brand, path: `/${locale}` },
      { name: content.labels.blog, path: canonicalPath }
    ])
  ];

  return (
    <SiteChrome content={content} locale={locale} sectionPrefix={`/${locale}`} minimal>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="mx-auto w-container py-16 sm:py-20">
        <div className="mb-8">
          <h1 className="text-[clamp(2.2rem,5vw,4.2rem)] font-semibold tracking-[-0.03em] text-[#141410]">{content.labels.blog}</h1>
        </div>

        {featuredGuide ? (
          <div className="mb-8 border border-[#1b1b16]/16 bg-[#efeadf] p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#55554f]">{featuredGuide.badge}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#151512]">{featuredGuide.title}</h2>
            <p className="mt-3 max-w-3xl text-[#4a4a44]">{featuredGuide.description}</p>
            <Link href={featuredGuide.href} className="mt-4 inline-flex text-sm font-semibold text-[#11110f] underline decoration-[#11110f]/35 underline-offset-4">
              {featuredGuide.cta}
            </Link>
          </div>
        ) : null}

        {posts.length === 0 ? (
          <p className="text-[#4b4b45]">{content.labels.blogEmpty}</p>
        ) : (
          <ul className="grid gap-4">
            {posts.map((post) => (
              <li key={post.slug} className="border border-[#1d1d18]/16 bg-white p-6">
                <p className="text-sm text-[#5f5f59]">{post.date}</p>
                <h2 className="mt-2 text-xl font-semibold text-[#151512]">
                  <Link href={`/${locale}/blog/${post.slug}`} className="transition hover:text-black">
                    {post.title}
                  </Link>
                </h2>
                {post.description ? <p className="mt-2 text-[#4c4c45]">{post.description}</p> : null}
              </li>
            ))}
          </ul>
        )}
      </main>
    </SiteChrome>
  );
}
