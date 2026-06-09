import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { Icon } from "@/lib/icons";
import type { StatsConfig } from "@/config/types";

/** Faixa de números escura com count-up — destaque de autoridade. */
export function Stats({ stats }: { stats: StatsConfig }) {
  return (
    <section className="relative overflow-hidden bg-surface-dark text-surface-dark-foreground">
      {/* Brilhos decorativos */}
      <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-accent-light/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

      <div className="container-px relative py-8 sm:py-12">
        {stats.title && (
          <Reveal className="mb-8 text-center">
            <h2 className="text-xl font-semibold sm:text-2xl">{stats.title}</h2>
          </Reveal>
        )}

        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {stats.items.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 0.08}
              className="flex flex-col items-center justify-center gap-1 text-center sm:flex-row sm:gap-3 sm:text-left"
            >
              {item.icon && (
                <Icon name={item.icon} size={22} className="hidden shrink-0 text-accent-light sm:block" />
              )}
              <div>
                <CountUp
                  value={item.value}
                  className="block text-xl font-bold leading-none tracking-tight sm:text-3xl"
                />
                <div className="mt-1 text-[10px] leading-tight text-surface-dark-muted sm:text-xs">
                  {item.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
