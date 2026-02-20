import Link from "next/link";
import { company } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StrengthsSection() {
  return (
    <section className="bg-forest text-cream relative overflow-hidden py-20 px-4 md:py-32 md:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(201,160,82,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_10%,rgba(74,124,94,0.12)_0%,transparent_50%)]" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
        <div>
          <SectionHeading
            tag="ABOUT US"
            title="日本から世界へ、<br>高品質原材料を"
            titleColor="text-cream"
          />
          <p className="text-sm md:text-[0.9rem] leading-relaxed md:leading-[2.4] text-cream/70 mb-8 md:mb-12">
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
              className="flex gap-4 md:gap-8 py-6 md:py-10 border-t border-cream/[0.08] items-start"
            >
              <span className="font-serif text-3xl md:text-4xl font-light text-gold/70 min-w-[2.5rem] md:min-w-[3rem] leading-none">
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
      </div>
    </section>
  );
}
