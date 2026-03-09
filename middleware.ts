import { NextRequest, NextResponse } from "next/server";
import { locales } from "@/lib/site-content";

const PUBLIC_FILE = /\.(.*)$/;

function pickLocale(acceptLanguage: string | null): string {
  if (!acceptLanguage) return "zh-CN";

  const lower = acceptLanguage.toLowerCase();
  if (lower.includes("zh")) return "zh-CN";
  if (lower.includes("ko")) return "ko";
  if (lower.includes("ja")) return "ja";
  if (lower.includes("de")) return "de";
  if (lower.includes("es")) return "es";
  return "en";
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname) ||
    locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))
  ) {
    return NextResponse.next();
  }

  const locale = pickLocale(req.headers.get("accept-language"));
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next).*)"]
};
