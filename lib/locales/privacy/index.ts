import type { Locale } from "@/lib/locales/types";
import { dePrivacy } from "@/lib/locales/privacy/de";
import { enPrivacy } from "@/lib/locales/privacy/en";
import { esPrivacy } from "@/lib/locales/privacy/es";
import { jaPrivacy } from "@/lib/locales/privacy/ja";
import { koPrivacy } from "@/lib/locales/privacy/ko";
import type { PrivacyContent } from "@/lib/locales/privacy/types";
import { zhCNPrivacy } from "@/lib/locales/privacy/zh-CN";

export type { PrivacyContent, PrivacySection } from "@/lib/locales/privacy/types";

export const privacyContent: Record<Locale, PrivacyContent> = {
  en: enPrivacy,
  "zh-CN": zhCNPrivacy,
  ko: koPrivacy,
  ja: jaPrivacy,
  de: dePrivacy,
  es: esPrivacy
};
