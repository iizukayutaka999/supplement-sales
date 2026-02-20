import { JsonLd } from "./JsonLd";
import { SITE_URL, COMPANY_NAME } from "@/lib/constants";
import { Product } from "@/types/product";

export function ProductSchema({ product }: { product: Product }) {
  const productUrl = `${SITE_URL}/products/${product.slug}`;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}/#product`,
    name: `${product.nameJa} (${product.nameEn})`,
    description: product.description,
    category: product.category,
    url: productUrl,
    brand: {
      "@type": "Brand",
      name: COMPANY_NAME,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "JPY",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "JPY",
        eligibleQuantity: {
          "@type": "QuantitativeValue",
          unitText: "B2Bお見積もり",
        },
      },
      url: `${SITE_URL}/contact`,
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
    },
    manufacturer: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY_NAME,
    },
    isRelatedTo: product.applications.map((app) => ({
      "@type": "Product",
      name: app,
    })),
    additionalProperty: [
      ...product.features.map((feature) => ({
        "@type": "PropertyValue",
        name: "特徴",
        value: feature,
      })),
      ...product.applications.map((app) => ({
        "@type": "PropertyValue",
        name: "用途",
        value: app,
      })),
      ...(product.origins
        ? product.origins.map((origin) => ({
            "@type": "PropertyValue",
            name: "原産地",
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
    name: `${product.nameJa} | 株式会社サプリ販売`,
    description: product.shortDescription,
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
        { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "製品情報",
          item: `${SITE_URL}/products`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: product.nameJa,
          item: productUrl,
        },
      ],
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "article p"],
    },
    inLanguage: "ja",
  };

  return (
    <>
      <JsonLd data={data} />
      <JsonLd data={itemPage} />
    </>
  );
}
