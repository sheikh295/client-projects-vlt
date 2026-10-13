"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Reveal } from "./Reveal";

export function Faq() {
  const { t, locale } = useLanguage();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aqua">
            {t.faq.eyebrow}
          </p>
          <h2
            key={`faq-title-${locale}`}
            className="lang-fade mt-3 font-display text-3xl leading-tight text-ink md:text-5xl"
          >
            {t.faq.title}
          </h2>
          <p
            key={`faq-sub-${locale}`}
            className="lang-fade mt-4 max-w-sm text-base leading-relaxed text-muted md:text-lg"
          >
            {t.faq.sub}
          </p>
        </Reveal>

        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={`${locale}-${item.q}`} delay={i * 40}>
                <div>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="font-display text-lg text-ink md:text-xl">
                      {item.q}
                    </span>
                    <span
                      className={`mt-1 shrink-0 text-aqua transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pr-8 text-sm leading-relaxed text-muted md:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
