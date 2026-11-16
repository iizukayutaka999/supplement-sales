import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { localesFor, productsFor } from "@/data/products";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ProductIcon } from "@/components/ui/ProductIcon";
import { SalesLetter } from "@/components/products/SalesLetter";
import { FaqList } from "@/components/ui/FaqList";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { alternatesFor, localePath, localeUrl, locales, type Locale } from "@/i18n/config";
import { fill, getDictionary } from "@/i18n/get-dictionary";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    productsFor(locale).map((product) => ({ locale, slug: product.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: l, slug } = await params;
  const locale = l as Locale;
  const dict = getDictionary(locale);
  const text = dict.products[slug];
  const product = productsFor(locale).find((p) => p.slug === slug);
  if (!text || !product) return {};

  const vars = { name: text.name, subName: text.subName };
  const path = `/products/${slug}`;

  return {
    title: fill(dict.productDetail.metaTitle, vars),
    description: `${text.description} ${fill(dict.productDetail.metaDescriptionSuffix, vars)}`,
    alternates: alternatesFor(locale, path, localesFor(product)),
    openGraph: {
      title: `${text.name} | ${dict.meta.titleSuffix}`,
      description: text.shortDescription,
      url: localeUrl(locale, path),
      type: "website",
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale: l, slug } = await params;
  const locale = l as Locale;
  const product = productsFor(locale).find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  const dict = getDictionary(locale);
  const t = dict.productDetail;
  const text = dict.products[product.slug];
  const vars = {
    name: text.name,
    subName: text.subName,
    applications: text.applications.join(t.listSeparator),
  };

  const breadcrumbItems = [
    { name: dict.nav.products, href: "/products" },
    { name: text.name, href: `/products/${product.slug}` },
  ];

  const productFaqItems = [
    { question: fill(t.faqWhat, vars), answer: text.description },
    { question: fill(t.faqSampleQ, vars), answer: fill(t.faqSampleA, vars) },
    { question: fill(t.faqUseQ, vars), answer: fill(t.faqUseA, vars) },
  ];

  return (
    <>
      <ProductSchema product={product} locale={locale} dict={dict} />
      <BreadcrumbSchema items={breadcrumbItems} locale={locale} homeLabel={dict.nav.home} />
      <FAQSchema items={productFaqItems} />

      <div className="pt-24 md:pt-28">
        <Breadcrumb items={breadcrumbItems} locale={locale} homeLabel={dict.nav.home} ariaLabel={dict.nav.breadcrumb} />

        <article className="py-16 md:py-28 px-4 md:px-16">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24 items-start">
              <div className="md:col-span-8">
                <p className="eyebrow text-gold mb-4">{text.category}</p>
                <h1 className="display-serif text-[2rem] md:text-[2.75rem] text-forest mb-3">
                  {text.name}
                </h1>
                <p className="text-base md:text-lg text-stone">{text.subName}</p>
              </div>
              <div className="md:col-span-4 md:pt-4 flex md:justify-end">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-accent-soft text-accent flex items-center justify-center">
                  <ProductIcon slug={product.slug} className="w-14 h-14 md:w-16 md:h-16" />
                </div>
              </div>
            </div>

            {text.salesLetter && <SalesLetter letter={text.salesLetter} />}

            {/* Description */}
            <div className="mb-16 md:mb-24 pb-16 md:pb-24 border-b border-border">
              <h2 className="text-[0.95rem] font-medium text-forest mb-5">{t.descriptionHeading}</h2>
              <p className="text-[0.95rem] md:text-[1rem] leading-[2.1] text-forest/85">
                {text.description}
              </p>
            </div>

            {/* Features & Applications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-14 md:mb-20">
              <div>
                <h2 className="text-[0.95rem] font-medium text-forest mb-5">{t.featuresHeading}</h2>
                <ul className="space-y-4 md:space-y-5">
                  {text.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-4 text-sm md:text-[0.85rem] leading-relaxed md:leading-[1.9] text-text-muted"
                    >
                      <span className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-[0.95rem] font-medium text-forest mb-5">{t.applicationsHeading}</h2>
                <div className="flex flex-wrap gap-2">
                  {text.applications.map((app) => (
                    <span
                      key={app}
                      className="px-4 py-1.5 rounded-full border border-border text-[0.8rem] text-forest bg-white"
                    >
                      {app}
                    </span>
                  ))}
                </div>

                {text.origins && (
                  <div className="mt-10 md:mt-12">
                    <h2 className="text-[0.95rem] font-medium text-forest mb-5">{t.originsHeading}</h2>
                    <div className="flex flex-wrap gap-2">
                      {text.origins.map((origin) => (
                        <span
                          key={origin}
                          className="px-4 py-1.5 rounded-full border border-border text-[0.8rem] text-forest bg-white"
                        >
                          {origin}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-14 md:mb-20">
              <h2 className="text-[0.95rem] font-medium text-forest mb-5">{dict.faqTitle}</h2>
              <FaqList items={productFaqItems} />
            </div>

            {/* CTA */}
            <div className="bg-accent-soft rounded-2xl px-8 py-14 md:px-16 md:py-16 text-center">
              <p className="display-serif text-[1.4rem] md:text-[1.8rem] text-forest mb-3">
                {fill(t.ctaTitle, vars)}
              </p>
              <p className="text-[0.9rem] leading-[1.9] text-text-muted mb-8 max-w-md mx-auto">
                {t.ctaLead}
              </p>
              <Link
                href={localePath(locale, "/contact")}
                className="btn-primary bg-accent hover:bg-sage text-white px-10 py-3.5 text-[0.9rem] font-medium no-underline inline-block"
              >
                {t.ctaButton}
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
