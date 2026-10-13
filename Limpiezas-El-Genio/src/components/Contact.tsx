"use client";

import { useLanguage } from "@/lib/LanguageContext";
import {
  ADDRESS_MAPS,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
} from "@/lib/constants";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t, locale } = useLanguage();

  return (
    <section id="contacto" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aqua">
            {t.contact.eyebrow}
          </p>
          <h2
            key={`contact-title-${locale}`}
            className="lang-fade mt-3 max-w-2xl font-display text-3xl leading-tight text-ink md:text-5xl"
          >
            {t.contact.title}
          </h2>
          <p
            key={`contact-sub-${locale}`}
            className="lang-fade mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {t.contact.sub}
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-3">
          <Reveal delay={40}>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-aqua px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-aqua/25 transition hover:bg-aqua-deep"
            >
              {t.contact.whatsapp}
            </a>
          </Reveal>
          <Reveal delay={100}>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center rounded-full border border-ink/15 bg-mist px-7 py-4 text-sm font-semibold text-ink transition hover:border-aqua hover:text-aqua"
            >
              {t.contact.phone}
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 border-t border-ink/10 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {t.contact.hoursTitle}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft md:text-base">
              {t.contact.hours.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {t.contact.addressTitle}
            </h3>
            <a
              href={ADDRESS_MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block whitespace-pre-line text-sm leading-relaxed text-ink-soft transition hover:text-aqua md:text-base"
            >
              {t.contact.address}
            </a>
          </Reveal>

          <Reveal delay={140}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {locale === "es" ? "Teléfono" : "Phone"}
            </h3>
            <a
              href={PHONE_HREF}
              className="mt-4 block font-display text-2xl text-ink transition hover:text-aqua md:text-3xl"
            >
              {PHONE_DISPLAY}
            </a>
            <p className="mt-2 text-sm text-muted">
              {locale === "es" ? "WhatsApp · Llamadas" : "WhatsApp · Calls"}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
