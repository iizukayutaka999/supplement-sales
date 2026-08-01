import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageSchema } from "@/components/seo/PageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

const productNames = products.map((p) => p.nameJa).join("、");

export const metadata: Metadata = {
  title: "製品情報 | サプリメント・健康食品・化粧品原材料ラインナップ",
  description: `${productNames}など高品質サプリメント原材料の一覧。輸入販売から自社製造販売まで対応。サンプル・小ロットからご相談可能。`,
  alternates: {
    canonical: "https://supplement-sales.jp/products",
  },
  openGraph: {
    title: "製品情報 | 株式会社サプリ販売",
    description: `${productNames}など高品質サプリメント原材料のラインナップ。輸入販売から自社製造まで対応。`,
    url: "https://supplement-sales.jp/products",
  },
};

const breadcrumbItems = [{ name: "製品情報", href: "/products" }];

const productsFaqItems = [
  {
    question: "どのような原材料を取り扱っていますか？",
    answer: `現在、${productNames}の${products.length}製品を取り扱っています。サプリメント・健康食品・化粧品向けの高品質B2B原材料を専門に輸入販売・製造販売しています。`,
  },
  {
    question: "サンプルの提供は可能ですか？",
    answer:
      "はい、全製品でサンプルのご提供が可能です。お問い合わせフォームより製品名をご指定の上、お気軽にご依頼ください。",
  },
  {
    question: "小ロットでの注文は可能ですか？",
    answer:
      "はい、小ロットからの対応が可能です。製品によって最小ロットが異なりますので、詳細はお問い合わせください。",
  },
  {
    question: "品質証明書（COA）は提供されますか？",
    answer:
      "はい、全製品でロットごとの品質検査証明書（COA）を完備しています。HACCP等の各種認証にも対応しています。",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageSchema
        type="CollectionPage"
        name="製品情報 - サプリメント原材料一覧"
        description={`株式会社サプリ販売が取り扱うサプリメント・健康食品・化粧品原材料の製品一覧。${productNames}。`}
        path="/products"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ItemListSchema products={products} />
      <FAQSchema items={productsFaqItems} />

      <div className="pt-24 md:pt-28">
        <Breadcrumb items={breadcrumbItems} />
        <section className="py-16 md:py-28 px-4 md:px-16">
          <div className="max-w-7xl mx-auto mb-16 md:mb-28 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-6">
              <p className="eyebrow eyebrow-line text-gold mb-8 md:mb-10">
                <span>Products — {products.length} Ingredients</span>
              </p>
              <h1 className="display-serif text-[2.75rem] md:text-[4rem] lg:text-[5.5rem] text-forest">
                A curated<br />
                <em className="italic text-sage">library.</em>
              </h1>
            </div>
            <div className="md:col-span-5 md:col-start-8 md:pt-6">
              <p className="font-serif italic text-lg md:text-2xl text-forest mb-6 md:mb-8 leading-tight">
                厳選された、原材料のライブラリ。
              </p>
              <p className="text-[0.85rem] md:text-[0.9rem] leading-[2.1] text-text-muted font-light max-w-md">
                サプリメント・健康食品・化粧品の原材料を幅広く取り扱っています。
                輸入販売から自社製造まで、日本の品質基準に基づき厳格に管理しています。
              </p>
            </div>
          </div>
          <ProductGrid products={products} />
        </section>
      </div>
    </>
  );
}
