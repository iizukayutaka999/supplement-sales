import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink px-4 py-10 md:px-16 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,160,82,0.04)_0%,transparent_50%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-lg text-cream/60 font-light tracking-[0.08em]">
            株式会社サプリ販売
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="/products" className="text-[0.7rem] tracking-[0.15em] text-cream/40 hover:text-cream/70 transition-all duration-300 no-underline">
              製品情報
            </Link>
            <Link href="/company" className="text-[0.7rem] tracking-[0.15em] text-cream/40 hover:text-cream/70 transition-all duration-300 no-underline">
              会社概要
            </Link>
            <Link href="/contact" className="text-[0.7rem] tracking-[0.15em] text-cream/40 hover:text-cream/70 transition-all duration-300 no-underline">
              お問い合わせ
            </Link>
            <Link href="/legal" className="text-[0.7rem] tracking-[0.15em] text-cream/40 hover:text-cream/70 transition-all duration-300 no-underline">
              特定商取引法
            </Link>
            <Link href="/privacy" className="text-[0.7rem] tracking-[0.15em] text-cream/40 hover:text-cream/70 transition-all duration-300 no-underline">
              プライバシーポリシー
            </Link>
          </nav>
        </div>
        <div className="mt-10 pt-8 border-t border-cream/[0.06] text-center">
          <p className="text-[0.65rem] tracking-[0.15em] text-cream/30">
            © 2024 Supplement Sales Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
