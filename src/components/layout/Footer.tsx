import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink px-4 pt-24 pb-10 md:px-16 md:pt-32 md:pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(184,147,90,0.06)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Manifesto line */}
        <div className="text-center mb-20 md:mb-28">
          <p className="eyebrow text-gold mb-8">
            Est. 2024 · Gunma, Japan
          </p>
          <p className="display-serif text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] text-cream leading-[1.05]">
            Nature, <em className="italic text-gold-light">refined.</em>
          </p>
          <p className="font-serif italic text-base md:text-lg text-cream/50 mt-6 md:mt-8">
            自然の力を、確かな品質で。
          </p>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-14 md:pb-20 border-b border-cream/[0.08]">
          <div className="md:col-span-5">
            <p className="font-serif text-xl md:text-[1.4rem] text-cream/90 font-light tracking-[0.08em] mb-2">
              株式会社サプリ販売
            </p>
            <p className="font-serif italic text-[0.7rem] tracking-[0.3em] text-gold/70 mb-8">
              Supplement Sales Co., Ltd.
            </p>
            <p className="text-[0.75rem] leading-[2] text-cream/45 font-light max-w-md">
              サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売する
              専門商社。原料の調達から製造・供給まで、一貫してサポートいたします。
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-gold/80 mb-5">Sitemap</p>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/products", label: "製品情報" },
                { href: "/company", label: "会社概要" },
                { href: "/contact", label: "お問い合わせ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.78rem] tracking-[0.1em] text-cream/55 hover:text-gold-light transition-colors duration-400 no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-gold/80 mb-5">Info</p>
            <ul className="flex flex-col gap-3 mb-6">
              <li className="text-[0.75rem] text-cream/50 leading-relaxed">
                〒370-2303 群馬県富岡市蕨1004番地1
              </li>
              <li className="text-[0.75rem] text-cream/50">
                日本語 · English · Русский
              </li>
              <li className="text-[0.75rem] text-cream/50">
                平日 9:00〜18:00 (JST)
              </li>
            </ul>
            <div className="flex flex-col gap-2">
              {[
                { href: "/legal", label: "特定商取引法" },
                { href: "/privacy", label: "プライバシーポリシー" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.7rem] tracking-[0.1em] text-cream/35 hover:text-cream/60 transition-colors duration-400 no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.6rem] tracking-[0.3em] text-cream/30 uppercase">
            © 2024 Supplement Sales Co., Ltd.
          </p>
          <p className="text-[0.6rem] tracking-[0.3em] text-cream/30 uppercase">
            Crafted in Gunma, Japan
          </p>
        </div>
      </div>
    </footer>
  );
}
