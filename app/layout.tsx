import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const notoSc = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://default0.app"),
  manifest: "/site.webmanifest",
  title: "Default0 | macOS 自动静音守护",
  description:
    "Default0 是一款 macOS 菜单栏自动静音工具，在解锁、设备切换、蓝牙断连、应用激活等关键时刻自动将音量拉到 0。",
  keywords: ["Default0", "macOS", "自动静音", "菜单栏工具", "音量管理", "会议工具"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Default0 | 自动静音，让突发外放不再让你尴尬",
    description: "关键时刻自动静音，降低突发外放风险。",
    url: "https://default0.app",
    siteName: "Default0",
    type: "website",
    locale: "zh_CN",
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
    title: "Default0 | 自动静音，让突发外放不再让你尴尬",
    description: "macOS 菜单栏自动静音工具",
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
      <body className={`${jakarta.variable} ${notoSc.variable} antialiased`}>{children}</body>
    </html>
  );
}
