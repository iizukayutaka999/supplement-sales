import Link from "next/link";
import { company } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StrengthsSection() {
  return (
    <section className="bg-forest text-cream grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center py-16 px-4 md:py-28 md:px-16">
      <div>
        <SectionHeading
          tag="ABOUT US"
          title="日本から世界へ、<br>高品質原材料を"
          titleColor="text-cream"
        />
        <p className="text-sm md:text-[0.9rem] leading-relaxed md:leading-[2.4] text-cream/70 mb-6 md:mb-10">
          株式会社サプリ販売は、サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売する専門商社です。
          自社製造体制と確かな調達ネットワークを活かし、原料の仕入れから製造販売まで一貫対応。
          お客様の製品開発をトータルでサポートします。
        </p>
        <Link
          href="/contact"
          className="btn-primary bg-gold text-ink px-8 md:px-10 py-3 md:py-4 text-[0.72rem] tracking-[0.2em] font-medium no-underline inline-block"
        >
          <span className="relative z-10">お問い合わせ</span>
        </Link>
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
              <h4 className="text-sm md:text-[0.9rem] font-medium text-cream mb-1 md:mb-2 tracking-[0.05em]">
                {strength.title}
              </h4>
              <p className="text-[0.75rem] md:text-[0.78rem] leading-relaxed md:leading-[1.9] text-cream/55">
                {strength.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
