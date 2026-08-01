"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navigation } from "@/data/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
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

  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isTransparent
            ? "bg-transparent border-b border-transparent py-6 md:py-8 px-4 md:px-16"
            : "bg-off-white/90 backdrop-blur-xl backdrop-saturate-[1.3] border-b border-border/70 py-4 md:py-5 px-4 md:px-16 shadow-[0_1px_20px_rgba(24,43,34,0.04)]"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={`no-underline transition-colors duration-500 ${
              isTransparent ? "text-cream" : "text-forest"
            }`}
          >
            <span className="font-serif text-base md:text-lg font-medium tracking-[0.14em] block leading-none">
              株式会社サプリ販売
            </span>
            <span
              className={`font-sans text-[0.55rem] md:text-[0.58rem] tracking-[0.4em] font-normal mt-2 block uppercase transition-colors duration-500 ${
                isTransparent ? "text-gold-light" : "text-gold"
              }`}
            >
              Supplement Sales Co., Ltd.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navigation.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link text-[0.68rem] tracking-[0.32em] transition-colors duration-400 no-underline uppercase ${
                    isTransparent
                      ? active
                        ? "text-gold-light"
                        : "text-cream/80 hover:text-cream"
                      : active
                        ? "text-gold"
                        : "text-forest/70 hover:text-forest"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={mobileOpen}
            className={`md:hidden relative w-9 h-9 flex flex-col justify-center items-end gap-1.5 focus:outline-none ${
              mobileOpen ? "text-forest" : isTransparent ? "text-cream" : "text-forest"
            }`}
          >
            <span
              className={`block h-px bg-current transition-all duration-400 ${
                mobileOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                mobileOpen ? "opacity-0 w-0" : "w-4"
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-400 ${
                mobileOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-off-white transition-all duration-600 ease-out ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full gap-8 px-6 relative">
          <p
            className={`eyebrow text-gold absolute top-24 transition-all duration-500 ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
            style={{ transitionDelay: mobileOpen ? "200ms" : "0ms" }}
          >
            Menu
          </p>

          {navigation.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`display-serif text-3xl text-forest tracking-[0.02em] no-underline transition-all duration-500 ${
                mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: mobileOpen ? `${250 + idx * 90}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}

          <div
            className={`mt-6 w-12 h-px bg-gold/60 transition-all duration-700 ${
              mobileOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: mobileOpen ? "550ms" : "0ms" }}
          />
          <p
            className={`text-[0.6rem] tracking-[0.4em] text-gold uppercase transition-all duration-500 ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: mobileOpen ? "600ms" : "0ms" }}
          >
            Supplement Sales Co., Ltd.
          </p>
          <p
            className={`text-[0.62rem] tracking-[0.2em] text-text-muted transition-all duration-500 ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: mobileOpen ? "650ms" : "0ms" }}
          >
            日本語 · English · Русский
          </p>
        </div>
      </div>
    </>
  );
}
