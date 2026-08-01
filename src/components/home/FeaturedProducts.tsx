import Link from "next/link";
import { products } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductIcon } from "@/components/ui/ProductIcon";

export function FeaturedProducts() {
  return (
    <section className="py-24 md:py-36 px-4 md:px-16 bg-warm-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mb-14 md:mb-24 items-end max-w-7xl mx-auto">
        <SectionHeading
          tag="PRODUCTS"
          title="厳選された<br>原材料ラインナップ"
        />
        <p className="text-sm md:text-[0.9rem] leading-relaxed md:leading-[2.3] text-text-muted pt-0 md:pt-6 max-w-md">
          サプリメント・健康食品・化粧品の原材料を幅広く取り扱っています。
          輸入販売から自社製造まで、日本の品質基準に基づき厳格に管理しています。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/70 max-w-7xl mx-auto">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group relative bg-warm-white p-8 md:p-10 overflow-hidden transition-colors duration-500 hover:bg-cream no-underline block"
          >
            <div className="text-sage/70 mb-7 md:mb-9 transition-all duration-500 group-hover:text-gold group-hover:-translate-y-0.5">
              <ProductIcon slug={product.slug} className="w-9 h-9 md:w-10 md:h-10" />
            </div>
            <p className="text-[0.58rem] tracking-[0.4em] text-gold/90 mb-3 md:mb-4 uppercase">
              {product.category}
            </p>
            <h3 className="font-serif text-lg md:text-[1.3rem] text-forest mb-1.5 md:mb-2 font-normal leading-snug">
              {product.nameJa}
            </h3>
            <p className="font-serif italic text-[0.7rem] md:text-[0.75rem] text-sage/60 mb-4 md:mb-5">
              {product.nameEn}
            </p>
            <p className="text-[0.74rem] md:text-[0.78rem] leading-relaxed md:leading-[1.9] text-text-muted">
              {product.shortDescription}
            </p>
            <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold to-gold-light transition-all duration-500 group-hover:w-full" />
          </Link>
        ))}
        <Link
          href="/contact"
          className="group relative bg-forest p-8 md:p-10 overflow-hidden transition-colors duration-500 hover:bg-moss no-underline block"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(201,160,82,0.1)_0%,transparent_60%)]" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-gold mb-7 md:mb-9 transition-transform duration-500 group-hover:translate-x-1">
              <svg viewBox="0 0 40 40" className="w-9 h-9 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
                <path d="M8 20h24M22 10l10 10-10 10" />
              </svg>
            </div>
            <p className="text-[0.58rem] tracking-[0.4em] text-gold/90 mb-3 md:mb-4">INQUIRY</p>
            <h3 className="font-serif text-lg md:text-[1.3rem] text-cream mb-1.5 md:mb-2 font-normal leading-snug">
              お探しの原料がある方へ
            </h3>
            <p className="font-serif italic text-[0.7rem] md:text-[0.75rem] text-gold-light/70 mb-4 md:mb-5">
              Custom Sourcing
            </p>
            <p className="text-[0.74rem] md:text-[0.78rem] leading-relaxed md:leading-[1.9] text-cream/60">
              取扱いのない原料もご相談ください。調達から製造まで対応いたします。
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
