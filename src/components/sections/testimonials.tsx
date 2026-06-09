"use client";

import { Star, Quote } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { GoogleBadge } from "@/components/ui/google-badge";
import type { TestimonialsConfig } from "@/config/types";

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Testimonials({ testimonials }: { testimonials: TestimonialsConfig }) {
  const reduce = useReducedMotion();
  // Triplica os itens para um carrossel contínuo e sem emendas.
  const loop = [...testimonials.items, ...testimonials.items, ...testimonials.items];

  return (
    <section id="depoimentos" className="bg-surface-dark text-surface-dark-foreground">
      <div className="container-px pt-20 sm:pt-28">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          subtitle={testimonials.subtitle}
          tone="dark"
        />

        {testimonials.google && (
          <Reveal delay={0.12} className="mt-8 flex justify-center">
            <GoogleBadge
              rating={testimonials.google.rating}
              reviewsLabel={testimonials.google.reviewsLabel}
              url={testimonials.google.url}
              tone="dark"
            />
          </Reveal>
        )}
      </div>

      {/* Carrossel infinito de uma linha, lento e fluido */}
      <div className="relative mt-12 overflow-hidden pb-20 sm:mt-16 sm:pb-28">
        {/* Máscaras de borda para o fade nas pontas */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface-dark to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface-dark to-transparent sm:w-28" />

        <motion.div
          className="flex w-max gap-4 px-4"
          animate={reduce ? undefined : { x: ["0%", "-33.3333%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((t, i) => (
            <figure
              key={i}
              className="flex w-[290px] shrink-0 flex-col rounded-2xl border border-surface-dark-border bg-white/[0.02] p-6 sm:w-[360px]"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-6 w-6 text-accent-light/40" fill="currentColor" strokeWidth={0} />
                <div className="flex gap-0.5 text-accent-light">
                  {Array.from({ length: t.rating ?? 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                  ))}
                </div>
              </div>

              <blockquote className="mt-4 flex-1 text-[14px] leading-[1.7] text-surface-dark-foreground/90">
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-surface-dark-border pt-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-light/15 text-xs font-bold text-accent-light">
                  {initials(t.author)}
                </span>
                <span>
                  <span className="block text-[13px] font-semibold text-surface-dark-foreground">
                    {t.author}
                  </span>
                  {t.role && (
                    <span className="block text-[11px] text-surface-dark-muted">{t.role}</span>
                  )}
                </span>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
