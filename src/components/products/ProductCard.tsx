import Link from "next/link";
import { Product } from "@/types/product";
import { ProductIcon } from "@/components/ui/ProductIcon";
import { localePath, type Locale } from "@/i18n/config";
import type { ProductText } from "@/i18n/dictionaries/ja";

interface ProductCardProps {
  product: Product;
  text: ProductText;
  locale: Locale;
  readMore: string;
}

export function ProductCard({ product, text, locale, readMore }: ProductCardProps) {
  return (
    <Link
      href={localePath(locale, `/products/${product.slug}`)}
      className="group flex flex-col bg-white rounded-2xl border border-border p-7 md:p-8 no-underline transition-all duration-200 hover:border-accent hover:shadow-elevated"
    >
      <div className="w-14 h-14 rounded-xl bg-accent-soft text-accent flex items-center justify-center mb-6">
        <ProductIcon slug={product.slug} className="w-8 h-8" />
      </div>

      <p className="text-[0.75rem] font-medium text-accent mb-2">{text.category}</p>

      <h3 className="text-[1.15rem] md:text-[1.25rem] font-medium text-forest leading-[1.4] mb-1">
        {text.name}
      </h3>
      <p className="text-[0.8rem] text-stone mb-4">{text.subName}</p>

      <p className="text-[0.88rem] leading-[1.85] text-text-muted mb-6 flex-1">
        {text.shortDescription}
      </p>

      <span className="inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-accent">
        {readMore}
        <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">→</span>
      </span>
    </Link>
  );
}
