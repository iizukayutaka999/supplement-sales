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
      <p
        className={`section-tag flex items-center gap-5 text-[0.6rem] tracking-[0.55em] ${tagColor} mb-6 md:mb-9 uppercase font-medium`}
      >
        {tag}
      </p>
      <h2
        className={`font-serif text-[2rem] md:text-[2.75rem] lg:text-[3.5rem] font-light ${titleColor} leading-[1.15] mb-4 md:mb-6 tracking-[-0.015em]`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
}
