import { Reveal } from "@/components/ui/reveal";
import { HomeSection, Heading } from "@/components/home/section";
import { HighlightMark } from "@/components/home/highlight-mark";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { businessWhatsappHref } from "@/config/business";

const WHATSAPP = businessWhatsappHref(
  "Olá! Quero entender como ficaria a minha página personalizada.",
);

/**
 * Compromisso (fechamento): centralizado, enxuto e com contraste. Janela
 * exclusiva + escolha a dedo. Sem lista de serviços (nada de "vender tráfego").
 */
export function WhyUnique() {
  return (
    <HomeSection
      id="compromisso"
      className="bg-muted/50"
      innerClassName="relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 50% at 50% 100%, rgba(10,10,10,0.05), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <Heading
          align="center"
          title={
            <>
              A sua marca à altura do seu <HighlightMark>trabalho</HighlightMark>.
            </>
          }
          subtitle="Uma janela exclusiva, para poucos projetos por vez."
        />

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
            O nível de quem cobra muito mais, criado sob medida por quem já posicionou marcas em
            dezenas de nichos. Os projetos são escolhidos a dedo, e a parceria cresce com você.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            data-wa-interstitial
            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/40"
          >
            <WhatsappIcon className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </Reveal>
      </div>
    </HomeSection>
  );
}
