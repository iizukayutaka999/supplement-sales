import type { Metadata } from "next";
import { productsFor } from "@/data/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageSchema } from "@/components/seo/PageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { alternatesFor, localeUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const dict = getDictionary(locale);
  const t = dict.productsPage;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternatesFor(locale, "/products"),
    openGraph: {
      title: `${dict.nav.products} | ${dict.meta.titleSuffix}`,
      description: t.metaDescription,
      url: localeUrl(locale, "/products"),
    },
  };
}

export default async function ProductsPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const dict = getDictionary(locale);
  const t = dict.productsPage;
  const products = productsFor(locale);
  const breadcrumbItems = [{ name: dict.nav.products, href: "/products" }];

  return (
    <>
      <PageSchema
        type="CollectionPage"
        name={t.metaTitle}
        description={t.metaDescription}
        path="/products"
        locale={locale}
      />
      <BreadcrumbSchema items={breadcrumbItems} locale={locale} homeLabel={dict.nav.home} />
      <ItemListSchema products={products} locale={locale} dict={dict} />
      <FAQSchema items={t.faq} />

      <div className="pt-24 md:pt-28">
        <Breadcrumb items={breadcrumbItems} locale={locale} homeLabel={dict.nav.home} ariaLabel={dict.nav.breadcrumb} />
        <section className="py-16 md:py-28 px-4 md:px-16">
          <div className="max-w-6xl mx-auto mb-16 md:mb-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-6">
              <p className="eyebrow text-gold mb-4">
                {t.eyebrow} — {products.length}
              </p>
              <h1 className="display-serif text-[2rem] md:text-[2.75rem] text-forest">
                {t.title}
              </h1>
            </div>
            <div className="md:col-span-6 md:pt-6">
              <p className="text-lg md:text-xl font-medium text-forest mb-4 leading-snug">
                {t.subtitle}
              </p>
              <p className="text-[0.85rem] md:text-[0.9rem] leading-[2.1] text-text-muted max-w-md">
                {t.lead}
              </p>
            </div>
          </div>
          <ProductGrid products={products} locale={locale} dict={dict} />
        </section>
      </div>
    </>
  );
}
