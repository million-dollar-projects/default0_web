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
