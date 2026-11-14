import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageSchema } from "@/components/seo/PageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { alternatesFor, localePath, localeUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const dict = getDictionary(locale);
  const t = dict.companyPage;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternatesFor(locale, "/company"),
    openGraph: {
      title: `${t.title} | ${dict.meta.titleSuffix}`,
      description: t.metaDescription,
      url: localeUrl(locale, "/company"),
    },
  };
}

export default async function CompanyPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const dict = getDictionary(locale);
  const t = dict.companyPage;
  const breadcrumbItems = [{ name: dict.nav.company, href: "/company" }];

  return (
    <>
      <PageSchema
        type="AboutPage"
        name={t.metaTitle}
        description={t.metaDescription}
        path="/company"
        locale={locale}
      />
      <BreadcrumbSchema items={breadcrumbItems} locale={locale} homeLabel={dict.nav.home} />
      <FAQSchema items={t.faq} />

      <div className="pt-24 md:pt-28">
        <Breadcrumb items={breadcrumbItems} locale={locale} homeLabel={dict.nav.home} ariaLabel={dict.nav.breadcrumb} />

        {/* Company Overview */}
        <section className="py-16 md:py-24 px-4 md:px-16">
          <div className="max-w-4xl mx-auto">
            <SectionHeading tag={t.eyebrow} title={t.title} />
            <p className="text-sm md:text-base leading-relaxed md:leading-[2.4] text-text-muted max-w-3xl mt-6 md:mt-8">
              {t.intro}
            </p>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16 md:py-24 px-4 md:px-16 bg-cream relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[0.62rem] tracking-[0.4em] text-gold mb-8 md:mb-12 uppercase font-medium">
              {t.infoHeading}
            </h2>
            <div className="divide-y divide-border">
              {[
                { label: t.labels.name, value: `${dict.company.name}（${dict.company.subName}）` },
                { label: t.labels.founded, value: dict.company.founded },
                { label: t.labels.address, value: dict.company.address },
                { label: t.labels.business, value: dict.company.business },
                { label: t.labels.languages, value: dict.company.supportLanguages },
                { label: t.labels.hours, value: dict.company.businessHours },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-8 py-5 md:py-6"
                >
                  <span className="text-[0.8rem] text-gold min-w-[6rem] md:min-w-[10rem] shrink-0 pt-0.5 font-medium">
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
        <section className="bg-paper py-24 px-4 md:py-32 md:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-12 md:gap-24 relative z-10 items-start">
            <div className="md:sticky md:top-32">
              <SectionHeading tag={t.strengthsEyebrow} title={t.strengthsTitle} />
            </div>
            <div className="flex flex-col">
              {t.strengths.map((strength, idx) => (
                <div
                  key={strength.title}
                  className={`group flex gap-5 md:gap-10 py-7 md:py-10 items-start ${
                    idx !== 0 ? "border-t border-border" : ""
                  }`}
                >
                  <span className="text-2xl md:text-3xl font-semibold text-accent min-w-[2.5rem] md:min-w-[3rem] leading-none pt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-sm md:text-[0.95rem] font-medium text-forest mb-2 md:mb-3 tracking-[0.05em]">
                      {strength.title}
                    </h3>
                    <p className="text-[0.76rem] md:text-[0.8rem] leading-relaxed md:leading-[1.95] text-text-muted">
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
          <p className="eyebrow text-gold mb-6 md:mb-8">{t.ctaEyebrow}</p>
          <p className="display-serif text-[1.75rem] md:text-[2.5rem] text-forest mb-4 md:mb-5 leading-tight">
            {t.ctaTitle}
          </p>
          <p className="text-sm text-text-muted mb-8 md:mb-10 max-w-md mx-auto">
            {t.ctaLead}
          </p>
          <Link
            href={localePath(locale, "/contact")}
            className="btn-primary bg-accent hover:bg-sage text-white px-10 py-3.5 text-[0.9rem] font-medium no-underline inline-block"
          >
            {t.ctaButton}
          </Link>
        </section>
      </div>
    </>
  );
}
