"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Galerie", href: "#galerie" },
  { label: "Qualifikationen", href: "#qualifikationen" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textClass = scrolled
    ? "text-[#1a1a1a] hover:text-[#c9a96e]"
    : "text-white hover:text-[#c9a96e]";

  const logoTextClass = scrolled ? "text-[#1a1a1a]" : "text-white";
  const hamburgerColor = scrolled ? "bg-[#1a1a1a]" : "bg-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span
            className={`text-xl font-semibold tracking-widest uppercase transition-colors duration-300 ${logoTextClass}`}
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ebru
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e]">
            Creative Hair
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs tracking-widest uppercase transition-colors duration-200 ${textClass}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#kontakt"
          className={`hidden md:inline-flex items-center px-6 py-2.5 border text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
            scrolled
              ? "border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white"
              : "border-white text-white hover:bg-white hover:text-[#1a1a1a]"
          }`}
        >
          Termin buchen
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          <span
            className={`block w-6 h-px ${hamburgerColor} transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-px ${hamburgerColor} transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px ${hamburgerColor} transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#f0ece4] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-[#1a1a1a] hover:text-[#c9a96e] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-6 py-3 border border-[#c9a96e] text-[#c9a96e] text-xs tracking-[0.2em] uppercase hover:bg-[#c9a96e] hover:text-white transition-all duration-300"
          >
            Termin buchen
          </a>
        </div>
      )}
    </header>
  );
}
