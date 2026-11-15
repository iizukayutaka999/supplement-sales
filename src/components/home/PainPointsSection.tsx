import type { Dictionary } from "@/i18n/dictionaries/ja";
import { Emphasis } from "@/components/ui/Emphasis";
import { HomeSectionHeading } from "./HomeSectionHeading";

export function PainPointsSection({ t }: { t: Dictionary["home"]["pains"] }) {
  return (
    <section className="bg-paper py-20 md:py-28 px-4 md:px-16">
      <div className="max-w-3xl mx-auto">
        <HomeSectionHeading eyebrow={t.eyebrow} title={t.title} />

        <ul className="flex flex-col gap-3 md:gap-4 mb-10">
          {t.items.map((item) => (
            <li
              key={item}
              className="bg-white rounded-2xl border border-border px-6 py-5 md:px-8 flex items-center gap-4 text-[0.95rem] md:text-[1rem] text-forest"
            >
              <span className="w-8 h-8 rounded-full bg-accent-soft text-accent font-semibold flex items-center justify-center shrink-0">
                ?
              </span>
              {item}
            </li>
          ))}
        </ul>

        <p className="text-[0.95rem] leading-[1.9] text-text-muted text-center mb-8">{t.note}</p>
        <p className="bg-accent-soft rounded-2xl px-6 py-6 md:px-10 md:py-8 text-[0.98rem] md:text-[1.05rem] leading-[2] text-forest/85 text-center">
          <Emphasis text={t.conclusion} />
        </p>
      </div>
    </section>
  );
}
