import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import LanguageSwitcher from "@/components/language-switcher";
import { Locale, SiteContent } from "@/lib/site-content";

type SiteChromeProps = {
  content: SiteContent;
  locale: Locale;
  children: React.ReactNode;
  sectionPrefix?: string;
};

export default function SiteChrome({ content, locale, children, sectionPrefix = "" }: SiteChromeProps) {
  return (
    <div className="relative isolate overflow-x-clip bg-bg text-text" lang={locale}>
      <BackgroundAura />
      <Header content={content} locale={locale} sectionPrefix={sectionPrefix} />
      <main className="relative z-10">{children}</main>
      <div className="relative z-10">
        <Footer content={content} locale={locale} sectionPrefix={sectionPrefix} />
      </div>
    </div>
  );
}

function Header({ content, locale, sectionPrefix }: { content: SiteContent; locale: Locale; sectionPrefix: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-transparent backdrop-blur supports-[backdrop-filter]:bg-bg/75">
      <div className="mx-auto flex w-container items-center justify-between py-5">
        <Link href={`/${locale}`} className="text-xl font-semibold tracking-tight">
          <span className="brand-wink text-[2rem] font-extrabold tracking-[-0.03em] text-transparent bg-gradient-to-r from-text via-brand-strong to-text bg-clip-text drop-shadow-[0_1px_0_rgba(255,255,255,0.25)] dark:drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
            {content.brand}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <Link href={`${sectionPrefix}#features`} className="nav-link transition hover:text-text">
            {content.nav.features}
          </Link>
          <Link href={`${sectionPrefix}#scenarios`} className="nav-link transition hover:text-text">
            {content.nav.scenarios}
          </Link>
          <Link href={`${sectionPrefix}#faq`} className="nav-link transition hover:text-text">
            {content.nav.faq}
          </Link>
          <Link href={`${sectionPrefix}#download`} className="nav-link transition hover:text-text">
            {content.nav.download}
          </Link>
          <Link href={`/${locale}/blog`} className="nav-link transition hover:text-text">
            {content.labels.blog}
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

function Footer({ content, locale, sectionPrefix }: { content: SiteContent; locale: Locale; sectionPrefix: string }) {
  const getHref = (index: number): string => {
    if (index === 0) return `${sectionPrefix}#features`;
    if (index === 1) return `/${locale}/feedback`;
    if (index === 2) return "https://github.com/million-dollar-projects/default0_web/releases";
    if (index === 3) return `${sectionPrefix}#faq`;
    if (index === 4) return `/${locale}/privacy`;
    if (index === 5) return `${sectionPrefix}#contact`;
    return "#";
  };

  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex w-container flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div className="min-w-0">
          <p className="break-words font-semibold [overflow-wrap:anywhere]">{content.footer.tagline}</p>
          <p className="mt-2 break-words text-sm text-muted [overflow-wrap:anywhere]">{content.footer.copyright}</p>
        </div>
        <div className="flex min-w-0 flex-wrap gap-4 text-sm text-muted">
          <Link href={`/${locale}/blog`} className="nav-link break-words transition [overflow-wrap:anywhere] hover:text-text">
            {content.labels.blog}
          </Link>
          {content.footer.links.map((link, index) => {
            const href = getHref(index);
            const isExternal = href.startsWith("http");

            if (isExternal) {
              return (
                <a
                  key={link}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link break-words transition [overflow-wrap:anywhere] hover:text-text"
                >
                  {link}
                </a>
              );
            }

            return (
              <Link key={link} href={href} className="nav-link break-words transition [overflow-wrap:anywhere] hover:text-text">
                {link}
              </Link>
            );
          })}
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
