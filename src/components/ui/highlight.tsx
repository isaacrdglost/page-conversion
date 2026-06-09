import { Fragment } from "react";
import { cn } from "@/lib/utils";

/**
 * Renderiza um texto destacando trechos marcados com **asteriscos** com cor +
 * peso (sans premium). Ex: "Sorrisos **reais**" → "reais" em teal/semibold.
 * Use `className` para variar o destaque (ex: tom mais claro em fundo escuro).
 */
export function Highlight({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className={cn("font-semibold text-primary", className)}>
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
