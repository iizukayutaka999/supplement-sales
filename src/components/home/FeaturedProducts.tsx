import Link from "next/link";
import { products } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-28 px-4 md:px-16 bg-warm-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 mb-8 md:mb-16 items-end">
        <SectionHeading
          tag="PRODUCTS"
          title="厳選された<br>原材料ラインナップ"
        />
        <p className="text-sm md:text-[0.9rem] leading-relaxed md:leading-[2.2] text-text-muted pt-0 md:pt-4">
          健康食品・化粧品・機能性食品の原材料を幅広く取り扱っています。
          各製品は日本の品質基準に基づき厳格に管理・輸入しています。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="product-card-line relative bg-warm-white p-6 md:p-8 overflow-hidden transition-all duration-400 hover:bg-cream no-underline block"
          >
            <span className="text-2xl md:text-3xl mb-4 md:mb-6 block">
              {product.icon}
            </span>
            <p className="text-[0.6rem] tracking-[0.3em] text-gold mb-2 md:mb-3">
              {product.category}
            </p>
            <h3 className="font-serif text-lg md:text-xl text-forest mb-2 md:mb-3 font-normal">
              {product.nameJa}
            </h3>
            <p className="text-[0.75rem] md:text-[0.78rem] leading-relaxed md:leading-[1.9] text-text-muted">
              {product.shortDescription}
            </p>
          </Link>
        ))}
        <Link
          href="/contact"
          className="product-card-line relative bg-forest p-6 md:p-8 overflow-hidden transition-all duration-400 hover:bg-moss no-underline block"
        >
          <span className="text-xl md:text-2xl mb-6 md:mb-8 block text-cream">→</span>
          <p className="text-[0.6rem] tracking-[0.3em] text-gold mb-2 md:mb-3">INQUIRY</p>
          <h3 className="font-serif text-lg md:text-xl text-cream mb-2 md:mb-3 font-normal">
            お探しの原料がある方
          </h3>
          <p className="text-[0.75rem] md:text-[0.78rem] leading-relaxed md:leading-[1.9] text-cream/60">
            取扱いのない原料もご相談ください。世界中のネットワークで調達いたします。
          </p>
        </Link>
      </div>
    </section>
  );
}
