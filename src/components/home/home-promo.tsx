"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Check } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { HighlightMark } from "@/components/home/highlight-mark";
import { businessWhatsappHref } from "@/config/business";
import { lockScroll, unlockScroll } from "@/lib/scroll-lock";

/**
 * Pop-up de conversão da HOME — independente do PromoModal dos templates.
 * Mexa só aqui para a home; os templates têm o próprio pop-up.
 * Ângulo: ancoragem de valor (o mercado cobra 3x) + condição de entrada.
 */

const CHIPS = ["Sob medida", "Alto nível", "Começo de parceria"];
const HREF = businessWhatsappHref("Olá! Vi o site e quero entender a condição de entrada.");

const SESSION_KEY = "pc_promo_home";
const TIME_DELAY = 30_000; // 30s
const SCROLL_OFFSET = 140; // px do fim da página

export function HomePromo() {
  const [open, setOpen] = useState(false);

  // Gatilho: 30s OU rolar até o fim. Uma vez por sessão. ?promo=1 força abrir.
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (new URLSearchParams(window.location.search).get("promo") === "1") {
      const t = window.setTimeout(() => setOpen(true), 0);
      return () => window.clearTimeout(t);
    }

    if (sessionStorage.getItem(SESSION_KEY)) return;

    let done = false;
    const fire = () => {
      if (done) return;
      done = true;
      sessionStorage.setItem(SESSION_KEY, "1");
      setOpen(true);
      cleanup();
    };

    const onScroll = () => {
      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - SCROLL_OFFSET;
      if (reachedBottom) fire();
    };

    const timer = window.setTimeout(fire, TIME_DELAY);
    window.addEventListener("scroll", onScroll, { passive: true });

    function cleanup() {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    }
    return cleanup;
  }, []);

  // Trava o scroll do fundo e fecha no Esc.
  useEffect(() => {
    if (!open) return;
    lockScroll();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      unlockScroll();
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            aria-label="Fechar"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-foreground/20 backdrop-blur-[14px]"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="home-promo-title"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-border bg-card text-center shadow-2xl"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="min-h-0 overflow-y-auto px-6 py-8 sm:px-10 sm:py-10">
            <h2
              id="home-promo-title"
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-[2.5rem] sm:leading-tight"
            >
              Lá fora, isto custa <HighlightMark>3x</HighlightMark>.
            </h2>

            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Uma página deste nível, com estratégia, design e código de verdade, custa o triplo no
              mercado. Esta é uma janela exclusiva: projetos rápidos e acessíveis para alavancar
              marcas com potencial real. Vamos conversar.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3.5 py-1.5 text-[13px] font-medium text-foreground"
                >
                  <Check className="h-3.5 w-3.5" />
                  {chip}
                </span>
              ))}
            </div>

            <a
              href={HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/40"
            >
              <WhatsappIcon className="h-5 w-5 transition-transform group-hover:rotate-6" />
              Quero entender a condição
            </a>

            <p className="mx-auto mt-5 max-w-xs text-[11px] leading-relaxed text-muted-foreground/70">
              Vagas limitadas, com seleção por projeto.
            </p>

            <button
              onClick={() => setOpen(false)}
              className="mt-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Continuar vendo
            </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
