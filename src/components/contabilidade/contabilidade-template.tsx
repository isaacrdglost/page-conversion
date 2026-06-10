"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ShieldCheck, Star, ArrowRight, Check, MapPin, Phone, Clock, ChevronDown } from "lucide-react";
import type { SiteConfig } from "@/config/types";
import { ThemeInjector } from "@/components/theme-injector";
import { Icon } from "@/lib/icons";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { ContabilNavbar } from "@/components/contabilidade/navbar";
import { DemoFloat } from "@/components/demo-float";
import { DemoPitchModal } from "@/components/demo-pitch";
import { PromoModal } from "@/components/promo-modal";
import { ExampleBadge } from "@/components/example-badge";

const U = "https://images.unsplash.com/photo-";

/** Realça os trechos entre ** ** da copy como destaque colorido. */
function H({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((p, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-primary">
            {p}
          </span>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

/** Botão de CTA da demo: abre o modal de pitch (DemoPitchModal), não um número fictício. */
function PitchButton({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <button type="button" data-demo-pitch className={className}>
      {children}
    </button>
  );
}

/** Coluna do footer: vira acordeão no mobile (economiza espaço), aberta no desktop. */
function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border pb-1 lg:border-0 lg:pb-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-3 lg:pointer-events-none lg:py-0"
      >
        <h4 className="font-heading text-sm font-semibold text-foreground">{title}</h4>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform lg:hidden ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`${open ? "block" : "hidden"} pb-3 lg:block lg:pb-0`}>{children}</div>
    </div>
  );
}

/** Linhas curvas grossas e sutis para dar movimento ao fundo. */
function CurveBg({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      className={className}
    >
      <path d="M-100 470 C 260 300 620 540 1320 220" stroke="currentColor" strokeWidth="2.5" opacity="0.55" />
      <path d="M-100 560 C 320 390 660 600 1320 300" stroke="currentColor" strokeWidth="2.5" opacity="0.35" />
      <path d="M-100 380 C 220 240 560 450 1320 150" stroke="currentColor" strokeWidth="2.5" opacity="0.22" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const PARA_QUEM = [
  {
    img: `${U}1556742049-0cfed4f6a45d?w=600&q=80&fit=crop`,
    title: "Para o MEI",
    desc: "Emita notas, pague o DAS no prazo e mantenha o seu CNPJ regular, sem se perder em guia nenhuma.",
  },
  {
    img: `${U}1600880292089-90a7e086ee0c?w=600&q=80&fit=crop`,
    title: "Para a sua empresa",
    desc: "Folha, impostos e obrigações sob controle, com relatórios claros sobre a saúde do seu negócio.",
  },
  {
    img: `${U}1573497019940-1c28c88b4f3e?w=600&q=80&fit=crop`,
    title: "Para o profissional liberal",
    desc: "Médico, advogado, dentista ou engenheiro: enquadramento certo pra reduzir imposto e focar no seu trabalho.",
  },
];

const PAINS = [
  { icon: "Receipt", text: "Você paga imposto sem saber exatamente pra onde vai o seu dinheiro." },
  { icon: "AlarmClock", text: "Vive de olho nos prazos, com receio de uma multa cara aparecer." },
  { icon: "Files", text: "Perde horas com papelada que poderiam estar no seu negócio." },
  { icon: "Headset", text: "Liga pro contador e espera dias por uma resposta clara." },
];

const SERVICOS = [
  { icon: "Building2", title: "Abertura de empresa", desc: "Seu CNPJ aberto em até 24h, no enquadramento que paga menos imposto." },
  { icon: "Receipt", title: "Impostos e Simples Nacional", desc: "Apuração e guias em dia, com total clareza do que está pagando." },
  { icon: "Users", title: "Folha de pagamento", desc: "Salários, férias e encargos calculados certo, sem risco trabalhista." },
  { icon: "FileText", title: "Emissão de notas", desc: "Orientação e suporte pra você faturar sem travar em nenhum momento." },
  { icon: "TrendingDown", title: "Planejamento tributário", desc: "Estratégia legal pra reduzir a carga e sobrar mais no fim do mês." },
  { icon: "ShieldCheck", title: "Certificado digital", desc: "Seu e-CPF ou e-CNPJ emitido com segurança, sem você sair de casa." },
];

const PROCESSO = [
  { n: "01", icon: "MessageCircle", title: "Você nos chama", desc: "Conta a sua situação no WhatsApp e envia o básico. Sem formulário interminável." },
  { n: "02", icon: "ClipboardCheck", title: "A gente assume", desc: "Abertura, impostos, prazos e papelada nos conformes, do começo ao fim." },
  { n: "03", icon: "Smile", title: "Você fica tranquilo", desc: "Foca no que faz de melhor sabendo que está tudo sempre em dia." },
];

const RAZOES = [
  { icon: "Target", title: "Atendimento sob medida", desc: "A contabilidade se adapta à realidade do seu negócio, com a estratégia certa pro seu momento." },
  { icon: "HeartHandshake", title: "Gente de verdade do seu lado", desc: "Você fala com quem entende e responde rápido, em uma linguagem simples e direta." },
  { icon: "Zap", title: "Tudo resolvido no digital", desc: "Resolva de onde estiver, com a segurança e a seriedade de um escritório consolidado." },
];

export function ContabilidadeTemplate({ config: c, year }: { config: SiteConfig; year: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="overflow-x-hidden bg-background font-sans text-foreground antialiased">
      <ThemeInjector theme={c.theme} />
      <ContabilNavbar
        logoText={c.header.logoText}
        monogram={c.header.monogram ?? "FC"}
        ctaLabel={c.header.ctaLabel}
        links={NAV_LINKS}
      />

      <main>
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden scroll-mt-24">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-secondary opacity-80 blur-3xl" />
            <CurveBg className="absolute inset-0 h-full w-full text-primary/[0.06]" />
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-24 pt-16 sm:gap-12 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:pb-28 lg:pt-40">
            <div className="order-2 min-w-0 lg:order-1">
              <Reveal>
                <h1 className="font-heading text-[2.4rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
                  <H text={c.hero.headline} />
                </h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {c.hero.subheadline}
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <PitchButton className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 sm:w-auto">
                    <WhatsappIcon className="h-5 w-5" />
                    {c.hero.primaryCta}
                  </PitchButton>
                  <a
                    href="#servicos"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-4 text-base font-semibold text-foreground transition-colors hover:bg-muted sm:w-auto"
                  >
                    Ver serviços
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-9 flex items-center gap-5 overflow-x-auto border-t border-border pt-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <div className="flex shrink-0 items-center gap-2">
                    <span className="flex">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </span>
                    <span className="whitespace-nowrap text-sm font-medium text-muted-foreground">4,9 no Google</span>
                  </div>
                  {(c.hero.badges ?? []).map((b) => (
                    <span
                      key={b}
                      className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-medium text-muted-foreground"
                    >
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      {b}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal direction="left" delay={0.1} className="relative order-1 -mx-5 min-w-0 lg:order-2 lg:mx-0">
              <div className="absolute -bottom-6 -right-5 -z-10 hidden h-52 w-52 rounded-[2rem] bg-primary/10 lg:block" />
              <div className="relative overflow-hidden border-0 shadow-none lg:rounded-[1.75rem] lg:border lg:border-border lg:shadow-2xl lg:shadow-primary/10">
                <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-square">
                  <Image
                    src={c.hero.image}
                    alt={c.hero.imageAlt ?? "Atendimento contábil"}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-20 lg:hidden"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, var(--background), rgb(from var(--background) r g b / 0))",
                  }}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* PARA QUEM — contraste navy + corte diagonal (envelope) + curvas */}
        <section
          id="para-quem"
          className="relative scroll-mt-24 bg-surface-dark pb-24 pt-32 text-surface-dark-foreground sm:pt-36 [clip-path:polygon(0_64px,100%_0,100%_100%,0_100%)]"
        >
          <CurveBg className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.07]" />
          <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Seja qual for o momento do seu negócio, a parte contábil fica com a gente.
              </h2>
              <p className="mt-4 text-[color:var(--surface-dark-muted)]">
                Cada tipo de empresa tem as suas regras. A gente conhece todas e cuida da sua de perto.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {PARA_QUEM.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="group h-full overflow-hidden rounded-2xl border border-[color:var(--surface-dark-border)] bg-white/[0.03] transition-colors hover:bg-white/[0.06]">
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={p.img}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-lg font-semibold">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[color:var(--surface-dark-muted)]">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DOR — imagem + lista limpa (sem cards vermelhos) */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <Reveal direction="right" className="relative order-2 hidden lg:order-1 lg:block">
              <div className="absolute -left-5 -top-5 -z-10 h-40 w-40 rounded-[2rem] bg-secondary" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border shadow-xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={`${U}1450101499163-c8848c66ca85?w=800&q=80&fit=crop`}
                    alt="Empreendedor lidando com papelada e contas"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <div className="order-1 lg:order-2">
              <Reveal>
                <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Você trabalha demais e o governo fica com a <span className="text-primary">maior parte?</span>
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Pagar imposto sem entender, viver de olho nos prazos e perder tempo com burocracia desgasta qualquer um. A sua energia merece estar no seu negócio.
                </p>
              </Reveal>
              <ul className="mt-7 divide-y divide-border border-y border-border">
                {PAINS.map((p, i) => (
                  <Reveal as="li" key={p.text} delay={i * 0.06} className="flex items-center gap-4 py-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <Icon name={p.icon} size={20} />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground/90">{p.text}</span>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={0.1}>
                <PitchButton className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30">
                  <WhatsappIcon className="h-5 w-5" />
                  Quero resolver isso
                </PitchButton>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SERVIÇOS — lista dinâmica + imagem */}
        <section id="servicos" className="scroll-mt-24 bg-muted/50 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1fr_0.85fr] lg:gap-16 lg:px-8">
            <div className="order-2 min-w-0 lg:order-1">
              <Reveal>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Tudo que a sua empresa precisa, em um só lugar.
                </h2>
                <p className="mt-4 max-w-lg text-muted-foreground">
                  Do CNPJ ao planejamento tributário, a contabilidade inteira resolvida por quem faz isso há mais de 12 anos.
                </p>
              </Reveal>
              <div className="mt-8 divide-y divide-border border-y border-border">
                {SERVICOS.map((s, i) => (
                  <Reveal as="div" key={s.title} delay={i * 0.05}>
                    <div className="group flex items-start gap-4 py-4 transition-colors">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-card text-primary shadow-sm ring-1 ring-border transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon name={s.icon} size={22} />
                      </span>
                      <div>
                        <h3 className="font-heading text-base font-semibold text-foreground">{s.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal direction="left" className="relative order-1 min-w-0 lg:order-2">
              <div className="absolute -right-5 -top-5 -z-10 h-44 w-44 rounded-[2rem] bg-primary/10" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border shadow-xl lg:sticky lg:top-28">
                <div className="relative aspect-[4/3] w-full lg:aspect-[3/4]">
                  <Image
                    src={`${U}1454165804606-c3d57bc86b40?w=800&q=80&fit=crop`}
                    alt="Mesa de trabalho de contabilidade com relatórios"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="processo" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Simples do começo ao fim
              </h2>
              <p className="mt-4 text-muted-foreground">
                Sem burocracia da sua parte. Em três passos você tira o peso da contabilidade das costas.
              </p>
            </Reveal>
            <div className="relative mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
              {/* trilha desktop (horizontal, no topo) */}
              <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
              {/* trilha mobile (vertical, alinhada aos círculos, sem cruzar o texto) */}
              <div className="absolute bottom-8 left-7 top-8 w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 via-border to-primary/40 md:hidden" />
              {PROCESSO.map((p, i) => (
                <Reveal
                  key={p.n}
                  delay={i * 0.12}
                  className="relative flex items-start gap-5 text-left md:block md:text-center"
                >
                  <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 md:mx-auto">
                    <Icon name={p.icon} size={26} />
                  </div>
                  <div>
                    <span className="block font-heading text-sm font-bold tracking-widest text-primary/60 md:mt-5">
                      {p.n}
                    </span>
                    <h3 className="mt-1 font-heading text-xl font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground md:mx-auto">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RAZÕES (o porquê, sem título "por que escolher") */}
        <section className="bg-muted/50 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <Reveal direction="right" className="relative">
              <div className="absolute -bottom-5 -right-5 -z-10 h-44 w-44 rounded-[2rem] bg-secondary" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border shadow-xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={`${U}1521737604893-d14cc237f11d?w=800&q=80&fit=crop`}
                    alt="Equipe de contabilidade em reunião"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Um escritório que cuida do seu negócio como se fosse o <span className="text-primary">nosso</span>.
                </h2>
              </Reveal>
              <div className="mt-8 space-y-6">
                {RAZOES.map((r, i) => (
                  <Reveal key={r.title} delay={i * 0.08}>
                    <div className="flex gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                        <Icon name={r.icon} size={22} />
                      </span>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-foreground">{r.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CNPJ 24h */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] bg-primary px-7 py-12 text-center shadow-2xl shadow-primary/25 sm:px-12 sm:py-14">
                <CurveBg className="pointer-events-none absolute inset-0 h-full w-full text-white/10" />
                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
                    {c.cta.subtitle}
                  </p>
                  <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-[2.75rem]">
                    {c.cta.title}
                  </h2>
                  {c.cta.note && <p className="mx-auto mt-4 max-w-md text-primary-foreground/80">{c.cta.note}</p>}
                  <PitchButton className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-card px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl">
                    <WhatsappIcon className="h-5 w-5" />
                    {c.cta.primaryCta}
                  </PitchButton>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* NÚMEROS */}
        {c.stats && (
          <section className="border-y border-border bg-muted/40 py-16">
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 lg:grid-cols-4 lg:px-8">
              {c.stats.items.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08} className="text-center">
                  <CountUp value={s.value} className="font-heading text-4xl font-bold text-primary sm:text-5xl" />
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* SOBRE */}
        <section id="sobre" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <Reveal direction="right" className="relative order-2 lg:order-1">
              <div className="absolute -bottom-5 -left-5 -z-10 h-40 w-40 rounded-[2rem] bg-secondary" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border shadow-xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={c.about.image}
                    alt={c.about.imageAlt ?? "Escritório de contabilidade"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <div className="order-1 lg:order-2">
              <Reveal>
                <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                  <H text={c.about.title} />
                </h2>
              </Reveal>
              {c.about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.08 + i * 0.06}>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{p}</p>
                </Reveal>
              ))}
              {c.about.credentials && (
                <Reveal delay={0.2}>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {c.about.credentials.map((cr) => (
                      <li key={cr.label} className="flex items-center gap-2.5 text-sm text-foreground/90">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3 w-3" />
                        </span>
                        {cr.label}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="bg-muted/50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                <H text={c.testimonials.title} />
              </h2>
              {c.testimonials.google && (
                <a
                  href={c.testimonials.google.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="text-lg font-bold text-foreground">{c.testimonials.google.rating}</span>
                  <span className="flex">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </span>
                  <span className="text-sm text-muted-foreground">{c.testimonials.google.reviewsLabel} no Google</span>
                </a>
              )}
            </Reveal>
            <div className="relative mt-12 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent sm:w-24" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent sm:w-24" />
              <motion.div
                className="flex w-max gap-6"
                animate={reduce ? undefined : { x: ["0%", "-50%"] }}
                transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
              >
                {[...c.testimonials.items, ...c.testimonials.items].map((t, i) => (
                  <figure
                    key={i}
                    className="flex w-[19rem] shrink-0 flex-col rounded-2xl border border-border bg-card p-7 shadow-sm sm:w-[21rem]"
                  >
                    <span className="flex">
                      {Array.from({ length: t.rating ?? 5 }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </span>
                    <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/90">“{t.quote}”</blockquote>
                    <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 font-semibold text-primary">
                        {t.author.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{t.author}</p>
                        {t.role && <p className="text-xs text-muted-foreground">{t.role}</p>}
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <Reveal className="text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                <H text={c.faq.title} />
              </h2>
            </Reveal>
            <div className="mt-10 space-y-3">
              {c.faq.items.map((f, i) => (
                <Reveal key={f.question} delay={i * 0.05}>
                  <details className="group rounded-2xl border border-border bg-card px-6 py-1 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 font-heading text-base font-semibold text-foreground">
                      {f.question}
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-muted text-primary transition-transform group-open:rotate-45">
                        <span className="text-lg leading-none">+</span>
                      </span>
                    </summary>
                    <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="scroll-mt-24 bg-surface-dark py-20 text-surface-dark-foreground sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <Reveal>
              <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                <H text={c.location.title} />
              </h2>
              <p className="mt-4 max-w-md text-[color:var(--surface-dark-muted)]">
                Fale com um contador de verdade e tire as suas dúvidas hoje. Atendemos pelo WhatsApp e também presencialmente.
              </p>
              <PitchButton className="mt-7 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5">
                <WhatsappIcon className="h-5 w-5" />
                Falar agora no WhatsApp
              </PitchButton>

              <ul className="mt-9 space-y-4 text-sm">
                {c.contact.address && (
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--accent-light)]" />
                    <span className="text-[color:var(--surface-dark-muted)]">{c.contact.address}</span>
                  </li>
                )}
                {c.contact.phoneDisplay && (
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--accent-light)]" />
                    <span className="text-[color:var(--surface-dark-muted)]">{c.contact.phoneDisplay}</span>
                  </li>
                )}
                {c.location.hours?.map((h) => (
                  <li key={h.days} className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--accent-light)]" />
                    <span className="text-[color:var(--surface-dark-muted)]">
                      <strong className="font-semibold text-surface-dark-foreground">{h.days}:</strong> {h.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {c.contact.mapEmbedUrl && (
              <Reveal direction="left" className="overflow-hidden rounded-2xl border border-[color:var(--surface-dark-border)] shadow-2xl">
                <iframe
                  src={c.contact.mapEmbedUrl}
                  title="Localização do escritório"
                  loading="lazy"
                  className="h-full min-h-[20rem] w-full"
                />
              </Reveal>
            )}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
          <div className="grid gap-x-10 gap-y-2 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="mb-4 sm:col-span-2 sm:mb-0 lg:col-span-1">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                  {c.footer.monogram ?? "FC"}
                </span>
                <span className="font-heading font-semibold text-foreground">{c.footer.name}</span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Contabilidade descomplicada pra você cuidar do que importa: o crescimento do seu negócio.
              </p>
            </div>

            <FooterCol title="Serviços">
              <ul className="space-y-2.5 lg:mt-4">
                {SERVICOS.slice(0, 5).map((s) => (
                  <li key={s.title}>
                    <a href="#servicos" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterCol>

            <FooterCol title="Navegue">
              <ul className="space-y-2.5 lg:mt-4">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterCol>

            <div>
              <h4 className="font-heading text-sm font-semibold text-foreground">Contato</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                {c.contact.address && <li>{c.contact.address}</li>}
                {c.contact.phoneDisplay && <li>{c.contact.phoneDisplay}</li>}
              </ul>
              <PitchButton className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5">
                <WhatsappIcon className="h-4 w-4" />
                {c.header.ctaLabel}
              </PitchButton>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-7 text-sm text-muted-foreground sm:flex-row">
            <p>
              © {year} {c.footer.name}. {c.footer.subline}
            </p>
            <p>{c.footer.copyright}</p>
          </div>
        </div>
      </footer>

      <DemoFloat />
      <DemoPitchModal niche={c.header.subtitle} />
      <PromoModal promo={c.promo} />
      <ExampleBadge />
    </div>
  );
}
