import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/components/landing-page";
import { getSiteContent, isLocale, Locale, locales } from "@/lib/site-content";
import { absoluteUrl, buildLanguageAlternates, SITE_URL } from "@/lib/seo";

type PageProps = {
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale)) {
    return {};
  }

  const locale = params.locale as Locale;
  const content = getSiteContent(locale);
  const canonicalPath = `/${locale}`;
  const isEnglish = locale === "en";
  const title = isEnglish ? "Default0 | Mac Auto Mute App for Preventing Accidental Speaker Playback" : `${content.brand} | ${content.hero.title}`;
  const description = isEnglish
    ? "Default0 is a macOS menu bar app that auto-mutes your Mac during unlocks, output changes, Bluetooth disconnects, Wi-Fi changes, and meeting app launches to prevent accidental speaker playback."
    : content.hero.description;

  return {
    title,
    description,
    keywords: isEnglish
      ? ["Default0", "mac auto mute", "macOS auto mute", "prevent accidental speaker playback", "menu bar app"]
      : undefined,
    alternates: {
      canonical: canonicalPath,
      languages: buildLanguageAlternates((locale) => `/${locale}`)
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      images: [{ url: "/og-default0.svg", width: 1200, height: 630, alt: `${content.brand} preview` }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-default0.svg"]
    }
  };
}

export default function LocaleHome({ params }: PageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const content = getSiteContent(locale);
  const canonicalPath = `/${locale}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: content.brand,
      operatingSystem: "macOS",
      applicationCategory: "UtilitiesApplication",
      inLanguage: locale,
      description: content.hero.description,
      url: absoluteUrl(canonicalPath),
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: { "@type": "Organization", name: "Default0", url: SITE_URL }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Default0",
      url: SITE_URL,
      logo: absoluteUrl("/android-chrome-512x512.png"),
      sameAs: ["https://github.com/million-dollar-projects/default0_web"]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Default0",
      url: SITE_URL,
      inLanguage: locale
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LandingPage content={content} locale={locale} />
    </>
  );
}
