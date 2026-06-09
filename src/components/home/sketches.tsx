"use client";

import { motion, useReducedMotion, type Transition } from "motion/react";

/**
 * Ilustrações em line-art (estilo sketch/Figma) com baixa opacidade e movimento.
 * Cada traço "se desenha" ao entrar na viewport e o conjunto flutua suavemente.
 * A cor vem do `currentColor`, então controle pela classe de texto do pai.
 */

const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const drawTransition = (delay = 0): Transition => ({
  duration: 1.1,
  ease: [0.22, 1, 0.36, 1],
  delay,
});

/** Traço que se desenha ao entrar na tela. */
function useDraw() {
  const reduce = useReducedMotion();
  return (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          whileInView: { pathLength: 1, opacity: 1 },
          viewport: { once: true, margin: "-40px" },
          transition: drawTransition(delay),
        };
}

/** Wrapper que flutua de leve, em loop. */
function Float({
  children,
  className,
  amount = 8,
  duration = 6,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  amount?: number;
  duration?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      animate={reduce ? undefined : { y: [0, -amount, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/** Janela de navegador com uma linha que "escaneia" o conteúdo. */
export function SketchWindow({ className }: { className?: string }) {
  const draw = useDraw();
  const reduce = useReducedMotion();
  return (
    <Float className={className} duration={7}>
      <svg viewBox="0 0 120 92" className="h-full w-full" aria-hidden>
        <motion.rect x="8" y="8" width="104" height="76" rx="9" {...STROKE} {...draw(0)} />
        <motion.line x1="8" y1="27" x2="112" y2="27" {...STROKE} {...draw(0.2)} />
        <circle cx="18" cy="17.5" r="1.8" {...STROKE} />
        <circle cx="26" cy="17.5" r="1.8" {...STROKE} />
        <circle cx="34" cy="17.5" r="1.8" {...STROKE} />
        <motion.rect x="20" y="38" width="46" height="7" rx="3.5" {...STROKE} {...draw(0.45)} />
        <motion.rect x="20" y="52" width="80" height="6" rx="3" {...STROKE} {...draw(0.6)} />
        <motion.rect x="20" y="64" width="58" height="6" rx="3" {...STROKE} {...draw(0.75)} />
        {!reduce && (
          <motion.line
            x1="12"
            x2="108"
            y1="34"
            y2="34"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
            animate={{ y: [0, 42, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </svg>
    </Float>
  );
}

/** Cursor estilo Figma com um "clique" pulsando. */
export function SketchCursor({ className }: { className?: string }) {
  const draw = useDraw();
  const reduce = useReducedMotion();
  return (
    <Float className={className} duration={5.5} amount={6}>
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
        <motion.path
          d="M20 14 L20 50 L30 41 L36 54 L43 51 L37 38 L50 38 Z"
          {...STROKE}
          {...draw(0.1)}
        />
        {!reduce && (
          <motion.circle
            cx="44"
            cy="46"
            r="6"
            stroke="currentColor"
            strokeWidth="1.4"
            fill="none"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1.6], opacity: [0, 0.6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", repeatDelay: 1 }}
            style={{ transformOrigin: "44px 46px" }}
          />
        )}
      </svg>
    </Float>
  );
}

/** Brilho/sparkle de 4 pontas. */
export function SketchSpark({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <Float className={className} duration={6.5} amount={5}>
      <motion.svg
        viewBox="0 0 48 48"
        className="h-full w-full"
        aria-hidden
        animate={reduce ? undefined : { rotate: [0, 12, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M24 6 C25 16, 32 23, 42 24 C32 25, 25 32, 24 42 C23 32, 16 25, 6 24 C16 23, 23 16, 24 6 Z"
          {...STROKE}
        />
      </motion.svg>
    </Float>
  );
}

/** Diagnóstico: lupa que percorre um documento. */
export function SketchSearch({ className }: { className?: string }) {
  const draw = useDraw();
  const reduce = useReducedMotion();
  return (
    <div className={className}>
      <svg viewBox="0 0 96 96" className="h-full w-full" aria-hidden>
        <motion.rect x="16" y="14" width="56" height="68" rx="7" {...STROKE} {...draw(0)} />
        <motion.line x1="26" y1="30" x2="56" y2="30" {...STROKE} {...draw(0.2)} />
        <motion.line x1="26" y1="42" x2="62" y2="42" {...STROKE} {...draw(0.3)} />
        <motion.line x1="26" y1="54" x2="48" y2="54" {...STROKE} {...draw(0.4)} />
        <motion.g
          animate={reduce ? undefined : { x: [0, 8, -4, 0], y: [0, -4, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.circle cx="58" cy="58" r="14" {...STROKE} {...draw(0.55)} />
          <motion.line x1="68" y1="68" x2="80" y2="80" {...STROKE} {...draw(0.7)} />
        </motion.g>
      </svg>
    </div>
  );
}

/** Construção: blocos de wireframe sendo montados. */
export function SketchLayout({ className }: { className?: string }) {
  const draw = useDraw();
  const reduce = useReducedMotion();
  return (
    <div className={className}>
      <svg viewBox="0 0 96 96" className="h-full w-full" aria-hidden>
        <motion.rect x="14" y="14" width="68" height="68" rx="8" {...STROKE} {...draw(0)} />
        <motion.rect
          x="22"
          y="22"
          width="52"
          height="16"
          rx="3"
          {...STROKE}
          {...draw(0.25)}
          animate={reduce ? undefined : { opacity: [1, 0.5, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect x="22" y="44" width="24" height="30" rx="3" {...STROKE} {...draw(0.45)} />
        <motion.rect
          x="50"
          y="44"
          width="24"
          height="30"
          rx="3"
          {...STROKE}
          {...draw(0.6)}
          animate={reduce ? undefined : { opacity: [1, 0.5, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
      </svg>
    </div>
  );
}

/** Entrega: foguete subindo com rastro. */
export function SketchRocket({ className }: { className?: string }) {
  const draw = useDraw();
  const reduce = useReducedMotion();
  return (
    <div className={className}>
      <svg viewBox="0 0 96 96" className="h-full w-full" aria-hidden>
        <motion.g
          animate={reduce ? undefined : { y: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.path
            d="M48 16 C60 26, 62 44, 56 60 L40 60 C34 44, 36 26, 48 16 Z"
            {...STROKE}
            {...draw(0)}
          />
          <motion.circle cx="48" cy="38" r="6" {...STROKE} {...draw(0.3)} />
          <motion.path d="M40 56 L30 66 L40 64" {...STROKE} {...draw(0.45)} />
          <motion.path d="M56 56 L66 66 L56 64" {...STROKE} {...draw(0.45)} />
        </motion.g>
        {!reduce && (
          <motion.path
            d="M48 64 L48 80"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            animate={{ opacity: [0.1, 0.7, 0.1], pathLength: [0.3, 1, 0.3] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </svg>
    </div>
  );
}
