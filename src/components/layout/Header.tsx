"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  LOCALE_COOKIE,
  localeNames,
  localePath,
  locales,
  stripLocale,
  type Locale,
} from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/ja";

interface HeaderProps {
  locale: Locale;
  t: Dictionary["nav"];
  companyName: string;
  companySubName: string;
}

export function Header({ locale, t, companyName, companySubName }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = stripLocale(usePathname());
  const router = useRouter();

  const navigation = [
    { label: t.products, href: "/products" },
    { label: t.company, href: "/company" },
    { label: t.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const switchLocale = (next: Locale) => {
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    setMobileOpen(false);
    router.push(localePath(next, pathname));
  };

  const languageSelect = (
    <select
      aria-label={t.language}
      value={locale}
      onChange={(e) => switchLocale(e.target.value as Locale)}
      className="bg-white border border-border rounded-full px-3 py-1.5 text-[0.8rem] text-forest cursor-pointer focus:outline-none focus:border-accent"
    >
      {locales.map((l) => (
        <option key={l} value={l}>
          {localeNames[l]}
        </option>
      ))}
    </select>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b px-4 md:px-16 py-4 transition-colors duration-200 ${
          isScrolled ? "border-border" : "border-transparent"
        }`}
      >
        <div className="flex justify-between items-center max-w-6xl mx-auto gap-4">
          <Link
            href={localePath(locale, "/")}
            onClick={() => setMobileOpen(false)}
            className="no-underline flex items-center gap-2.5 text-forest"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-accent shrink-0" fill="currentColor" aria-hidden="true">
              <path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15zm0 0l7-7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="leading-none">
              <span className="text-[0.95rem] md:text-base font-semibold tracking-[0.04em] block">
                {companyName}
              </span>
              <span className="text-[0.6rem] tracking-[0.08em] text-stone mt-1 block">
                {companySubName}
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navigation.map((item) => {
              const active = pathname.startsWith(item.href);
              if (item.href === "/contact") {
                return (
                  <Link
                    key={item.href}
                    href={localePath(locale, item.href)}
                    className="btn-primary bg-accent hover:bg-sage text-white px-6 py-2.5 text-[0.85rem] font-medium no-underline whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={localePath(locale, item.href)}
                  className={`text-[0.88rem] no-underline whitespace-nowrap transition-colors duration-200 ${
                    active ? "text-accent font-medium" : "text-forest hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            {languageSelect}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t.closeMenu : t.openMenu}
            aria-expanded={mobileOpen}
            className="md:hidden relative w-9 h-9 flex flex-col justify-center items-center gap-1.5 text-forest focus:outline-none"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white pt-24 px-6 transition-opacity duration-200 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={localePath(locale, item.href)}
              onClick={() => setMobileOpen(false)}
              className="py-5 border-b border-border text-[1.1rem] text-forest no-underline flex justify-between items-center"
            >
              {item.label}
              <span className="text-accent rtl:rotate-180">→</span>
            </Link>
          ))}
        </nav>
        <div className="mt-8 flex items-center gap-3">
          <span className="text-[0.8rem] text-text-muted">{t.language}</span>
          {languageSelect}
        </div>
      </div>
    </>
  );
}
