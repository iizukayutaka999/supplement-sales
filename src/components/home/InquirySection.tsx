import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/ja";
import { HomeSectionHeading } from "./HomeSectionHeading";

interface InquirySectionProps {
  locale: Locale;
  t: Dictionary["home"]["cta"];
  closing: Dictionary["home"]["closing"];
}

export function InquirySection({ locale, t, closing }: InquirySectionProps) {
  return (
    <section className="bg-paper py-20 md:py-28 px-4 md:px-16">
      <div className="max-w-3xl mx-auto">
        <HomeSectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

        <div className="bg-white rounded-2xl border border-border p-6 md:p-10 mb-8">
          <dl className="divide-y divide-border">
            {t.fields.map((f) => (
              <div key={f.label} className="flex flex-col sm:flex-row gap-1 sm:gap-6 py-4">
                <dt className="text-[0.85rem] font-medium text-accent sm:min-w-[7rem] shrink-0">{f.label}</dt>
                <dd className="text-[0.92rem] text-forest">{f.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-[0.85rem] text-text-muted mt-5">{t.fieldsNote}</p>
        </div>

        <div className="text-center mb-20 md:mb-24">
          <Link
            href={localePath(locale, "/contact")}
            className="btn-primary bg-accent hover:bg-sage text-white px-10 py-3.5 text-[0.9rem] font-medium no-underline inline-block mb-4"
          >
            {t.button}
          </Link>
          <p className="text-[0.85rem] text-text-muted">{t.buttonNote}</p>
        </div>

        {/* Closing message */}
        <div className="text-center border-t border-border pt-16 md:pt-20">
          <h2 className="display-serif text-[1.4rem] md:text-[1.9rem] text-forest mb-6 text-balance [word-break:auto-phrase]">
            {closing.title}
          </h2>
          <p className="text-[0.95rem] leading-[1.95] text-text-muted max-w-2xl mx-auto mb-8">{closing.body}</p>
          <p className="text-[1.3rem] md:text-[1.7rem] font-semibold text-accent mb-2">{closing.quote}</p>
          <p className="text-[0.95rem] text-text-muted mb-10">{closing.quoteNote}</p>
          <p className="text-[1rem] md:text-[1.1rem] text-forest mb-2">{closing.question}</p>
          <p className="text-[1rem] md:text-[1.1rem] font-medium text-forest">{closing.ask}</p>
        </div>
      </div>
    </section>
  );
}
