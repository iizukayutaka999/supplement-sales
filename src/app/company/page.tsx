import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageSchema } from "@/components/seo/PageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社サプリ販売の会社概要。コスメ・健康食品原材料の輸入販売。グローバル調達ネットワーク、多言語対応、書類・認証サポート。",
  alternates: {
    canonical: "https://supplement-sales.vercel.app/company",
  },
  openGraph: {
    title: "会社概要 | 株式会社サプリ販売",
    description:
      "株式会社サプリ販売の会社概要。コスメ・健康食品原材料の輸入販売専門商社。",
    url: "https://supplement-sales.vercel.app/company",
  },
};

const breadcrumbItems = [{ name: "会社概要", href: "/company" }];

export default function CompanyPage() {
  return (
    <>
      <PageSchema
        type="AboutPage"
        name="会社概要"
        description="株式会社サプリ販売の会社概要。コスメ・健康食品原材料の輸入販売専門商社。"
        path="/company"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="pt-20 md:pt-24">
        <Breadcrumb items={breadcrumbItems} />

        {/* Company Overview */}
        <section className="py-12 md:py-20 px-4 md:px-16">
          <div className="max-w-4xl">
            <SectionHeading tag="ABOUT US" title="会社概要" />
            <p className="text-sm md:text-base leading-relaxed md:leading-[2.4] text-text-muted max-w-3xl mt-4 md:mt-6">
              株式会社サプリ販売は、コスメおよび健康食品の原材料を世界中から輸入・販売する専門商社です。
              日本の厳しい品質基準のもと、お客様の製品開発・OEMを支援いたします。
              サンプル手配から輸出入書類、各国の規制対応まで、トータルでサポートします。
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
                  value: "コスメ・健康食品原材料の輸入・販売",
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

        {/* Global Reach */}
        <section className="py-16 px-4 md:py-28 md:px-16 bg-warm-white text-center">
          <div className="max-w-[900px] mx-auto">
            <div className="flex justify-center">
              <SectionHeading
                tag="GLOBAL REACH"
                title="世界10カ国以上への<br>輸出実績"
              />
            </div>
            <p className="text-sm md:text-[0.9rem] leading-relaxed md:leading-[2.2] text-text-muted mb-8 md:mb-16">
              {company.globalReach.description}
              <br className="hidden md:block" />
              ご希望の地域への輸出相談もお気軽にどうぞ。
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              {company.globalReach.countries.map((country) => (
                <span
                  key={country.name}
                  className="px-4 md:px-6 py-2 md:py-2.5 border border-border text-[0.7rem] md:text-[0.72rem] tracking-[0.15em] text-forest bg-cream"
                >
                  {country.flag} {country.name}
                </span>
              ))}
              <span className="px-4 md:px-6 py-2 md:py-2.5 border border-border text-[0.7rem] md:text-[0.72rem] tracking-[0.15em] text-forest bg-cream">
                + その他
              </span>
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
