import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/components/landing-page";
import { getSiteContent, isLocale, Locale, locales } from "@/lib/site-content";
import { buildLanguageAlternates } from "@/lib/seo";

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

  const content = getSiteContent(params.locale);

  return {
    title: `${content.brand} | ${content.hero.title}`,
    description: content.hero.description,
    alternates: {
      canonical: `/${params.locale}`,
      languages: buildLanguageAlternates((locale) => `/${locale}`)
    },
    openGraph: {
      title: `${content.brand} | ${content.hero.title}`,
      description: content.hero.description,
      images: [{ url: "/og-default0.svg", width: 1200, height: 630, alt: `${content.brand} preview` }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${content.brand} | ${content.hero.title}`,
      description: content.hero.description,
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: content.brand,
    operatingSystem: "macOS",
    applicationCategory: "UtilitiesApplication",
    inLanguage: locale,
    description: content.hero.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "Default0" }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LandingPage content={content} locale={locale} />
    </>
  );
}
