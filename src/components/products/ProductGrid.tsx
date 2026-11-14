import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/ja";

interface ProductGridProps {
  products: Product[];
  locale: Locale;
  dict: Dictionary;
}

export function ProductGrid({ products, locale, dict }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
      {products.map((product) => (
        <ProductCard
          key={product.slug}
          product={product}
          text={dict.products[product.slug]}
          locale={locale}
          readMore={dict.productCard.readMore}
        />
      ))}
    </div>
  );
}
