export function ManifestoSection() {
  const beliefs = [
    {
      no: "I.",
      lead: "Origin matters.",
      leadJa: "原料は、どこから来たかで決まる。",
      body: "誰がどこで育て、どう加工したか。原料の物語を、私たちは知っている。",
    },
    {
      no: "II.",
      lead: "Quality is a discipline.",
      leadJa: "品質は、日々の規律である。",
      body: "COA、HACCP、第三者検査。目に見えない工程こそ、私たちが最も時間をかける場所。",
    },
    {
      no: "III.",
      lead: "Trust is built in silence.",
      leadJa: "信頼は、静かに積み重なる。",
      body: "小ロットから始め、共に育つ。派手さより、確かさを選ぶ製品づくりへ。",
    },
  ];

  return (
    <section className="bg-paper py-28 md:py-44 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(184,147,90,0.06)_0%,transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 md:mb-32">
          <p className="eyebrow eyebrow-line justify-center text-gold mb-8">
            <span>Philosophy</span>
          </p>
          <h2 className="display-serif text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-forest">
            Three principles<br />
            <em className="italic text-sage">we live by.</em>
          </h2>
          <p className="font-serif italic text-base md:text-lg text-text-muted mt-6 md:mt-8">
            私たちが、原料と向き合うときの三つの信念。
          </p>
        </div>

        {/* Beliefs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-border/40">
          {beliefs.map((b, idx) => (
            <div
              key={b.no}
              className={`bg-paper p-8 md:p-12 lg:p-14 ${
                idx !== beliefs.length - 1 ? "border-b md:border-b-0 border-border/60" : ""
              }`}
            >
              <p className="display-serif text-4xl md:text-5xl text-gold/60 mb-8 md:mb-10">
                {b.no}
              </p>
              <h3 className="display-serif text-2xl md:text-[1.9rem] text-forest mb-3 leading-[1.15]">
                {b.lead}
              </h3>
              <p className="font-serif italic text-base md:text-lg text-sage mb-6 md:mb-8">
                {b.leadJa}
              </p>
              <p className="text-[0.82rem] md:text-[0.85rem] leading-[2] text-text-muted font-light">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
