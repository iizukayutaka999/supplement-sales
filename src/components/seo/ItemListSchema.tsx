import { JsonLd } from "./JsonLd";
import { SITE_URL } from "@/lib/constants";
import { Product } from "@/types/product";

export function ItemListSchema({ products }: { products: Product[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${product.nameJa} (${product.nameEn})`,
      url: `${SITE_URL}/products/${product.slug}`,
    })),
  };

  return <JsonLd data={data} />;
}
