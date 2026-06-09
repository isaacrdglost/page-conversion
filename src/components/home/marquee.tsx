"use client";

import { motion, useReducedMotion } from "motion/react";
import { PlusMark } from "@/components/home/section";

const NICHES = [
  "Odontologia",
  "Estética",
  "Advocacia",
  "Arquitetura",
  "Psicologia",
  "Nutrição",
  "Buffet & Eventos",
  "Personal Trainer",
  "Clínicas",
];

/** Faixa fina com nichos passando: dá movimento e sinaliza que há mais abaixo. */
export function Marquee() {
  const reduce = useReducedMotion();
  const track = [...NICHES, ...NICHES];

  return (
    <div className="relative overflow-hidden border-b border-border bg-muted/30 py-3.5">
      <PlusMark className="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
      <PlusMark className="right-0 top-0 translate-x-1/2 -translate-y-1/2" />

      {/* Esmaecimento nas bordas */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        className="flex w-max items-center gap-10"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 85, repeat: Infinity, ease: "linear" }}
      >
        {track.map((niche, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground/45">
              {niche}
            </span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/20" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
