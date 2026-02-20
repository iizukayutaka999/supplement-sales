interface SectionHeadingProps {
  tag: string;
  title: string;
  tagColor?: string;
  titleColor?: string;
}

export function SectionHeading({
  tag,
  title,
  tagColor = "text-gold",
  titleColor = "text-forest",
}: SectionHeadingProps) {
  return (
    <div>
      <p className={`section-tag flex items-center gap-4 text-[0.6rem] tracking-[0.5em] ${tagColor} mb-5 md:mb-8`}>
        {tag}
      </p>
      <h2
        className={`font-serif text-[2rem] md:text-[2.5rem] lg:text-[3.25rem] font-light ${titleColor} leading-tight mb-4 md:mb-6 tracking-[-0.01em]`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
}
