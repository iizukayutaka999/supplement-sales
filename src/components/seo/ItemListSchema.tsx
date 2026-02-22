import { JsonLd } from "./JsonLd";
import { SITE_URL } from "@/lib/constants";
import { Product } from "@/types/product";

export function ItemListSchema({ products }: { products: Product[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "サプリメント原材料一覧",
    description:
      "株式会社サプリ販売が取り扱うサプリメント・健康食品・化粧品原材料の製品一覧",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${product.nameJa} (${product.nameEn})`,
      url: `${SITE_URL}/products/${product.slug}`,
    })),
  };

  return <JsonLd data={data} />;
}
