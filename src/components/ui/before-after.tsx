"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

/**
 * Comparador Antes/Depois arrastável. A imagem "depois" fica por baixo;
 * a "antes" é recortada por clip-path conforme a posição do controle.
 * Acessível via <input type="range"> (teclado + leitor de tela).
 */
export function BeforeAfter({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label?: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-muted select-none">
      {/* Depois (base) */}
      <Image src={after} alt={label ? `${label}: depois` : "Depois"} fill className="object-cover" sizes="(max-width:768px) 90vw, 45vw" />
      <span className="absolute right-3 top-3 rounded-full bg-foreground/70 px-3 py-1 text-[11px] font-medium text-background backdrop-blur">
        Depois
      </span>

      {/* Antes (recortado) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={label ? `${label}: antes` : "Antes"} fill className="object-cover" sizes="(max-width:768px) 90vw, 45vw" />
        <span className="absolute left-3 top-3 rounded-full bg-background/80 px-3 py-1 text-[11px] font-medium text-foreground backdrop-blur">
          Antes
        </span>
      </div>

      {/* Linha + handle */}
      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -ml-px w-0.5 bg-white/90 shadow" />
        <div className="absolute top-1/2 -ml-5 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white text-primary shadow-lg ring-1 ring-black/5">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>

      {/* Controle acessível por cima */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={label ? `Comparar antes e depois: ${label}` : "Comparar antes e depois"}
        className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
      />

      {label && (
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground/70 px-3 py-1 text-[11px] font-medium text-background backdrop-blur">
          {label}
        </span>
      )}
    </div>
  );
}
