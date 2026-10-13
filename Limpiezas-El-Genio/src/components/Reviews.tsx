"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { MAPS_HREF } from "@/lib/constants";
import { Reveal } from "./Reveal";

const AUTO_MS = 2000;

export function Reviews() {
  const { t, locale } = useLanguage();
  const items = t.reviews.items;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (next: number) => {
      const len = items.length;
      setIndex(((next % len) + len) % len);
    },
    [items.length],
  );

  useEffect(() => {
    setIndex(0);
  }, [locale]);

  useEffect(() => {
    if (paused || items.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, items.length]);

  const review = items[index];

  return (
    <section id="opiniones" className="bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aqua">
                {t.reviews.eyebrow}
              </p>
              <h2
                key={`rev-title-${locale}`}
                className="lang-fade mt-3 font-display text-3xl leading-tight text-ink md:text-5xl"
              >
                {t.reviews.title}
              </h2>
              <p
                key={`rev-sub-${locale}`}
                className="lang-fade mt-3 text-muted"
              >
                {t.reviews.sub}
              </p>
            </div>
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-aqua transition hover:text-aqua-deep"
            >
              {t.reviews.cta}
              <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div
            className="relative mt-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setPaused(false);
              }
            }}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current == null) return;
              const delta = e.changedTouches[0].clientX - touchStartX.current;
              touchStartX.current = null;
              if (Math.abs(delta) < 40) return;
              goTo(index + (delta < 0 ? 1 : -1));
            }}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {items.map((item, i) => (
                  <blockquote
                    key={`${locale}-${i}`}
                    className="w-full shrink-0 border-t border-ink/10 px-1 pt-10 md:px-2"
                    aria-hidden={i !== index}
                  >
                    <div className="mb-5 flex items-center gap-1.5 text-star">
                      {"★★★★★".split("").map((s, idx) => (
                        <span key={idx} className="text-sm">
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="max-w-3xl font-display text-xl leading-snug text-ink md:text-3xl md:leading-snug">
                      “{item.text}”
                    </p>
                    <footer className="mt-8 flex flex-wrap items-center justify-between gap-4">
                      <cite className="not-italic text-sm font-medium text-ink-soft md:text-base">
                        {item.name}
                      </cite>
                      <span className="text-xs font-semibold uppercase tracking-wider text-aqua">
                        {item.focus}
                      </span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2" role="tablist" aria-label="Reviews">
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`${i + 1} / ${items.length}`}
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === index
                        ? "w-8 bg-aqua"
                        : "w-1.5 bg-ink/20 hover:bg-ink/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goTo(index - 1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:border-aqua hover:text-aqua"
                  aria-label={locale === "es" ? "Anterior" : "Previous"}
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => goTo(index + 1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:border-aqua hover:text-aqua"
                  aria-label={locale === "es" ? "Siguiente" : "Next"}
                >
                  →
                </button>
                <span className="ml-2 text-xs font-medium tabular-nums text-muted">
                  {index + 1} / {items.length}
                </span>
              </div>
            </div>

            {/* Progress for current auto slide */}
            <div className="mt-4 h-px w-full overflow-hidden bg-ink/10">
              <div
                key={`${index}-${paused}-${review.focus}`}
                className={`h-full bg-aqua/70 ${paused ? "" : "review-progress"}`}
                style={paused ? { width: "0%" } : undefined}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
