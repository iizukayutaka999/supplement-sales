import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.nameJa}（${product.nameEn}）`,
    description: product.description,
    alternates: {
      canonical: `https://supplement-sales.vercel.app/products/${slug}`,
    },
    openGraph: {
      title: `${product.nameJa} | 株式会社サプリ販売`,
      description: product.shortDescription,
      url: `https://supplement-sales.vercel.app/products/${slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "製品情報", href: "/products" },
    { name: product.nameJa, href: `/products/${product.slug}` },
  ];

  return (
    <>
      <ProductSchema product={product} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="pt-20 md:pt-24">
        <Breadcrumb items={breadcrumbItems} />

        <article className="py-12 md:py-20 px-4 md:px-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-10 md:mb-16">
              <span className="text-4xl md:text-5xl block mb-4 md:mb-6">
                {product.icon}
              </span>
              <p className="text-[0.6rem] tracking-[0.3em] text-gold mb-3">
                {product.category}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-forest leading-tight mb-2">
                {product.nameJa}
              </h1>
              <p className="text-sm tracking-wider text-text-muted">
                {product.nameEn}
              </p>
            </div>

            {/* Description */}
            <div className="mb-10 md:mb-16 pb-10 md:pb-16 border-b border-border">
              <p className="text-sm md:text-base leading-relaxed md:leading-[2.4] text-text-muted">
                {product.description}
              </p>
            </div>

            {/* Features & Applications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-10 md:mb-16">
              <div>
                <h2 className="text-[0.65rem] tracking-[0.3em] text-gold mb-4 md:mb-6">
                  FEATURES
                </h2>
                <ul className="space-y-3 md:space-y-4">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm md:text-[0.85rem] leading-relaxed text-text-muted"
                    >
                      <span className="text-sage mt-0.5 shrink-0">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-[0.65rem] tracking-[0.3em] text-gold mb-4 md:mb-6">
                  APPLICATIONS
                </h2>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="px-4 md:px-5 py-2 border border-border text-[0.72rem] tracking-[0.1em] text-forest bg-cream"
                    >
                      {app}
                    </span>
                  ))}
                </div>

                {product.origins && (
                  <div className="mt-8 md:mt-10">
                    <h2 className="text-[0.65rem] tracking-[0.3em] text-gold mb-4 md:mb-6">
                      ORIGINS
                    </h2>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {product.origins.map((origin) => (
                        <span
                          key={origin}
                          className="px-4 md:px-5 py-2 border border-border text-[0.72rem] tracking-[0.1em] text-forest bg-warm-white"
                        >
                          {origin}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-forest p-8 md:p-12 text-center">
              <p className="font-serif text-xl md:text-2xl text-cream mb-2 md:mb-3 font-light">
                この製品についてのお問い合わせ
              </p>
              <p className="text-[0.78rem] text-cream/60 mb-6 md:mb-8">
                サンプルのご依頼・詳細情報・お見積もりなど、お気軽にご相談ください。
              </p>
              <Link
                href="/contact"
                className="btn-primary bg-gold text-ink px-8 md:px-10 py-3 md:py-4 text-[0.72rem] tracking-[0.2em] font-medium no-underline inline-block"
              >
                <span className="relative z-10">お問い合わせ</span>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
