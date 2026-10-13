"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { Reveal } from "./Reveal";

export function Trust() {
  const { t, locale } = useLanguage();

  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80"
              alt={
                locale === "es"
                  ? "Profesional de limpieza trabajando"
                  : "Cleaning professional at work"
              }
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-6">
              <p className="font-display text-3xl text-white">4,9</p>
              <p className="mt-1 text-sm text-white/80">
                {locale === "es"
                  ? "★ ★ ★ ★ ★ · 104 reseñas en Google"
                  : "★ ★ ★ ★ ★ · 104 Google reviews"}
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aqua">
              {t.trust.eyebrow}
            </p>
            <h2
              key={`trust-title-${locale}`}
              className="lang-fade mt-3 font-display text-3xl leading-tight text-ink md:text-5xl"
            >
              {t.trust.title}
            </h2>
            <p
              key={`trust-sub-${locale}`}
              className="lang-fade mt-4 text-base leading-relaxed text-muted md:text-lg"
            >
              {t.trust.sub}
            </p>
          </Reveal>

          <ul className="mt-10 space-y-8">
            {t.trust.points.map((point, i) => (
              <Reveal key={`${locale}-${point.title}`} delay={i * 80}>
                <li className="border-l-2 border-aqua pl-5">
                  <h3 className="font-display text-xl text-ink">{point.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted md:text-base">
                    {point.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
