import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteChrome from "@/components/site-chrome";
import { absoluteUrl, buildBreadcrumbList } from "@/lib/seo";
import { getSiteContent, isLocale, Locale } from "@/lib/site-content";
import versionData from "@/public/version.json";

type PageProps = {
  params: { locale: string };
};

const latestVersion = String(versionData.latest.version).replace(/^v/, "");
const DOWNLOAD_URL = `https://github.com/million-dollar-projects/default0_web/releases/download/v${latestVersion}/default0-v${latestVersion}.dmg`;
const canonicalPath = "/en/auto-mute-when-meeting-app-opens-mac";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export const metadata: Metadata = {
  title: "Auto Mute Mac When Meeting Apps Open | Default0",
  description:
    "Mute Mac automatically when Zoom, Teams, or Google Meet opens. Reduce accidental speaker playback before meetings start.",
  keywords: [
    "auto mute when meeting app opens mac",
    "mac mute app for zoom meetings",
    "mac mute app for microsoft teams",
    "mac mute app for google meet"
  ],
  alternates: {
    canonical: canonicalPath
  },
  openGraph: {
    type: "website",
    title: "Auto Mute Mac When Meeting Apps Open | Default0",
    description:
      "Set app-open mute rules for meeting apps on macOS so your Mac is silent before call audio can leak.",
    url: canonicalPath,
    images: [{ url: "/og-default0.svg", width: 1200, height: 630, alt: "Auto mute when meeting app opens on Mac" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Mute Mac When Meeting Apps Open | Default0",
    description:
      "Apply app-open mute protection for Zoom, Teams, and Google Meet on Mac.",
    images: ["/og-default0.svg"]
  }
};

export default function MuteMeetingAppOpenPage({ params }: PageProps) {
  if (!isLocale(params.locale) || params.locale !== "en") {
    notFound();
  }

  const locale = params.locale as Locale;
  const content = getSiteContent(locale);

  const faqItems = [
    {
      question: "What does app-open mute protect against?",
      answer:
        "It protects the first few seconds after opening a meeting app, when previous media volume states can cause unexpected speaker playback."
    },
    {
      question: "Which meeting apps should I add first?",
      answer: "Start with the apps you use daily, usually Zoom, Microsoft Teams, and Google Meet."
    },
    {
      question: "Should I use this with other rules?",
      answer:
        "Yes. App-open mute works best with unlock and output-switch mute, because meeting prep often includes multiple transition events."
    }
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Default0",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "macOS",
      inLanguage: "en",
      description: "Default0 can auto-mute Mac when selected meeting apps open, reducing accidental speaker playback.",
      url: absoluteUrl(canonicalPath),
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: "en",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer }
      }))
    },
    buildBreadcrumbList([
      { name: "Default0", path: "/en" },
      { name: "Auto Mute Mac When Meeting Apps Open", path: canonicalPath }
    ])
  ];

  return (
    <SiteChrome content={content} locale={locale} sectionPrefix="/en" minimal>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="mx-auto w-container py-16 sm:py-20">
        <section className="border border-[#1d1d18]/16 bg-[#f4f1e8] p-8 sm:p-12">
          <p className="inline-flex border border-[#1d1d18]/20 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#56564f]">
            Meeting-App Launch Protection
          </p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.2rem,4.8vw,4.3rem)] font-semibold tracking-[-0.03em] text-[#13130f]">
            Auto mute Mac when Zoom, Teams, or Meet opens
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#4b4b45]">
            Default0 helps mute Mac output at the exact moment meeting apps open, reducing the chance of sudden speaker playback right before calls.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={DOWNLOAD_URL} className="inline-flex min-h-12 items-center justify-center border border-[#141410] bg-[#141410] px-6 py-3 text-sm font-semibold text-[#f8f6ee] transition hover:bg-black">
              Download Default0
            </Link>
            <Link href="/en/blog/mac-mute-when-app-opens" className="inline-flex min-h-12 items-center justify-center border border-[#1d1d18]/26 bg-white px-6 py-3 text-sm font-semibold text-[#161612] transition hover:border-[#1d1d18]/48">
              Read App-Open Guide
            </Link>
          </div>
        </section>

        <section className="py-12">
          <div className="grid gap-4 sm:grid-cols-3">
            <article className="border border-[#1d1d18]/16 bg-white p-6">
              <h2 className="text-xl font-semibold text-[#161612]">Zoom workflow</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4f4f48]">
                Mute on app open before your first click in Zoom meeting flow.
              </p>
            </article>
            <article className="border border-[#1d1d18]/16 bg-white p-6">
              <h2 className="text-xl font-semibold text-[#161612]">Teams workflow</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4f4f48]">
                Apply the same app-open mute logic to Teams launch and join flow.
              </p>
            </article>
            <article className="border border-[#1d1d18]/16 bg-white p-6">
              <h2 className="text-xl font-semibold text-[#161612]">Google Meet workflow</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4f4f48]">
                Pair app-open mute with output-switch mute for browser-based meetings.
              </p>
            </article>
          </div>
        </section>

        <section className="py-4">
          <div className="border border-[#1d1d18]/16 bg-white p-8 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-[#141410]">FAQ</h2>
            <div className="mt-8 grid items-start gap-4 md:grid-cols-2">
              {faqItems.map((item) => (
                <details key={item.question} className="border border-[#1d1d18]/16 bg-[#f2eee3] p-5 open:border-[#1d1d18]/38">
                  <summary className="cursor-pointer list-none font-semibold text-[#161612]">{item.question}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#4f4f48]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
