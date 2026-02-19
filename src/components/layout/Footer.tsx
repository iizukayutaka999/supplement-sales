import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink px-4 py-8 md:px-16 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-base text-cream/60 font-light">
            株式会社サプリ販売
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="/products" className="text-[0.7rem] tracking-[0.15em] text-cream/40 hover:text-cream/70 transition-colors no-underline">
              製品情報
            </Link>
            <Link href="/company" className="text-[0.7rem] tracking-[0.15em] text-cream/40 hover:text-cream/70 transition-colors no-underline">
              会社概要
            </Link>
            <Link href="/contact" className="text-[0.7rem] tracking-[0.15em] text-cream/40 hover:text-cream/70 transition-colors no-underline">
              お問い合わせ
            </Link>
            <Link href="/legal" className="text-[0.7rem] tracking-[0.15em] text-cream/40 hover:text-cream/70 transition-colors no-underline">
              特定商取引法
            </Link>
            <Link href="/privacy" className="text-[0.7rem] tracking-[0.15em] text-cream/40 hover:text-cream/70 transition-colors no-underline">
              プライバシーポリシー
            </Link>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-cream/10 text-center">
          <p className="text-[0.65rem] tracking-[0.15em] text-cream/30">
            © 2024 Supplement Sales Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
