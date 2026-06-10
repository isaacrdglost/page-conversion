"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Check } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { Highlight } from "@/components/ui/highlight";
import { businessWhatsappHref } from "@/config/business";
import { isPreviewMode } from "@/lib/preview";
import { lockScroll, unlockScroll } from "@/lib/scroll-lock";
import { openModal, releaseModal, requestAutoModal, useModalSync } from "@/lib/modal-manager";
import type { PromoConfig } from "@/config/types";

const MODAL_ID = "promo-modal";

/** Grifo monocromático: texto preto com sublinhado em degradê (preto → cinza),
 *  funciona em texto de várias linhas (box-decoration-break). */
const MARK =
  "font-semibold text-foreground bg-[linear-gradient(90deg,var(--foreground),color-mix(in_srgb,var(--foreground)_45%,transparent))] [background-size:100%_0.14em] bg-bottom bg-no-repeat [box-decoration-break:clone] [-webkit-box-decoration-break:clone]";

/** Copy padrão (genérica) caso o template não defina a sua. */
const DEFAULT_PROMO: PromoConfig = {
  headline: "Imagina isso com o seu nome.",
  body: "Essa é a sensação que o seu próximo cliente vai ter ao te encontrar: **o profissional mais desejado e confiável, a escolha óbvia da sua cidade**. É essa primeira impressão que faz uma agenda transbordar. Me chama que eu te mostro como a sua ficaria.",
  chips: ["Mais clientes", "Mais autoridade", "Encontrado no Google"],
  primaryCta: "Quero isso pra mim",
  note: "Poucos projetos por vez, para cuidar de cada um de perto.",
  dismiss: "Continuar vendo",
  whatsappMessage:
    "Olá! Vi a página de exemplo e quero uma assim, com o meu nome. Me mostra como ficaria pra mim?",
};

const TIME_DELAY = 30_000; // 30s
const SCROLL_OFFSET = 140; // px do fim da página

export function PromoModal({
  promo,
  storageKey = "pc_promo_shown",
}: {
  promo?: PromoConfig;
  /** Chave de sessão. Use uma distinta por contexto (home vs demo). */
  storageKey?: string;
}) {
  const cfg = promo ?? DEFAULT_PROMO;
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
    releaseModal(MODAL_ID);
  };
  const openSelf = () => {
    openModal(MODAL_ID);
    setOpen(true);
  };

  // Se outro modal assumir a tela, este se fecha sozinho (sem sobreposição).
  useModalSync(MODAL_ID, open, () => setOpen(false));

  // Gatilho: 30s OU rolar até o fim. Dispara uma vez por sessão.
  useEffect(() => {
    if (cfg.enabled === false) return;
    if (typeof window === "undefined") return;
    if (isPreviewMode()) return; // não dispara dentro da miniatura

    // Atalho de teste/demo: ?promo=1 força o pop-up a abrir na hora, sempre.
    if (new URLSearchParams(window.location.search).get("promo") === "1") {
      const t = window.setTimeout(openSelf, 0);
      return () => window.clearTimeout(t);
    }

    if (sessionStorage.getItem(storageKey)) return;

    let done = false;
    const fire = () => {
      if (done) return;
      done = true;
      sessionStorage.setItem(storageKey, "1");
      cleanup();
      // Pede a vez ao coordenador: abre agora se livre, ou espera sem spam.
      requestAutoModal(openSelf);
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
  }, [cfg.enabled, storageKey]);

  // Trava o scroll do fundo e fecha no Esc enquanto aberto.
  useEffect(() => {
    if (!open) return;
    lockScroll();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      unlockScroll();
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const href = businessWhatsappHref(cfg.whatsappMessage);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          aria-hidden={!open}
        >
          {/* Backdrop desfocado */}
          <button
            aria-label="Fechar"
            onClick={close}
            className="absolute inset-0 bg-foreground/20 backdrop-blur-[14px]"
          />

          {/* Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="promo-title"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-border bg-card text-center shadow-2xl"
          >
            {/* Brilho decorativo */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />

            <button
              onClick={close}
              aria-label="Fechar"
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative min-h-0 overflow-y-auto px-6 py-8 sm:px-10 sm:py-10">
              <h2
                id="promo-title"
                className="text-3xl font-semibold tracking-tight text-foreground sm:text-[2.5rem] sm:leading-tight"
              >
                {cfg.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                <Highlight text={cfg.body} className={MARK} />
              </p>

              {cfg.chips && cfg.chips.length > 0 && (
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {cfg.chips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-[13px] font-medium text-primary"
                    >
                      <Check className="h-3.5 w-3.5" />
                      {chip}
                    </span>
                  ))}
                </div>
              )}

              {cfg.note && (
                <p className="mx-auto mt-5 max-w-xs text-[11px] leading-relaxed text-muted-foreground/70">
                  {cfg.note}
                </p>
              )}

              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
              >
                <WhatsappIcon className="h-5 w-5 transition-transform group-hover:rotate-6" />
                {cfg.primaryCta}
              </a>

              <button
                onClick={close}
                className="mt-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {cfg.dismiss ?? "Continuar vendo"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
