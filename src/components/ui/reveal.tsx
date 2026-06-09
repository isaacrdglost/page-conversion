"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

/**
 * Anima o conteúdo entrando suavemente quando entra na viewport (scroll reveal).
 * - `direction`: de onde o elemento desliza (default "up").
 * - `scale`: adiciona um leve zoom de entrada.
 * - `delay`: escalona elementos em sequência.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  direction = "up",
  scale = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
  direction?: Direction;
  scale?: boolean;
}) {
  const MotionTag = motion[as];
  const variants: Variants = {
    hidden: { opacity: 0, ...offset[direction], ...(scale ? { scale: 0.94 } : {}) },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
