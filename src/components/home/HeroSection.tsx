import Link from "next/link";
import { company } from "@/data/company";

export function HeroSection() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      {/* Left - Dark section */}
      <div className="bg-forest flex flex-col justify-end px-6 pt-28 pb-12 md:px-16 md:pt-32 md:pb-20 relative overflow-hidden">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(201,160,82,0.15)_0%,transparent_60%)]" />

        {/* Botanical SVG */}
        <svg
          className="absolute -top-8 -right-12 w-60 md:w-[340px] opacity-[0.08]"
          viewBox="0 0 300 400"
          fill="none"
        >
          <path d="M150 400 C150 400 80 300 80 200 C80 100 150 0 150 0 C150 0 220 100 220 200 C220 300 150 400 150 400Z" fill="#f5f1ea" />
          <path d="M150 350 C100 280 60 200 80 120" stroke="#f5f1ea" strokeWidth="1.5" fill="none" />
          <path d="M150 350 C200 280 240 200 220 120" stroke="#f5f1ea" strokeWidth="1.5" fill="none" />
          <ellipse cx="100" cy="180" rx="40" ry="20" transform="rotate(-30 100 180)" fill="#f5f1ea" />
          <ellipse cx="200" cy="160" rx="35" ry="18" transform="rotate(30 200 160)" fill="#f5f1ea" />
          <ellipse cx="90" cy="250" rx="30" ry="15" transform="rotate(-15 90 250)" fill="#f5f1ea" />
          <ellipse cx="210" cy="230" rx="28" ry="14" transform="rotate(15 210 230)" fill="#f5f1ea" />
        </svg>

        <div className="relative z-10">
          <p className="hero-eyebrow flex items-center gap-4 text-[0.6rem] md:text-[0.65rem] tracking-[0.4em] text-gold mb-6 md:mb-8">
            SINCE 2024 · GUNMA, JAPAN
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[4.5rem] font-light leading-[1.15] text-cream mb-6 md:mb-8">
            美と健康を<br />
            支える<br />
            <em className="italic text-gold-light">原材料</em>の力
          </h1>
          <p className="text-sm md:text-[0.85rem] leading-relaxed md:leading-8 text-cream/65 max-w-[380px] mb-8 md:mb-14">
            世界中から厳選したコスメ・健康食品の原材料を日本品質でお届けします。
            お客様の製品開発をトータルサポートいたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
            <Link
              href="/products"
              className="btn-primary bg-gold text-ink px-8 md:px-10 py-3 md:py-4 text-[0.72rem] tracking-[0.2em] font-medium no-underline inline-block"
            >
              <span className="relative z-10">製品を見る</span>
            </Link>
            <Link
              href="/contact"
              className="text-cream/70 no-underline text-[0.72rem] tracking-[0.2em] flex items-center gap-2 hover:text-cream transition-colors"
            >
              お問い合わせ →
            </Link>
          </div>
        </div>
      </div>

      {/* Right - Light section with stats */}
      <div className="bg-cream flex flex-col justify-center px-6 py-12 md:px-16 md:py-32 relative hero-pattern">
        <div className="grid grid-rows-3 gap-0 relative">
          {company.stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-fade py-6 md:py-10 border-b border-border flex items-start gap-4 md:gap-6"
            >
              <div className="font-serif text-4xl md:text-[3.5rem] font-light text-sage leading-none min-w-[4rem] md:min-w-[5rem]">
                {stat.value}
                {stat.suffix && (
                  <sup className="text-base md:text-xl align-super">{stat.suffix}</sup>
                )}
              </div>
              <div className="text-[0.7rem] md:text-[0.75rem] tracking-[0.1em] text-text-muted leading-relaxed md:leading-[1.8] pt-1">
                <strong className="block text-forest font-medium text-sm md:text-[0.9rem] tracking-[0.05em] mb-0.5">
                  {stat.label}
                </strong>
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
