import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { StrengthsSection } from "@/components/home/StrengthsSection";
import { ScrollReveal } from "@/components/home/ScrollReveal";
import { PageSchema } from "@/components/seo/PageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "株式会社サプリ販売 | サプリメント原材料の輸入販売・製造販売",
  description:
    "サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売する専門商社。赤ビーツ粉末、ボスウェリアセラータ、植物性コラーゲン、アンセリン等の高品質B2B原材料を安定供給。日本語・英語・ロシア語対応。",
  alternates: {
    canonical: "https://supplement-sales.jp",
  },
  openGraph: {
    title: "株式会社サプリ販売 | サプリメント原材料の輸入販売・製造販売",
    description:
      "サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売。赤ビーツ粉末、ボスウェリアセラータ、植物性コラーゲン、アンセリン等のB2B原材料供給。",
    url: "https://supplement-sales.jp",
    type: "website",
  },
};

const homeFaqItems = [
  {
    question: "株式会社サプリ販売はどのような会社ですか？",
    answer:
      "サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売するB2B専門商社です。赤ビーツ粉末、ボスウェリアセラータ、植物性コラーゲン、アンセリン等の高品質原材料を取り扱っています。",
  },
  {
    question: "どのような原材料を取り扱っていますか？",
    answer:
      "赤ビーツ粉末（天然色素・抗酸化）、ボスウェリアセラータ（関節・抗炎症）、植物性コラーゲン（ヴィーガン対応美容原料）、アンセリン（鮭由来の高抗酸化ジペプチド）など、エビデンスに裏付けられた機能性原材料を取り扱っています。",
  },
  {
    question: "対応言語は何ですか？",
    answer:
      "日本語、英語、ロシア語の3言語に対応しています。海外サプライヤーとの交渉もスムーズに対応可能です。",
  },
  {
    question: "サンプルや小ロットの注文は可能ですか？",
    answer:
      "はい、全製品でサンプルのご提供が可能です。また、小ロットからの対応も承っております。お問い合わせフォームよりお気軽にご相談ください。",
  },
];

export default function HomePage() {
  return (
    <>
      <PageSchema
        name="株式会社サプリ販売 - サプリメント原材料の輸入販売・製造販売"
        description="サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売する専門商社。赤ビーツ粉末、ボスウェリアセラータ、植物性コラーゲン、アンセリン等のB2B原材料供給。日本語・英語・ロシア語対応。"
        path="/"
      />
      <BreadcrumbSchema items={[]} />
      <FAQSchema items={homeFaqItems} />
      <HeroSection />
      <FeaturedProducts />
      <StrengthsSection />
      <ScrollReveal />
    </>
  );
}
