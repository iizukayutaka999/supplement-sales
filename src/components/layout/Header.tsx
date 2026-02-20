"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigation } from "@/data/navigation";

export function Header() {
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
      className={`fixed top-0 left-0 right-0 z-50 bg-warm-white/92 backdrop-blur-[12px] border-b border-border transition-all duration-300 ${
        isScrolled ? "py-2 px-4 md:py-3 md:px-16" : "py-3 px-4 md:py-6 md:px-16"
      }`}
    >
      <div className="flex justify-between items-center">
        <Link href="/" className="text-forest no-underline">
          <span className="font-serif text-base md:text-lg font-semibold tracking-[0.1em]">
            株式会社サプリ販売
          </span>
          <span className="hidden md:block font-sans text-[0.6rem] tracking-[0.25em] text-gold font-normal mt-0.5">
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
      </div>

      {/* Mobile Nav */}
      <nav className="flex md:hidden gap-6 mt-2">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[0.65rem] tracking-[0.15em] text-text-muted hover:text-forest transition-colors no-underline"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
