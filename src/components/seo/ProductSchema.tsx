import { JsonLd } from "./JsonLd";
import { SITE_URL, COMPANY_NAME } from "@/lib/constants";
import { Product } from "@/types/product";

export function ProductSchema({ product }: { product: Product }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.nameJa} (${product.nameEn})`,
    description: product.description,
    category: product.category,
    url: `${SITE_URL}/products/${product.slug}`,
    brand: {
      "@type": "Brand",
      name: COMPANY_NAME,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "JPY",
      price: "0",
      priceValidUntil: "2026-12-31",
      url: `${SITE_URL}/contact`,
      seller: {
        "@type": "Organization",
        name: COMPANY_NAME,
      },
    },
    manufacturer: {
      "@type": "Organization",
      name: COMPANY_NAME,
    },
  };

  return <JsonLd data={data} />;
}
