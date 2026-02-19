import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { StrengthsSection } from "@/components/home/StrengthsSection";
import { ScrollReveal } from "@/components/home/ScrollReveal";
import { PageSchema } from "@/components/seo/PageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export default function HomePage() {
  return (
    <>
      <PageSchema
        name="株式会社サプリ販売 - トップページ"
        description="サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売する専門商社。コラーゲン、プロバイオティクス、ローヤルゼリー等のB2B原材料供給。"
        path="/"
      />
      <BreadcrumbSchema items={[]} />
      <HeroSection />
      <FeaturedProducts />
      <StrengthsSection />
      <ScrollReveal />
    </>
  );
}
