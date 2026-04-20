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
const canonicalPath = "/en/prevent-accidental-speaker-playback-mac";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export const metadata: Metadata = {
  title: "Prevent Accidental Speaker Playback on Mac | Default0",
  description:
    "Prevent accidental speaker playback on Mac automatically. Default0 mutes on unlock, output switch, Bluetooth disconnect, Wi-Fi changes, and meeting app launches.",
  keywords: [
    "prevent accidental speaker playback mac",
    "mac accidental audio playback fix",
    "mac auto mute app",
    "mac meeting audio safety"
  ],
  alternates: {
    canonical: canonicalPath
  },
  openGraph: {
    type: "website",
    title: "Prevent Accidental Speaker Playback on Mac | Default0",
    description:
      "Use trigger-based auto-mute on Mac to stop accidental speaker playback in meetings, offices, libraries, and shared spaces.",
    url: canonicalPath,
    images: [{ url: "/og-default0.svg", width: 1200, height: 630, alt: "Prevent accidental speaker playback on Mac" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Prevent Accidental Speaker Playback on Mac | Default0",
    description:
      "Default0 auto-mutes your Mac at risky transition points so sound does not suddenly leak through speakers.",
    images: ["/og-default0.svg"]
  }
};

export default function PreventSpeakerPlaybackPage({ params }: PageProps) {
  if (!isLocale(params.locale) || params.locale !== "en") {
    notFound();
  }

  const locale = params.locale as Locale;
  const content = getSiteContent(locale);

  const faqItems = [
    {
      question: "What causes accidental speaker playback on Mac?",
      answer:
        "Most incidents happen during transitions: unlock, output device switch, Bluetooth drop, Wi-Fi change, or meeting app launch while the previous volume state is still active."
    },
    {
      question: "Does Default0 mute the microphone?",
      answer: "No. Default0 is for speaker/output volume protection. It is not a microphone mute manager."
    },
    {
      question: "Can I enable only one trigger first?",
      answer: "Yes. Each rule can be enabled independently, so you can start with one high-risk trigger and expand later."
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
      description:
        "Default0 automatically mutes Mac output during risky transition moments to prevent accidental speaker playback.",
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
      { name: "Prevent Accidental Speaker Playback on Mac", path: canonicalPath }
    ])
  ];

  return (
    <SiteChrome content={content} locale={locale} sectionPrefix="/en" minimal>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="mx-auto w-container py-16 sm:py-20">
        <section className="border border-[#1d1d18]/16 bg-[#f4f1e8] p-8 sm:p-12">
          <p className="inline-flex border border-[#1d1d18]/20 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#56564f]">
            Mac Audio Safety Landing Page
          </p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.2rem,4.8vw,4.3rem)] font-semibold tracking-[-0.03em] text-[#13130f]">
            Prevent accidental speaker playback on Mac automatically
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#4b4b45]">
            Default0 applies auto-mute at high-risk moments: unlock, output switch, Bluetooth disconnect, Wi-Fi change, and meeting app open. It reduces sudden speaker leaks in meetings, open offices, libraries, and shared spaces.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={DOWNLOAD_URL} className="inline-flex min-h-12 items-center justify-center border border-[#141410] bg-[#141410] px-6 py-3 text-sm font-semibold text-[#f8f6ee] transition hover:bg-black">
              Download Default0
            </Link>
            <Link href="/en/blog" className="inline-flex min-h-12 items-center justify-center border border-[#1d1d18]/26 bg-white px-6 py-3 text-sm font-semibold text-[#161612] transition hover:border-[#1d1d18]/48">
              Read Supporting Guides
            </Link>
          </div>
        </section>

        <section className="py-12">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <article className="border border-[#1d1d18]/16 bg-white p-6">
              <h2 className="text-xl font-semibold text-[#161612]">Step 1: Cover unlock risk</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4f4f48]">Mute right after unlock, before old media state can surprise you.</p>
              <Link href="/en/blog/mac-mute-on-unlock" className="mt-4 inline-flex text-sm font-semibold text-[#11110f] underline decoration-[#11110f]/35 underline-offset-4">
                Read unlock setup
              </Link>
            </article>
            <article className="border border-[#1d1d18]/16 bg-white p-6">
              <h2 className="text-xl font-semibold text-[#161612]">Step 2: Cover device-switch risk</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4f4f48]">Mute on output changes and Bluetooth dropouts before fallback to speakers.</p>
              <Link href="/en/blog/mac-mute-on-output-change" className="mt-4 inline-flex text-sm font-semibold text-[#11110f] underline decoration-[#11110f]/35 underline-offset-4">
                Read output-change setup
              </Link>
            </article>
            <article className="border border-[#1d1d18]/16 bg-white p-6">
              <h2 className="text-xl font-semibold text-[#161612]">Step 3: Cover meeting-start risk</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4f4f48]">Use app-open trigger for meeting apps to mute before calls start.</p>
              <Link href="/en/blog/mac-mute-when-app-opens" className="mt-4 inline-flex text-sm font-semibold text-[#11110f] underline decoration-[#11110f]/35 underline-offset-4">
                Read app-open setup
              </Link>
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
