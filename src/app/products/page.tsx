import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageSchema } from "@/components/seo/PageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ItemListSchema } from "@/components/seo/ItemListSchema";

export const metadata: Metadata = {
  title: "製品情報",
  description:
    "コラーゲン、プロバイオティクス、ローヤルゼリー、抹茶など高品質原材料のラインナップ。輸入販売から製造販売・OEM対応まで。",
  alternates: {
    canonical: "https://supplement-sales.vercel.app/products",
  },
  openGraph: {
    title: "製品情報 | 株式会社サプリ販売",
    description:
      "コラーゲン、プロバイオティクス、ローヤルゼリー、抹茶など高品質原材料のラインナップ。",
    url: "https://supplement-sales.vercel.app/products",
  },
};

const breadcrumbItems = [{ name: "製品情報", href: "/products" }];

export default function ProductsPage() {
  return (
    <>
      <PageSchema
        name="製品情報"
        description="コラーゲン、プロバイオティクス、ローヤルゼリー、抹茶など高品質原材料のラインナップ。"
        path="/products"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ItemListSchema products={products} />

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
              輸入販売から自社製造・OEM受託まで、日本の品質基準に基づき厳格に管理しています。
            </p>
          </div>
          <ProductGrid products={products} />
        </section>
      </div>
    </>
  );
}
