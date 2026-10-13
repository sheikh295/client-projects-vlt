"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { WHATSAPP_HREF } from "@/lib/constants";

export function Hero() {
  const { t, locale } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [slot, setSlot] = useState<string>(t.hero.form.slots[0]);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setSlot(t.hero.form.slots[0]);
  }, [t.hero.form.slots]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const message = encodeURIComponent(
      locale === "es"
        ? `Hola, soy ${name}. Mi teléfono es ${phone}. Preferencia de llamada: ${slot}.`
        : `Hi, I'm ${name}. My phone is ${phone}. Preferred callback: ${slot}.`,
    );
    window.open(`https://wa.me/34641632451?text=${message}`, "_blank");
    setSent(true);
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80"
          alt={
            locale === "es"
              ? "Interior luminoso y limpio en Madrid"
              : "Bright, clean interior in Madrid"
          }
          fill
          priority
          sizes="100vw"
          className="hero-image object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/65 via-ink/35 to-ink/45" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl -translate-y-4 items-center gap-10 px-5 pt-24 pb-16 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:-translate-y-8 md:px-8 md:pt-28 md:pb-20">
        <div>
          <p
            key={`brand-${locale}`}
            className="animate-fade-up font-display text-4xl leading-none tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t.hero.brand}
            <span className="mt-1 block text-2xl text-aqua-glow sm:text-3xl md:text-4xl">
              {t.hero.location}
            </span>
          </p>

          <h1
            key={`headline-${locale}`}
            className="animate-fade-up-delay-1 mt-6 max-w-xl font-display text-2xl leading-snug text-white/95 sm:text-3xl md:text-[2.15rem]"
          >
            {t.hero.headline}
          </h1>

          <p
            key={`sub-${locale}`}
            className="animate-fade-up-delay-2 mt-4 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg"
          >
            {t.hero.sub}
          </p>

          <div
            key={`cta-${locale}`}
            className="animate-fade-up-delay-3 mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-aqua px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-aqua/30 transition hover:bg-aqua-deep"
            >
              <WhatsAppIcon />
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center rounded-full border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="animate-fade-up-delay-2 w-full max-w-sm justify-self-end md:max-w-none">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/15 bg-white/95 p-5 shadow-2xl shadow-ink/30 backdrop-blur-md"
          >
            <p className="font-display text-xl text-ink">{t.hero.form.title}</p>
            <p className="mt-1 text-sm text-muted">{t.hero.form.subtitle}</p>

            {sent ? (
              <p className="mt-5 rounded-xl bg-aqua-glow/40 px-3 py-3 text-sm font-medium text-ink">
                {t.hero.form.success}
              </p>
            ) : (
              <div className="mt-4 space-y-3">
                <label className="block">
                  <span className="sr-only">{t.hero.form.name}</span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.hero.form.name}
                    className="w-full rounded-xl border border-ink/10 bg-mist px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted/70 focus:border-aqua"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">{t.hero.form.phone}</span>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.hero.form.phone}
                    className="w-full rounded-xl border border-ink/10 bg-mist px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted/70 focus:border-aqua"
                  />
                </label>
                <fieldset>
                  <legend className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                    {t.hero.form.slot}
                  </legend>
                  <div className="flex flex-wrap gap-1.5">
                    {t.hero.form.slots.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSlot(option)}
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                          slot === option
                            ? "bg-ink text-white"
                            : "bg-mist text-ink-soft hover:bg-mist-deep"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <button
                  type="submit"
                  className="mt-1 w-full rounded-full bg-aqua py-2.5 text-sm font-semibold text-white transition hover:bg-aqua-deep"
                >
                  {t.hero.form.submit}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
