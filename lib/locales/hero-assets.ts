import type { Locale } from "@/lib/locales/types";

export const heroImageByLocale: Record<Locale, string> = {
  en: "/home/en.webp",
  "zh-CN": "/home/zh-CN.webp",
  ko: "/home/ko.webp",
  ja: "/home/ja.webp",
  de: "/home/de.webp",
  es: "/home/es.webp"
};

export const heroImageAltByLocale: Record<Locale, string> = {
  en: "Default0 app preview on macOS",
  "zh-CN": "Default0 在 macOS 上的应用预览",
  ko: "macOS에서 실행 중인 Default0 앱 미리보기",
  ja: "macOS 上で動作する Default0 のプレビュー",
  de: "Vorschau der Default0-App auf macOS",
  es: "Vista previa de la app Default0 en macOS"
};

export const compatibilityNoteByLocale: Record<Locale, string> = {
  en: "Runs on Macs with macOS 13 or later, including both Intel and Apple silicon.",
  "zh-CN": "支持 macOS 13 及以上版本的 Mac，兼容 Intel 与 Apple 芯片。",
  ko: "macOS 13 이상을 실행하는 모든 Mac(Intel 및 Apple Silicon)에서 사용할 수 있습니다.",
  ja: "macOS 13以降のMacで動作します（Intel / Appleシリコン対応）。",
  de: "Lauft auf Macs mit macOS 13 oder neuer, sowohl Intel als auch Apple Silicon.",
  es: "Funciona en Mac con macOS 13 o superior, tanto Intel como Apple Silicon."
};
