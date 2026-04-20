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
const canonicalPath = "/en/mute-mac-on-bluetooth-disconnect";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export const metadata: Metadata = {
  title: "Auto Mute Mac on Bluetooth Disconnect | Default0",
  description:
    "Mute Mac automatically when Bluetooth headphones disconnect. Prevent audio fallback to speakers during meetings and focus sessions.",
  keywords: [
    "mute mac on bluetooth disconnect",
    "auto mute on headphone disconnect mac",
    "stop speaker playback when headphones disconnect mac"
  ],
  alternates: {
    canonical: canonicalPath
  },
  openGraph: {
    type: "website",
    title: "Auto Mute Mac on Bluetooth Disconnect | Default0",
    description:
      "Protect against accidental speaker output by muting Mac immediately when Bluetooth audio disconnects.",
    url: canonicalPath,
    images: [{ url: "/og-default0.svg", width: 1200, height: 630, alt: "Mute Mac on Bluetooth disconnect" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Mute Mac on Bluetooth Disconnect | Default0",
    description:
      "When headphones disconnect, Default0 mutes before macOS audio falls back to speakers.",
    images: ["/og-default0.svg"]
  }
};

export default function MuteBluetoothDisconnectPage({ params }: PageProps) {
  if (!isLocale(params.locale) || params.locale !== "en") {
    notFound();
  }

  const locale = params.locale as Locale;
  const content = getSiteContent(locale);

  const faqItems = [
    {
      question: "Why does Bluetooth disconnect cause speaker leaks?",
      answer:
        "When a Bluetooth headset disconnects, macOS often falls back to built-in speakers using the previous volume level unless another rule intervenes."
    },
    {
      question: "Does this work only for AirPods?",
      answer:
        "No. The rule is useful for AirPods and other Bluetooth audio devices that can disconnect due to battery, distance, or interference."
    },
    {
      question: "Can I combine this with unlock and app-open mute?",
      answer:
        "Yes. Most users get better coverage by combining Bluetooth disconnect with unlock and meeting app-open triggers."
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
      description: "Default0 auto-mutes Mac when Bluetooth audio disconnects, preventing sudden speaker playback.",
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
      { name: "Auto Mute Mac on Bluetooth Disconnect", path: canonicalPath }
    ])
  ];

  return (
    <SiteChrome content={content} locale={locale} sectionPrefix="/en" minimal>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="mx-auto w-container py-16 sm:py-20">
        <section className="border border-[#1d1d18]/16 bg-[#f4f1e8] p-8 sm:p-12">
          <p className="inline-flex border border-[#1d1d18]/20 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#56564f]">
            Mac Bluetooth Audio Safety
          </p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.2rem,4.8vw,4.3rem)] font-semibold tracking-[-0.03em] text-[#13130f]">
            Auto mute Mac when Bluetooth disconnects
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#4b4b45]">
            If your headphones disconnect in the middle of work, audio can jump to Mac speakers. Default0 applies mute immediately on Bluetooth disconnect, reducing accidental playback during calls and quiet environments.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={DOWNLOAD_URL} className="inline-flex min-h-12 items-center justify-center border border-[#141410] bg-[#141410] px-6 py-3 text-sm font-semibold text-[#f8f6ee] transition hover:bg-black">
              Download Default0
            </Link>
            <Link href="/en/blog/mac-mute-on-bluetooth-disconnect" className="inline-flex min-h-12 items-center justify-center border border-[#1d1d18]/26 bg-white px-6 py-3 text-sm font-semibold text-[#161612] transition hover:border-[#1d1d18]/48">
              Read Full Bluetooth Guide
            </Link>
          </div>
        </section>

        <section className="py-12">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="border border-[#1d1d18]/16 bg-white p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-[#141410]">Implementation flow</h2>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-[#4d4d47]">
                <li>1. Enable Bluetooth-disconnect mute rule.</li>
                <li>2. Keep output-switch mute enabled as backup coverage.</li>
                <li>3. Test by disconnecting headphones before joining a meeting.</li>
              </ol>
            </article>
            <aside className="border border-[#1d1d18]/16 bg-[#ece7dc] p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-[#141410]">Related high-risk moments</h2>
              <p className="mt-4 leading-relaxed text-[#4d4d47]">
                Unlock, output-switch, and app-open transitions often overlap with Bluetooth disconnect. Combining these rules gives tighter real-world coverage.
              </p>
              <Link href="/en/blog/mac-3-auto-mute-rules-for-remote-meetings" className="mt-4 inline-flex text-sm font-semibold text-[#11110f] underline decoration-[#11110f]/35 underline-offset-4">
                Read 3-rule setup
              </Link>
            </aside>
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
