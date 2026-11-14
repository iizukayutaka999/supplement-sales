import { SITE_URL } from "@/lib/constants";

export const locales = ["ja", "en", "ru", "hy", "ms", "vi", "th", "hi", "id", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ja";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const localeNames: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  ru: "Русский",
  hy: "Հայերեն",
  ms: "Bahasa Melayu",
  vi: "Tiếng Việt",
  th: "ไทย",
  hi: "हिन्दी",
  id: "Bahasa Indonesia",
  ar: "العربية",
};

export const rtlLocales: Locale[] = ["ar"];

/** Pages that exist in Japanese only (Japanese legal documents). */
export const japaneseOnlyPaths = ["/legal", "/privacy"];

/** Visitor country (ISO 3166-1 alpha-2) → site language. */
export const countryToLocale: Record<string, Locale> = {
  JP: "ja",
  RU: "ru", BY: "ru", KZ: "ru", KG: "ru", UZ: "ru", TJ: "ru", TM: "ru", MD: "ru",
  AM: "hy",
  MY: "ms", BN: "ms",
  VN: "vi",
  TH: "th",
  IN: "hi",
  ID: "id",
  SA: "ar", AE: "ar", QA: "ar", KW: "ar", BH: "ar", OM: "ar", YE: "ar", IQ: "ar",
  JO: "ar", LB: "ar", SY: "ar", PS: "ar", EG: "ar", LY: "ar", TN: "ar", DZ: "ar",
  MA: "ar", SD: "ar", MR: "ar",
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Japanese lives at the root; every other language under /{locale}. */
export function localePath(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  if (locale === defaultLocale) return clean || "/";
  return `/${locale}${clean}`;
}

export function localeUrl(locale: Locale, path: string): string {
  const p = localePath(locale, path);
  return p === "/" ? SITE_URL : `${SITE_URL}${p}`;
}

/** Strips a leading locale segment: "/en/products" → "/products". */
export function stripLocale(pathname: string): string {
  const seg = pathname.split("/")[1];
  if (isLocale(seg)) {
    const rest = pathname.slice(seg.length + 1);
    return rest || "/";
  }
  return pathname || "/";
}

/** canonical + hreflang alternates for a page path. */
export function alternatesFor(locale: Locale, path: string) {
  const availableIn = japaneseOnlyPaths.includes(path) ? [defaultLocale] : locales;
  const languages: Record<string, string> = {};
  for (const l of availableIn) languages[l] = localeUrl(l, path);
  languages["x-default"] = localeUrl(defaultLocale, path);
  return { canonical: localeUrl(locale, path), languages };
}
