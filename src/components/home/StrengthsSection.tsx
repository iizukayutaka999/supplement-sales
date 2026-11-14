import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/ja";

export function StrengthsSection({ locale, t }: { locale: Locale; t: Dictionary["home"] }) {
  return (
    <>
      <section className="bg-paper py-20 md:py-28 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="eyebrow text-accent mb-3">{t.strengths.eyebrow}</p>
            <h2 className="display-serif text-[1.6rem] md:text-[2.2rem] text-forest">
              {t.strengths.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {t.strengths.items.map((s, idx) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl border border-border p-7 md:p-9"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent-soft text-accent text-[0.85rem] font-semibold mb-5">
                  {idx + 1}
                </span>
                <h3 className="text-[1.1rem] md:text-[1.2rem] font-medium text-forest mb-3">
                  {s.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.9] text-text-muted">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24 px-4 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="display-serif text-[1.5rem] md:text-[2rem] text-forest mb-4">
            {t.cta.title}
          </h2>
          <p className="text-[0.95rem] leading-[1.9] text-text-muted mb-8">
            {t.cta.lead}
          </p>
          <Link
            href={localePath(locale, "/contact")}
            className="btn-primary bg-accent hover:bg-sage text-white px-10 py-3.5 text-[0.9rem] font-medium no-underline inline-block"
          >
            {t.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
