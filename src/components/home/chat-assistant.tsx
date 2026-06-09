"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageSquare, X } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { businessWhatsappHref } from "@/config/business";

/**
 * Assistente de chat da HOME (preto/cinza, não vai direto pro WhatsApp).
 * Conversa por opções (scriptada, sem IA): responde 5 dúvidas comuns,
 * cada caminho terminando num convite pro WhatsApp.
 */

type QA = { q: string; a: string; wa: string };

const FAQ: QA[] = [
  {
    q: "Em quanto tempo fica pronta?",
    a: "Rápido. Como o trabalho parte de uma base de alto nível e é personalizado pra você, a sua página fica pronta em poucos dias, não em meses.",
    wa: "Olá! Quero entender o prazo da minha página.",
  },
  {
    q: "Funciona pro meu negócio?",
    a: "Sim. Cada página é pensada por nicho e moldada ao seu posicionamento. Consultório, escritório, estúdio ou loja: ela fala com o seu cliente.",
    wa: "Olá! Quero saber como ficaria a página pro meu negócio.",
  },
  {
    q: "E as fotos e os textos?",
    a: "Sem dor de cabeça. A estratégia de texto já vem inclusa e a escolha das imagens é guiada passo a passo. Você só aprova.",
    wa: "Olá! Tenho dúvida sobre fotos e textos da minha página.",
  },
  {
    q: "Dá pra evoluir depois?",
    a: "Total. A página é o primeiro passo. Quando fizer sentido, dá pra ir além: tráfego, atendimento automático, organização de clientes e site completo.",
    wa: "Olá! Quero entender como evoluir além da página.",
  },
  {
    q: "Por que custa menos que o mercado?",
    a: "Porque é uma janela exclusiva: o mesmo nível que o mercado cobra caro, por uma fração, para ampliar repertório e começar uma parceria que cresce com o tempo.",
    wa: "Olá! Quero entender a condição da janela exclusiva.",
  },
];

type Msg = { role: "bot" | "user"; text: string; wa?: string };

const GREETING: Msg = { role: "bot", text: "Olá! Sobre o que você quer saber?" };

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [asked, setAsked] = useState<number[]>([]);
  const [hidden, setHidden] = useState(true); // some na 1ª e na última seção
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, open]);

  // Esconde o botão quando a primeira (#inicio) ou a última (#compromisso) seção
  // está em vista; mostra no miolo da página.
  useEffect(() => {
    const els = ["inicio", "compromisso"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as Element[];
    if (!els.length) {
      setHidden(false);
      return;
    }
    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        });
        setHidden(visible.size > 0);
      },
      { threshold: 0.35 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const ask = (i: number) => {
    const item = FAQ[i];
    setAsked((prev) => [...prev, i]);
    setMessages((prev) => [
      ...prev,
      { role: "user", text: item.q },
      { role: "bot", text: item.a, wa: item.wa },
    ]);
  };

  const remaining = FAQ.map((_, i) => i).filter((i) => !asked.includes(i));

  return (
    <>
      {/* Botão flutuante (preto) */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir chat"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: hidden && !open ? 0 : 1, opacity: hidden && !open ? 0 : 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-lg shadow-black/25 ${
          hidden && !open ? "pointer-events-none" : ""
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "x" : "chat"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* Painel do chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-label="Assistente"
            className="fixed bottom-24 right-5 z-50 flex max-h-[70vh] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border bg-foreground px-5 py-4 text-background">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-background/15">
                <MessageSquare className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold">Tire suas dúvidas</div>
                <div className="text-[11px] text-background/60">Resposta na hora, sem compromisso</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar"
                className="ml-auto grid h-8 w-8 place-items-center rounded-full text-background/70 transition-colors hover:bg-background/15 hover:text-background"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Mensagens */}
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div className="max-w-[85%]">
                    <div
                      className={
                        m.role === "user"
                          ? "rounded-2xl rounded-br-sm bg-foreground px-3.5 py-2.5 text-[13px] leading-relaxed text-background"
                          : "rounded-2xl rounded-bl-sm bg-muted px-3.5 py-2.5 text-[13px] leading-relaxed text-foreground"
                      }
                    >
                      {m.text}
                    </div>
                    {m.wa && (
                      <a
                        href={businessWhatsappHref(m.wa)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5"
                      >
                        <WhatsappIcon className="h-4 w-4" />
                        Falar no WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Opções rápidas */}
            <div className="border-t border-border bg-muted/30 px-4 py-3">
              {remaining.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {remaining.map((i) => (
                    <button
                      key={i}
                      onClick={() => ask(i)}
                      className="rounded-full border border-border bg-background px-3.5 py-1.5 text-left text-[12px] font-medium text-foreground transition-colors hover:border-foreground"
                    >
                      {FAQ[i].q}
                    </button>
                  ))}
                </div>
              ) : (
                <a
                  href={businessWhatsappHref("Olá! Vim pelo site e quero conversar.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                >
                  <WhatsappIcon className="h-4 w-4" />
                  Continuar no WhatsApp
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
