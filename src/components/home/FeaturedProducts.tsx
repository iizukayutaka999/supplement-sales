import Link from "next/link";
import { productsFor } from "@/data/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/ja";
import { HomeSectionHeading } from "./HomeSectionHeading";

export function FeaturedProducts({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home.featured;
  return (
    <section className="bg-paper py-20 md:py-28 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <HomeSectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

        <ProductGrid products={productsFor(locale)} locale={locale} dict={dict} />

        <div className="text-center mt-10">
          <Link
            href={localePath(locale, "/products")}
            className="inline-flex items-center gap-1.5 text-[0.9rem] font-medium text-accent no-underline hover:underline"
          >
            {t.viewAll}
          </Link>
        </div>

        <div className="mt-12 bg-white rounded-2xl border border-border px-6 py-10 md:px-12 text-center">
          <p className="text-[1.05rem] md:text-[1.2rem] font-medium text-forest mb-2 text-balance [word-break:auto-phrase]">
            {t.notListedTitle}
          </p>
          <p className="text-[0.95rem] text-text-muted mb-7">{t.notListedBody}</p>
          <Link
            href={localePath(locale, "/contact")}
            className="btn-primary bg-accent hover:bg-sage text-white px-10 py-3.5 text-[0.9rem] font-medium no-underline inline-block"
          >
            {t.notListedButton}
          </Link>
        </div>
      </div>
    </section>
  );
}
