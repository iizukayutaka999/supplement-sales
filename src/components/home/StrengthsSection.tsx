import type { Dictionary } from "@/i18n/dictionaries/ja";
import { HomeSectionHeading } from "./HomeSectionHeading";

export function StrengthsSection({ t }: { t: Dictionary["home"]["strengths"] }) {
  return (
    <section className="bg-white py-20 md:py-28 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <HomeSectionHeading eyebrow={t.eyebrow} title={t.title} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {t.items.map((s, idx) => (
            <div key={s.title} className="bg-white rounded-2xl border border-border p-7 md:p-9">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent-soft text-accent text-[0.85rem] font-semibold mb-5">
                {idx + 1}
              </span>
              <h3 className="text-[1.1rem] md:text-[1.2rem] font-medium text-forest mb-3">{s.title}</h3>
              <p className="text-[0.9rem] leading-[1.9] text-text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
