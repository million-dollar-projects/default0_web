import { Locale, locales } from "@/lib/site-content";

const FALLBACK_LOCALE: Locale = "en";

const exactMap: Record<string, Locale> = {
  en: "en",
  "zh-cn": "zh-CN",
  ko: "ko",
  ja: "ja",
  de: "de",
  es: "es"
};

const baseMap: Record<string, Locale> = {
  en: "en",
  zh: "zh-CN",
  ko: "ko",
  ja: "ja",
  de: "de",
  es: "es"
};

function toLocale(tag: string): Locale | null {
  const normalized = tag.toLowerCase().replace("_", "-");

  if (normalized in exactMap) {
    return exactMap[normalized];
  }

  const base = normalized.split("-")[0];
  if (base in baseMap) {
    return baseMap[base];
  }

  return null;
}

export function detectLocaleFromHeader(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) {
    return FALLBACK_LOCALE;
  }

  const parsed = acceptLanguage
    .split(",")
    .map((entry, index) => {
      const [tagRaw, ...params] = entry.trim().split(";");
      const qParam = params.find((param) => param.trim().startsWith("q="));
      const q = qParam ? Number.parseFloat(qParam.trim().slice(2)) : 1;

      return {
        tag: tagRaw.trim(),
        q: Number.isFinite(q) ? q : 0,
        index
      };
    })
    .filter((item) => item.tag && item.tag !== "*")
    .sort((a, b) => b.q - a.q || a.index - b.index);

  for (const candidate of parsed) {
    const locale = toLocale(candidate.tag);
    if (locale && locales.includes(locale)) {
      return locale;
    }
  }

  return FALLBACK_LOCALE;
}
