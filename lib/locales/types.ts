export const locales = ["en", "zh-CN", "ko", "ja", "de", "es"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  "zh-CN": "简体中文",
  ko: "한국어",
  ja: "日本語",
  de: "Deutsch",
  es: "Español"
};

export type Feature = {
  title: string;
  description: string;
};

export type Scenario = {
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type SiteContent = {
  brand: string;
  nav: {
    features: string;
    scenarios: string;
    faq: string;
  };
  labels: {
    testimonials: string;
    faq: string;
    language: string;
    blog: string;
    blogEmpty: string;
    backToBlog: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    helper: string;
    primaryCta: string;
    secondaryCta: string;
  };
  values: {
    title: string;
    items: { title: string; description: string }[];
  };
  featureTitle: string;
  features: Feature[];
  scenariosTitle: string;
  scenarios: Scenario[];
  comparison: {
    title: string;
    items: string[];
    conclusion: string;
  };
  testimonials: Testimonial[];
  faqs: FAQ[];
  cta: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
    helper: string;
  };
  footer: {
    tagline: string;
    links: string[];
    copyright: string;
  };
};
