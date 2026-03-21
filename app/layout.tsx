import type { Metadata } from "next";
import { IBM_Plex_Sans, Noto_Sans_JP, Noto_Sans_KR, Noto_Sans_SC, Sora } from "next/font/google";
import { buildLanguageAlternates, SITE_URL } from "@/lib/seo";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  manifest: "/site.webmanifest",
  title: {
    default: "Default0 | Automatic Mute Guard for macOS",
    template: "%s | Default0"
  },
  description:
    "Default0 is a macOS menu bar utility that auto-mutes audio during high-risk moments such as unlock, output switching, and Bluetooth reconnects.",
  keywords: ["Default0", "macOS", "auto mute", "menu bar app", "volume control", "meeting safety"],
  alternates: {
    canonical: "/",
    languages: buildLanguageAlternates((locale) => `/${locale}`)
  },
  openGraph: {
    title: "Default0 | Automatic Mute Guard for macOS",
    description: "Auto-mute at high-risk moments to reduce accidental speaker playback.",
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
    title: "Default0 | Automatic Mute Guard for macOS",
    description: "Auto-mute to prevent accidental speaker playback on macOS.",
    images: ["/og-default0.svg"]
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${ibmPlexSans.variable} ${notoSansSc.variable} ${notoSansJp.variable} ${notoSansKr.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
