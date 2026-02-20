import type { Metadata } from "next";
import { company } from "@/data/company";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageSchema } from "@/components/seo/PageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "お問い合わせ | サプリメント原材料のご相談・サンプル・お見積もり",
  description:
    "株式会社サプリ販売へのお問い合わせ。サプリメント・健康食品・化粧品原料のご相談、サンプルのご依頼、お見積もりなど。日本語・英語・ロシア語対応。通常2営業日以内にご返答いたします。",
  alternates: {
    canonical: "https://supplement-sales.jp/contact",
  },
  openGraph: {
    title: "お問い合わせ | 株式会社サプリ販売",
    description:
      "サプリメント原料のご相談、サンプルのご依頼、お見積もりなど。日本語・英語・ロシア語対応。通常2営業日以内にご返答。",
    url: "https://supplement-sales.jp/contact",
  },
};

const breadcrumbItems = [{ name: "お問い合わせ", href: "/contact" }];

const faqItems = [
  {
    question: "サンプルの提供は可能ですか？",
    answer:
      "はい、多くの製品でサンプルのご提供が可能です。お問い合わせフォームよりご希望の製品をお知らせください。",
  },
  {
    question: "小ロットでの注文は可能ですか？",
    answer:
      "はい、小ロットからの対応が可能です。製品によって最小ロットが異なりますので、お気軽にご相談ください。",
  },
  {
    question: "対応言語は何ですか？",
    answer:
      "日本語、英語、ロシア語の3言語に対応しています。海外サプライヤーとの交渉もスムーズに対応可能です。",
  },
  {
    question: "お問い合わせからの返答にどれくらいかかりますか？",
    answer:
      "通常2営業日以内にご返答いたします。お急ぎの場合はその旨をお問い合わせ内容にご記載ください。",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageSchema
        type="ContactPage"
        name="お問い合わせ"
        description="株式会社サプリ販売へのお問い合わせ。サプリメント原料のご相談、サンプルのご依頼など。"
        path="/contact"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema items={faqItems} />

      <div className="pt-20 md:pt-24">
        <Breadcrumb items={breadcrumbItems} />

        <section className="py-12 md:py-20 px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-start max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <SectionHeading tag="CONTACT" title="お問い合わせ" />
              <p className="text-sm md:text-[0.85rem] leading-relaxed md:leading-[2.4] text-text-muted mb-6 md:mb-10">
                原料のご相談・サンプルのご依頼・お見積もりなど、お気軽にお問い合わせください。通常2営業日以内にご返答いたします。
              </p>
              <div className="flex flex-col gap-4 md:gap-5">
                {[
                  { label: "会社名", value: company.name },
                  {
                    label: "住所",
                    value: company.address.full,
                  },
                  {
                    label: "対応言語",
                    value: company.languages.join(" / "),
                  },
                  { label: "受付", value: company.businessHours },
                ].map((detail) => (
                  <div
                    key={detail.label}
                    className="flex gap-3 md:gap-4 items-start"
                  >
                    <span className="text-[0.6rem] tracking-[0.3em] text-gold min-w-[4rem] md:min-w-[5rem] pt-0.5 shrink-0">
                      {detail.label}
                    </span>
                    <span className="text-sm md:text-[0.82rem] text-forest leading-relaxed">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
