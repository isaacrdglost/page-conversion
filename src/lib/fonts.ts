import {
  Fraunces,
  Playfair_Display,
  Inter,
  Manrope,
  Geist,
  Cormorant_Garamond,
  Poppins,
  Sora,
} from "next/font/google";
import type { FontKey } from "@/config/types";

/**
 * Registro de fontes. Cada fonte expõe uma CSS variable própria; o
 * ThemeInjector escolhe quais alimentam --font-heading e --font-sans
 * com base no config do cliente.
 *
 * Para adicionar uma fonte nova: importe aqui, adicione ao objeto `fontVar`,
 * ao array `allFontVariables` e ao tipo FontKey em src/config/types.ts.
 */

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

/** Mapa de FontKey -> a CSS variable correspondente. */
export const fontVar: Record<FontKey, string> = {
  fraunces: "var(--font-fraunces)",
  playfair: "var(--font-playfair)",
  inter: "var(--font-inter)",
  manrope: "var(--font-manrope)",
  geist: "var(--font-geist-sans)",
  cormorant: "var(--font-cormorant)",
  poppins: "var(--font-poppins)",
  sora: "var(--font-sora)",
};

/** Classe a aplicar no <html> para que TODAS as variáveis de fonte existam. */
export const allFontVariables = [
  fraunces.variable,
  playfair.variable,
  inter.variable,
  manrope.variable,
  geist.variable,
  cormorant.variable,
  poppins.variable,
  sora.variable,
].join(" ");
