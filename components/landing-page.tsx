import Image from "next/image";
import Link from "next/link";
import { FloatIn, Reveal } from "@/components/motion";
import { Locale, SiteContent } from "@/lib/site-content";
import { compatibilityNoteByLocale, heroImageAltByLocale, heroImageByLocale } from "@/lib/locales/hero-assets";
import versionData from "@/public/version.json";
import SiteChrome from "@/components/site-chrome";

const latestVersion = String(versionData.latest.version).replace(/^v/, "");
const DOWNLOAD_URL = `https://github.com/million-dollar-projects/default0_web/releases/download/v${latestVersion}/default0-v${latestVersion}.dmg`;

type LandingPageProps = {
  content: SiteContent;
  locale: Locale;
};

export default function LandingPage({ content, locale }: LandingPageProps) {
  return (
    <SiteChrome content={content} locale={locale} minimal>
      <div className="home-editorial">
        <Hero content={content} locale={locale} />
        <SignalStrip content={content} />
        <TriggerAtlas content={content} />
        <ScenarioBoard content={content} />
        <FAQ content={content} />
        <FinalCTA content={content} />
        <Contact locale={locale} title={content.footer.links[5]} feedbackLabel={content.footer.links[1]} />
      </div>
    </SiteChrome>
  );
}

function Hero({ content, locale }: Pick<LandingPageProps, "content" | "locale">) {
  const heroImageSrc = heroImageByLocale[locale] ?? heroImageByLocale.en;
  const heroImageAlt = heroImageAltByLocale[locale] ?? heroImageAltByLocale.en;
  const compatibilityNote = compatibilityNoteByLocale[locale] ?? compatibilityNoteByLocale.en;
  const isLongLatinTitle = locale !== "zh-CN" && content.hero.title.length > 78;
  const heroTitleClass =
    locale === "zh-CN"
      ? "mt-6 max-w-3xl text-[clamp(2.4rem,5.6vw,5.2rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[#12120f]"
      : locale === "en"
        ? "mt-6 max-w-[19ch] text-balance text-[clamp(1.9rem,3.8vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[#12120f]"
      : locale === "de" || isLongLatinTitle
        ? "mt-6 max-w-3xl text-[clamp(1.7rem,3.3vw,3.2rem)] font-semibold leading-[1.12] tracking-[-0.016em] text-[#12120f]"
        : "mt-6 max-w-3xl text-[clamp(2rem,4.2vw,4.2rem)] font-semibold leading-[1.08] tracking-[-0.024em] text-[#12120f]";

  return (
    <section className="relative overflow-hidden border-b border-[#1f1f1f]/12 bg-[#f4f1ea] px-0 pb-12 pt-16 sm:pt-20">
      <div className="mx-auto grid w-container gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <FloatIn className="min-w-0">
          <p className="inline-flex min-h-10 items-center rounded-none border border-[#1f1f1f]/20 bg-white/70 px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3a3a36]">
            {content.hero.badge}
          </p>
          <h1 className={heroTitleClass}>
            {content.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#3f3f3a] sm:text-lg">{content.hero.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={DOWNLOAD_URL}
              className="ui-press inline-flex min-h-12 items-center justify-center border border-[#141411] bg-[#141411] px-6 py-3 text-sm font-semibold text-[#f8f6ef] transition hover:bg-black"
            >
              {content.hero.primaryCta}
            </Link>
            <Link
              href="#features"
              className="ui-press inline-flex min-h-12 items-center justify-center border border-[#141411]/35 bg-transparent px-6 py-3 text-sm font-semibold text-[#141411] transition hover:border-[#141411]"
            >
              {content.hero.secondaryCta}
            </Link>
          </div>

          <div className="mt-8 grid max-w-2xl gap-3 border-l border-[#141411]/20 pl-4 text-sm text-[#4a4a44] sm:grid-cols-2 sm:pl-6">
            <p>{content.hero.helper}</p>
            <p>{compatibilityNote}</p>
          </div>
        </FloatIn>

        <Reveal>
          <figure className="group relative shadow-[0_26px_60px_-42px_rgba(0,0,0,0.7)]">
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src={heroImageSrc}
                alt={heroImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 640px"
                className="object-contain origin-top-right transition-transform duration-500 ease-out group-hover:scale-[1.42]"
              />
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function SignalStrip({ content }: Pick<LandingPageProps, "content">) {
  const stats = [
    { label: content.nav.features, value: content.features.length, href: "#features" },
    { label: content.nav.scenarios, value: content.scenarios.length, href: "#scenarios" },
    { label: content.labels.faq, value: content.faqs.length, href: "#faq" }
  ];

  return (
    <section className="border-b border-[#1f1f1f]/10 bg-[#ece8dd] py-10">
      <div className="mx-auto grid w-container gap-4 sm:grid-cols-3">
        {stats.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.05}>
            <Link
              href={item.href}
              className="ui-press block min-h-14 border border-[#1b1b17]/15 bg-[#f8f6ef] px-5 py-5 transition hover:border-[#1b1b17]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12120f]/35"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#55554f]">{item.label}</p>
              <p className="mt-2 text-4xl font-semibold tracking-[-0.02em] text-[#141411]">{item.value}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function TriggerAtlas({ content }: Pick<LandingPageProps, "content">) {
  const major = content.features.slice(0, 6);

  return (
    <section id="features" className="bg-[#f8f6ef] py-section">
      <div className="mx-auto w-container">
        <Reveal>
          <div className="grid gap-6 border-b border-[#181814]/14 pb-7 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <h2 className="text-[clamp(2rem,4.6vw,3.7rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-[#12120f]">{content.featureTitle}</h2>
            <p className="max-w-xl text-sm leading-relaxed text-[#54544e]">A trigger-first system for high-risk transitions on macOS. Each rule can be enabled independently.</p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {major.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="group relative border border-[#1b1b17]/16 bg-white px-6 pb-7 pt-6 transition hover:-translate-y-0.5 hover:border-[#1b1b17]/35">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#717069]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#161612]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4b4b45]">{item.description}</p>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#191915] transition-all duration-300 group-hover:w-full" aria-hidden />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScenarioBoard({ content }: Pick<LandingPageProps, "content">) {
  return (
    <section id="scenarios" className="border-y border-[#1f1f1f]/10 bg-[#161512] py-section text-[#f6f4ed]">
      <div className="mx-auto w-container">
        <Reveal>
          <h2 className="text-[clamp(1.9rem,4.2vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.025em]">{content.scenariosTitle}</h2>
        </Reveal>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {content.scenarios.map((scenario, index) => (
            <Reveal key={scenario.title} delay={index * 0.05}>
              <article className="border border-white/22 bg-white/[0.03] px-6 py-6">
                <h3 className="text-base font-semibold tracking-tight">{scenario.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#d2cec1]">{scenario.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ({ content }: Pick<LandingPageProps, "content">) {
  const faqs = content.faqs.slice(0, 6);

  return (
    <section id="faq" className="bg-[#f4f1e8] py-section">
      <div className="mx-auto w-container">
        <Reveal>
          <h2 className="text-[clamp(2rem,4vw,3.3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#151511]">{content.labels.faq}</h2>
        </Reveal>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.04}>
              <details className="group border border-[#1d1d18]/16 bg-white px-5 py-5 open:border-[#1d1d18]/35">
                <summary className="cursor-pointer list-none pr-6 text-sm font-semibold text-[#191915] marker:hidden">{faq.question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-[#52524d]">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ content }: Pick<LandingPageProps, "content">) {
  return (
    <section id="download" className="border-y border-[#1f1f1f]/10 bg-[#e8e3d8] pb-section pt-14">
      <div className="mx-auto w-container">
        <Reveal>
          <div className="grid gap-8 border border-[#141410]/20 bg-[#121210] px-8 py-10 text-[#f8f6ef] md:grid-cols-[1.1fr_0.9fr] md:items-end md:px-10">
            <div>
              <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em]">{content.cta.title}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#d2cec2] sm:text-base">{content.cta.description}</p>
            </div>
            <div className="md:justify-self-end">
              <Link
                href={DOWNLOAD_URL}
                className="ui-press inline-flex min-h-12 items-center justify-center border border-[#f1eee4] bg-[#f1eee4] px-6 py-3 text-sm font-semibold text-[#11110f] transition hover:bg-white"
              >
                {content.cta.primary}
              </Link>
              <p className="mt-3 text-xs text-[#bbb7ac]">{content.cta.helper}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact({ locale, title, feedbackLabel }: { locale: Locale; title: string; feedbackLabel: string }) {
  const descriptionByLocale: Record<Locale, string> = {
    en: "Need help or business contact? Reach us by email.",
    "zh-CN": "如需支持或商务沟通，请发送邮件联系我们。",
    ko: "문의나 비즈니스 연락은 이메일로 보내주세요.",
    ja: "サポートやご連絡はメールでお問い合わせください。",
    de: "Für Support oder Business-Anfragen erreichst du uns per E-Mail.",
    es: "Si necesitas soporte o contacto comercial, escríbenos por correo."
  };

  return (
    <section id="contact" className="bg-[#f8f6ef] pb-section pt-10">
      <div className="mx-auto w-container">
        <Reveal>
          <div className="grid gap-4 border border-[#1d1d18]/16 bg-white px-6 py-7 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#151511]">{title}</h2>
              <p className="mt-2 text-sm text-[#53534d]">{descriptionByLocale[locale]}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a id="contact-email" href="mailto:help@default0.com" className="text-sm font-semibold text-[#11110f] underline decoration-[#11110f]/35 underline-offset-4">
                help@default0.com
              </a>
              <Link
                href={`/${locale}/feedback`}
                className="ui-press inline-flex min-h-10 items-center justify-center border border-[#11110f]/25 px-4 py-2 text-sm font-medium text-[#11110f] transition hover:border-[#11110f]"
              >
                {feedbackLabel}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
