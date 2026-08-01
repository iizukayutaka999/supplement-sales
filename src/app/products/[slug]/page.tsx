import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ProductIcon } from "@/components/ui/ProductIcon";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

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

  const title = `${product.nameJa}（${product.nameEn}）| サプリメント原材料`;
  const description = `${product.description} 株式会社サプリ販売が輸入販売・製造販売する高品質${product.nameJa}原料。サンプル・小ロットから対応可能。`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://supplement-sales.jp/products/${slug}`,
    },
    openGraph: {
      title: `${product.nameJa} | 株式会社サプリ販売`,
      description: product.shortDescription,
      url: `https://supplement-sales.jp/products/${slug}`,
      type: "website",
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

  const productFaqItems = [
    {
      question: `${product.nameJa}とはどのような原材料ですか？`,
      answer: product.description,
    },
    {
      question: `${product.nameJa}のサンプルは入手できますか？`,
      answer: `はい、${product.nameJa}のサンプルをご提供可能です。お問い合わせフォームより「${product.nameJa}サンプル希望」とご記入の上、お気軽にご依頼ください。`,
    },
    {
      question: `${product.nameJa}はどのような製品に使用できますか？`,
      answer: `${product.nameJa}は${product.applications.join("、")}などの用途にご使用いただけます。`,
    },
  ];

  return (
    <>
      <ProductSchema product={product} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema items={productFaqItems} />

      <div className="pt-20 md:pt-24">
        <Breadcrumb items={breadcrumbItems} />

        <article className="py-16 md:py-24 px-4 md:px-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-14 md:mb-20">
              <div className="text-sage/80 mb-8 md:mb-10">
                <ProductIcon slug={product.slug} className="w-14 h-14 md:w-16 md:h-16" />
              </div>
              <p className="text-[0.6rem] tracking-[0.4em] text-gold mb-4 md:mb-5 uppercase">
                {product.category}
              </p>
              <h1 className="font-serif text-[2.25rem] md:text-[3rem] lg:text-[3.75rem] font-light text-forest leading-[1.1] mb-3 tracking-[-0.015em]">
                {product.nameJa}
              </h1>
              <p className="font-serif italic text-base md:text-lg text-sage/80 tracking-wide">
                {product.nameEn}
              </p>
            </div>

            {/* Description */}
            <div className="mb-14 md:mb-20 pb-14 md:pb-20 border-b border-border">
              <p className="text-sm md:text-base leading-relaxed md:leading-[2.4] text-text-muted">
                {product.description}
              </p>
            </div>

            {/* Features & Applications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-14 md:mb-20">
              <div>
                <h2 className="text-[0.62rem] tracking-[0.4em] text-gold mb-6 md:mb-8 uppercase">
                  Features
                </h2>
                <ul className="space-y-4 md:space-y-5">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-4 text-sm md:text-[0.85rem] leading-relaxed md:leading-[1.9] text-text-muted"
                    >
                      <span className="text-gold/70 mt-2.5 shrink-0 w-3 h-px bg-current" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-[0.62rem] tracking-[0.4em] text-gold mb-6 md:mb-8 uppercase">
                  Applications
                </h2>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="px-4 md:px-5 py-2 md:py-2.5 border border-border text-[0.7rem] tracking-[0.08em] text-forest/90 bg-cream/60 transition-all duration-300 hover:border-gold/50 hover:bg-gold/[0.05] hover:text-forest"
                    >
                      {app}
                    </span>
                  ))}
                </div>

                {product.origins && (
                  <div className="mt-10 md:mt-12">
                    <h2 className="text-[0.62rem] tracking-[0.4em] text-gold mb-6 md:mb-8 uppercase">
                      Origins
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {product.origins.map((origin) => (
                        <span
                          key={origin}
                          className="px-4 md:px-5 py-2 md:py-2.5 border border-border text-[0.7rem] tracking-[0.08em] text-forest/90 bg-warm-white transition-all duration-300 hover:border-gold/50 hover:bg-gold/[0.05]"
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
            <div className="bg-forest px-8 py-14 md:px-16 md:py-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,160,82,0.09)_0%,transparent_60%)]" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <p className="text-[0.6rem] tracking-[0.4em] text-gold mb-5 relative z-10">
                CONTACT
              </p>
              <p className="font-serif text-xl md:text-[1.75rem] text-cream mb-3 md:mb-4 font-light relative z-10 leading-snug">
                この製品についてのお問い合わせ
              </p>
              <p className="text-[0.78rem] leading-relaxed text-cream/60 mb-8 md:mb-10 relative z-10 max-w-md mx-auto">
                サンプルのご依頼・詳細情報・お見積もりなど、お気軽にご相談ください。
              </p>
              <Link
                href="/contact"
                className="btn-primary bg-gold text-ink px-10 md:px-12 py-3.5 md:py-4 text-[0.7rem] tracking-[0.25em] font-medium no-underline inline-block relative z-10"
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
