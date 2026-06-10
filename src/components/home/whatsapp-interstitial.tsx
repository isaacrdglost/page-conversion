"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Loader2 } from "lucide-react";
import { lockScroll, unlockScroll } from "@/lib/scroll-lock";
import { openModal, releaseModal, useModalSync } from "@/lib/modal-manager";

const MODAL_ID = "wa-interstitial";

/**
 * Intermediário entre a HOME e o WhatsApp. Intercepta apenas os links marcados
 * com data-wa-interstitial (opt-in: hero + última seção). O "carregamento" é a
 * sequência de itens surgindo um a um: cada um entra com um spinner girando que
 * vira check verde quando completa. Ao concluir o último, redireciona sozinho.
 */

const INCLUDED = ["Estratégia", "Design", "Copy", "Acompanhamento", "Estrutura completa"];

const STEP_MS = 750; // intervalo entre cada item surgir/completar
const FINAL_DELAY = 500; // beat após o último check antes de redirecionar
// Total ≈ STEP_MS * (itens + 1) + FINAL_DELAY = 5s

export function WhatsAppInterstitial() {
  const [href, setHref] = useState<string | null>(null);
  const [shown, setShown] = useState(0); // quantos itens já surgiram
  const [finished, setFinished] = useState(false); // último item concluído

  const close = () => {
    setHref(null);
    releaseModal(MODAL_ID);
  };

  // Se outro modal assumir a tela, este se fecha sozinho (sem sobreposição).
  useModalSync(MODAL_ID, href !== null, () => setHref(null));

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (anchor.dataset.waInterstitial === undefined) return;
      e.preventDefault();
      e.stopPropagation();
      openModal(MODAL_ID);
      setHref(anchor.href);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (!href) return;
    setShown(0);
    setFinished(false);

    lockScroll();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);

    const timers = INCLUDED.map((_, i) =>
      window.setTimeout(() => setShown(i + 1), STEP_MS * (i + 1)),
    );
    const finishTimer = window.setTimeout(
      () => setFinished(true),
      STEP_MS * (INCLUDED.length + 1),
    );
    const redirect = window.setTimeout(
      () => {
        window.location.href = href;
      },
      STEP_MS * (INCLUDED.length + 1) + FINAL_DELAY,
    );

    return () => {
      unlockScroll();
      window.removeEventListener("keydown", onKey);
      timers.forEach((t) => window.clearTimeout(t));
      window.clearTimeout(finishTimer);
      window.clearTimeout(redirect);
    };
  }, [href]);

  return (
    <AnimatePresence>
      {href && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            aria-label="Fechar"
            onClick={close}
            className="absolute inset-0 bg-foreground/20 backdrop-blur-[14px]"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="wa-interstitial-title"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-border bg-card text-center shadow-2xl"
          >
            <div className="min-h-0 overflow-y-auto p-8">
            <h2
              id="wa-interstitial-title"
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-[1.7rem]"
            >
              Você está a um passo de alavancar.
            </h2>

            <ul className="mx-auto mt-7 flex max-w-xs flex-col gap-3 text-left">
              {INCLUDED.map((item, i) => {
                const visible = i < shown;
                const checked = i < shown - 1 || finished;
                return (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 10 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-3 text-[15px] font-medium text-foreground"
                  >
                    <motion.span
                      className="grid h-6 w-6 shrink-0 place-items-center rounded-full"
                      animate={{
                        backgroundColor: checked
                          ? "rgba(37,211,102,0.16)"
                          : "rgba(120,120,120,0.12)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {checked ? (
                          <motion.span
                            key="check"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 420, damping: 16 }}
                            className="text-[#25D366]"
                          >
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="spin"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-muted-foreground/60"
                          >
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.span>
                    {item}
                  </motion.li>
                );
              })}
            </ul>

            <p className="mt-8 text-[12px] text-muted-foreground">
              Preparando o seu atendimento...
            </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
