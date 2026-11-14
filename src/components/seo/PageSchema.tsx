import { JsonLd } from "./JsonLd";
import { SITE_URL, COMPANY_NAME } from "@/lib/constants";
import { defaultLocale, localeUrl, type Locale } from "@/i18n/config";

interface PageSchemaProps {
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ItemPage";
  name: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  speakable?: boolean;
  locale?: Locale;
}

export function PageSchema({
  type = "WebPage",
  name,
  description,
  path,
  datePublished = "2024-01-01",
  dateModified = "2026-02-20",
  speakable = true,
  locale = defaultLocale,
}: PageSchemaProps) {
  const url = localeUrl(locale, path);

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}/#webpage`,
    name,
    description,
    url,
    datePublished,
    dateModified,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY_NAME,
    },
    inLanguage: locale,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  if (speakable) {
    data.speakable = {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "main p"],
    };
  }

  return <JsonLd data={data} />;
}
