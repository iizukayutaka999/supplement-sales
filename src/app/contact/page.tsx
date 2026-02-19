import type { Metadata } from "next";
import { company } from "@/data/company";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageSchema } from "@/components/seo/PageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "株式会社サプリ販売へのお問い合わせ。原料のご相談、OEM製造、サンプルのご依頼、お見積もりなど。日本語・英語・ロシア語対応。通常2営業日以内にご返答。",
  alternates: {
    canonical: "https://supplement-sales.vercel.app/contact",
  },
  openGraph: {
    title: "お問い合わせ | 株式会社サプリ販売",
    description:
      "原料のご相談、OEM製造、サンプルのご依頼など。日本語・英語・ロシア語対応。",
    url: "https://supplement-sales.vercel.app/contact",
  },
};

const breadcrumbItems = [{ name: "お問い合わせ", href: "/contact" }];

export default function ContactPage() {
  return (
    <>
      <PageSchema
        type="ContactPage"
        name="お問い合わせ"
        description="株式会社サプリ販売へのお問い合わせ。原料のご相談、OEM製造、サンプルのご依頼など。"
        path="/contact"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="pt-20 md:pt-24">
        <Breadcrumb items={breadcrumbItems} />

        <section className="py-12 md:py-20 px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-start max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <SectionHeading tag="CONTACT" title="お問い合わせ" />
              <p className="text-sm md:text-[0.85rem] leading-relaxed md:leading-[2.4] text-text-muted mb-6 md:mb-10">
                原料のご相談・OEM製造のご依頼・サンプルのご依頼・お見積もりなど、お気軽にお問い合わせください。通常2営業日以内にご返答いたします。
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
