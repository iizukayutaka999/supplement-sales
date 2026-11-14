import Link from "next/link";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/ja";

export function FeaturedProducts({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home.featured;
  return (
    <section className="bg-white py-20 md:py-28 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow text-accent mb-3">{t.eyebrow}</p>
          <h2 className="display-serif text-[1.6rem] md:text-[2.2rem] text-forest mb-4">
            {t.title}
          </h2>
          <p className="text-[0.95rem] leading-[1.9] text-text-muted max-w-xl mx-auto">
            {t.lead}
          </p>
        </div>

        <ProductGrid products={products} locale={locale} dict={dict} />

        <div className="text-center mt-12">
          <Link
            href={localePath(locale, "/products")}
            className="inline-flex items-center gap-1.5 text-[0.9rem] font-medium text-accent no-underline hover:underline"
          >
            {t.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
