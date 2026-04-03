import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteChrome from "@/components/site-chrome";
import IssueFeedbackForm from "@/components/issue-feedback-form";
import { Locale, getSiteContent, isLocale, locales } from "@/lib/site-content";
import { buildLanguageAlternates } from "@/lib/seo";

type PageProps = {
  params: { locale: string };
};

type FeedbackCopy = {
  title: string;
  description: string;
  back: string;
};

const copyByLocale: Record<Locale, FeedbackCopy> = {
  "zh-CN": {
    title: "提交 Bug / 功能建议",
    description: "",
    back: "返回首页"
  },
  en: {
    title: "Report a Bug / Request a Feature",
    description: "",
    back: "Back to Home"
  },
  ko: {
    title: "버그 제보 / 기능 제안",
    description: "",
    back: "홈으로 돌아가기"
  },
  ja: {
    title: "バグ報告 / 機能要望",
    description: "",
    back: "ホームへ戻る"
  },
  de: {
    title: "Bug melden / Feature anfragen",
    description: "",
    back: "Zur Startseite"
  },
  es: {
    title: "Reportar bug / Solicitar función",
    description: "",
    back: "Volver al inicio"
  }
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale)) return {};
  const c = copyByLocale[params.locale];
  return {
    title: `${c.title} | Default0`,
    description: c.description || c.title,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false
      }
    },
    alternates: {
      canonical: `/${params.locale}/feedback`,
      languages: buildLanguageAlternates((locale) => `/${locale}/feedback`)
    }
  };
}

export default function FeedbackPage({ params }: PageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const c = copyByLocale[locale];
  const content = getSiteContent(locale);
  const privacyLabel = content.footer.links[3];

  return (
    <SiteChrome content={content} locale={locale} sectionPrefix={`/${locale}`} showDownloadNav={false} minimal>
      <main className="min-h-dvh">
        <section className="py-section">
          <div className="mx-auto w-container">
            <h1 className="text-[clamp(2.2rem,4.8vw,4.2rem)] font-semibold tracking-[-0.03em] text-[#13130f]">{c.title}</h1>
            {c.description ? <p className="mt-4 max-w-3xl text-[#4d4d46]">{c.description}</p> : null}

            <div className="mt-8">
              <IssueFeedbackForm locale={locale} />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
              <Link href={`/${locale}`} className="inline-flex font-medium text-[#11110f] underline decoration-[#11110f]/30 underline-offset-4">
                {c.back}
              </Link>
              <Link href={`/${locale}/privacy`} className="inline-flex text-[#55554f] transition hover:text-[#11110f]">
                {privacyLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
