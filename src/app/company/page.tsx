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
        <section className="py-16 md:py-24 px-4 md:px-16">
          <div className="max-w-4xl mx-auto">
            <SectionHeading tag="About Us" title="会社概要" />
            <p className="text-sm md:text-base leading-relaxed md:leading-[2.4] text-text-muted max-w-3xl mt-6 md:mt-8 font-light">
              株式会社サプリ販売は、サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売する専門商社です。
              自社製造体制と確かな調達ネットワークを活かし、原料の仕入れから製造販売まで一貫対応。
              お客様の製品開発をトータルでサポートします。
            </p>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16 md:py-24 px-4 md:px-16 bg-cream relative">
          <div className="absolute top-0 left-4 right-4 md:left-16 md:right-16 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[0.62rem] tracking-[0.4em] text-gold mb-8 md:mb-12 uppercase font-medium">
              Company Information
            </h2>
            <div className="divide-y divide-border">
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
                  className="flex flex-col sm:flex-row gap-2 sm:gap-8 py-5 md:py-6 transition-colors duration-400 hover:bg-gold/[0.02]"
                >
                  <span className="text-[0.62rem] tracking-[0.32em] text-gold/90 min-w-[6rem] md:min-w-[10rem] shrink-0 pt-0.5 uppercase font-medium">
                    {item.label}
                  </span>
                  <span className="text-sm md:text-[0.88rem] text-forest leading-relaxed">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="bg-forest text-cream py-24 px-4 md:py-36 md:px-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_85%,rgba(201,160,82,0.1)_0%,transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_95%_5%,rgba(74,124,94,0.15)_0%,transparent_50%)]" />
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-12 md:gap-24 relative z-10 items-start">
            <div className="md:sticky md:top-32">
              <SectionHeading
                tag="Our Strengths"
                title="私たちの強み"
                titleColor="text-cream"
              />
            </div>
            <div className="flex flex-col">
              {company.strengths.map((strength, idx) => (
                <div
                  key={strength.number}
                  className={`group flex gap-5 md:gap-10 py-7 md:py-10 items-start ${
                    idx !== 0 ? "border-t border-cream/[0.08]" : ""
                  }`}
                >
                  <span className="font-serif text-3xl md:text-[2.5rem] font-light text-gold/70 min-w-[2.5rem] md:min-w-[3rem] leading-none pt-1 transition-colors duration-500 group-hover:text-gold-light">
                    {strength.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-sm md:text-[0.95rem] font-medium text-cream mb-2 md:mb-3 tracking-[0.05em]">
                      {strength.title}
                    </h3>
                    <p className="text-[0.76rem] md:text-[0.8rem] leading-relaxed md:leading-[1.95] text-cream/55 font-light">
                      {strength.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream py-24 px-4 md:py-32 md:px-16 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="text-[0.6rem] tracking-[0.45em] text-gold mb-6 md:mb-8 uppercase font-medium">
            Contact
          </p>
          <p className="font-serif text-[1.75rem] md:text-[2.5rem] text-forest mb-4 md:mb-5 font-light tracking-[-0.015em] leading-tight">
            お気軽にお問い合わせください
          </p>
          <p className="text-sm text-text-muted mb-8 md:mb-10 max-w-md mx-auto">
            製品に関するご質問、サンプルのご依頼など承ります。
          </p>
          <Link
            href="/contact"
            className="btn-primary bg-gold text-ink px-10 md:px-12 py-3.5 md:py-4 text-[0.7rem] tracking-[0.25em] font-medium no-underline inline-block uppercase"
          >
            <span className="relative z-10">お問い合わせ</span>
          </Link>
        </section>
      </div>
    </>
  );
}
