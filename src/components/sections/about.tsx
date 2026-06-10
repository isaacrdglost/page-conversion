import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Highlight } from "@/components/ui/highlight";
import { CountUp } from "@/components/ui/count-up";
import type { AboutConfig } from "@/config/types";

function initials(name: string) {
  return name
    .replace(/^(Dra?\.?|Dr\.?)\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function About({ about }: { about: AboutConfig }) {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Foto com moldura deslocada */}
        <Reveal direction="left" scale className="relative order-1">
          <div className="relative">
            <div className="absolute -left-4 -top-4 -z-0 h-4/5 w-4/5 rounded-3xl border-2 border-primary/40" />
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-xl shadow-primary/10">
              <Image
                src={about.image}
                alt={about.imageAlt}
                width={600}
                height={520}
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </div>
          </div>
        </Reveal>

        {/* Conteúdo */}
        <div className="order-2">
          <Reveal delay={0.05} direction="right">
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              <Highlight text={about.title} />
            </h2>
          </Reveal>

          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05} direction="right">
              <p className="mt-5 text-[15px] leading-[1.9] text-muted-foreground">{p}</p>
            </Reveal>
          ))}

          {about.credentials && about.credentials.length > 0 && (
            <Reveal delay={0.2} direction="right">
              <ul className="mt-8 flex flex-col gap-3">
                {about.credentials.map((c) => (
                  <li
                    key={c.label}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {c.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {about.stats && about.stats.length > 0 && (
            <Reveal delay={0.25} direction="right">
              <div className="mt-8 flex gap-8 border-t border-border pt-8">
                {about.stats.map((s) => (
                  <div key={s.label}>
                    <CountUp
                      value={s.value}
                      className="block text-3xl font-bold leading-none text-primary"
                    />
                    <div className="mt-2 text-[11px] tracking-wide text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {about.signatureName && (
            <Reveal delay={0.3} direction="right">
              <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-border bg-card p-3 pr-6 shadow-sm shadow-primary/5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-base font-bold text-primary">
                  {initials(about.signatureName)}
                </span>
                <div>
                  <div className="font-semibold leading-tight text-foreground">
                    {about.signatureName}
                  </div>
                  {about.signatureTitle && (
                    <div className="mt-0.5 text-xs leading-snug text-muted-foreground">
                      {about.signatureTitle}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
