import type { Metadata } from "next";
import type { ReactNode } from "react";
import { RootDocument, baseMetadata } from "@/app/shared-root-layout";
import "@/app/globals.css";
import { isLocale } from "@/lib/site-content";

type LocaleLayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = baseMetadata;

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = isLocale(params.locale) ? params.locale : "en";

  return (
    <RootDocument lang={locale}>
      <div className="locale-shell" data-locale={locale} lang={locale}>
        {children}
      </div>
    </RootDocument>
  );
}
