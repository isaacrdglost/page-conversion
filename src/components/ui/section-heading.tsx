import { Reveal } from "@/components/ui/reveal";
import { Highlight } from "@/components/ui/highlight";
import { cn } from "@/lib/utils";

/**
 * Cabeçalho padrão de seção: eyebrow + título (com **destaque**) + subtítulo.
 * `tone="dark"` ajusta as cores para seções de fundo escuro.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]",
              dark ? "text-accent-light" : "text-primary",
            )}
          >
            <span className={cn("h-px w-6", dark ? "bg-accent-light" : "bg-primary")} />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-[2.85rem]",
            dark ? "text-surface-dark-foreground" : "text-foreground",
          )}
        >
          <Highlight text={title} className={dark ? "text-accent-light" : undefined} />
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-4 text-base leading-relaxed sm:text-lg",
              dark ? "text-surface-dark-muted" : "text-muted-foreground",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
