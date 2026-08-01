import Link from "next/link";
import { company } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StrengthsSection() {
  return (
    <section className="bg-forest text-cream relative overflow-hidden py-24 px-4 md:py-36 md:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_85%,rgba(201,160,82,0.1)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_95%_5%,rgba(74,124,94,0.15)_0%,transparent_50%)]" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-12 md:gap-24 items-start max-w-7xl mx-auto">
        <div className="md:sticky md:top-32">
          <SectionHeading
            tag="About Us"
            title="日本から世界へ、<br>高品質原材料を"
            titleColor="text-cream"
          />
          <p className="text-sm md:text-[0.92rem] leading-relaxed md:leading-[2.3] text-cream/65 mb-10 md:mb-14 font-light">
            株式会社サプリ販売は、サプリメント・健康食品・化粧品の原材料を
            輸入販売・製造販売する専門商社です。
            自社製造体制と確かな調達ネットワークを活かし、
            原料の仕入れから製造販売まで一貫対応いたします。
          </p>
          <Link
            href="/contact"
            className="btn-primary bg-gold text-ink px-10 md:px-12 py-3.5 md:py-4 text-[0.7rem] tracking-[0.25em] font-medium no-underline inline-block uppercase"
          >
            <span className="relative z-10">お問い合わせ</span>
          </Link>
        </div>

        <div className="flex flex-col">
          {company.strengths.map((strength, idx) => (
            <div
              key={strength.number}
              className={`group flex gap-5 md:gap-10 py-7 md:py-10 items-start transition-colors duration-500 ${
                idx !== 0 ? "border-t border-cream/[0.08]" : ""
              }`}
            >
              <span className="font-serif text-3xl md:text-[2.5rem] font-light text-gold/70 min-w-[2.5rem] md:min-w-[3rem] leading-none pt-1 transition-colors duration-500 group-hover:text-gold-light">
                {strength.number}
              </span>
              <div className="flex-1">
                <h4 className="text-sm md:text-[0.95rem] font-medium text-cream mb-2 md:mb-3 tracking-[0.05em]">
                  {strength.title}
                </h4>
                <p className="text-[0.76rem] md:text-[0.8rem] leading-relaxed md:leading-[1.95] text-cream/55 font-light">
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
