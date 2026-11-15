import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/ja";

export function HeroSection({ locale, t }: { locale: Locale; t: Dictionary["home"]["hero"] }) {
  return (
    <section className="bg-white pt-36 pb-20 md:pt-48 md:pb-28 px-4 md:px-16 border-b border-border">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-[2rem] sm:text-[2.6rem] md:text-[3.4rem] font-semibold text-forest leading-[1.35] tracking-[0.02em] mb-6 md:mb-8">
          {t.titleLine1}
          {/* Space-separated languages need a space where the two lines join on wide screens */}
          {locale !== "ja" && " "}
          <br className="sm:hidden" />
          {t.titleLine2}
        </h1>

        <p className="text-[0.95rem] md:text-[1.05rem] leading-[2] text-text-muted max-w-2xl mx-auto mb-10 md:mb-12">
          {t.lead}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14 md:mb-16">
          <Link
            href={localePath(locale, "/products")}
            className="btn-primary bg-accent hover:bg-sage text-white px-10 py-3.5 text-[0.9rem] font-medium no-underline inline-block"
          >
            {t.ctaProducts}
          </Link>
          <Link
            href={localePath(locale, "/contact")}
            className="rounded-full border border-border-strong text-forest hover:border-accent hover:text-accent transition-colors px-10 py-3.5 text-[0.9rem] font-medium no-underline inline-block"
          >
            {t.ctaContact}
          </Link>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[0.85rem] text-text-muted">
          {t.highlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <svg viewBox="0 0 16 16" className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8.5l3 3 7-7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
