import { Reveal } from "@/components/ui/reveal";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import type { CtaConfig } from "@/config/types";

export function Cta({
  cta,
  whatsappHref,
}: {
  cta: CtaConfig;
  whatsappHref: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-center">
      {/* Brilhos decorativos */}
      <div className="pointer-events-none absolute -left-[10%] -top-1/2 h-[200%] w-1/2 animate-pulse rounded-full bg-white/[0.05] [animation-duration:7s]" />
      <div className="pointer-events-none absolute -bottom-1/2 -right-[10%] h-[200%] w-3/5 animate-pulse rounded-full bg-white/[0.06] [animation-duration:9s]" />

      <div className="container-px relative z-10">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-primary-foreground/60">
            {cta.subtitle}
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl">
            {cta.title}
          </h2>
        </Reveal>
        {cta.note && (
          <Reveal delay={0.12}>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-primary-foreground/80">
              {cta.note}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.18}>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-background px-9 py-4 text-sm font-semibold text-primary shadow-xl shadow-black/15 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <WhatsappIcon className="h-[18px] w-[18px]" />
            {cta.primaryCta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
