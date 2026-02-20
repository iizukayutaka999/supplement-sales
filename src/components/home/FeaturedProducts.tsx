import Link from "next/link";
import { products } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProducts() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-16 bg-warm-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 mb-10 md:mb-20 items-end">
        <SectionHeading
          tag="PRODUCTS"
          title="厳選された<br>原材料ラインナップ"
        />
        <p className="text-sm md:text-[0.9rem] leading-relaxed md:leading-[2.2] text-text-muted pt-0 md:pt-4">
          サプリメント・健康食品・化粧品の原材料を幅広く取り扱っています。
          輸入販売から自社製造まで、日本の品質基準に基づき厳格に管理しています。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="product-card-line card-lift relative bg-warm-white p-8 md:p-10 overflow-hidden transition-all duration-500 hover:bg-cream no-underline block group"
          >
            <span className="text-2xl md:text-3xl mb-5 md:mb-7 block transition-transform duration-500 group-hover:scale-110">
              {product.icon}
            </span>
            <p className="text-[0.6rem] tracking-[0.35em] text-gold mb-3 md:mb-4">
              {product.category}
            </p>
            <h3 className="font-serif text-xl md:text-[1.35rem] text-forest mb-2 md:mb-3 font-normal">
              {product.nameJa}
            </h3>
            <p className="text-[0.75rem] md:text-[0.78rem] leading-relaxed md:leading-[1.9] text-text-muted">
              {product.shortDescription}
            </p>
          </Link>
        ))}
        <Link
          href="/contact"
          className="product-card-line card-lift relative bg-forest p-8 md:p-10 overflow-hidden transition-all duration-500 hover:bg-moss no-underline block group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(201,160,82,0.08)_0%,transparent_60%)]" />
          <div className="relative z-10">
            <span className="text-xl md:text-2xl mb-7 md:mb-9 block text-cream transition-transform duration-500 group-hover:translate-x-1">→</span>
            <p className="text-[0.6rem] tracking-[0.35em] text-gold mb-3 md:mb-4">INQUIRY</p>
            <h3 className="font-serif text-xl md:text-[1.35rem] text-cream mb-2 md:mb-3 font-normal">
              お探しの原料がある方
            </h3>
            <p className="text-[0.75rem] md:text-[0.78rem] leading-relaxed md:leading-[1.9] text-cream/60">
              取扱いのない原料もご相談ください。調達から製造まで対応いたします。
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
