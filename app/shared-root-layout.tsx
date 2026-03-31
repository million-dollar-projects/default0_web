import type { Metadata } from "next";
import { IBM_Plex_Sans, Noto_Sans_JP, Noto_Sans_KR, Noto_Sans_SC, Sora } from "next/font/google";
import { SITE_URL } from "@/lib/seo";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display-latin",
  display: "swap",
  weight: ["500", "600", "700", "800"]
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body-latin",
  display: "swap",
  weight: ["400", "500", "600"]
});

const notoSansSc = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-body-zh",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-body-ja",
  display: "swap",
  weight: ["400", "500", "700"]
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-body-ko",
  display: "swap",
  weight: ["400", "500", "700"]
});

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
        className={`${sora.variable} ${ibmPlexSans.variable} ${notoSansSc.variable} ${notoSansJp.variable} ${notoSansKr.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
