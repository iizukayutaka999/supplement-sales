/** Centered eyebrow + title used by every home page section. */
export function HomeSectionHeading({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      {eyebrow && <p className="eyebrow text-accent mb-3">{eyebrow}</p>}
      <h2 className="display-serif text-[1.5rem] md:text-[2.1rem] text-forest text-balance [word-break:auto-phrase]">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 text-[0.95rem] leading-[1.9] text-text-muted max-w-2xl mx-auto [word-break:auto-phrase]">{lead}</p>
      )}
    </div>
  );
}

/** Small green check used in lists. */
export function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`${className} text-accent shrink-0`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8.5l3 3 7-7" />
    </svg>
  );
}
