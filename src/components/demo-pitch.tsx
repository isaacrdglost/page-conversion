"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { businessWhatsappHref } from "@/config/business";

/**
 * Modal de pitch das páginas de exemplo. Qualquer elemento com o atributo
 * `data-demo-pitch` (botões de CTA, float do WhatsApp, etc.) abre este modal em
 * vez de mandar mensagem pra um número fictício. O CTA do modal leva ao NOSSO
 * WhatsApp, com copy específica do nicho. Montar uma vez por página.
 */
export function DemoPitchModal({ niche }: { niche?: string }) {
  const [open, setOpen] = useState(false);

  const ctaLabel = niche ? `Quero minha página de ${niche}` : "Quero a minha página";
  const href = businessWhatsappHref(
    niche
      ? `Olá! Vi o exemplo de ${niche} e quero uma página assim, com a minha marca. Como ficaria?`
      : "Olá! Vi um exemplo e quero uma página assim, com a minha marca. Como ficaria?",
  );

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest?.("[data-demo-pitch]")) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            aria-label="Fechar"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-foreground/20 backdrop-blur-[14px]"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-2xl"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#25D366]/15 text-[#25D366]">
              <WhatsappIcon className="h-6 w-6" />
            </span>

            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.7rem]">
              Esse botão podia estar convertendo pra você.
            </h2>
            <p className="mx-auto mt-3 max-w-xs text-[15px] leading-relaxed text-muted-foreground">
              Você acabou de clicar no que o seu cliente vai clicar. Esse site, com a sua cara,
              pode estar trabalhando por você. Rápido, simples e acessível.
            </p>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-4 text-[15px] font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/40"
            >
              <WhatsappIcon className="h-5 w-5 transition-transform group-hover:rotate-6" />
              {ctaLabel}
            </a>

            <button
              onClick={() => setOpen(false)}
              className="mt-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Voltar ao exemplo
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
