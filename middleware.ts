import { NextRequest, NextResponse } from "next/server";
import { detectLocaleFromHeader } from "@/lib/locale-detect";
import { locales } from "@/lib/site-content";

const PUBLIC_FILE = /\.(.*)$/;

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

  const locale = detectLocaleFromHeader(req.headers.get("accept-language"));
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next).*)"]
};
