"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Tienda", href: "#tienda" },
  { label: "Categorías", href: "#tienda" },
  { label: "Nosotros", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bone/90 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-ink">
            BunnyWear
          </span>
          <span aria-hidden="true">🐰</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="eyebrow text-ash transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 text-ink">
          <button
            aria-label="Buscar"
            className="transition-opacity hover:opacity-60"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
          </button>
          <button
            aria-label="Carrito"
            className="relative transition-opacity hover:opacity-60"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6h15l-1.5 9h-12z" strokeLinejoin="round" />
              <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
              <circle cx="18" cy="20" r="1.4" fill="currentColor" stroke="none" />
              <path d="M6 6 5 3H3" strokeLinecap="round" />
            </svg>
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-terracotta text-[10px] font-medium text-white">
              0
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
