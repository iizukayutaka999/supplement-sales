import Link from "next/link";
import { company } from "@/data/company";

export function HeroSection() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-[1.15fr_1fr] relative overflow-hidden">
      {/* Left - Dark section */}
      <div className="bg-forest flex flex-col justify-end px-6 pt-32 pb-16 md:px-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_75%,rgba(201,160,82,0.14)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(74,124,94,0.18)_0%,transparent_50%)]" />

        {/* Botanical SVG — refined */}
        <svg
          className="absolute -top-4 -right-8 w-60 md:w-[380px] opacity-[0.07]"
          viewBox="0 0 300 400"
          fill="none"
        >
          <path
            d="M150 400C150 400 78 300 78 195 78 90 150 0 150 0S222 90 222 195C222 300 150 400 150 400Z"
            stroke="#f5f1ea"
            strokeWidth="1"
            fill="none"
          />
          <path d="M150 380C110 310 76 240 88 150" stroke="#f5f1ea" strokeWidth="0.8" fill="none" />
          <path d="M150 380C190 310 224 240 212 150" stroke="#f5f1ea" strokeWidth="0.8" fill="none" />
          <ellipse cx="105" cy="185" rx="36" ry="16" transform="rotate(-32 105 185)" stroke="#f5f1ea" strokeWidth="0.8" fill="none" />
          <ellipse cx="195" cy="165" rx="32" ry="15" transform="rotate(32 195 165)" stroke="#f5f1ea" strokeWidth="0.8" fill="none" />
          <ellipse cx="95" cy="255" rx="28" ry="12" transform="rotate(-15 95 255)" stroke="#f5f1ea" strokeWidth="0.8" fill="none" />
          <ellipse cx="205" cy="235" rx="26" ry="11" transform="rotate(15 205 235)" stroke="#f5f1ea" strokeWidth="0.8" fill="none" />
          <line x1="150" y1="0" x2="150" y2="380" stroke="#c9a052" strokeWidth="0.5" opacity="0.4" />
        </svg>

        <div className="relative z-10 max-w-xl">
          <p className="hero-eyebrow flex items-center gap-5 text-[0.6rem] md:text-[0.65rem] tracking-[0.5em] text-gold mb-10 md:mb-14 uppercase font-medium">
            Since 2024 · Gunma, Japan
          </p>
          <h1 className="font-serif text-[2.75rem] md:text-[3.75rem] lg:text-[5.25rem] font-light leading-[1.08] text-cream mb-10 md:mb-14 tracking-[-0.02em]">
            美と健康を<br />
            支える<br />
            <em className="italic text-gold-light [text-shadow:0_0_40px_rgba(232,201,122,0.25)] font-light">
              原材料
            </em>
            の力
          </h1>
          <p className="text-sm md:text-[0.9rem] leading-relaxed md:leading-[2.1] text-cream/70 max-w-[420px] mb-12 md:mb-16 font-light">
            サプリメント・健康食品の高品質原材料を輸入販売・製造販売。<br />
            自社製造体制で、お客様の製品開発をトータルサポートいたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-start sm:items-center">
            <Link
              href="/products"
              className="btn-primary bg-gold text-ink px-10 md:px-12 py-3.5 md:py-4 text-[0.7rem] tracking-[0.25em] font-medium no-underline inline-block uppercase"
            >
              <span className="relative z-10">製品を見る</span>
            </Link>
            <Link
              href="/contact"
              className="text-cream/65 no-underline text-[0.7rem] tracking-[0.28em] flex items-center gap-3 hover:text-gold-light transition-all duration-400 uppercase group"
            >
              お問い合わせ
              <span className="inline-block w-6 h-px bg-current transition-all duration-400 group-hover:w-10" />
            </Link>
          </div>
        </div>
      </div>

      {/* Right - Light section with stats */}
      <div className="bg-cream flex flex-col justify-center px-6 py-16 md:px-16 md:py-32 relative hero-pattern overflow-hidden">
        <div className="absolute top-0 right-0 w-56 h-56 bg-[radial-gradient(circle,rgba(201,160,82,0.08)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[radial-gradient(circle,rgba(74,124,94,0.06)_0%,transparent_70%)]" />

        <p className="text-[0.6rem] tracking-[0.5em] text-gold mb-8 md:mb-12 uppercase font-medium relative z-10">
          At a Glance
        </p>

        <div className="grid grid-rows-3 gap-0 relative">
          {company.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`stat-fade py-6 md:py-8 flex items-start gap-5 md:gap-7 ${
                idx !== company.stats.length - 1 ? "border-b border-border/60" : ""
              }`}
            >
              <div className="font-serif text-[3rem] md:text-[4.25rem] font-light text-forest leading-none min-w-[3.5rem] md:min-w-[5rem] tracking-[-0.02em]">
                {stat.value}
                {stat.suffix && (
                  <sup className="text-base md:text-xl align-super text-gold">
                    {stat.suffix}
                  </sup>
                )}
              </div>
              <div className="flex-1 pt-1.5">
                <p className="text-forest font-medium text-sm md:text-[0.92rem] tracking-[0.05em] mb-1.5">
                  {stat.label}
                </p>
                <p className="text-[0.72rem] md:text-[0.76rem] tracking-[0.05em] text-text-muted leading-relaxed md:leading-[1.9]">
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
