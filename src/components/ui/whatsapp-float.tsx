"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { isPreviewMode } from "@/lib/preview";

/** Botão flutuante de WhatsApp — aparece com leve atraso e pulsa discretamente. */
export function WhatsAppFloat({ href }: { href: string }) {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    if (isPreviewMode()) setHide(true);
  }, []);
  if (hide) return null;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
    </motion.a>
  );
}
