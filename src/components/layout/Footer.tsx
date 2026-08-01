import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink px-4 py-16 md:px-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,160,82,0.05)_0%,transparent_55%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start pb-12 md:pb-16">
          <div>
            <p className="font-serif text-xl md:text-[1.5rem] text-cream/80 font-light tracking-[0.08em] mb-2">
              株式会社サプリ販売
            </p>
            <p className="font-serif italic text-[0.72rem] tracking-[0.3em] text-gold/70 mb-6">
              Supplement Sales Co., Ltd.
            </p>
            <p className="text-[0.72rem] leading-[1.9] text-cream/45 max-w-md">
              サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売する
              専門商社。日本語・英語・ロシア語対応。
            </p>
          </div>
          <nav className="flex flex-col gap-3.5 md:items-end">
            {[
              { href: "/products", label: "製品情報" },
              { href: "/company", label: "会社概要" },
              { href: "/contact", label: "お問い合わせ" },
              { href: "/legal", label: "特定商取引法" },
              { href: "/privacy", label: "プライバシーポリシー" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.72rem] tracking-[0.22em] text-cream/45 hover:text-gold-light transition-colors duration-400 no-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-8 md:pt-10 border-t border-cream/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.62rem] tracking-[0.28em] text-cream/30 uppercase">
            © 2024 Supplement Sales Co., Ltd. All rights reserved.
          </p>
          <p className="text-[0.62rem] tracking-[0.28em] text-cream/30 uppercase">
            Gunma, Japan
          </p>
        </div>
      </div>
    </footer>
  );
}
