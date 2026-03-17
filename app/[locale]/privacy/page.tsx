import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale, isLocale, locales } from "@/lib/site-content";
import { buildLanguageAlternates } from "@/lib/seo";

type PageProps = {
  params: { locale: string };
};

type PrivacyContent = {
  title: string;
  intro: string;
  items: string[];
  contactTitle: string;
  backHome: string;
};

const privacyContent: Record<Locale, PrivacyContent> = {
  "zh-CN": {
    title: "隐私说明",
    intro: "Default0 重视你的隐私。我们遵循本地优先与最小采集原则。",
    items: [
      "Default0 主要在本地运行，不上传你的系统音量、设备状态或应用使用细节。",
      "我们不会出售你的个人信息，也不会接入广告追踪 SDK。",
      "如需分析崩溃与稳定性问题，相关数据会尽量匿名化并仅用于产品改进。",
      "你可以随时暂停或关闭自动静音规则。"
    ],
    contactTitle: "隐私相关问题请联系",
    backHome: "返回首页"
  },
  en: {
    title: "Privacy Policy",
    intro: "Default0 takes your privacy seriously with a local-first, minimal-data approach.",
    items: [
      "Default0 primarily runs locally and does not upload your volume state, device switches, or app activity details.",
      "We do not sell personal data and do not include ad-tracking SDKs.",
      "If crash or stability diagnostics are used, data is minimized and anonymized for product improvement only.",
      "You can pause or disable auto-mute rules at any time."
    ],
    contactTitle: "For privacy requests, contact",
    backHome: "Back to Home"
  },
  ko: {
    title: "개인정보 처리방침",
    intro: "Default0는 로컬 우선, 최소 수집 원칙으로 개인정보를 보호합니다.",
    items: [
      "Default0는 주로 로컬에서 실행되며 볼륨 상태, 장치 전환, 앱 사용 세부 정보를 업로드하지 않습니다.",
      "개인정보를 판매하지 않으며 광고 추적 SDK를 포함하지 않습니다.",
      "충돌 및 안정성 분석 데이터가 필요한 경우에도 최소화 및 익명화를 우선합니다.",
      "자동 음소거 규칙은 언제든지 일시정지 또는 비활성화할 수 있습니다."
    ],
    contactTitle: "개인정보 문의",
    backHome: "홈으로 돌아가기"
  },
  ja: {
    title: "プライバシーポリシー",
    intro: "Default0 はローカル優先・最小データ収集の方針でプライバシーを保護します。",
    items: [
      "Default0 は主にローカルで動作し、音量状態・デバイス切替・アプリ利用の詳細をアップロードしません。",
      "個人情報の販売は行わず、広告トラッキング SDK も組み込みません。",
      "クラッシュや安定性分析が必要な場合でも、データは最小化・匿名化を優先します。",
      "自動ミュートルールはいつでも一時停止または無効化できます。"
    ],
    contactTitle: "プライバシーに関するお問い合わせ",
    backHome: "ホームへ戻る"
  },
  de: {
    title: "Datenschutz",
    intro: "Default0 schützt deine Privatsphäre nach dem Prinzip: lokal zuerst, Datenerhebung nur wenn nötig.",
    items: [
      "Default0 läuft primär lokal und übermittelt keine Details zu Lautstärke, Gerätewechseln oder App-Aktivitäten.",
      "Wir verkaufen keine personenbezogenen Daten und nutzen keine Werbe-Tracking-SDKs.",
      "Falls Absturz- oder Stabilitätsdiagnosen verwendet werden, werden Daten minimiert und anonymisiert.",
      "Automatik-Regeln zum Stummschalten kannst du jederzeit pausieren oder deaktivieren."
    ],
    contactTitle: "Datenschutz-Anfragen an",
    backHome: "Zur Startseite"
  },
  es: {
    title: "Política de Privacidad",
    intro: "Default0 protege tu privacidad con un enfoque local y de mínima recopilación de datos.",
    items: [
      "Default0 funciona principalmente en local y no sube detalles de volumen, cambios de dispositivo ni actividad de apps.",
      "No vendemos datos personales ni integramos SDKs de rastreo publicitario.",
      "Si se usan diagnósticos de fallos o estabilidad, los datos se minimizan y anonimizan para mejorar el producto.",
      "Puedes pausar o desactivar las reglas de auto-silencio en cualquier momento."
    ],
    contactTitle: "Consultas de privacidad",
    backHome: "Volver al inicio"
  }
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale)) return {};
  const c = privacyContent[params.locale];
  return {
    title: `${c.title} | Default0`,
    description: c.intro,
    alternates: {
      canonical: `/${params.locale}/privacy`,
      languages: buildLanguageAlternates((locale) => `/${locale}/privacy`)
    }
  };
}

export default function PrivacyPage({ params }: PageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const c = privacyContent[locale];

  return (
    <main className="min-h-dvh bg-bg text-text">
      <section className="py-section">
        <div className="mx-auto w-container">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{c.title}</h1>
          <p className="mt-5 max-w-3xl text-lg text-muted">{c.intro}</p>

          <div className="mt-10 rounded-xxl border border-line bg-surface p-8 sm:p-10">
            <ul className="space-y-4 text-muted">
              {c.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 inline-block size-2 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-muted">
              {c.contactTitle}{" "}
              <a href="mailto:help@default0.com" className="font-semibold text-brand hover:text-brand-strong">
                help@default0.com
              </a>
            </p>
          </div>

          <Link href={`/${locale}`} className="mt-8 inline-flex text-sm font-medium text-brand transition hover:text-brand-strong">
            {c.backHome}
          </Link>
        </div>
      </section>
    </main>
  );
}
