import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { StrengthsSection } from "@/components/home/StrengthsSection";
import { GlobalSection } from "@/components/home/GlobalSection";
import { ScrollReveal } from "@/components/home/ScrollReveal";
import { PageSchema } from "@/components/seo/PageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export default function HomePage() {
  return (
    <>
      <PageSchema
        name="株式会社サプリ販売 - トップページ"
        description="コスメ・健康食品の高品質原材料を世界中から輸入・販売する専門商社。コラーゲン、プロバイオティクス、ローヤルゼリー等のB2B原材料供給。"
        path="/"
      />
      <BreadcrumbSchema items={[]} />
      <HeroSection />
      <FeaturedProducts />
      <StrengthsSection />
      <GlobalSection />
      <ScrollReveal />
    </>
  );
}
