import { JsonLd } from "./JsonLd";
import { Product } from "@/types/product";
import { localeUrl, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/ja";

interface ItemListSchemaProps {
  products: Product[];
  locale: Locale;
  dict: Dictionary;
}

export function ItemListSchema({ products, locale, dict }: ItemListSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: dict.productsPage.listName,
    description: dict.productsPage.metaDescription,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => {
      const text = dict.products[product.slug];
      return {
        "@type": "ListItem",
        position: index + 1,
        name: `${text.name} (${text.subName})`,
        url: localeUrl(locale, `/products/${product.slug}`),
      };
    }),
  };

  return <JsonLd data={data} />;
}
