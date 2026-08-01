import Link from "next/link";
import { Product } from "@/types/product";
import { ProductIcon } from "@/components/ui/ProductIcon";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="product-card-line group relative bg-off-white p-8 md:p-12 lg:p-14 overflow-hidden transition-colors duration-500 hover:bg-paper no-underline block"
    >
      <div className="flex justify-between items-start mb-10 md:mb-14">
        {typeof index === "number" && (
          <span className="display-serif text-3xl md:text-4xl text-gold/50 leading-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <div className="text-sage/70 transition-all duration-500 group-hover:text-gold group-hover:-translate-y-1 ml-auto">
          <ProductIcon slug={product.slug} className="w-10 h-10 md:w-12 md:h-12" />
        </div>
      </div>

      <p className="eyebrow text-gold/90 mb-4 md:mb-5">{product.category}</p>

      <h3 className="display-serif text-[1.4rem] md:text-[1.7rem] text-forest mb-1.5 md:mb-2 leading-[1.15]">
        {product.nameJa}
      </h3>
      <p className="font-serif italic text-sm md:text-[0.95rem] text-sage mb-6 md:mb-8">
        {product.nameEn}
      </p>

      <p className="text-[0.8rem] md:text-[0.83rem] leading-[2] text-text-muted font-light mb-8 md:mb-10">
        {product.shortDescription}
      </p>

      {product.origins && (
        <p className="text-[0.6rem] tracking-[0.35em] text-stone uppercase mb-8 md:mb-10">
          Origin — {product.origins.join(" · ")}
        </p>
      )}

      <span className="inline-flex items-center gap-3 text-[0.66rem] tracking-[0.32em] text-forest font-medium transition-all duration-500 group-hover:text-gold group-hover:gap-5 uppercase">
        Read More
        <span className="inline-block w-6 h-px bg-current transition-all duration-500 group-hover:w-10" />
      </span>
    </Link>
  );
}
