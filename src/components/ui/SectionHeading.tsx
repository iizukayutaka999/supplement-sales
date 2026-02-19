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
      <p className={`section-tag flex items-center gap-4 text-[0.6rem] tracking-[0.45em] ${tagColor} mb-4 md:mb-6`}>
        {tag}
      </p>
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-light ${titleColor} leading-tight mb-4 md:mb-6`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
}
