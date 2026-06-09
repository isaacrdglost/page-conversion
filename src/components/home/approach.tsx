import { Search, MousePointerClick, CalendarCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { HomeSection, Heading } from "@/components/home/section";
import { HighlightMark } from "@/components/home/highlight-mark";

const PILLARS = [
  {
    icon: Search,
    title: "Diagnóstico do negócio",
    description: "Um mergulho no seu mercado, no seu público e no que faz alguém comprar de você.",
  },
  {
    icon: MousePointerClick,
    title: "Página de conversão",
    description: "Cada seção conduz o visitante até a ação, com clareza e sem distração.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento e WhatsApp",
    description: "O contato cai direto no seu WhatsApp, pronto para virar cliente.",
  },
];

/** Abordagem: mostra o método (diagnóstico → solução) por capacidades concretas. */
export function Approach() {
  return (
    <HomeSection id="abordagem" className="bg-muted/20">
      <Heading
        title={
          <>
            Tudo começa pelo <HighlightMark>seu negócio</HighlightMark>.
          </>
        }
        subtitle="Tudo parte de um estudo do que você faz e de quem você quer atrair. Cada texto e cada detalhe de design nascem desse contexto, com um objetivo claro: converter."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {PILLARS.map((p, i) => {
          const Glyph = p.icon;
          return (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-16px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_2px_6px_rgba(0,0,0,0.05),0_22px_46px_-18px_rgba(0,0,0,0.22)]">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background transition-colors group-hover:bg-foreground group-hover:text-background">
                  <Glyph className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </HomeSection>
  );
}
