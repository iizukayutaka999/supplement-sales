import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageSchema } from "@/components/seo/PageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "会社概要 | サプリメント原材料の輸入販売・製造販売の専門商社",
  description:
    "株式会社サプリ販売の会社概要。サプリメント・健康食品・化粧品原材料の輸入販売および製造販売を行う専門商社。自社製造体制、多言語対応（日本語・英語・ロシア語）、品質管理体制を備えています。",
  alternates: {
    canonical: "https://supplement-sales.jp/company",
  },
  openGraph: {
    title: "会社概要 | 株式会社サプリ販売",
    description:
      "サプリメント・健康食品・化粧品原材料の輸入販売・製造販売の専門商社。自社製造体制と多言語対応で、お客様の原料調達をトータルサポート。",
    url: "https://supplement-sales.jp/company",
  },
};

const breadcrumbItems = [{ name: "会社概要", href: "/company" }];

const companyFaqItems = [
  {
    question: "株式会社サプリ販売はいつ設立されましたか？",
    answer: "2024年に設立されました。群馬県富岡市に本社を構えています。",
  },
  {
    question: "自社製造は可能ですか？",
    answer:
      "はい、自社工場での製造体制を備えており、原料の調達から製造まで一貫した品質管理を実現しています。",
  },
  {
    question: "品質管理体制はどうなっていますか？",
    answer:
      "COA（分析証明書）、HACCP等の証明書類を完備しており、各種規格・認証に対応した品質管理体制を整えています。",
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageSchema
        type="AboutPage"
        name="会社概要 - 株式会社サプリ販売"
        description="株式会社サプリ販売の会社概要。サプリメント・健康食品・化粧品原材料の輸入販売・製造販売の専門商社。自社製造体制、多言語対応、品質管理体制を備えた原材料供給パートナー。"
        path="/company"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema items={companyFaqItems} />

      <div className="pt-20 md:pt-24">
        <Breadcrumb items={breadcrumbItems} />

        {/* Company Overview */}
        <section className="py-12 md:py-20 px-4 md:px-16">
          <div className="max-w-4xl">
            <SectionHeading tag="ABOUT US" title="会社概要" />
            <p className="text-sm md:text-base leading-relaxed md:leading-[2.4] text-text-muted max-w-3xl mt-4 md:mt-6">
              株式会社サプリ販売は、サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売する専門商社です。
              自社製造体制と確かな調達ネットワークを活かし、原料の仕入れから製造販売まで一貫対応。
              お客様の製品開発をトータルでサポートします。
            </p>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-12 md:py-16 px-4 md:px-16 bg-cream">
          <div className="max-w-4xl">
            <h2 className="text-[0.65rem] tracking-[0.3em] text-gold mb-6 md:mb-10">
              COMPANY INFORMATION
            </h2>
            <div className="space-y-4 md:space-y-6">
              {[
                { label: "会社名", value: `${company.name}（${company.nameEn}）` },
                { label: "設立", value: `${company.foundedYear}年` },
                { label: "所在地", value: company.address.full },
                {
                  label: "事業内容",
                  value: "サプリメント・健康食品・化粧品原材料の輸入販売および製造販売",
                },
                { label: "対応言語", value: company.languages.join(" / ") },
                { label: "営業時間", value: company.businessHours },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row gap-1 sm:gap-4 py-3 md:py-4 border-b border-border"
                >
                  <span className="text-[0.65rem] tracking-[0.25em] text-gold min-w-[6rem] md:min-w-[8rem] shrink-0">
                    {item.label}
                  </span>
                  <span className="text-sm md:text-[0.85rem] text-forest leading-relaxed">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="bg-forest text-cream py-16 px-4 md:py-28 md:px-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
            <div>
              <SectionHeading
                tag="OUR STRENGTHS"
                title="私たちの強み"
                titleColor="text-cream"
              />
            </div>
            <div className="flex flex-col">
              {company.strengths.map((strength) => (
                <div
                  key={strength.number}
                  className="flex gap-4 md:gap-8 py-5 md:py-8 border-t border-cream/10 items-start"
                >
                  <span className="font-serif text-3xl md:text-4xl font-light text-gold/60 min-w-[2.5rem] md:min-w-[3rem] leading-none">
                    {strength.number}
                  </span>
                  <div>
                    <h3 className="text-sm md:text-[0.9rem] font-medium text-cream mb-1 md:mb-2 tracking-[0.05em]">
                      {strength.title}
                    </h3>
                    <p className="text-[0.75rem] md:text-[0.78rem] leading-relaxed md:leading-[1.9] text-cream/55">
                      {strength.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream py-16 px-4 md:py-20 md:px-16 text-center">
          <p className="font-serif text-2xl md:text-3xl text-forest mb-3 md:mb-4 font-light">
            お気軽にお問い合わせください
          </p>
          <p className="text-sm text-text-muted mb-6 md:mb-8">
            製品に関するご質問、サンプルのご依頼など承ります。
          </p>
          <Link
            href="/contact"
            className="btn-primary bg-gold text-ink px-8 md:px-10 py-3 md:py-4 text-[0.72rem] tracking-[0.2em] font-medium no-underline inline-block"
          >
            <span className="relative z-10">お問い合わせ</span>
          </Link>
        </section>
      </div>
    </>
  );
}
