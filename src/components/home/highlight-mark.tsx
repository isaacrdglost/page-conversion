import type { ReactNode } from "react";

/**
 * Palavra em destaque: aplica o degradê preto → cinza ao próprio TEXTO
 * (bg-clip-text), igual ao título do hero. Monocromático e coerente.
 */
export function HighlightMark({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bg-gradient-to-r from-foreground to-foreground/55 bg-clip-text text-transparent ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
