import { de } from "@/lib/locales/de";
import { en } from "@/lib/locales/en";
import { es } from "@/lib/locales/es";
import { ja } from "@/lib/locales/ja";
import { ko } from "@/lib/locales/ko";
import { zhCN } from "@/lib/locales/zh-CN";
import { localeNames, locales } from "@/lib/locales/types";
import type { Locale, SiteContent } from "@/lib/locales/types";

export type { Locale, SiteContent };
export { localeNames, locales };

const localeContent: Record<Locale, SiteContent> = {
  en,
  "zh-CN": zhCN,
  ko,
  ja,
  de,
  es
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getSiteContent(locale: string): SiteContent {
  if (isLocale(locale)) {
    return localeContent[locale];
  }

  return zhCN;
}
