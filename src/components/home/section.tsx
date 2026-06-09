import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/** Marcador "+" nas interseções das linhas da moldura (estilo Vercel). */
export function PlusMark({ className = "" }: { className?: string }) {
  return (
    <Plus
      aria-hidden
      strokeWidth={1.25}
      className={cn("pointer-events-none absolute z-10 h-3.5 w-3.5 text-muted-foreground/45", className)}
    />
  );
}

/**
 * Linha da moldura: seção com divisória inferior e os "+" nos cantos superiores,
 * onde a divisória encontra as linhas verticais da coluna.
 */
export function HomeSection({
  id,
  children,
  className,
  innerClassName,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section id={id} className={cn("relative border-b border-border", className)}>
      <PlusMark className="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
      <PlusMark className="right-0 top-0 translate-x-1/2 -translate-y-1/2" />
      <div className={cn("px-6 py-24 sm:px-10 sm:py-28 lg:py-32", innerClassName)}>{children}</div>
    </section>
  );
}

/** Título de seção sem eyebrow: só headline (com possível grifado) + subtítulo. */
export function Heading({
  title,
  subtitle,
  align = "left",
  className,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      <Reveal>
        <h2 className="text-[1.95rem] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-4xl md:text-[2.85rem]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.08}>
          <p
            className={cn(
              "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]",
              align === "center" && "mx-auto",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
