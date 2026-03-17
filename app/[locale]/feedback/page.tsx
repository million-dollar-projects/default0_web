import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import IssueFeedbackForm from "@/components/issue-feedback-form";
import { Locale, isLocale, locales } from "@/lib/site-content";
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
    description: "你可以在这里提交问题或功能建议，内容会跳转到 GitHub Issues。",
    back: "返回首页"
  },
  en: {
    title: "Report a Bug / Request a Feature",
    description: "Use this form to report issues or request features. It will prefill a GitHub Issue.",
    back: "Back to Home"
  },
  ko: {
    title: "버그 제보 / 기능 제안",
    description: "이 폼으로 문제나 기능 제안을 제출하면 GitHub Issue로 자동 입력됩니다.",
    back: "홈으로 돌아가기"
  },
  ja: {
    title: "バグ報告 / 機能要望",
    description: "このフォームから送信すると GitHub Issue に内容が自動入力されます。",
    back: "ホームへ戻る"
  },
  de: {
    title: "Bug melden / Feature anfragen",
    description: "Über dieses Formular kannst du Fehler melden oder Features anfragen. Es wird als GitHub Issue vorausgefüllt.",
    back: "Zur Startseite"
  },
  es: {
    title: "Reportar bug / Solicitar función",
    description: "Usa este formulario para enviar errores o nuevas funciones. Se abrirá como issue en GitHub con datos precargados.",
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
    description: c.description,
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

  return (
    <main className="min-h-dvh bg-bg text-text">
      <section className="py-section">
        <div className="mx-auto w-container">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{c.title}</h1>
          <p className="mt-4 max-w-3xl text-muted">{c.description}</p>

          <div className="mt-8">
            <IssueFeedbackForm locale={locale} />
          </div>

          <Link href={`/${locale}`} className="mt-8 inline-flex text-sm font-medium text-brand transition hover:text-brand-strong">
            {c.back}
          </Link>
        </div>
      </section>
    </main>
  );
}
