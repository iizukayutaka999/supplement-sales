import { JsonLd } from "./JsonLd";
import { SITE_URL, COMPANY_NAME } from "@/lib/constants";
import { Product } from "@/types/product";
import { localeUrl, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/ja";

interface ProductSchemaProps {
  product: Product;
  locale: Locale;
  dict: Dictionary;
}

export function ProductSchema({ product, locale, dict }: ProductSchemaProps) {
  const text = dict.products[product.slug];
  const t = dict.productDetail;
  const productUrl = localeUrl(locale, `/products/${product.slug}`);

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}/#product`,
    name: `${text.name} (${text.subName})`,
    description: text.description,
    category: text.category,
    url: productUrl,
    brand: {
      "@type": "Brand",
      name: COMPANY_NAME,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "JPY",
      price: "0",
      priceValidUntil: "2027-12-31",
      url: localeUrl(locale, "/contact"),
      seller: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: COMPANY_NAME,
      },
      businessFunction: "http://purl.org/goodrelations/v1#Sell",
      eligibleRegion: {
        "@type": "Country",
        name: "JP",
      },
      description: dict.productDetail.ctaLead,
    },
    manufacturer: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY_NAME,
    },
    isRelatedTo: text.applications.map((app) => ({
      "@type": "Product",
      name: app,
    })),
    additionalProperty: [
      ...text.features.map((feature) => ({
        "@type": "PropertyValue",
        name: t.featuresHeading,
        value: feature,
      })),
      ...text.applications.map((app) => ({
        "@type": "PropertyValue",
        name: t.applicationsHeading,
        value: app,
      })),
      ...(text.origins
        ? text.origins.map((origin) => ({
            "@type": "PropertyValue",
            name: t.originsHeading,
            value: origin,
          }))
        : []),
    ],
  };

  // ItemPage wrapper
  const itemPage = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "@id": `${productUrl}/#itempage`,
    url: productUrl,
    name: `${text.name} | ${dict.meta.titleSuffix}`,
    description: text.shortDescription,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
    },
    mainEntity: {
      "@id": `${productUrl}/#product`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: dict.nav.home, item: localeUrl(locale, "/") },
        {
          "@type": "ListItem",
          position: 2,
          name: dict.nav.products,
          item: localeUrl(locale, "/products"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: text.name,
          item: productUrl,
        },
      ],
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "article p"],
    },
    inLanguage: locale,
  };

  return (
    <>
      <JsonLd data={data} />
      <JsonLd data={itemPage} />
    </>
  );
}
