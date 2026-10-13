"use client";

import { LanguageProvider } from "@/lib/LanguageContext";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Process } from "./Process";
import { Trust } from "./Trust";
import { Reviews } from "./Reviews";
import { Faq } from "./Faq";
import { Areas } from "./Areas";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function HomePage() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Trust />
        <Reviews />
        <Faq />
        <Areas />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
