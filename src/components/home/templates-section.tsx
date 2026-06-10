import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { templates, comingSoon } from "@/config/templates";
import { Reveal } from "@/components/ui/reveal";
import { HomeSection, Heading } from "@/components/home/section";
import { HighlightMark } from "@/components/home/highlight-mark";
import { LeadQuiz } from "@/components/home/lead-quiz";

/** Prévia placeholder: gradiente com a cor do nicho + esqueleto leve de página. */
function Preview({ niche, accent }: { niche: string; accent: string }) {
  return (
    <div
      className="relative h-44 w-full overflow-hidden border-b border-border"
      style={{
        background: `linear-gradient(155deg, ${accent}30, ${accent}0d 45%, transparent 72%), linear-gradient(180deg, var(--card), var(--muted))`,
      }}
    >
      {/* Pontos de "janela" */}
      <div className="absolute left-4 top-4 flex gap-1.5">
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: `${accent}55` }} />
        <span className="h-2 w-2 rounded-full bg-foreground/15" />
        <span className="h-2 w-2 rounded-full bg-foreground/15" />
      </div>
      {/* Nome do nicho na cor do nicho (sutil) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-xs font-semibold uppercase tracking-[0.25em] opacity-70"
          style={{ color: accent }}
        >
          {niche}
        </span>
      </div>
      {/* Esqueleto leve */}
      <div className="absolute inset-x-6 bottom-5 space-y-1.5 opacity-50">
        <div className="h-1.5 w-2/3 rounded-full bg-foreground/15" />
        <div className="h-1.5 w-1/2 rounded-full bg-foreground/10" />
      </div>
    </div>
  );
}

export function TemplatesSection() {
  return (
    <HomeSection id="templates">
      <Heading
        title={
          <>
            Veja o nível do <HighlightMark>trabalho</HighlightMark>.
          </>
        }
        subtitle="Estes modelos mostram o cuidado com cada detalhe. O seu projeto parte do seu negócio e ganha a sua identidade."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {/* Templates prontos */}
        {templates.map((t, i) => (
          <Reveal key={t.slug} delay={i * 0.08}>
            <Link
              href={`/${t.slug}`}
              style={{ "--accent": t.config.theme.primary } as CSSProperties}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all [border-color:color-mix(in_srgb,var(--accent)_35%,var(--border))] hover:-translate-y-1 hover:[border-color:var(--accent)] hover:[box-shadow:0_20px_45px_-15px_color-mix(in_srgb,var(--accent)_40%,transparent)]"
            >
              <Preview niche={t.niche} accent={t.config.theme.primary} />
              <div className="flex flex-1 flex-col p-7">
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: t.config.theme.primary }}
                  />
                  {t.niche}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{t.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.blurb}
                </p>
                <span className="mt-5 text-xs text-muted-foreground/80">Exemplo: {t.name}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                  Ver exemplo
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}

        {/* Nichos em breve (display-only) */}
        {comingSoon.map((c, i) => (
          <Reveal key={c.niche} delay={(templates.length + i) * 0.08}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-dashed border-border bg-card">
              <span className="absolute right-3 top-3 z-10 rounded-full bg-foreground/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-background">
                Em breve
              </span>
              <Preview niche={c.niche} accent={c.accent} />
              <div className="flex flex-1 flex-col p-7">
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: c.accent }}
                  />
                  {c.niche}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.blurb}
                </p>
                <span className="mt-5 text-sm font-medium text-muted-foreground/70">Em breve</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* CTA: outro nicho */}
      <Reveal delay={0.1}>
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-foreground px-7 py-12 text-center text-background sm:px-10 sm:py-14">
          {/* Brilho sutil pra dar vida ao bloco escuro */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 80% at 50% 0%, rgba(255,255,255,0.12), transparent 70%)",
            }}
          />
          <div className="relative">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-[1.9rem]">
              O seu ramo não está aqui?
            </h3>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-background/65">
              Toda página é feita sob medida. Em poucos cliques, eu monto a sua.
            </p>
            <div className="mt-8 flex justify-center">
              <LeadQuiz triggerClassName="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-semibold text-foreground shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:opacity-90" />
            </div>
          </div>
        </div>
      </Reveal>
    </HomeSection>
  );
}
