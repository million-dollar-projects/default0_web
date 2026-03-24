import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteChrome from "@/components/site-chrome";
import { absoluteUrl, buildBreadcrumbList } from "@/lib/seo";
import { getSiteContent, isLocale } from "@/lib/site-content";
import versionData from "@/public/version.json";

type PageProps = {
  params: { locale: string };
};

const latestVersion = String(versionData.latest.version).replace(/^v/, "");
const DOWNLOAD_URL = `https://github.com/million-dollar-projects/default0_web/releases/download/v${latestVersion}/default0-v${latestVersion}.dmg`;
const canonicalPath = "/en/mac-auto-mute";
const title = "Mac Auto Mute for Default0: Automatic Mute for Mac to Prevent Speaker Playback";
const description =
  "Mac auto mute for Default0 helps you mute automatically on unlock, output changes, Bluetooth disconnects, Wi-Fi changes, and app launches so your Mac does not play unexpectedly through speakers.";

const faqItems = [
  {
    question: "What does Mac auto mute mean in Default0?",
    answer:
      "It means Default0 automatically sets your Mac system volume to zero at selected trigger points such as unlock, output-device changes, Bluetooth disconnects, Wi-Fi changes, and meeting-app launches."
  },
  {
    question: "Is this about speaker/output mute or microphone mute?",
    answer:
      "Default0 is built for speaker and output-volume protection on macOS. It is not a microphone mute or mic privacy tool."
  },
  {
    question: "Can I choose only one Mac auto mute trigger?",
    answer:
      "Yes. Each rule can be enabled separately, so you can start with a single trigger such as unlock or output change and add more coverage later."
  },
  {
    question: "Which triggers matter most for meetings?",
    answer:
      "Most meeting-heavy Mac users start with unlock, output change, and app-open triggers because those moments are where accidental speaker playback usually happens."
  }
] as const;

const triggerCards = [
  {
    title: "Mute on Unlock",
    body: "If you unlock your Mac and immediately resume work, Default0 mutes first so old audio does not jump through speakers before you react.",
    href: "/en/blog/mac-mute-on-unlock"
  },
  {
    title: "Mute on Output Change",
    body: "When headphones, docks, or monitors change the default output device, Default0 applies automatic mute for Mac before sound leaks.",
    href: "/en/blog/mac-mute-on-output-change"
  },
  {
    title: "Mute on Bluetooth Disconnect",
    body: "If Bluetooth headphones drop or run out of battery, Default0 mutes before audio falls back to your Mac speaker.",
    href: "/en/blog/mac-mute-on-bluetooth-disconnect"
  },
  {
    title: "Mute on Wi-Fi Change",
    body: "Network changes often happen right before meetings or in shared spaces. Default0 can mute first during those transitions.",
    href: "/en/blog/mac-mute-on-wifi-change"
  },
  {
    title: "Mute When App Opens",
    body: "For high-risk apps such as Zoom or Teams, Default0 Pro can mute at app launch so you do not forget volume in the moment.",
    href: "/en/blog/mac-mute-when-app-opens"
  }
] as const;

const comparisonPoints = [
  "Manual mute depends on memory and timing. Mac auto mute depends on rules.",
  "Manual checks happen after you remember. Default0 acts at the trigger point first.",
  "Automatic mute for Mac is most useful when unlocks, device changes, and meetings happen back to back."
] as const;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (params.locale !== "en") {
    return {};
  }

  return {
    title,
    description,
    keywords: [
      "mac auto mute",
      "automatic mute for mac",
      "mac auto mute app",
      "prevent accidental speaker playback on mac"
    ],
    alternates: {
      canonical: canonicalPath,
      languages: {}
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonicalPath,
      images: [{ url: "/og-default0.svg", width: 1200, height: 630, alt: "Mac auto mute with Default0" }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-default0.svg"]
    }
  };
}

export default function MacAutoMutePage({ params }: PageProps) {
  if (!isLocale(params.locale) || params.locale !== "en") {
    notFound();
  }

  const content = getSiteContent("en");
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Default0",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "macOS",
      description,
      url: absoluteUrl(canonicalPath),
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    },
    buildBreadcrumbList([
      { name: "Default0", path: "/en" },
      { name: "Mac Auto Mute", path: canonicalPath }
    ])
  ];

  return (
    <SiteChrome content={content} locale="en" sectionPrefix="/en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="mx-auto w-container py-16 sm:py-20">
        <section className="rounded-xxl border border-line bg-surface p-8 sm:p-12">
          <p className="inline-flex rounded-full border border-line bg-page px-4 py-2 text-xs text-muted">Mac auto mute guide for speaker-output protection</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            Mac Auto Mute for safer meetings, shared spaces, and sudden device changes
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            Mac auto mute means your Mac mutes itself before speaker playback can surprise you. Default0 is a Mac auto mute app that
            helps prevent accidental speaker output on unlock, output changes, Bluetooth disconnects, Wi-Fi changes, and meeting-app
            launches. If your goal is automatic mute for Mac during real work transitions, this page shows the trigger set that matters.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={DOWNLOAD_URL}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-strong"
            >
              Download Default0
            </Link>
            <Link
              href="/en/blog"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-page px-6 py-3 text-sm font-semibold transition hover:border-brand"
            >
              Read supporting guides
            </Link>
          </div>
        </section>

        <section className="py-12">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-xxl border border-line bg-surface p-7">
              <h2 className="text-2xl font-semibold tracking-tight">What problem Mac auto mute actually solves</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Most accidental speaker playback on macOS happens between tasks, not during calm moments. You unlock your Mac, change
                headphones, reconnect a dock, move between networks, or open a meeting app while the old volume state is still active.
                Default0 moves the mute action to those trigger points so you do not need to rely on last-second memory.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                If you want a practical setup sequence, start with the{" "}
                <Link href="/en/blog/mac-3-auto-mute-rules-for-remote-meetings" className="text-brand underline-offset-4 hover:underline">
                  three-rule meeting workflow
                </Link>{" "}
                and then expand to the triggers that match your device setup.
              </p>
            </article>

            <aside className="rounded-xxl border border-line bg-gradient-to-br from-brand-soft/20 via-surface to-accent/20 p-7">
              <h2 className="text-2xl font-semibold tracking-tight">Not a microphone mute tool</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Some searches for “auto mute on Mac” are really about microphone privacy or mic mute. Default0 is different. It protects
                your speaker and output-volume state, so sound does not suddenly play through your Mac speakers in offices, meeting
                rooms, libraries, or late-night home setups.
              </p>
            </aside>
          </div>
        </section>

        <section className="py-4">
          <h2 className="text-3xl font-semibold tracking-tight">The trigger set behind automatic mute for Mac</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {triggerCards.map((card) => (
              <article key={card.title} className="rounded-xl2 border border-line bg-surface p-6">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{card.body}</p>
                <Link href={card.href} className="mt-4 inline-flex text-sm font-semibold text-brand underline-offset-4 hover:underline">
                  Read the guide
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="py-12">
          <div className="rounded-xxl border border-line bg-surface p-8 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight">Why Default0 works better than manual mute checks</h2>
            <ul className="mt-6 space-y-4">
              {comparisonPoints.map((point) => (
                <li key={point} className="flex gap-3 text-base leading-relaxed text-text">
                  <span className="mt-2 inline-block size-2 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-4">
          <div className="rounded-xxl border border-line bg-surface p-8 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqItems.map((item) => (
                <details key={item.question} className="rounded-xl2 border border-line bg-page/60 p-5 open:border-brand/45">
                  <summary className="cursor-pointer list-none font-semibold">{item.question}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="rounded-xxl border border-brand/20 bg-gradient-to-br from-[#4f89d9] via-[#5b93dd] to-[#4a84d3] p-9 text-white sm:p-12">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Set up Mac auto mute around your real risk moments</h2>
            <p className="mt-4 max-w-3xl text-white/85">
              Download Default0 if you want a Mac auto mute utility that covers unlocks, device changes, headphone dropouts, network
              switches, and meeting-app launches without constant manual checking.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={DOWNLOAD_URL}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-strong transition hover:bg-white/90"
              >
                Download Default0
              </Link>
              <Link
                href="/en/blog/mac-3-auto-mute-rules-for-remote-meetings"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
              >
                Start with the 3-rule setup
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
