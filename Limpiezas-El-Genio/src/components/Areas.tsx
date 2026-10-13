"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { Reveal } from "./Reveal";

export function Areas() {
  const { t, locale } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=2400&q=80"
          alt={
            locale === "es"
              ? "Skyline de Madrid al atardecer"
              : "Madrid skyline at dusk"
          }
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aqua-glow">
            {t.areas.eyebrow}
          </p>
          <h2
            key={`areas-title-${locale}`}
            className="lang-fade mt-3 max-w-xl font-display text-3xl leading-tight text-white md:text-5xl"
          >
            {t.areas.title}
          </h2>
          <p
            key={`areas-sub-${locale}`}
            className="lang-fade mt-4 max-w-lg text-base leading-relaxed text-white/70 md:text-lg"
          >
            {t.areas.sub}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
