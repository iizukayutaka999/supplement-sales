import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 max-w-7xl mx-auto">
      {products.map((product, idx) => (
        <ProductCard key={product.slug} product={product} index={idx} />
      ))}
    </div>
  );
}
