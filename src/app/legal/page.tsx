import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageSchema } from "@/components/seo/PageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "株式会社サプリ販売の特定商取引法に基づく表記。",
  alternates: {
    canonical: "https://supplement-sales.vercel.app/legal",
  },
};

const breadcrumbItems = [
  { name: "特定商取引法に基づく表記", href: "/legal" },
];

export default function LegalPage() {
  return (
    <>
      <PageSchema
        name="特定商取引法に基づく表記"
        description="株式会社サプリ販売の特定商取引法に基づく表記。"
        path="/legal"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="pt-20 md:pt-24">
        <Breadcrumb items={breadcrumbItems} />

        <section className="py-12 md:py-20 px-4 md:px-16">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              tag="LEGAL"
              title="特定商取引法に基づく表記"
            />

            <div className="mt-8 md:mt-12 space-y-4 md:space-y-6">
              {[
                { label: "販売業者 / 製造業者", value: "株式会社サプリ販売" },
                {
                  label: "所在地",
                  value: "〒370-2303 群馬県富岡市蕨1004番地1",
                },
                {
                  label: "商品の販売価格",
                  value: "各商品ページに記載（お見積もりベース）",
                },
                {
                  label: "商品代金以外の必要料金",
                  value:
                    "送料・梱包費用（別途お見積もり）、振込手数料はお客様ご負担",
                },
                {
                  label: "支払方法",
                  value: "銀行振込",
                },
                {
                  label: "支払時期",
                  value: "ご注文確認後、請求書発行。支払条件は別途ご相談。",
                },
                {
                  label: "商品の引渡時期",
                  value:
                    "在庫品：ご入金確認後7営業日以内に発送。受注生産品：別途ご案内。",
                },
                {
                  label: "返品・交換",
                  value:
                    "商品の性質上、お客様都合による返品はお受けできません。不良品・誤配送の場合は商品到着後7日以内にご連絡ください。",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row gap-1 sm:gap-4 py-3 md:py-4 border-b border-border"
                >
                  <span className="text-[0.65rem] tracking-[0.25em] text-gold min-w-[8rem] md:min-w-[12rem] shrink-0 font-medium">
                    {item.label}
                  </span>
                  <span className="text-sm md:text-[0.85rem] text-text-muted leading-relaxed">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
