import type { Locale } from "@/lib/site-content";
import { feedbackFormDe } from "@/lib/locales/feedback-form/de";
import { feedbackFormEn } from "@/lib/locales/feedback-form/en";
import { feedbackFormEs } from "@/lib/locales/feedback-form/es";
import { feedbackFormJa } from "@/lib/locales/feedback-form/ja";
import { feedbackFormKo } from "@/lib/locales/feedback-form/ko";
import { feedbackFormZhCN } from "@/lib/locales/feedback-form/zh-CN";
import type { FeedbackFormCopy } from "@/lib/locales/feedback-form/types";

export const feedbackFormCopyByLocale: Record<Locale, FeedbackFormCopy> = {
  en: feedbackFormEn,
  "zh-CN": feedbackFormZhCN,
  ko: feedbackFormKo,
  ja: feedbackFormJa,
  de: feedbackFormDe,
  es: feedbackFormEs
};

export type { FeedbackFormCopy };
