import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/ja";

interface FooterProps {
  locale: Locale;
  t: Dictionary["footer"];
  company: Dictionary["company"];
  nav: Dictionary["nav"];
}

export function Footer({ locale, t, company, nav }: FooterProps) {
  return (
    <footer className="bg-paper border-t border-border px-4 pt-16 pb-8 md:px-16 md:pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border">
          <div className="md:col-span-5">
            <p className="text-[1.05rem] font-semibold text-forest tracking-[0.04em] mb-1">
              {company.name}
            </p>
            <p className="text-[0.7rem] tracking-[0.08em] text-stone mb-5">
              {company.subName}
            </p>
            <p className="text-[0.85rem] leading-[1.9] text-text-muted max-w-md">
              {t.description}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[0.8rem] font-medium text-forest mb-4">{t.menuHeading}</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: "/products", label: nav.products },
                { href: "/company", label: nav.company },
                { href: "/contact", label: nav.contact },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={localePath(locale, link.href)}
                    className="text-[0.85rem] text-text-muted hover:text-accent transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[0.8rem] font-medium text-forest mb-4">{t.infoHeading}</p>
            <ul className="flex flex-col gap-2.5 text-[0.85rem] text-text-muted">
              {[
                { label: company.headOfficeLabel, value: company.headOffice },
                { label: company.factoryLabel, value: company.factory },
              ].map((place) => (
                <li key={place.label}>
                  <span className="block text-[0.75rem] font-medium text-forest">{place.label}</span>
                  {place.value}
                </li>
              ))}
              <li>{company.businessHours}</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[0.75rem] text-stone">© 2024 Supplement Sales Japan Co., Ltd.</p>
          <div className="flex gap-6">
            {[
              { href: "/legal", label: t.legal },
              { href: "/privacy", label: t.privacy },
            ].map((link) => (
              // Legal documents exist in Japanese only
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.75rem] text-stone hover:text-accent transition-colors no-underline"
              >
                {link.label}
                {t.japaneseOnlyNote}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
