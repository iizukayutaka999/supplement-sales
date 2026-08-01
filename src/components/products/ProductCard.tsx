import Link from "next/link";
import { Product } from "@/types/product";
import { ProductIcon } from "@/components/ui/ProductIcon";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="product-card-line group relative bg-warm-white p-8 md:p-12 overflow-hidden transition-colors duration-500 hover:bg-cream no-underline block"
    >
      <div className="text-sage/70 mb-8 md:mb-10 transition-all duration-500 group-hover:text-gold group-hover:-translate-y-0.5">
        <ProductIcon slug={product.slug} className="w-10 h-10 md:w-11 md:h-11" />
      </div>
      <p className="text-[0.58rem] tracking-[0.4em] text-gold/90 mb-3 md:mb-4 uppercase">
        {product.category}
      </p>
      <h3 className="font-serif text-xl md:text-[1.4rem] text-forest mb-1.5 md:mb-2 font-normal leading-snug">
        {product.nameJa}
      </h3>
      <p className="font-serif italic text-[0.72rem] md:text-[0.78rem] text-sage/70 mb-4 md:mb-5 tracking-wide">
        {product.nameEn}
      </p>
      <p className="text-[0.76rem] md:text-[0.8rem] leading-relaxed md:leading-[1.95] text-text-muted">
        {product.shortDescription}
      </p>
      <span className="mt-6 md:mt-8 inline-flex items-center gap-2 text-[0.68rem] tracking-[0.28em] text-forest/80 font-medium transition-all duration-500 group-hover:text-gold group-hover:gap-3">
        VIEW DETAIL
        <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
