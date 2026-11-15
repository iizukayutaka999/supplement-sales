/** Renders "**…**" segments of a dictionary string in bold. */
export function Emphasis({ text, className = "font-semibold text-forest" }: { text: string; className?: string }) {
  return (
    <>
      {text.split(/(\*\*.+?\*\*)/g).map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className={className}>
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}
