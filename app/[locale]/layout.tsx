import type { ReactNode } from "react";
import { isLocale } from "@/lib/site-content";

type LocaleLayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = isLocale(params.locale) ? params.locale : "zh-CN";

  return (
    <div className="locale-shell" data-locale={locale} lang={locale}>
      {children}
    </div>
  );
}
