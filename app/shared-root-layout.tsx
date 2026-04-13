import type { Metadata } from "next";
import { fontClassName, fontStyle } from "@font-config";
import { SITE_URL } from "@/lib/seo";
import Script from "next/script";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  manifest: "/site.webmanifest",
  title: {
    default: "Default0 | Mac Auto Mute App for Preventing Accidental Speaker Playback",
    template: "%s | Default0"
  },
  description:
    "Default0 is a macOS menu bar app that auto-mutes your Mac during unlocks, output changes, Bluetooth disconnects, Wi-Fi changes, and meeting app launches to prevent accidental speaker playback.",
  keywords: [
    "Default0",
    "macOS",
    "mac auto mute",
    "auto mute app",
    "menu bar app",
    "prevent accidental speaker playback",
    "meeting safety"
  ],
  openGraph: {
    title: "Default0 | Mac Auto Mute App for Preventing Accidental Speaker Playback",
    description: "Auto-mute your Mac at high-risk moments to reduce accidental speaker playback in meetings and shared spaces.",
    url: SITE_URL,
    siteName: "Default0",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN", "ko_KR", "ja_JP", "de_DE", "es_ES"],
    images: [
      {
        url: "/og-default0.svg",
        width: 1200,
        height: 630,
        alt: "Default0 官网预览"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Default0 | Mac Auto Mute App for Preventing Accidental Speaker Playback",
    description: "Auto-mute your Mac to prevent accidental speaker playback on macOS.",
    images: ["/og-default0.svg"]
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Default0",
  "description": "A macOS menu bar app that auto-mutes your Mac during unlocks, output changes, Bluetooth disconnects, Wi-Fi changes, and meeting app launches to prevent accidental speaker playback.",
  "url": SITE_URL,
  "applicationCategory": "Utilities",
  "operatingSystem": "macOS",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "Default0",
    "url": SITE_URL
  },
  "softwareVersion": "1.1.2",
  "fileSize": "MB",
  "requirements": "macOS 13 or later"
};

export function RootDocument({
  children,
  lang
}: Readonly<{
  children: React.ReactNode;
  lang: string;
}>) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${fontClassName} antialiased`.trim()}
        style={fontStyle}
      >
        <Script
          id="software-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
