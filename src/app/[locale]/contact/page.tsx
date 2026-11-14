import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageSchema } from "@/components/seo/PageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { alternatesFor, localeUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const dict = getDictionary(locale);
  const t = dict.contactPage;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternatesFor(locale, "/contact"),
    openGraph: {
      title: `${t.title} | ${dict.meta.titleSuffix}`,
      description: t.metaDescription,
      url: localeUrl(locale, "/contact"),
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const dict = getDictionary(locale);
  const t = dict.contactPage;
  const breadcrumbItems = [{ name: dict.nav.contact, href: "/contact" }];

  return (
    <>
      <PageSchema
        type="ContactPage"
        name={t.title}
        description={t.metaDescription}
        path="/contact"
        locale={locale}
      />
      <BreadcrumbSchema items={breadcrumbItems} locale={locale} homeLabel={dict.nav.home} />
      <FAQSchema items={t.faq} />

      <div className="pt-24 md:pt-28">
        <Breadcrumb items={breadcrumbItems} locale={locale} homeLabel={dict.nav.home} ariaLabel={dict.nav.breadcrumb} />

        <section className="py-16 md:py-28 px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-12 md:gap-28 items-start max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="md:sticky md:top-32">
              <SectionHeading tag={t.eyebrow} title={t.title} />
              <p className="text-sm md:text-[0.9rem] leading-relaxed md:leading-[2.3] text-text-muted mb-8 md:mb-12 mt-6">
                {t.lead}
              </p>
              <div className="flex flex-col gap-5 md:gap-6 pt-6 md:pt-8 border-t border-border">
                {[
                  { label: t.labels.company, value: dict.company.name },
                  { label: dict.company.headOfficeLabel, value: dict.company.headOffice },
                  { label: dict.company.factoryLabel, value: dict.company.factory },
                  { label: t.labels.hours, value: dict.company.businessHours },
                ].map((detail) => (
                  <div key={detail.label} className="flex gap-4 md:gap-6 items-start">
                    <span className="text-[0.8rem] text-gold min-w-[5rem] md:min-w-[6rem] pt-0.5 shrink-0 font-medium">
                      {detail.label}
                    </span>
                    <span className="text-sm md:text-[0.85rem] text-forest leading-relaxed">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm t={t.form} locale={locale} />
          </div>
        </section>
      </div>
    </>
  );
}
