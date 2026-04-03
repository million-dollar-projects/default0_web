import { IBM_Plex_Sans, Noto_Sans_JP, Noto_Sans_KR, Noto_Sans_SC, Sora } from "next/font/google";

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

export const fontClassName = `${sora.variable} ${ibmPlexSans.variable} ${notoSansSc.variable} ${notoSansJp.variable} ${notoSansKr.variable}`;

export const fontStyle = undefined;
