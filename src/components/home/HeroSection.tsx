import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-forest text-cream overflow-hidden flex flex-col">
      {/* Ambient gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_100%,rgba(184,147,90,0.16)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_10%,rgba(90,125,104,0.22)_0%,transparent_50%)]" />

      {/* Botanical outline — top right */}
      <svg
        className="absolute -top-16 -right-24 w-[420px] md:w-[640px] opacity-[0.06] pointer-events-none"
        viewBox="0 0 400 500"
        fill="none"
      >
        <path d="M200 500 C200 500 100 380 100 245 100 110 200 0 200 0 S300 110 300 245 200 500 200 500Z" stroke="#f5efe4" strokeWidth="0.8" />
        <line x1="200" y1="0" x2="200" y2="500" stroke="#d4b378" strokeWidth="0.4" opacity="0.5" />
        <ellipse cx="140" cy="220" rx="42" ry="18" transform="rotate(-32 140 220)" stroke="#f5efe4" strokeWidth="0.6" />
        <ellipse cx="260" cy="200" rx="38" ry="17" transform="rotate(32 260 200)" stroke="#f5efe4" strokeWidth="0.6" />
        <ellipse cx="125" cy="310" rx="34" ry="14" transform="rotate(-18 125 310)" stroke="#f5efe4" strokeWidth="0.6" />
        <ellipse cx="275" cy="290" rx="32" ry="13" transform="rotate(18 275 290)" stroke="#f5efe4" strokeWidth="0.6" />
        <ellipse cx="150" cy="390" rx="26" ry="11" transform="rotate(-12 150 390)" stroke="#f5efe4" strokeWidth="0.6" />
        <ellipse cx="250" cy="380" rx="24" ry="10" transform="rotate(12 250 380)" stroke="#f5efe4" strokeWidth="0.6" />
      </svg>

      {/* Vertical rail — left */}
      <div className="hidden md:flex absolute left-16 top-0 bottom-0 flex-col justify-between py-32 z-10">
        <div className="hero-fade hero-fade-1 flex flex-col items-center gap-6">
          <span className="text-[0.58rem] tracking-[0.55em] text-gold uppercase [writing-mode:vertical-lr] rotate-180">
            Since 2024 · Gunma
          </span>
        </div>
        <div className="hero-fade hero-fade-3 flex flex-col items-center gap-4">
          <span className="text-[0.58rem] tracking-[0.4em] text-cream/50 uppercase">
            Scroll
          </span>
          <span className="scroll-indicator text-cream/40" />
        </div>
      </div>

      {/* Vertical rail — right */}
      <div className="hidden md:flex absolute right-16 top-0 bottom-0 flex-col justify-between py-32 z-10 items-end">
        <div className="hero-fade hero-fade-1 flex flex-col items-end gap-3 text-right">
          <span className="text-[0.58rem] tracking-[0.4em] text-cream/50 uppercase">
            N°01 — Origin
          </span>
        </div>
        <div className="hero-fade hero-fade-3 text-right">
          <span className="text-[0.58rem] tracking-[0.4em] text-cream/50 uppercase block mb-1">
            日本語 / English / Русский
          </span>
          <span className="text-[0.58rem] tracking-[0.4em] text-gold uppercase">
            Trilingual Support
          </span>
        </div>
      </div>

      {/* Main content — centered */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 pt-32 pb-24 md:px-32 md:pt-40 md:pb-32">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <p className="hero-fade hero-fade-1 eyebrow eyebrow-line justify-center md:justify-start text-gold mb-10 md:mb-14">
            <span>Supplement Sales Co., Ltd.</span>
          </p>

          <h1 className="display-serif text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] text-cream mb-2 md:mb-4">
            <span className="hero-line hero-line-1">
              <span>Nature,</span>
            </span>
            <span className="hero-line hero-line-2 italic text-gold-light">
              <span>refined.</span>
            </span>
          </h1>

          <p className="hero-fade hero-fade-2 font-serif italic text-lg md:text-2xl text-cream/70 mt-8 md:mt-12 mb-10 md:mb-14 max-w-2xl mx-auto md:mx-0">
            自然の力を、確かな品質で。
            <br className="hidden md:block" />
            <span className="font-sans not-italic text-[0.78rem] md:text-[0.88rem] tracking-[0.05em] text-cream/50 block mt-4 md:mt-5 leading-[2]">
              サプリメント・健康食品・化粧品の原材料を、輸入販売と製造販売で。
              <br />
              素材が持つ本来の力を、そのままに製品へ届けます。
            </span>
          </p>

          <div className="hero-fade hero-fade-3 flex flex-col sm:flex-row gap-6 sm:gap-10 items-center md:items-start md:justify-start justify-center pt-4">
            <Link
              href="/products"
              className="btn-primary bg-gold text-ink px-12 md:px-14 py-4 md:py-4 text-[0.68rem] tracking-[0.32em] font-medium no-underline inline-block uppercase"
            >
              <span className="relative z-10">Explore Ingredients</span>
            </Link>
            <Link
              href="/contact"
              className="text-cream/70 no-underline text-[0.68rem] tracking-[0.32em] hover:text-gold-light transition-colors duration-500 uppercase btn-ghost border-cream/30 hover:border-gold-light"
            >
              Get in Touch
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom marquee — brand mantra */}
      <div className="hero-fade hero-fade-3 relative z-10 border-t border-cream/[0.08] py-5 overflow-hidden">
        <div className="flex whitespace-nowrap marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {[
                "Imported & Manufactured in Japan",
                "COA Complete",
                "Small Lot Available",
                "Trilingual Team",
                "Since 2024",
                "Gunma, Japan",
                "Sample On Request",
              ].map((item) => (
                <span
                  key={`${i}-${item}`}
                  className="flex items-center text-[0.62rem] tracking-[0.4em] text-cream/50 uppercase px-8"
                >
                  <span className="w-1 h-1 rounded-full bg-gold/60 mr-8" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
