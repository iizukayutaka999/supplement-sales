import Link from "next/link";

const strengths = [
  {
    no: "01",
    titleEn: "Source & Craft",
    titleJa: "自社製造 × 原料調達",
    body: "自社工場での製造体制と、国内外サプライヤーとの直接取引。原料の仕入れから製造まで、一貫した品質管理を実現します。",
  },
  {
    no: "02",
    titleEn: "Trilingual Table",
    titleJa: "多言語対応",
    body: "日本語・英語・ロシア語で対応。海外サプライヤーとの交渉や海外原料の調達も、ネイティブレベルでスムーズに。",
  },
  {
    no: "03",
    titleEn: "Certified Quality",
    titleJa: "品質管理・認証サポート",
    body: "COA・HACCP・第三者検査を完備。各種規格・認証に対応した品質管理体制で、御社の製品を確かに支えます。",
  },
  {
    no: "04",
    titleEn: "Sample First",
    titleJa: "サンプル・小ロット対応",
    body: "量産前にサンプルでご確認いただけます。小ロットからの対応で、品質を確認しながら段階的にご発注いただけます。",
  },
];

export function StrengthsSection() {
  return (
    <section className="bg-forest text-cream relative overflow-hidden py-28 px-4 md:py-44 md:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_85%,rgba(184,147,90,0.12)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_95%_5%,rgba(90,125,104,0.18)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Editorial header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20 md:mb-32">
          <div className="md:col-span-5">
            <p className="eyebrow eyebrow-line text-gold mb-8 md:mb-10">
              <span>Our Approach</span>
            </p>
            <h2 className="display-serif text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-cream leading-[1.02]">
              Ingredients<br />
              <em className="italic text-gold-light">deserve</em><br />
              a partner.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-8">
            <p className="font-serif italic text-lg md:text-2xl text-gold-light/85 mb-6 md:mb-8 leading-tight">
              原料には、ふさわしいパートナーがいる。
            </p>
            <p className="text-[0.85rem] md:text-[0.9rem] leading-[2.1] text-cream/60 font-light max-w-md mb-10 md:mb-14">
              私たちが提供するのは、単なる原料ではありません。
              調達・品質・供給までを一貫して支える、
              製品開発の伴走者としての機能です。
            </p>
            <Link
              href="/contact"
              className="btn-primary bg-gold text-ink px-12 md:px-14 py-4 text-[0.68rem] tracking-[0.32em] font-medium no-underline inline-block uppercase"
            >
              <span className="relative z-10">Begin the Conversation</span>
            </Link>
          </div>
        </div>

        {/* Strengths grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {strengths.map((s, idx) => (
            <div
              key={s.no}
              className={`group flex flex-col md:flex-row gap-6 md:gap-10 py-10 md:py-14 px-2 md:px-4 border-t border-cream/[0.08] ${
                idx === 1 || idx === 3 ? "md:border-l md:pl-14 lg:pl-20" : ""
              }`}
            >
              <div className="flex md:flex-col items-baseline md:items-start gap-4 md:gap-3 md:min-w-[6rem]">
                <span className="display-serif text-4xl md:text-[3rem] text-gold/70 leading-none transition-colors duration-500 group-hover:text-gold-light">
                  {s.no}
                </span>
                <span className="eyebrow text-cream/40">{s.titleEn}</span>
              </div>
              <div className="flex-1">
                <h3 className="display-serif text-[1.5rem] md:text-[1.9rem] text-cream mb-4 md:mb-5 leading-[1.15]">
                  {s.titleJa}
                </h3>
                <p className="text-[0.82rem] md:text-[0.85rem] leading-[2] text-cream/60 font-light max-w-lg">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
