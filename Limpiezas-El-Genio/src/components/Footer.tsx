"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { MAPS_HREF, PHONE_HREF, WHATSAPP_HREF } from "@/lib/constants";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-ink py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl tracking-tight">El Genio</p>
          <p className="mt-1 text-sm text-white/55">{t.footer.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-white/60">
          <a href={PHONE_HREF} className="transition hover:text-white">
            641 63 24 51
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            WhatsApp
          </a>
          <a
            href={MAPS_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Google Maps
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 px-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p className="text-xs text-white/35">{t.footer.rights}</p>
        <a
          href="https://tech.velouralunelle.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center rounded-full border border-aqua/40 bg-aqua/15 px-4 py-2 text-sm font-semibold text-aqua-glow transition hover:border-aqua hover:bg-aqua/25 hover:text-white"
        >
          Powered by VL Technologies
        </a>
      </div>
    </footer>
  );
}
