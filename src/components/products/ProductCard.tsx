import Link from "next/link";
import { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="product-card-line relative bg-warm-white p-6 md:p-10 overflow-hidden transition-all duration-400 hover:bg-cream no-underline block border-b border-border"
    >
      <span className="text-2xl md:text-3xl mb-4 md:mb-6 block">{product.icon}</span>
      <p className="text-[0.6rem] tracking-[0.3em] text-gold mb-2 md:mb-3">
        {product.category}
      </p>
      <h3 className="font-serif text-xl md:text-2xl text-forest mb-2 md:mb-3 font-normal">
        {product.nameJa}
      </h3>
      <p className="text-xs text-text-muted mb-3 md:mb-4 tracking-wider">
        {product.nameEn}
      </p>
      <p className="text-[0.78rem] md:text-[0.85rem] leading-relaxed md:leading-[1.9] text-text-muted">
        {product.shortDescription}
      </p>
      <span className="mt-4 md:mt-6 inline-block text-[0.72rem] tracking-[0.2em] text-forest font-medium">
        詳細を見る →
      </span>
    </Link>
  );
}
