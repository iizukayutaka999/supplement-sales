import type { FaqItem } from "@/i18n/dictionaries/ja";

/**
 * Visible FAQ list. Answers stay in the HTML while collapsed, so search and AI
 * crawlers can read the same Q&A that the FAQPage structured data describes.
 */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group bg-white rounded-2xl border border-border px-6 py-5 md:px-8 open:border-accent"
        >
          <summary className="flex items-start justify-between gap-4 cursor-pointer list-none text-[0.95rem] md:text-[1rem] font-medium text-forest [&::-webkit-details-marker]:hidden">
            <span className="flex gap-3">
              <span className="text-accent font-semibold shrink-0">Q.</span>
              {item.question}
            </span>
            <span className="text-accent text-xl leading-none shrink-0 transition-transform group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="mt-4 flex gap-3 text-[0.9rem] leading-[1.9] text-text-muted">
            <span className="text-accent font-semibold shrink-0">A.</span>
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
