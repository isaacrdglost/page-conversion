"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { businessWhatsappHref } from "@/config/business";
import { isPreviewMode } from "@/lib/preview";

const HREF = businessWhatsappHref(
  "Olá! Vi um exemplo e quero a minha página personalizada.",
);

/**
 * Selo discreto que sinaliza que a página é um exemplo (a versão do cliente é
 * personalizada). Canto inferior esquerdo, para não colidir com o WhatsApp float
 * (inferior direito). Nunca usa a palavra "template".
 */
export function ExampleBadge() {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    if (isPreviewMode()) setHide(true);
  }, []);
  if (hide) return null;

  return (
    <motion.a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full border border-border bg-card/85 px-3.5 py-2 text-xs font-medium text-muted-foreground shadow-lg shadow-black/5 backdrop-blur transition-colors hover:text-foreground"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      Exemplo
      <span className="hidden sm:inline text-muted-foreground/80">· a sua é personalizada</span>
    </motion.a>
  );
}
