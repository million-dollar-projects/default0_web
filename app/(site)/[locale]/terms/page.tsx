import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteChrome from "@/components/site-chrome";
import { termsContent } from "@/lib/locales/terms";
import { Locale, getSiteContent, isLocale, locales } from "@/lib/site-content";
import { buildLanguageAlternates } from "@/lib/seo";

type PageProps = {
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLocale(params.locale)) return {};

  const c = termsContent[params.locale];
  const description = c.sections[0]?.paragraphs?.[0] ?? c.title;

  return {
    title: `${c.title} | Default0`,
    description,
    alternates: {
      canonical: `/${params.locale}/terms`,
      languages: buildLanguageAlternates((locale) => `/${locale}/terms`)
    }
  };
}

export default function TermsPage({ params }: PageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const content = getSiteContent(locale);
  const c = termsContent[locale];

  return (
    <SiteChrome content={content} locale={locale} sectionPrefix={`/${locale}`} showDownloadNav={false} minimal>
      <main className="min-h-dvh">
        <section className="py-section">
          <div className="mx-auto w-container">
            <h1 className="text-[clamp(2.2rem,4.8vw,4.2rem)] font-semibold tracking-[-0.03em] text-[#13130f]">{c.title}</h1>
            {c.subtitle ? <p className="mt-4 max-w-3xl text-sm text-[#4d4d46]">{c.subtitle}</p> : null}

            <div className="mt-10 border border-[#1c1c17]/16 bg-white p-8 sm:p-10">
              <div className="space-y-8">
                {c.sections.map((section) => {
                  const ListTag = section.ordered ? "ol" : "ul";

                  return (
                    <section key={section.heading} className="space-y-4">
                      <h2 className="text-xl font-semibold text-[#171713]">{section.heading}</h2>

                      {section.paragraphs?.map((paragraph) => (
                        <p key={`${section.heading}-${paragraph}`} className="text-[#4d4d47]">
                          {paragraph}
                        </p>
                      ))}

                      {section.items ? (
                        <ListTag className={section.ordered ? "list-decimal space-y-3 pl-5 text-[#4d4d47]" : "space-y-3 text-[#4d4d47]"}>
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

              <p className="mt-10 text-sm text-[#55554f]">
                {c.contactTitle}{" "}
                <a href={`mailto:${c.contactEmail}`} className="font-semibold text-[#11110f] underline decoration-[#11110f]/30 underline-offset-4">
                  {c.contactEmail}
                </a>
              </p>
            </div>

            <Link href={`/${locale}`} className="mt-8 inline-flex text-sm font-medium text-[#11110f] underline decoration-[#11110f]/30 underline-offset-4">
              {c.backHome}
            </Link>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
