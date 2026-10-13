"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { PHONE_HREF } from "@/lib/constants";

export function Header() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#servicios", label: t.nav.services },
    { href: "#proceso", label: t.nav.how },
    { href: "#opiniones", label: t.nav.reviews },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/90 py-3 shadow-lg shadow-ink/10 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" className="group flex items-baseline gap-2">
          <span
            className={`font-display text-xl tracking-tight transition-colors md:text-2xl ${
              scrolled ? "text-white" : "text-white"
            }`}
          >
            El Genio
          </span>
          <span
            className={`hidden text-[11px] font-medium uppercase tracking-[0.18em] sm:inline ${
              scrolled ? "text-aqua-glow" : "text-white/70"
            }`}
          >
            Madrid
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/75 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="flex rounded-full border border-white/20 bg-white/10 p-0.5 backdrop-blur-sm"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => setLocale("es")}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
                locale === "es"
                  ? "bg-white text-ink"
                  : "text-white/70 hover:text-white"
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
                locale === "en"
                  ? "bg-white text-ink"
                  : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href={PHONE_HREF}
            className="hidden rounded-full bg-aqua px-4 py-2 text-sm font-semibold text-white transition hover:bg-aqua-deep sm:inline-flex"
          >
            {t.nav.call}
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-4 flex-col gap-1">
              <span
                className={`h-0.5 w-full bg-white transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-white transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-white transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-5 py-4 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1 text-base font-medium text-white/90"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-2 inline-flex justify-center rounded-full bg-aqua px-4 py-2.5 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {t.nav.call}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
