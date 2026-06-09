"use client";

import {
  motion,
  useReducedMotion,
} from "motion/react";
import {
  Globe,
  Palette,
  PenLine,
  Search,
  Megaphone,
  MessageCircle,
  CalendarCheck,
  Users,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { HomeSection } from "@/components/home/section";

const CAPS = [
  { icon: Globe, label: "Sites que convertem" },
  { icon: Palette, label: "Identidade visual" },
  { icon: PenLine, label: "Textos que vendem" },
  { icon: Search, label: "Aparecer no Google" },
  { icon: Megaphone, label: "Anúncios e tráfego" },
  { icon: MessageCircle, label: "Atendimento no WhatsApp" },
  { icon: CalendarCheck, label: "Agendamento online" },
  { icon: Users, label: "Organização de clientes" },
  { icon: Zap, label: "Automações que poupam tempo" },
];

/**
 * Autoridade: bloco escuro de destaque (contraste premium, nível Apple).
 * Os 5 anos em escala gigante e um carrossel de capacidades com ícones.
 */
export function Authority() {
  const reduce = useReducedMotion();
  const caps = [...CAPS, ...CAPS];

  return (
    <HomeSection
      id="experiencia"
      className="cursor-invert bg-foreground text-background"
      innerClassName="relative overflow-hidden py-28 sm:py-36"
    >
      {/* Brilho base */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(45% 60% at 12% 20%, rgba(255,255,255,0.10), transparent 70%), radial-gradient(40% 55% at 92% 95%, rgba(255,255,255,0.06), transparent 70%)",
        }}
      />
      {/* Orb que deriva devagar (vida/fluidez) */}
      <motion.div
        className="pointer-events-none absolute left-1/3 top-1/4 h-72 w-72 rounded-full blur-3xl"
        aria-hidden
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)" }}
        animate={reduce ? undefined : { x: [0, 60, -20, 0], y: [0, -30, 20, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative grid gap-12 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-24">
        <Reveal>
          <div className="flex items-baseline gap-3">
            <CountUp
              value="5"
              className="bg-gradient-to-b from-white to-white/45 bg-clip-text font-heading text-[7.5rem] font-semibold leading-[1] text-transparent sm:text-[11rem]"
            />
            <span className="text-base font-medium uppercase tracking-[0.2em] text-background/55">
              anos
            </span>
          </div>
        </Reveal>

        <div className="max-w-xl">
          <Reveal>
            <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.6rem]">
              Marketing e engenharia na mesma mão.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 text-base leading-relaxed text-background/70 sm:text-lg">
              Marcas e nomes posicionados em dezenas de nichos. Da estratégia de marca ao código de
              estruturas complexas e seguras, das automações à liderança de times de alta
              performance. Toda essa bagagem entra, inteira, no seu projeto.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Carrossel de capacidades (largura total da seção) */}
      <div className="relative mt-14 sm:mt-20">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-background/45">
            Do branding ao código
          </span>
        </Reveal>

        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <motion.div
            className="flex w-max gap-3"
            animate={reduce ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 72, repeat: Infinity, ease: "linear" }}
          >
            {caps.map((c, i) => {
              const Glyph = c.icon;
              return (
                <span
                  key={i}
                  className="flex shrink-0 items-center gap-2.5 rounded-2xl border border-background/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-background/85"
                >
                  <Glyph className="h-[18px] w-[18px] text-background/60" strokeWidth={1.6} />
                  {c.label}
                </span>
              );
            })}
          </motion.div>
        </div>
      </div>
    </HomeSection>
  );
}
