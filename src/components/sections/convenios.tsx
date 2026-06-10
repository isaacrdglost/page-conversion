import { ShieldCheck, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import type { ConveniosConfig } from "@/config/types";

/**
 * Faixa enxuta de convênios: "Aceitamos convênios e planos de saúde · Confira quais".
 * O CTA leva ao WhatsApp (nas demos, abre o pitch via data-demo-pitch). Versão de
 * entrada de baixo custo; a versão detalhada (logos dos planos) é upsell premium.
 */
export function Convenios({ convenios }: { convenios: ConveniosConfig }) {
  return (
    <section className="border-y border-border bg-muted/40 py-5 sm:py-6">
      <Reveal className="container-px flex flex-col items-center justify-center gap-x-4 gap-y-1.5 text-center sm:flex-row">
        <span className="flex items-center gap-2 text-sm font-medium text-foreground sm:text-[15px]">
          <ShieldCheck className="h-5 w-5 text-primary" />
          {convenios.title}
        </span>
        {convenios.cta && (
          <button
            type="button"
            data-demo-pitch
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            {convenios.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        )}
      </Reveal>
    </section>
  );
}
