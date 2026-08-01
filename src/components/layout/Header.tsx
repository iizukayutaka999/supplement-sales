"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigation } from "@/data/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-warm-white/85 backdrop-blur-xl backdrop-saturate-[1.3] border-b transition-all duration-500 ease-out ${
          isScrolled
            ? "py-3 md:py-4 px-4 md:px-16 border-border/80 shadow-[0_1px_20px_rgba(26,51,40,0.04)]"
            : "py-5 md:py-7 px-4 md:px-16 border-transparent"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-forest no-underline group"
            onClick={() => setMobileOpen(false)}
          >
            <span className="font-serif text-base md:text-lg font-medium tracking-[0.12em] transition-colors duration-300 group-hover:text-moss">
              株式会社サプリ販売
            </span>
            <span className="hidden md:block font-sans text-[0.58rem] tracking-[0.35em] text-gold/90 font-normal mt-1">
              SUPPLEMENT SALES CO., LTD.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link text-[0.72rem] tracking-[0.28em] text-forest/70 hover:text-forest transition-colors duration-300 no-underline uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={mobileOpen}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-end gap-1.5 focus:outline-none"
          >
            <span
              className={`block h-px bg-forest transition-all duration-400 ${
                mobileOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
              }`}
            />
            <span
              className={`block h-px bg-forest transition-all duration-300 ${
                mobileOpen ? "opacity-0 w-0" : "w-4"
              }`}
            />
            <span
              className={`block h-px bg-forest transition-all duration-400 ${
                mobileOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-warm-white transition-all duration-500 ease-out ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full gap-10 px-6">
          {navigation.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`font-serif text-2xl text-forest tracking-[0.05em] no-underline transition-all duration-500 ${
                mobileOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: mobileOpen ? `${150 + idx * 80}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}
          <div
            className={`mt-6 w-10 h-px bg-gold/60 transition-all duration-700 ${
              mobileOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: mobileOpen ? "400ms" : "0ms" }}
          />
          <p
            className={`text-[0.6rem] tracking-[0.35em] text-gold/80 uppercase transition-all duration-500 ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: mobileOpen ? "450ms" : "0ms" }}
          >
            Supplement Sales Co., Ltd.
          </p>
        </div>
      </div>
    </>
  );
}
