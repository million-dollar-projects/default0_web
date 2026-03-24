import { Locale, locales } from "@/lib/site-content";

export const SITE_URL = "https://default0.com";
const X_DEFAULT_LOCALE: Locale = "en";

export function buildLanguageAlternates(pathForLocale: (locale: Locale) => string): Record<string, string> {
  const languages: Record<string, string> = {};

  for (const locale of locales) {
    languages[locale] = pathForLocale(locale);
  }

  languages["x-default"] = pathForLocale(X_DEFAULT_LOCALE);
  return languages;
}

export function buildAvailableLanguageAlternates(
  availableLocales: readonly Locale[],
  pathForLocale: (locale: Locale) => string
): Record<string, string> {
  const languages: Record<string, string> = {};

  for (const locale of availableLocales) {
    languages[locale] = pathForLocale(locale);
  }

  const xDefaultLocale = availableLocales.includes(X_DEFAULT_LOCALE) ? X_DEFAULT_LOCALE : availableLocales[0];
  if (xDefaultLocale) {
    languages["x-default"] = pathForLocale(xDefaultLocale);
  }

  return languages;
}

export function absoluteUrl(pathname: string): string {
  if (/^https?:\/\//.test(pathname)) {
    return pathname;
  }

  return `${SITE_URL}${pathname}`;
}

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
