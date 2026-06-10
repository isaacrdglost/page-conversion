"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Check, ArrowLeft } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { businessWhatsappHref } from "@/config/business";
import { lockScroll, unlockScroll } from "@/lib/scroll-lock";
import { openModal, releaseModal, useModalSync } from "@/lib/modal-manager";

const MODAL_ID = "lead-quiz";

/**
 * "Montar a minha página": mini-form de 2 passos num modal de tamanho fixo.
 * 1) Ramo. 2) O que entra (cada item com uma explicação clara).
 * No fim, abre o WhatsApp com a mensagem montada a partir das escolhas.
 */

const RAMOS = [
  "Estética e beleza",
  "Advocacia",
  "Clínica e saúde",
  "Psicologia",
  "Academia e personal",
  "Outro",
];

const NEEDS: { title: string; desc: string }[] = [
  { title: "Site / Página", desc: "Sua presença profissional no ar, pronta pra converter." },
  { title: "Aparecer no Google", desc: "Ser encontrado por quem já procura por você." },
  { title: "Anúncios e tráfego", desc: "Atrair clientes novos com campanhas pagas." },
  { title: "Atendimento automático", desc: "Respostas e agendamento no WhatsApp, no automático." },
  { title: "Identidade visual", desc: "Logo, cores e a cara da sua marca." },
];

export function LeadQuiz({ triggerClassName }: { triggerClassName?: string }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [ramo, setRamo] = useState<string | null>(null);
  const [needs, setNeeds] = useState<string[]>([NEEDS[0].title]);

  const close = () => {
    setOpen(false);
    releaseModal(MODAL_ID);
  };

  // Se outro modal assumir a tela, este se fecha sozinho (sem sobreposição).
  useModalSync(MODAL_ID, open, () => setOpen(false));

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

  const start = () => {
    setStep(1);
    setRamo(null);
    setNeeds([NEEDS[0].title]);
    openModal(MODAL_ID);
    setOpen(true);
  };
  const pickRamo = (r: string) => {
    setRamo(r);
    setStep(2);
  };
  const toggleNeed = (n: string) =>
    setNeeds((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));

  const message = `Olá! Quero montar uma página para ${ramo ?? "o meu negócio"}. Preciso de: ${needs.join(", ")}.`;
  const href = businessWhatsappHref(message);

  return (
    <>
      <button
        onClick={start}
        className={
          triggerClassName ??
          "inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
        }
      >
        Montar a minha página
      </button>

      <AnimatePresence>
        {open && (
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
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-md flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
            >
              {/* Topo fixo: voltar / fechar + progresso */}
              <div className="shrink-0 px-7 pt-7 sm:px-8 sm:pt-8">
              <div className="flex items-center justify-between">
                {step === 2 ? (
                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Voltar
                  </button>
                ) : (
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground/70">
                    Montando a sua página
                  </span>
                )}
                <button
                  onClick={close}
                  aria-label="Fechar"
                  className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Progresso (2 etapas) */}
              <div className="mt-4 flex gap-1.5">
                <span className="h-1 flex-1 rounded-full bg-foreground" />
                <span className={`h-1 flex-1 rounded-full ${step === 2 ? "bg-foreground" : "bg-muted"}`} />
              </div>
              </div>

              {/* Conteúdo rolável: o botão de avançar sempre fica acessível no mobile */}
              <div className="min-h-0 flex-1 overflow-y-auto px-7 pb-7 sm:px-8 sm:pb-8">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                    className="mt-5"
                  >
                    {step === 1 ? (
                      <>
                        <h2 className="text-xl font-semibold tracking-tight text-foreground">
                          Pra começar, qual é o seu ramo?
                        </h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Assim eu já entendo o seu negócio.
                        </p>
                        <div className="mt-5 grid grid-cols-2 gap-2.5">
                          {RAMOS.map((r) => (
                            <button
                              key={r}
                              onClick={() => pickRamo(r)}
                              className="rounded-xl border border-border bg-background px-4 py-3.5 text-left text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground hover:bg-muted/40"
                            >
                              {r}
                            </button>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <h2 className="text-xl font-semibold tracking-tight text-foreground">
                          O que entra na sua página?
                        </h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Marque o que precisar. Dá pra começar só pelo site.
                        </p>
                        <div className="mt-5 flex flex-col gap-2">
                          {NEEDS.map((n) => {
                            const on = needs.includes(n.title);
                            return (
                              <button
                                key={n.title}
                                onClick={() => toggleNeed(n.title)}
                                className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                                  on ? "border-foreground bg-foreground/[0.04]" : "border-border hover:border-foreground/40"
                                }`}
                              >
                                <span
                                  className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border ${
                                    on ? "border-foreground bg-foreground text-background" : "border-border"
                                  }`}
                                >
                                  {on && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                                </span>
                                <span>
                                  <span className="block text-sm font-semibold text-foreground">{n.title}</span>
                                  <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                                    {n.desc}
                                  </span>
                                </span>
                              </button>
                            );
                          })}
                        </div>

                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={close}
                          className="group mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/40"
                        >
                          <WhatsappIcon className="h-5 w-5 transition-transform group-hover:rotate-6" />
                          Falar no WhatsApp
                        </a>
                      </>
                    )}
                  </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
