import Link from "next/link";
import { defaultLocale, localePath, type Locale } from "@/i18n/config";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  locale?: Locale;
  homeLabel?: string;
  ariaLabel?: string;
}

export function Breadcrumb({
  items,
  locale = defaultLocale,
  homeLabel = "Home",
  ariaLabel = "パンくずリスト",
}: BreadcrumbProps) {
  return (
    <nav
      className="px-4 md:px-16 py-5 md:py-6 text-[0.66rem] tracking-[0.15em]"
      aria-label={ariaLabel}
    >
      <ol className="flex flex-wrap items-center gap-2.5 list-none m-0 p-0">
        <li>
          <Link
            href={localePath(locale, "/")}
            className="text-text-muted/80 hover:text-forest transition-colors duration-300 no-underline uppercase"
          >
            {homeLabel}
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2.5">
            <span className="text-gold/40 text-[0.7rem]">/</span>
            {index === items.length - 1 ? (
              <span className="text-forest font-medium">{item.name}</span>
            ) : (
              <Link
                href={localePath(locale, item.href)}
                className="text-text-muted/80 hover:text-forest transition-colors duration-300 no-underline"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
