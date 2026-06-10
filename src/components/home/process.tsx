"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";
import { HomeSection } from "@/components/home/section";
import { HighlightMark } from "@/components/home/highlight-mark";
import { Reveal } from "@/components/ui/reveal";
import { SketchSearch, SketchLayout, SketchRocket } from "@/components/home/sketches";

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    description: "Um mergulho no seu negócio, no seu público e no que move uma decisão de compra.",
    Sketch: SketchSearch,
  },
  {
    n: "02",
    title: "Construção",
    description: "Design e desenvolvimento da sua página com todo o repertório de marca, texto e código.",
    Sketch: SketchLayout,
  },
  {
    n: "03",
    title: "Entrega",
    description: "Você recebe uma página rápida e elegante, pronta para converter pelo WhatsApp.",
    Sketch: SketchRocket,
  },
];

/** Processo: timeline com uma trilha leve que se preenche conforme o scroll. */
export function Process() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 55%"],
  });

  return (
    <HomeSection id="processo">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <h2 className="text-[2.4rem] font-semibold leading-[1.04] tracking-[-0.02em] sm:text-5xl md:text-[3.4rem]">
            Como o seu
            <br />
            projeto ganha
            <br />
            <HighlightMark>vida</HighlightMark>.
          </h2>
        </Reveal>

        <div ref={trackRef} className="relative">
        {/* Trilha base (faint) */}
        <div
          aria-hidden
          className="absolute bottom-8 left-6 top-8 w-px -translate-x-1/2 bg-border"
        />
        {/* Trilha de progresso, preenche com o scroll */}
        <motion.div
          aria-hidden
          className="absolute bottom-8 left-6 top-8 w-px -translate-x-1/2 origin-top bg-foreground/45"
          style={{ scaleY: reduce ? 1 : scrollYProgress }}
        />

        <div className="space-y-12">
          {STEPS.map((s, i) => {
            const Sketch = s.Sketch;
            return (
              <motion.div
                key={s.n}
                className="group relative flex items-start gap-6"
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex w-12 shrink-0 justify-center">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background font-heading text-base font-semibold transition-colors duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                    {s.n}
                  </span>
                </div>

                <div className="flex flex-1 items-start justify-between gap-4 pt-1.5">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                  <Sketch className="h-16 w-16 shrink-0 text-foreground/30 transition-colors duration-300 group-hover:text-foreground/55 sm:h-20 sm:w-20" />
                </div>
              </motion.div>
            );
          })}
        </div>
        </div>
      </div>
    </HomeSection>
  );
}
