interface SectionHeadingProps {
  tag: string;
  title: string;
  tagColor?: string;
  titleColor?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  tag,
  title,
  tagColor = "text-gold",
  titleColor = "text-forest",
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p
        className={`eyebrow eyebrow-line ${
          align === "center" ? "justify-center" : ""
        } ${tagColor} mb-6 md:mb-10`}
      >
        <span>{tag}</span>
      </p>
      <h2
        className={`display-serif text-[2.25rem] md:text-[3.25rem] lg:text-[4.5rem] ${titleColor}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
}
