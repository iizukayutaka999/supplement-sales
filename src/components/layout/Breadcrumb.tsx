import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      className="px-4 md:px-16 py-5 text-[0.7rem] tracking-[0.1em]"
      aria-label="パンくずリスト"
    >
      <ol className="flex flex-wrap items-center gap-2 list-none m-0 p-0">
        <li>
          <Link href="/" className="text-text-muted hover:text-forest transition-colors no-underline">
            ホーム
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <span className="text-gold/40">/</span>
            {index === items.length - 1 ? (
              <span className="text-forest font-medium">{item.name}</span>
            ) : (
              <Link href={item.href} className="text-text-muted hover:text-forest transition-colors no-underline">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
