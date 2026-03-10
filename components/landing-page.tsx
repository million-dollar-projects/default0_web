import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import { FloatIn, Reveal } from "@/components/motion";
import LanguageSwitcher from "@/components/language-switcher";
import { Locale, SiteContent } from "@/lib/site-content";

const sectionTitle = "mb-10 text-3xl font-semibold tracking-tight text-text sm:text-4xl";
const DOWNLOAD_URL = "https://github.com/million-dollar-projects/default0_web/releases/download/v1.0.0/default0.dmg";

type LandingPageProps = {
  content: SiteContent;
  locale: Locale;
};

export default function LandingPage({ content, locale }: LandingPageProps) {
  return (
    <div className="relative isolate overflow-x-clip bg-bg text-text" lang={locale}>
      <BackgroundAura />
      <Header content={content} locale={locale} />
      <main className="relative z-10">
        <Hero content={content} />
        <CoreValues content={content} />
        <Features content={content} />
        <Scenarios content={content} />
        <Comparison content={content} />
        <Testimonials content={content} />
        <FAQ content={content} />
        <CTA content={content} />
        <Contact locale={locale} title={content.footer.links[5]} feedbackLabel={content.footer.links[1]} />
      </main>
      <div className="relative z-10">
        <Footer content={content} locale={locale} />
      </div>
    </div>
  );
}

function Header({ content, locale }: LandingPageProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-transparent backdrop-blur supports-[backdrop-filter]:bg-bg/75">
      <div className="mx-auto flex w-container items-center justify-between py-5">
        <Link href={`/${locale}`} className="text-xl font-semibold tracking-tight">
          <span className="text-[2rem] font-extrabold tracking-[-0.03em] text-transparent bg-gradient-to-r from-text via-brand-strong to-text bg-clip-text drop-shadow-[0_1px_0_rgba(255,255,255,0.25)] dark:drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
            {content.brand}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <Link href="#features" className="transition hover:text-text">
            {content.nav.features}
          </Link>
          <Link href="#scenarios" className="transition hover:text-text">
            {content.nav.scenarios}
          </Link>
          <Link href="#faq" className="transition hover:text-text">
            {content.nav.faq}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher currentLocale={locale} label={content.labels.language} />
          <ThemeToggle locale={locale} />
        </div>
      </div>
    </header>
  );
}

function Hero({ content }: Pick<LandingPageProps, "content">) {
  return (
    <section className="relative pt-16 sm:pt-24">
      <div className="mx-auto grid w-container gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <FloatIn>
          <p className="mb-5 inline-flex rounded-full border border-line bg-surface px-4 py-2 text-xs text-muted">{content.hero.badge}</p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{content.hero.title}</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{content.hero.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={DOWNLOAD_URL} className="inline-flex h-12 items-center rounded-full bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-strong">
              {content.hero.primaryCta}
            </Link>
            <Link href="#features" className="inline-flex h-12 items-center rounded-full border border-line bg-surface px-6 text-sm font-semibold text-text transition hover:border-brand">
              {content.hero.secondaryCta}
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted">{content.hero.helper}</p>
        </FloatIn>

        <Reveal>
          <div className="relative mx-auto w-full max-w-[760px]">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/20 via-accent/25 to-brand-soft/30 blur-3xl" />
            <div className="group rounded-[2rem] border border-line bg-surface p-3 shadow-glow">
              <div className="overflow-hidden rounded-[1.4rem] border border-line/70">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/hero-mock.png"
                    alt="Default0 preview"
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
              <article className="h-full rounded-xxl border border-line bg-surface p-7 shadow-panel">
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.description}</p>
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
              <article className="h-full rounded-xl2 border border-line bg-bg/70 p-6">
                <h3 className="font-semibold text-text">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
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
              <article className="rounded-xl2 border border-line/70 bg-bg p-6">
                <h3 className="font-semibold">{scenario.title}</h3>
                <p className="mt-2 text-muted">{scenario.description}</p>
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
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-line pt-6 text-lg font-semibold sm:text-xl">{content.comparison.conclusion}</p>
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
              <figure className="h-full rounded-xxl border border-line bg-surface p-7">
                <blockquote className="text-base leading-relaxed text-text">“{item.quote}”</blockquote>
                <figcaption className="mt-5 text-sm text-muted">
                  <span>{item.role}</span>
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
              <details className="group rounded-xl2 border border-line bg-surface p-6 open:border-brand/45">
                <summary className="cursor-pointer list-none font-semibold marker:hidden">{faq.question}</summary>
                <p className="mt-3 text-muted">{faq.answer}</p>
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
          <div className="rounded-xxl border border-brand/20 bg-gradient-to-br from-[#4f89d9] via-[#5b93dd] to-[#4a84d3] p-9 text-white sm:p-12 dark:from-[#2d5f9f] dark:via-[#3569aa] dark:to-[#2b5b98]">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{content.cta.title}</h2>
            <p className="mt-4 max-w-2xl text-white/85">{content.cta.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={DOWNLOAD_URL} className="inline-flex h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-brand-strong transition hover:bg-white/90">
                {content.cta.primary}
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/75">{content.cta.helper}</p>
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
          <div className="rounded-xxl border border-line bg-surface p-8 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
            <p className="mt-3 text-muted">{descriptionByLocale[locale]}</p>
            <a href="mailto:help@default0.com" className="mt-5 inline-flex text-lg font-semibold text-brand transition hover:text-brand-strong">
              help@default0.com
            </a>
            <Link
              href={`/${locale}/feedback`}
              className="ml-5 inline-flex h-10 items-center rounded-full border border-line bg-bg/60 px-4 text-sm font-medium text-muted transition hover:border-brand hover:text-text"
            >
              {feedbackLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer({ content, locale }: LandingPageProps) {
  const getHref = (index: number): string => {
    if (index === 0) return "#features";
    if (index === 1) return `/${locale}/feedback`;
    if (index === 2) return "#";
    if (index === 3) return "#faq";
    if (index === 4) return `/${locale}/privacy`;
    if (index === 5) return "#contact";
    return "#";
  };

  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex w-container flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="font-semibold">{content.footer.tagline}</p>
          <p className="mt-2 text-sm text-muted">{content.footer.copyright}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted">
          {content.footer.links.map((link, index) => (
            <Link key={link} href={getHref(index)} className="transition hover:text-text">
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

function BackgroundAura() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-300/35 via-transparent to-emerald-300/25 dark:from-sky-500/18 dark:to-emerald-400/14" />
      <div className="absolute left-1/2 top-[-10rem] h-[34rem] w-[72rem] -translate-x-1/2 rounded-full bg-sky-300/45 blur-3xl dark:bg-sky-500/20" />
      <div className="absolute -left-20 top-[30%] h-96 w-96 rounded-full bg-emerald-300/35 blur-3xl dark:bg-emerald-500/18" />
      <div className="absolute bottom-[-4rem] right-[-4rem] h-[30rem] w-[44rem] rounded-full bg-blue-400/32 blur-2xl dark:bg-blue-500/18" />
    </div>
  );
}
