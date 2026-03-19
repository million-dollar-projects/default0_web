import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { privacyContent } from "@/lib/locales/privacy";
import { Locale, isLocale, locales } from "@/lib/site-content";
import { buildLanguageAlternates } from "@/lib/seo";

type PageProps = {
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale)) return {};

  const c = privacyContent[params.locale];
  const description = c.sections[0]?.paragraphs?.[0] ?? c.title;

  return {
    title: `${c.title} | Default0`,
    description,
    alternates: {
      canonical: `/${params.locale}/privacy`,
      languages: buildLanguageAlternates((locale) => `/${locale}/privacy`)
    }
  };
}

export default function PrivacyPage({ params }: PageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const c = privacyContent[locale];

  return (
    <main className="min-h-dvh bg-bg text-text">
      <section className="py-section">
        <div className="mx-auto w-container">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{c.title}</h1>
          {c.subtitle ? <p className="mt-4 max-w-3xl text-sm text-muted">{c.subtitle}</p> : null}

          <div className="mt-10 rounded-xxl border border-line bg-surface p-8 sm:p-10">
            <div className="space-y-8">
              {c.sections.map((section) => {
                const ListTag = section.ordered ? "ol" : "ul";

                return (
                  <section key={section.heading} className="space-y-4">
                    <h2 className="text-xl font-semibold text-text">{section.heading}</h2>

                    {section.paragraphs?.map((paragraph) => (
                      <p key={`${section.heading}-${paragraph}`} className="text-muted">
                        {paragraph}
                      </p>
                    ))}

                    {section.items ? (
                      <ListTag className={section.ordered ? "list-decimal space-y-3 pl-5 text-muted" : "space-y-3 text-muted"}>
                        {section.items.map((item) => (
                          <li key={`${section.heading}-${item}`} className="whitespace-pre-line leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ListTag>
                    ) : null}
                  </section>
                );
              })}
            </div>

            <p className="mt-10 text-sm text-muted">
              {c.contactTitle}{" "}
              <a href={`mailto:${c.contactEmail}`} className="font-semibold text-brand hover:text-brand-strong">
                {c.contactEmail}
              </a>
            </p>
          </div>

          <Link href={`/${locale}`} className="mt-8 inline-flex text-sm font-medium text-brand transition hover:text-brand-strong">
            {c.backHome}
          </Link>
        </div>
      </section>
    </main>
  );
}
