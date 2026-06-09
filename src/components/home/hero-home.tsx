"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/whatsapp";

/**
 * Frases que giram no final do título, cada uma quebrada em 2 linhas fixas
 * para manter a altura estável. A 1ª é o fallback estático (SSR / reduced-motion).
 */
const ROTATING: [string, string][] = [
  ["vendem", "por você"],
  ["trazem clientes", "de verdade"],
  ["fazem você ser", "a escolha óbvia"],
  ["trabalham", "sem parar"],
];

const enter: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function HeroHome({
  city,
  whatsapp,
}: {
  /** Cidade detectada por IP; null quando indisponível (dev / sem geo). */
  city: string | null;
  whatsapp: string;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % ROTATING.length), 6000);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section id="inicio" className="relative overflow-hidden border-b border-border">
      {/* Brilho de gradiente suave (versão light do azul→vermelho da Vercel) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 45% at 50% 12%, rgba(10,10,10,0.06), transparent 70%), radial-gradient(40% 35% at 85% 10%, rgba(10,10,10,0.04), transparent 70%)",
        }}
      />
      {/* Linhas verticais internas (estrutura compacta tipo Vercel) */}
      <div className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-4xl" aria-hidden>
        <div className="absolute inset-y-0 left-1/4 w-px bg-border/50" />
        <div className="absolute inset-y-0 right-1/4 w-px bg-border/50" />
      </div>

      <div className="mx-auto flex min-h-dvh max-w-4xl flex-col px-6 pb-8 pt-16 text-center sm:pt-20">
        {/* Bloco de conteúdo centralizado (equilíbrio cima/baixo) */}
        <div className="flex flex-1 flex-col items-center justify-center">
        {/* Eyebrow dinâmica por cidade */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={enter}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-muted-foreground/80"
        >
          Feito para negócios que crescem{" "}
          {city ? (
            <>
              em{" "}
              <span className="font-semibold text-foreground underline decoration-foreground/30 underline-offset-4">
                {city}
              </span>
            </>
          ) : (
            <>
              na{" "}
              <span className="font-semibold text-foreground underline decoration-foreground/30 underline-offset-4">
                sua cidade
              </span>
            </>
          )}
        </motion.p>

        {/* Headline com palavra rotativa (altura fixa, sem pulo de layout) */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={enter}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-heading text-[clamp(2rem,8.5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight"
        >
          Páginas que
          {/* Grid stack: as 2 linhas definem a altura sozinhas (nunca corta/some);
              whitespace-nowrap garante que cada linha fique numa linha só. */}
          <span className="relative mt-2 grid">
            <AnimatePresence initial={false}>
              <motion.span
                key={index}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="col-start-1 row-start-1 flex flex-col items-center bg-gradient-to-r from-foreground to-foreground/55 bg-clip-text text-transparent"
              >
                <span className="block whitespace-nowrap">{ROTATING[index][0]}</span>
                <span className="block whitespace-nowrap">{ROTATING[index][1]}.</span>
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={enter}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Páginas de alto nível, rápidas e acessíveis. Uma janela exclusiva, criada por
          quem já posicionou marcas em dezenas de nichos.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={enter}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-11 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-wa-interstitial
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5"
          >
            <WhatsappIcon className="h-[18px] w-[18px]" />
            Falar no WhatsApp
          </a>
          <a
            href="#templates"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-muted"
          >
            Ver exemplos
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
        </div>

        {/* Indicador de scroll (no fluxo, no rodapé da seção) */}
        <motion.a
          href="#tese"
          aria-label="Rolar para ver mais"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 flex flex-col items-center gap-1.5 self-center text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Role para ver</span>
          <motion.span
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
