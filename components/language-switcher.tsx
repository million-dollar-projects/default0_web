"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  const rootRef = useRef<HTMLDivElement>(null);

  const restPath = useMemo(() => {
    if (!pathname) return "";
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length === 0) return "";
    if (locales.includes(parts[0] as Locale)) {
      return parts.slice(1).join("/");
    }
    return parts.join("/");
  }, [pathname]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!open) return;
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-10 max-w-[9.5rem] min-w-0 items-center gap-2 rounded-full border border-line bg-bg/55 px-4 text-sm font-medium text-muted backdrop-blur transition hover:border-brand hover:text-text sm:max-w-none"
        aria-expanded={open}
        aria-label={label}
      >
        <span className="truncate">{localeNames[currentLocale]}</span>
        <span className={`text-xs transition ${open ? "rotate-180" : ""}`} aria-hidden>
          ▾
        </span>
      </button>

      {open ? (
        <div className="absolute right-0 top-12 z-50 min-w-[10rem] max-w-[80vw] overflow-hidden rounded-xl2 border border-line bg-surface py-1 shadow-panel">
          {locales.map((locale) => (
            <Link
              key={locale}
              href={`/${locale}${restPath ? `/${restPath}` : ""}`}
              onClick={() => setOpen(false)}
              className={`block truncate px-3 py-2 text-base leading-tight text-text transition hover:bg-bg ${
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
