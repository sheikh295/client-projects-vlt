import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Limpiezas El Genio Madrid | Limpieza profesional",
  description:
    "Empresa de limpieza en Madrid: hogares, tras reforma, oficinas y tapicería. 4,9★ en Google. Chamberí y toda la ciudad.",
  openGraph: {
    title: "Limpiezas El Genio Madrid",
    description:
      "Tu casa, impecable. Sin complicaciones. Limpieza profesional en Madrid.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
