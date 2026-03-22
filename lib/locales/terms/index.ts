import { deTerms } from "@/lib/locales/terms/de";
import { enTerms } from "@/lib/locales/terms/en";
import { esTerms } from "@/lib/locales/terms/es";
import { jaTerms } from "@/lib/locales/terms/ja";
import { koTerms } from "@/lib/locales/terms/ko";
import type { TermsContent } from "@/lib/locales/terms/types";
import { zhCNTerms } from "@/lib/locales/terms/zh-CN";
import type { Locale } from "@/lib/site-content";

export type { TermsContent, TermsSection } from "@/lib/locales/terms/types";

export const termsContent: Record<Locale, TermsContent> = {
  en: enTerms,
  "zh-CN": zhCNTerms,
  ko: koTerms,
  ja: jaTerms,
  de: deTerms,
  es: esTerms
};
