"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { Reveal } from "./Reveal";

const serviceImages = [
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
];

export function Services() {
  const { t, locale } = useLanguage();

  return (
    <section id="servicios" className="relative bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-aqua">
            {t.services.eyebrow}
          </p>
          <h2
            key={`svc-title-${locale}`}
            className="lang-fade mt-3 max-w-2xl font-display text-3xl leading-tight text-ink md:text-5xl"
          >
            {t.services.title}
          </h2>
          <p
            key={`svc-sub-${locale}`}
            className="lang-fade mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
          >
            {t.services.sub}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => (
            <Reveal key={`${locale}-${item.title}`} delay={i * 80}>
              <article className="group">
                <div className="relative mb-5 aspect-[4/3] overflow-hidden">
                  <Image
                    src={serviceImages[i]}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent" />
                </div>
                <h3 className="font-display text-xl text-ink md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                  {item.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
