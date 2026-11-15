import type { Dictionary } from "@/i18n/dictionaries/ja";
import { Emphasis } from "@/components/ui/Emphasis";
import { HomeSectionHeading } from "./HomeSectionHeading";

export function OptionsSection({ t }: { t: Dictionary["home"]["options"] }) {
  return (
    <section className="bg-white py-20 md:py-28 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <HomeSectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-12">
          {t.benefits.map((b, idx) => (
            <div key={b.title} className="bg-white rounded-2xl border border-border p-7 md:p-9">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent-soft text-accent text-[0.85rem] font-semibold mb-5">
                {idx + 1}
              </span>
              <h3 className="text-[1.1rem] md:text-[1.15rem] font-medium text-forest mb-3">{b.title}</h3>
              <p className="text-[0.9rem] leading-[1.9] text-text-muted">{b.body}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[0.98rem] md:text-[1.05rem] leading-[2] text-forest/85 mb-6">
            <Emphasis text={t.note} />
          </p>
          <p className="text-[0.95rem] md:text-[1rem] font-medium text-accent">{t.bridge}</p>
        </div>
      </div>
    </section>
  );
}
