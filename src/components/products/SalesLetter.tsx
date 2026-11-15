import type { SalesLetter as SalesLetterData } from "@/types/product";

/** Renders "**…**" segments of a paragraph in bold. */
function withEmphasis(text: string) {
  return text.split(/(\*\*.+?\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-forest">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

export function SalesLetter({ letter }: { letter: SalesLetterData }) {
  return (
    <section className="mb-16 md:mb-24 pb-16 md:pb-24 border-b border-border">
      <div className="max-w-2xl mx-auto">
        {/* balance + auto-phrase keep Japanese line breaks at natural word boundaries */}
        <h2 className="display-serif text-[1.5rem] md:text-[2rem] text-forest mb-10 md:mb-12 text-center text-balance [word-break:auto-phrase]">
          {letter.title}
        </h2>
        <div className="space-y-5 text-[0.95rem] md:text-[1.02rem] leading-[2] text-forest/85">
          {letter.paragraphs.map((p) => (
            <p key={p}>{withEmphasis(p)}</p>
          ))}
        </div>
        <div className="mt-12 md:mt-14 text-center">
          <p className="text-[1.1rem] font-semibold tracking-[0.2em] text-accent mb-2">{letter.brand}</p>
          <p className="text-[0.95rem] md:text-[1.05rem] text-forest">{letter.tagline}</p>
        </div>
      </div>
    </section>
  );
}
