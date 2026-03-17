import Image from "next/image";
import Link from "next/link";
import { FloatIn, Reveal } from "@/components/motion";
import { Locale, SiteContent } from "@/lib/site-content";
import { compatibilityNoteByLocale, heroImageAltByLocale, heroImageByLocale } from "@/lib/locales/hero-assets";
import versionData from "@/public/version.json";
import SiteChrome from "@/components/site-chrome";

const sectionTitle = "mb-10 break-words text-3xl font-semibold tracking-tight text-text [overflow-wrap:anywhere] sm:text-4xl";
const latestVersion = String(versionData.latest.version).replace(/^v/, "");
const DOWNLOAD_URL = `https://github.com/million-dollar-projects/default0_web/releases/download/v${latestVersion}/default0-v${latestVersion}.dmg`;

type LandingPageProps = {
  content: SiteContent;
  locale: Locale;
};

export default function LandingPage({ content, locale }: LandingPageProps) {
  return (
    <SiteChrome content={content} locale={locale}>
      <>
        <Hero content={content} locale={locale} />
        <CoreValues content={content} />
        <Features content={content} />
        <Scenarios content={content} />
        <Comparison content={content} />
        <Testimonials content={content} />
        <FAQ content={content} />
        <CTA content={content} />
        <Contact locale={locale} title={content.footer.links[5]} feedbackLabel={content.footer.links[1]} />
      </>
    </SiteChrome>
  );
}

function Hero({ content, locale }: Pick<LandingPageProps, "content" | "locale">) {
  const heroImageSrc = heroImageByLocale[locale] ?? heroImageByLocale.en;
  const heroImageAlt = heroImageAltByLocale[locale] ?? heroImageAltByLocale.en;
  const compatibilityNote = compatibilityNoteByLocale[locale] ?? compatibilityNoteByLocale.en;

  return (
    <section className="relative pt-16 sm:pt-24">
      <div className="mx-auto grid w-container gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <FloatIn className="min-w-0">
          <p className="mb-5 inline-flex max-w-full break-words rounded-full border border-line bg-surface px-4 py-2 text-xs text-muted [overflow-wrap:anywhere]">{content.hero.badge}</p>
          <h1 className="max-w-2xl break-words text-4xl font-semibold leading-tight tracking-tight [overflow-wrap:anywhere] sm:text-5xl lg:text-6xl">{content.hero.title}</h1>
          <p className="mt-6 max-w-xl break-words text-base leading-relaxed text-muted [overflow-wrap:anywhere] sm:text-lg">{content.hero.description}</p>
          <div className="mt-8 flex flex-wrap items-stretch gap-3 sm:items-center">
            <Link
              href={DOWNLOAD_URL}
              className="ui-press cta-sheen inline-flex min-h-12 max-w-full items-center justify-center rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold leading-tight text-white transition hover:bg-brand-strong"
            >
              {content.hero.primaryCta}
            </Link>
            <Link
              href="#features"
              className="ui-press inline-flex min-h-12 max-w-full items-center justify-center rounded-full border border-line bg-surface px-6 py-3 text-center text-sm font-semibold leading-tight text-text transition hover:border-brand"
            >
              {content.hero.secondaryCta}
            </Link>
          </div>
          <p className="mt-4 break-words text-sm text-muted [overflow-wrap:anywhere]">{content.hero.helper}</p>
          <p className="mt-2 break-words text-xs leading-relaxed text-muted/90 [overflow-wrap:anywhere]">{compatibilityNote}</p>
        </FloatIn>

        <Reveal>
          <div className="relative mx-auto w-full max-w-[760px]">
            <div className="hero-ambient absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/20 via-accent/25 to-brand-soft/30 blur-3xl" />
            <div className="group surface-lift rounded-[2rem] border border-line bg-surface p-3 shadow-glow">
              <div className="overflow-hidden rounded-[1.4rem] border border-line/70">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={heroImageSrc}
                    alt={heroImageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 92vw, 760px"
                    className="origin-top object-cover object-center transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.82] group-hover:-translate-x-[24%] group-hover:translate-y-[2%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CoreValues({ content }: Pick<LandingPageProps, "content">) {
  return (
    <section className="py-section">
      <div className="mx-auto w-container">
        <Reveal>
          <h2 className={sectionTitle}>{content.values.title}</h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {content.values.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="surface-lift h-full min-w-0 rounded-xxl border border-line bg-surface p-7 shadow-panel">
                <h3 className="break-words text-xl font-semibold tracking-tight [overflow-wrap:anywhere]">{item.title}</h3>
                <p className="mt-3 break-words leading-relaxed text-muted [overflow-wrap:anywhere]">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features({ content }: Pick<LandingPageProps, "content">) {
  return (
    <section id="features" className="py-section">
      <div className="mx-auto w-container">
        <Reveal>
          <h2 className={sectionTitle}>{content.featureTitle}</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.035}>
              <article className="surface-lift h-full min-w-0 rounded-xl2 border border-line bg-bg/70 p-6">
                <h3 className="break-words font-semibold text-text [overflow-wrap:anywhere]">{feature.title}</h3>
                <p className="mt-2 break-words text-sm leading-relaxed text-muted [overflow-wrap:anywhere]">{feature.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scenarios({ content }: Pick<LandingPageProps, "content">) {
  return (
    <section id="scenarios" className="py-section">
      <div className="mx-auto w-container rounded-xxl border border-line bg-surface p-8 sm:p-12">
        <Reveal>
          <h2 className={sectionTitle}>{content.scenariosTitle}</h2>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {content.scenarios.map((scenario, index) => (
            <Reveal key={scenario.title} delay={index * 0.08}>
              <article className="surface-lift min-w-0 rounded-xl2 border border-line/70 bg-bg p-6">
                <h3 className="break-words font-semibold [overflow-wrap:anywhere]">{scenario.title}</h3>
                <p className="mt-2 break-words text-muted [overflow-wrap:anywhere]">{scenario.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison({ content }: Pick<LandingPageProps, "content">) {
  return (
    <section className="py-section">
      <div className="mx-auto w-container">
        <Reveal>
          <h2 className={sectionTitle}>{content.comparison.title}</h2>
        </Reveal>
        <Reveal>
          <div className="rounded-xxl border border-line bg-gradient-to-br from-brand-soft/20 via-surface to-accent/20 p-8 sm:p-10">
            <ul className="space-y-4 text-base leading-relaxed sm:text-lg">
              {content.comparison.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-block size-2 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span className="break-words [overflow-wrap:anywhere]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 break-words border-t border-line pt-6 text-lg font-semibold [overflow-wrap:anywhere] sm:text-xl">{content.comparison.conclusion}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials({ content }: Pick<LandingPageProps, "content">) {
  return (
    <section className="py-section">
      <div className="mx-auto w-container">
        <Reveal>
          <h2 className={sectionTitle}>{content.labels.testimonials}</h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {content.testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <figure className="surface-lift h-full min-w-0 rounded-xxl border border-line bg-surface p-7">
                <blockquote className="break-words text-base leading-relaxed text-text [overflow-wrap:anywhere]">“{item.quote}”</blockquote>
                <figcaption className="mt-5 text-sm text-muted">
                  <span className="break-words [overflow-wrap:anywhere]">{item.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ({ content }: Pick<LandingPageProps, "content">) {
  return (
    <section id="faq" className="py-section">
      <div className="mx-auto w-container">
        <Reveal>
          <h2 className={sectionTitle}>{content.labels.faq}</h2>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {content.faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.05}>
              <details className="group surface-lift min-w-0 rounded-xl2 border border-line bg-surface p-6 open:border-brand/45">
                <summary className="cursor-pointer list-none break-words font-semibold marker:hidden [overflow-wrap:anywhere]">{faq.question}</summary>
                <p className="mt-3 break-words text-muted [overflow-wrap:anywhere]">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({ content }: Pick<LandingPageProps, "content">) {
  return (
    <section className="pb-section pt-8">
      <div className="mx-auto w-container">
        <Reveal>
          <div className="min-w-0 rounded-xxl border border-brand/20 bg-gradient-to-br from-[#4f89d9] via-[#5b93dd] to-[#4a84d3] p-9 text-white sm:p-12 dark:from-[#2d5f9f] dark:via-[#3569aa] dark:to-[#2b5b98]">
            <h2 className="break-words text-3xl font-semibold tracking-tight [overflow-wrap:anywhere] sm:text-4xl">{content.cta.title}</h2>
            <p className="mt-4 max-w-2xl break-words text-white/85 [overflow-wrap:anywhere]">{content.cta.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={DOWNLOAD_URL}
                className="ui-press cta-sheen inline-flex min-h-12 max-w-full items-center justify-center rounded-full bg-white px-6 py-3 text-center text-sm font-semibold leading-tight text-brand-strong transition hover:bg-white/90"
              >
                {content.cta.primary}
              </Link>
            </div>
            <p className="mt-4 break-words text-sm text-white/75 [overflow-wrap:anywhere]">{content.cta.helper}</p>
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
    <section id="contact" className="pb-section pt-4">
      <div className="mx-auto w-container">
        <Reveal>
          <div className="min-w-0 rounded-xxl border border-line bg-surface p-8 sm:p-10">
            <h2 className="break-words text-2xl font-semibold tracking-tight [overflow-wrap:anywhere] sm:text-3xl">{title}</h2>
            <p className="mt-3 break-words text-muted [overflow-wrap:anywhere]">{descriptionByLocale[locale]}</p>
            <a href="mailto:help@default0.com" className="mt-5 inline-flex break-all text-lg font-semibold text-brand transition hover:text-brand-strong">
              help@default0.com
            </a>
            <Link
              href={`/${locale}/feedback`}
              className="ui-press ml-5 inline-flex min-h-10 max-w-full items-center justify-center rounded-full border border-line bg-bg/60 px-4 py-2 text-center text-sm font-medium leading-tight text-muted transition hover:border-brand hover:text-text"
            >
              {feedbackLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
