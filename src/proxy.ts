import { NextResponse, type NextRequest } from "next/server";
import {
  countryToLocale,
  defaultLocale,
  isLocale,
  japaneseOnlyPaths,
  LOCALE_COOKIE,
  type Locale,
} from "@/i18n/config";

const BOT_PATTERN = /bot|crawl|spider|slurp|facebookexternalhit|preview|lighthouse/i;

function fromAcceptLanguage(header: string | null): Locale | undefined {
  if (!header) return undefined;
  for (const part of header.split(",")) {
    const tag = part.split(";")[0].trim().toLowerCase();
    const base = tag.split("-")[0];
    // "in" is the legacy code for Indonesian
    const candidate = base === "in" ? "id" : base;
    if (isLocale(candidate)) return candidate;
  }
  return undefined;
}

function detectLocale(request: NextRequest): Locale {
  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  if (country && countryToLocale[country]) return countryToLocale[country];
  const fromHeader = fromAcceptLanguage(request.headers.get("accept-language"));
  if (fromHeader) return fromHeader;
  // A known foreign country with no matching language → English
  return country && country !== "JP" ? "en" : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const first = pathname.split("/")[1];

  // "/ja/..." is never public: Japanese lives at the root
  if (first === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  // Already prefixed with a non-default language: serve as-is
  if (isLocale(first)) return NextResponse.next();

  const rewriteToJa = () => {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  };

  // Crawlers must see every URL as-is; Japanese legal pages have no translations
  const ua = request.headers.get("user-agent") ?? "";
  if (BOT_PATTERN.test(ua) || japaneseOnlyPaths.includes(pathname)) return rewriteToJa();

  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  const target = isLocale(cookie) ? cookie : detectLocale(request);
  if (target === defaultLocale) return rewriteToJa();

  const url = request.nextUrl.clone();
  url.pathname = `/${target}${pathname === "/" ? "" : pathname}`;
  url.search = search;
  const res = NextResponse.redirect(url, 307);
  res.headers.set("Vary", "Accept-Language, Cookie");
  return res;
}

export const config = {
  // Skip API routes, Next internals and any file with an extension (icons, images, sitemap.xml…)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
