"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Reveal } from "./Reveal";

export function Process() {
  const { t, locale } = useLanguage();

  return (
    <section id="proceso" className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-aqua/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-aqua-glow/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aqua-glow">
            {t.process.eyebrow}
          </p>
          <h2
            key={`proc-title-${locale}`}
            className="lang-fade mt-3 max-w-2xl font-display text-3xl leading-tight md:text-5xl"
          >
            {t.process.title}
          </h2>
          <p
            key={`proc-sub-${locale}`}
            className="lang-fade mt-4 max-w-xl text-base leading-relaxed text-white/65 md:text-lg"
          >
            {t.process.sub}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {t.process.steps.map((step, i) => (
            <Reveal key={`${locale}-${step.num}`} delay={i * 100}>
              <div className="relative border-t border-white/15 pt-8">
                <span className="font-display text-5xl text-aqua/50 md:text-6xl">
                  {step.num}
                </span>
                <h3 className="mt-4 font-display text-xl md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
