"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { isPreviewMode } from "@/lib/preview";

/**
 * Float "WhatsApp" das páginas de exemplo. Tem cara de botão de contato, mas o
 * atributo `data-demo-pitch` faz o clique abrir o modal de pitch (DemoPitchModal)
 * em vez de mandar mensagem pra um número fictício. Some no preview da miniatura.
 */
export function DemoFloat() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (isPreviewMode()) setHide(true);
  }, []);

  if (hide) return null;

  return (
    <motion.button
      type="button"
      data-demo-pitch
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 ring-1 ring-black/5"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsappIcon className="relative h-7 w-7" />
    </motion.button>
  );
}
