import { JsonLd } from "./JsonLd";
import { defaultLocale, localeUrl, type Locale } from "@/i18n/config";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
  locale?: Locale;
  homeLabel?: string;
}

export function BreadcrumbSchema({
  items,
  locale = defaultLocale,
  homeLabel = "ホーム",
}: BreadcrumbSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeLabel,
        item: localeUrl(locale, "/"),
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: localeUrl(locale, item.href),
      })),
    ],
  };

  return <JsonLd data={data} />;
}
