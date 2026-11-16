import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { StrengthsSection } from "@/components/home/StrengthsSection";
import { PainPointsSection } from "@/components/home/PainPointsSection";
import { OptionsSection } from "@/components/home/OptionsSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { InquirySection } from "@/components/home/InquirySection";
import { FaqSection } from "@/components/home/FaqSection";
import { ScrollReveal } from "@/components/home/ScrollReveal";
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
  const t = getDictionary(locale).home;
  return {
    title: { absolute: t.metaTitle },
    description: t.metaDescription,
    alternates: alternatesFor(locale, "/"),
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: localeUrl(locale, "/"),
      type: "website",
    },
  };
}

export default async function HomePage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageSchema
        name={dict.home.metaTitle}
        description={dict.home.metaDescription}
        path="/"
        locale={locale}
      />
      <BreadcrumbSchema items={[]} locale={locale} homeLabel={dict.nav.home} />
      <FAQSchema items={dict.home.faq} />
      <HeroSection locale={locale} t={dict.home.hero} />
      <PainPointsSection t={dict.home.pains} />
      <OptionsSection t={dict.home.options} />
      <ApproachSection t={dict.home.approach} />
      <StrengthsSection t={dict.home.strengths} />
      <FeaturedProducts locale={locale} dict={dict} />
      <WelcomeSection t={dict.home.welcome} />
      <FaqSection title={dict.faqTitle} items={dict.home.faq} />
      <InquirySection locale={locale} t={dict.home.cta} closing={dict.home.closing} />
      <ScrollReveal />
    </>
  );
}
