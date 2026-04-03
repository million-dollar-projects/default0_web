import Link from "next/link";
import LanguageSwitcher from "@/components/language-switcher";
import { Locale, SiteContent } from "@/lib/site-content";

type SiteChromeProps = {
  content: SiteContent;
  locale: Locale;
  children: React.ReactNode;
  sectionPrefix?: string;
  showDownloadNav?: boolean;
  languageHrefMap?: Partial<Record<Locale, string>>;
  minimal?: boolean;
};

export default function SiteChrome({
  content,
  locale,
  children,
  sectionPrefix = "",
  showDownloadNav = true,
  languageHrefMap,
  minimal = false
}: SiteChromeProps) {
  return (
    <div className="relative isolate overflow-x-clip bg-bg text-text" lang={locale}>
      {minimal ? <MinimalBackground /> : <BackgroundAura />}
      <Header content={content} locale={locale} sectionPrefix={sectionPrefix} showDownloadNav={showDownloadNav} languageHrefMap={languageHrefMap} minimal={minimal} />
      <main className="relative z-10">{children}</main>
      <div className="relative z-10">
        <Footer content={content} locale={locale} sectionPrefix={sectionPrefix} minimal={minimal} />
      </div>
    </div>
  );
}

function Header({
  content,
  locale,
  sectionPrefix,
  showDownloadNav,
  languageHrefMap,
  minimal
}: {
  content: SiteContent;
  locale: Locale;
  sectionPrefix: string;
  showDownloadNav: boolean;
  languageHrefMap?: Partial<Record<Locale, string>>;
  minimal: boolean;
}) {
  return (
    <header
      className={
        minimal
          ? "sticky top-0 z-30 border-b border-[#191915]/15 bg-[#f8f6ef]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f8f6ef]/82"
          : "sticky top-0 z-30 border-b border-transparent backdrop-blur supports-[backdrop-filter]:bg-bg/75"
      }
    >
      <div className="mx-auto flex w-container items-center justify-between py-5">
        <Link href={`/${locale}`} className={minimal ? "text-xl font-semibold tracking-tight" : "text-xl font-semibold tracking-tight"}>
          <span
            className={
              minimal
                ? "text-[1.45rem] font-semibold uppercase tracking-[0.08em] text-[#12120f]"
                : "brand-wink bg-gradient-to-r from-text via-brand-strong to-text bg-clip-text text-[2rem] font-extrabold tracking-[-0.03em] text-transparent drop-shadow-[0_1px_0_rgba(255,255,255,0.25)] dark:drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]"
            }
          >
            {content.brand}
          </span>
        </Link>
        <nav className={minimal ? "hidden items-center gap-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#4a4a44] md:flex" : "hidden items-center gap-8 text-sm text-muted md:flex"}>
          <Link href={`${sectionPrefix}#features`} className="nav-link transition hover:text-text">
            {content.nav.features}
          </Link>
          <Link href={`${sectionPrefix}#scenarios`} className="nav-link transition hover:text-text">
            {content.nav.scenarios}
          </Link>
          <Link href={`${sectionPrefix}#faq`} className="nav-link transition hover:text-text">
            {content.nav.faq}
          </Link>
          {showDownloadNav ? (
            <Link href={`${sectionPrefix}#download`} className="nav-link transition hover:text-text">
              {content.nav.download}
            </Link>
          ) : null}
          <Link href={`/${locale}/blog`} className="nav-link transition hover:text-text">
            {content.labels.blog}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher currentLocale={locale} label={content.labels.language} hrefMap={languageHrefMap} />
        </div>
      </div>
    </header>
  );
}

function Footer({ content, locale, sectionPrefix, minimal }: { content: SiteContent; locale: Locale; sectionPrefix: string; minimal: boolean }) {
  const getHref = (index: number): string => {
    if (index === 0) return `${sectionPrefix}#features`;
    if (index === 1) return `/${locale}/feedback`;
    if (index === 2) return `${sectionPrefix}#faq`;
    if (index === 3) return `/${locale}/privacy`;
    if (index === 4) return `/${locale}/terms`;
    if (index === 5) return `${sectionPrefix}#contact-email`;
    return "#";
  };

  return (
    <footer className={minimal ? "border-t border-[#191915]/15 bg-[#f8f6ef] py-10" : "border-t border-line py-10"}>
      <div className="mx-auto flex w-container flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div className="min-w-0">
          <p className={minimal ? "break-words font-semibold text-[#141410] [overflow-wrap:anywhere]" : "break-words font-semibold [overflow-wrap:anywhere]"}>{content.footer.tagline}</p>
          <p className={minimal ? "mt-2 break-words text-sm text-[#5b5b54] [overflow-wrap:anywhere]" : "mt-2 break-words text-sm text-muted [overflow-wrap:anywhere]"}>{content.footer.copyright}</p>
        </div>
        <div className={minimal ? "flex min-w-0 flex-wrap gap-4 text-sm text-[#55554f]" : "flex min-w-0 flex-wrap gap-4 text-sm text-muted"}>
          <Link href={`/${locale}/blog`} className={minimal ? "nav-link break-words transition [overflow-wrap:anywhere] hover:text-[#11110f]" : "nav-link break-words transition [overflow-wrap:anywhere] hover:text-text"}>
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
                  className={minimal ? "nav-link break-words transition [overflow-wrap:anywhere] hover:text-[#11110f]" : "nav-link break-words transition [overflow-wrap:anywhere] hover:text-text"}
                >
                  {link}
                </a>
              );
            }

            return (
              <Link
                key={link}
                href={href}
                className={minimal ? "nav-link break-words transition [overflow-wrap:anywhere] hover:text-[#11110f]" : "nav-link break-words transition [overflow-wrap:anywhere] hover:text-text"}
              >
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

function MinimalBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#f8f6ef]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(25,25,21,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(25,25,21,0.045)_1px,transparent_1px)] bg-[size:34px_34px] opacity-25" />
    </div>
  );
}
