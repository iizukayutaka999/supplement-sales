import { MetadataRoute } from "next";
import { localesFor, products } from "@/data/products";
import { alternatesFor, japaneseOnlyPaths, locales, localeUrl, defaultLocale, type Locale } from "@/i18n/config";

const LAST_MODIFIED = new Date("2026-11-16");

const pages: {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
  /** Defaults to every language (Japanese only for legal pages) */
  locales?: Locale[];
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/products", changeFrequency: "weekly", priority: 0.9 },
  ...products.map((product) => ({
    path: `/products/${product.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    locales: localesFor(product),
  })),
  { path: "/company", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/legal", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) => {
    const pageLocales =
      page.locales ?? (japaneseOnlyPaths.includes(page.path) ? [defaultLocale] : [...locales]);
    const { languages } = alternatesFor(pageLocales[0], page.path, pageLocales);
    return pageLocales.map((locale) => ({
      url: localeUrl(locale, page.path),
      lastModified: LAST_MODIFIED,
      changeFrequency: page.changeFrequency,
      priority: locale === defaultLocale ? page.priority : Math.round(page.priority * 8) / 10,
      alternates: { languages },
    }));
  });
}
