import type { Dictionary } from "@/i18n/dictionaries/ja";
import { CheckIcon, HomeSectionHeading } from "./HomeSectionHeading";

export function WelcomeSection({ t }: { t: Dictionary["home"]["welcome"] }) {
  return (
    <section className="bg-white py-20 md:py-28 px-4 md:px-16">
      <div className="max-w-3xl mx-auto">
        <HomeSectionHeading title={t.title} lead={t.lead} />

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-10">
          {t.items.map((item) => (
            <li
              key={item}
              className="bg-paper rounded-2xl px-5 py-4 flex items-center gap-3 text-[0.92rem] text-forest"
            >
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-[0.95rem] leading-[1.95] text-text-muted text-center">{t.note}</p>
      </div>
    </section>
  );
}
