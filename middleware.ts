import { NextRequest, NextResponse } from "next/server";
import { detectLocaleFromHeader } from "@/lib/locale-detect";
import { locales } from "@/lib/site-content";

const PUBLIC_FILE = /\.(.*)$/;
const WWW_PREFIX = "www.";

export function middleware(req: NextRequest) {
  const { pathname, hostname } = req.nextUrl;

  const isLocalhost = hostname.startsWith("localhost") || hostname === "127.0.0.1";
  if (hostname.startsWith(WWW_PREFIX) === false && !isLocalhost) {
    const url = req.nextUrl.clone();
    url.hostname = `${WWW_PREFIX}${hostname}`;
    return NextResponse.redirect(url);
  }

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
