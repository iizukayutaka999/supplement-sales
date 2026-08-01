interface ProductIconProps {
  slug: string;
  className?: string;
}

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

export function ProductIcon({ slug, className = "w-9 h-9" }: ProductIconProps) {
  switch (slug) {
    case "red-beet-powder":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path {...stroke} d="M24 15c-5.5 0-9 4.5-9 11.5S18 40 24 40s9-6.5 9-13.5S29.5 15 24 15Z" />
          <path {...stroke} d="M24 15V9" />
          <path {...stroke} d="M24 9c-2-1.5-4.5-1.5-6.5 0" />
          <path {...stroke} d="M24 9c2-1.5 4.5-1.5 6.5 0" />
          <path {...stroke} d="M19 12c-1.5-1-3.5-1-5 0" />
          <path {...stroke} d="M29 12c1.5-1 3.5-1 5 0" />
        </svg>
      );
    case "boswellia-serrata":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path {...stroke} d="M24 8c-6 0-10 4-10 9 0 2 1 4 2 5-2 1-3 3-3 5 0 3 3 6 6 6h10c3 0 6-3 6-6 0-2-1-4-3-5 1-1 2-3 2-5 0-5-4-9-10-9Z" />
          <path {...stroke} d="M24 33v9" />
          <path {...stroke} d="M20 42h8" />
        </svg>
      );
    case "plant-based-collagen":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path {...stroke} d="M24 42V14" />
          <path {...stroke} d="M24 28c-5-1-9-5-9-11 5 1 9 5 9 11Z" />
          <path {...stroke} d="M24 28c5-1 9-5 9-11-5 1-9 5-9 11Z" />
          <path {...stroke} d="M24 18c-3-1-5-3-5-7 3 1 5 3 5 7Z" />
          <path {...stroke} d="M24 18c3-1 5-3 5-7-3 1-5 3-5 7Z" />
        </svg>
      );
    case "anserine":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path {...stroke} d="M6 24c3-5 9-9 16-9 8 0 14 4 16 9-2 5-8 9-16 9-7 0-13-4-16-9Z" />
          <path {...stroke} d="M38 20l5-3v14l-5-3" />
          <path {...stroke} d="M14 24c1.5-1 3-1 4 0" />
          <circle cx="29" cy="22" r="1" fill="currentColor" />
        </svg>
      );
    case "gymnema-sylvestre":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path {...stroke} d="M24 40c0-11 4-19 14-24-1 12-6 20-14 24Z" />
          <path {...stroke} d="M24 40c0-11-4-19-14-24 1 12 6 20 14 24Z" />
          <path {...stroke} d="M24 40V16" />
        </svg>
      );
    case "ashwagandha":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path {...stroke} d="M24 6v22" />
          <path {...stroke} d="M24 14c-3-1-5-3-6-6" />
          <path {...stroke} d="M24 14c3-1 5-3 6-6" />
          <path {...stroke} d="M24 22c-4-1-7-3-8-7" />
          <path {...stroke} d="M24 22c4-1 7-3 8-7" />
          <circle {...stroke} cx="24" cy="34" r="6" />
          <path {...stroke} d="M24 40l-3 3M24 40l3 3M18 36l-3 1M30 36l3 1" />
        </svg>
      );
    case "garcinia-cambogia":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path {...stroke} d="M12 26c0-7 5-12 12-12s12 5 12 12-5 12-12 12-12-5-12-12Z" />
          <path {...stroke} d="M24 14v-4" />
          <path {...stroke} d="M22 10l-2-3M26 10l2-3" />
          <path {...stroke} d="M24 14v24M12 26h24" />
        </svg>
      );
    case "bromelain":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path {...stroke} d="M18 20c0-7 6-12 6-12s6 5 6 12v16c0 3-2.5 5-6 5s-6-2-6-5V20Z" />
          <path {...stroke} d="M18 24l3.5 3M18 30l3.5 3M18 36l3.5 3" />
          <path {...stroke} d="M30 24l-3.5 3M30 30l-3.5 3M30 36l-3.5 3" />
          <path {...stroke} d="M24 8c-2-2-3-4-3-6M24 8c2-2 3-4 3-6" />
        </svg>
      );
    default:
      return null;
  }
}
