"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Highlight } from "@/components/ui/highlight";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import type { HeroConfig } from "@/config/types";

export function Hero({
  hero,
  whatsappHref,
}: {
  hero: HeroConfig;
  whatsappHref: string;
}) {
  return (
    <section id="hero" className="relative overflow-hidden pt-[72px] lg:min-h-screen">
      {/* Blob teal de fundo com float contínuo */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -22, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-10 top-0 -z-0 hidden h-[120%] w-[52%] rounded-l-[42%] bg-gradient-to-br from-secondary via-secondary/70 to-primary/30 lg:block"
      />

      <div className="container-px grid items-center gap-10 lg:min-h-[calc(100vh-72px)] lg:grid-cols-2 lg:gap-8">
        {/* Conteúdo */}
        <div className="relative z-10 max-w-xl pt-10 lg:py-20">
          <Reveal delay={0.08} direction="right">
            <h1 className="text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.6rem]">
              <Highlight text={hero.headline} />
            </h1>
          </Reveal>

          <Reveal delay={0.16} direction="right">
            <p className="mt-6 max-w-md text-base leading-[1.7] text-muted-foreground">
              {hero.subheadline}
            </p>
          </Reveal>

          <Reveal delay={0.24} direction="right">
            <div className="mt-9 flex flex-col items-start gap-5">
              <a
                data-demo-pitch
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
              >
                <WhatsappIcon className="h-[18px] w-[18px] transition-transform group-hover:rotate-6" />
                {hero.primaryCta}
              </a>

              {hero.badges && hero.badges.length > 0 && (
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {hero.badges.map((badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-2 text-[13px] font-medium text-muted-foreground"
                    >
                      <span className="text-[9px] text-primary">◆</span>
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* Imagem (no mobile vai pro topo, menor e cortada) */}
        <Reveal delay={0.2} scale className="relative z-10 order-first -mx-5 sm:-mx-8 lg:order-none lg:mx-0 lg:flex lg:h-[calc(100vh-72px)] lg:items-end lg:justify-center lg:py-0">
          <div className="relative w-full lg:w-[88%] lg:max-w-[440px]">
            <div className="relative h-[46vh] max-h-[440px] w-full overflow-hidden sm:h-[52vh] lg:aspect-auto lg:h-[80vh] lg:max-h-none lg:rounded-t-[200px] lg:shadow-2xl lg:shadow-primary/15">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-20 lg:hidden"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, var(--background), rgb(from var(--background) r g b / 0))",
                }}
              />
            </div>

            {hero.floatCard && (
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[12%] hidden min-w-[200px] items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-xl shadow-primary/10 lg:-left-8 lg:flex"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-secondary text-primary">
                  <Star className="h-5 w-5 fill-current" strokeWidth={0} />
                </div>
                <div>
                  <div className="text-lg font-bold leading-none text-foreground">
                    {hero.floatCard.value}
                  </div>
                  <div className="mt-1 text-[11px] text-muted-foreground">
                    {hero.floatCard.label}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
