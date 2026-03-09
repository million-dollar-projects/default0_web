"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale, localeNames, locales } from "@/lib/site-content";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

export default function LanguageSwitcher({ currentLocale, label }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const restPath = useMemo(() => {
    if (!pathname) return "";
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length === 0) return "";
    if (locales.includes(parts[0] as Locale)) {
      return parts.slice(1).join("/");
    }
    return parts.join("/");
  }, [pathname]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-medium text-muted transition hover:border-brand hover:text-text"
        aria-expanded={open}
        aria-label={label}
      >
        {localeNames[currentLocale]}
        <span className={`text-xs transition ${open ? "rotate-180" : ""}`} aria-hidden>
          ▾
        </span>
      </button>

      {open ? (
        <div className="absolute right-0 top-12 z-50 min-w-[10rem] overflow-hidden rounded-xl2 border border-line bg-surface py-1 shadow-panel">
          {locales.map((locale) => (
            <Link
              key={locale}
              href={`/${locale}${restPath ? `/${restPath}` : ""}`}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 text-base leading-tight text-text transition hover:bg-bg ${
                locale === currentLocale ? "bg-bg font-semibold" : "font-medium"
              }`}
              lang={locale}
            >
              {localeNames[locale]}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
