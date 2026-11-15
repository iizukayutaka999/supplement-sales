import type { Dictionary } from "@/i18n/dictionaries/ja";
import { CheckIcon } from "./HomeSectionHeading";

export function ApproachSection({ t }: { t: Dictionary["home"]["approach"] }) {
  return (
    <section className="bg-paper py-20 md:py-28 px-4 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <p className="eyebrow text-accent mb-3">{t.eyebrow}</p>
          <h2 className="display-serif text-[1.5rem] md:text-[2.1rem] text-forest mb-6 text-balance [word-break:auto-phrase]">
            {t.title}
          </h2>
          <div className="space-y-4 text-[0.95rem] leading-[1.95] text-text-muted">
            {t.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-border p-7 md:p-9">
          <p className="text-[1rem] md:text-[1.05rem] font-medium text-forest mb-5">{t.listTitle}</p>
          <ul className="flex flex-col gap-3.5 mb-6">
            {t.list.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.92rem] leading-[1.7] text-forest/85">
                <CheckIcon className="w-4 h-4 mt-1" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[0.85rem] leading-[1.85] text-text-muted border-t border-border pt-5">{t.note}</p>
        </div>
      </div>
    </section>
  );
}
