import { company } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GlobalSection() {
  return (
    <section className="bg-cream py-16 px-4 md:py-28 md:px-16 text-center">
      <div className="max-w-[900px] mx-auto">
        <div className="flex justify-center">
          <SectionHeading
            tag="GLOBAL REACH"
            title="世界10カ国以上への<br>輸出実績"
          />
        </div>
        <p className="text-sm md:text-[0.9rem] leading-relaxed md:leading-[2.2] text-text-muted mb-8 md:mb-16">
          アジア・中東・東欧・アフリカ・アメリカ・オセアニアまで、幅広い地域のB2Bクライアントと取引しています。
          <br className="hidden md:block" />
          ご希望の地域への輸出相談もお気軽にどうぞ。
        </p>
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
          {company.globalReach.countries.map((country) => (
            <span
              key={country.name}
              className="px-4 md:px-6 py-2 md:py-2.5 border border-border text-[0.7rem] md:text-[0.72rem] tracking-[0.15em] text-forest bg-warm-white hover:bg-forest hover:text-cream hover:border-forest transition-all cursor-default"
            >
              {country.flag} {country.name}
            </span>
          ))}
          <span className="px-4 md:px-6 py-2 md:py-2.5 border border-border text-[0.7rem] md:text-[0.72rem] tracking-[0.15em] text-forest bg-warm-white">
            + その他
          </span>
        </div>
      </div>
    </section>
  );
}
