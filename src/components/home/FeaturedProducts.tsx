import Link from "next/link";
import { products } from "@/data/products";
import { ProductIcon } from "@/components/ui/ProductIcon";

export function FeaturedProducts() {
  return (
    <section className="bg-off-white py-28 md:py-44 px-4 md:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Editorial header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20 md:mb-32">
          <div className="md:col-span-5">
            <p className="eyebrow eyebrow-line text-gold mb-8 md:mb-10">
              <span>Ingredients — N°01 — 08</span>
            </p>
            <h2 className="display-serif text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-forest leading-[1.02]">
              A curated<br />
              <em className="italic text-sage">library</em><br />
              of ingredients.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-8">
            <p className="font-serif italic text-lg md:text-2xl text-forest mb-6 md:mb-8 leading-tight">
              厳選された原材料を、
              <br />
              製品開発の入口へ。
            </p>
            <p className="text-[0.85rem] md:text-[0.9rem] leading-[2.1] text-text-muted font-light max-w-md">
              自社製造体制と国内外の調達ネットワークから、
              サプリメント・健康食品・化粧品のための原材料を厳選。
              サンプル・小ロットからのご対応も承ります。
            </p>
          </div>
        </div>

        {/* Editorial product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40">
          {products.map((product, idx) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="product-card-line group relative bg-off-white p-8 md:p-12 lg:p-14 overflow-hidden transition-colors duration-500 hover:bg-paper no-underline block"
            >
              {/* Number */}
              <div className="flex justify-between items-start mb-10 md:mb-14">
                <span className="display-serif text-3xl md:text-4xl text-gold/50 leading-none">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="text-sage/70 transition-all duration-500 group-hover:text-gold group-hover:-translate-y-1">
                  <ProductIcon slug={product.slug} className="w-10 h-10 md:w-12 md:h-12" />
                </div>
              </div>

              {/* Category */}
              <p className="eyebrow text-gold/90 mb-4 md:mb-5">
                {product.category}
              </p>

              {/* Names */}
              <h3 className="display-serif text-[1.5rem] md:text-[1.75rem] text-forest mb-1.5 md:mb-2 leading-[1.15]">
                {product.nameJa}
              </h3>
              <p className="font-serif italic text-sm md:text-[0.95rem] text-sage mb-6 md:mb-8">
                {product.nameEn}
              </p>

              {/* Description */}
              <p className="text-[0.8rem] md:text-[0.83rem] leading-[2] text-text-muted font-light mb-8 md:mb-10">
                {product.shortDescription}
              </p>

              {/* Origins line */}
              {product.origins && (
                <p className="text-[0.6rem] tracking-[0.35em] text-stone uppercase mb-8 md:mb-10">
                  Origin — {product.origins.join(" · ")}
                </p>
              )}

              {/* Read more */}
              <span className="inline-flex items-center gap-3 text-[0.66rem] tracking-[0.32em] text-forest font-medium transition-all duration-500 group-hover:text-gold group-hover:gap-5 uppercase">
                Read More
                <span className="inline-block w-6 h-px bg-current transition-all duration-500 group-hover:w-10" />
              </span>
            </Link>
          ))}

          {/* Custom sourcing CTA card */}
          <Link
            href="/contact"
            className="group relative bg-forest p-8 md:p-12 lg:p-14 overflow-hidden transition-colors duration-500 hover:bg-moss no-underline block flex flex-col justify-between min-h-[400px]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(184,147,90,0.14)_0%,transparent_60%)]" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-10 md:mb-14">
                <span className="display-serif text-3xl md:text-4xl text-gold/70 leading-none">
                  ∞
                </span>
                <div className="text-gold transition-transform duration-500 group-hover:translate-x-1">
                  <svg
                    viewBox="0 0 40 40"
                    className="w-10 h-10 md:w-12 md:h-12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  >
                    <path d="M6 20h28M20 6l14 14-14 14" />
                  </svg>
                </div>
              </div>
              <p className="eyebrow text-gold-light mb-4 md:mb-5">
                Custom Sourcing
              </p>
              <h3 className="display-serif text-[1.5rem] md:text-[1.75rem] text-cream mb-1.5 md:mb-2 leading-[1.15]">
                お探しの原料も、ご相談を。
              </h3>
              <p className="font-serif italic text-sm md:text-[0.95rem] text-gold-light/80 mb-6 md:mb-8">
                Beyond our catalogue.
              </p>
              <p className="text-[0.8rem] md:text-[0.83rem] leading-[2] text-cream/60 font-light">
                取扱いのない原料も、私たちの調達ネットワークと自社製造で対応いたします。
                原料の探索から、製造・供給までを一貫して。
              </p>
            </div>
            <span className="relative z-10 mt-10 inline-flex items-center gap-3 text-[0.66rem] tracking-[0.32em] text-gold-light font-medium transition-all duration-500 group-hover:gap-5 uppercase">
              Start a Conversation
              <span className="inline-block w-6 h-px bg-current transition-all duration-500 group-hover:w-10" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
