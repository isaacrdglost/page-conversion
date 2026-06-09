"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

/**
 * Número que sobe de 0 até o alvo quando entra na viewport.
 * Aceita valores com prefixo/sufixo: "12+", "500+", "5.0", "98%".
 * A parte numérica é animada; prefixo e sufixo são preservados.
 */
export function CountUp({
  value,
  duration = 1.6,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const match = value.match(/^(\D*)(\d+(?:[.,]\d+)?)(\D*)$/);
  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const decimals = /[.,]/.test(numStr) ? numStr.split(/[.,]/)[1].length : 0;
  const target = match ? parseFloat(numStr.replace(",", ".")) : 0;

  const [display, setDisplay] = useState(match ? `${prefix}0${decimals ? "." + "0".repeat(decimals) : ""}${suffix}` : value);

  useEffect(() => {
    if (!match || !inView) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(`${prefix}${latest.toFixed(decimals)}${suffix}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
