"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/site-content";

type Theme = "light" | "dark";

const STORAGE_KEY = "default0-theme";

const themeLabels: Record<Locale, { toDark: string; toLight: string; aria: string }> = {
  en: { toDark: "Dark Mode", toLight: "Light Mode", aria: "Toggle theme" },
  "zh-CN": { toDark: "深色模式", toLight: "浅色模式", aria: "切换深浅主题" },
  ko: { toDark: "다크 모드", toLight: "라이트 모드", aria: "테마 전환" },
  ja: { toDark: "ダークモード", toLight: "ライトモード", aria: "テーマ切り替え" },
  de: { toDark: "Dunkelmodus", toLight: "Hellmodus", aria: "Theme umschalten" },
  es: { toDark: "Modo oscuro", toLight: "Modo claro", aria: "Cambiar tema" }
};

export default function ThemeToggle({ locale }: { locale: Locale }) {
  const [theme, setTheme] = useState<Theme>("light");
  const labels = themeLabels[locale];

  useEffect(() => {
    const cached = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = cached ?? (systemDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    setTheme(nextTheme);
  }, []);

  const onToggle = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem(STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-10 items-center rounded-full border border-line px-4 text-sm text-muted transition hover:border-brand hover:text-text"
      aria-label={labels.aria}
    >
      {theme === "light" ? labels.toDark : labels.toLight}
    </button>
  );
}
