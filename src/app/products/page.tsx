import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
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

      <div className="pt-20 md:pt-24">
        <Breadcrumb items={breadcrumbItems} />
        <section className="py-12 md:py-20 px-4 md:px-16">
          <div className="mb-8 md:mb-16">
            <SectionHeading
              tag="PRODUCTS"
              title="製品情報"
            />
            <p className="text-sm md:text-[0.9rem] leading-relaxed md:leading-[2.2] text-text-muted max-w-2xl mt-4">
              サプリメント・健康食品・化粧品の原材料を幅広く取り扱っています。
              輸入販売から自社製造まで、日本の品質基準に基づき厳格に管理しています。
            </p>
          </div>
          <ProductGrid products={products} />
        </section>
      </div>
    </>
  );
}
