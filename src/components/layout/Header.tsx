"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigation } from "@/data/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-warm-white/92 backdrop-blur-[12px] border-b border-border transition-all duration-300 ${
        isScrolled ? "py-3 px-4 md:px-16" : "py-4 px-4 md:py-6 md:px-16"
      }`}
    >
      <Link href="/" className="text-forest no-underline">
        <span className="font-serif text-base md:text-lg font-semibold tracking-[0.1em]">
          株式会社サプリ販売
        </span>
        <span className="block font-sans text-[0.6rem] tracking-[0.25em] text-gold font-normal mt-0.5">
          SUPPLEMENT SALES CO., LTD.
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-12">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-link text-[0.75rem] tracking-[0.2em] text-text-muted hover:text-forest transition-colors no-underline"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="メニューを開く"
      >
        <span
          className={`block w-6 h-[1.5px] bg-forest transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`block w-6 h-[1.5px] bg-forest transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-[1.5px] bg-forest transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-0 bg-warm-white/98 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-10 md:hidden">
          <button
            className="absolute top-5 right-5 p-2"
            onClick={() => setIsMenuOpen(false)}
            aria-label="メニューを閉じる"
          >
            <span className="block w-6 h-[1.5px] bg-forest rotate-45 translate-y-[1px]" />
            <span className="block w-6 h-[1.5px] bg-forest -rotate-45 -translate-y-[0.5px]" />
          </button>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg tracking-[0.2em] text-forest no-underline font-light"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
