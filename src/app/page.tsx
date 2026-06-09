import { headers } from "next/headers";
import { templates } from "@/config/templates";
import { HeroHome } from "@/components/home/hero-home";
import { Marquee } from "@/components/home/marquee";
import { Thesis } from "@/components/home/thesis";
import { Approach } from "@/components/home/approach";
import { Process } from "@/components/home/process";
import { Authority } from "@/components/home/authority";
import { TemplatesSection } from "@/components/home/templates-section";
import { WhyUnique } from "@/components/home/why-unique";
import { PlusMark } from "@/components/home/section";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { HomePromo } from "@/components/home/home-promo";
import { ChatAssistant } from "@/components/home/chat-assistant";
import { WhatsAppInterstitial } from "@/components/home/whatsapp-interstitial";
import { business } from "@/config/business";
import { InstagramIcon } from "@/components/icons/instagram";

const WHATSAPP =
  "https://wa.me/5541998906082?text=" +
  encodeURIComponent("Olá! Tenho interesse em uma página de alta conversão.");

/**
 * Cidade do visitante via header de geolocalização da Vercel; null quando indisponível.
 * Sanitiza o valor (defense-in-depth): só caracteres de nome de lugar e no máx. 64 chars.
 */
async function getCity(): Promise<string | null> {
  const raw = (await headers()).get("x-vercel-ip-city");
  if (!raw) return null;
  let city: string;
  try {
    city = decodeURIComponent(raw);
  } catch {
    return null;
  }
  city = city.replace(/[^\p{L}\p{M}\s.'-]/gu, "").trim().slice(0, 64);
  return city.length > 0 ? city : null;
}

export default async function Home() {
  const city = await getCity();
  const hasTemplates = templates.length > 0;
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Coluna emoldurada por linhas verticais (Vercel-light) */}
      <div className="relative mx-auto max-w-6xl border-x border-border">
        {/* "+" nos quatro cantos externos da moldura */}
        <PlusMark className="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
        <PlusMark className="right-0 top-0 translate-x-1/2 -translate-y-1/2" />
        <PlusMark className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
        <PlusMark className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />

        <HeroHome city={city} whatsapp={WHATSAPP} />
        <Thesis />
        <Approach />
        <Marquee />
        <Process />
        <Authority />
        {hasTemplates && <TemplatesSection />}
        <WhyUnique />

        {/* Footer */}
        <footer className="relative">
          <PlusMark className="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
          <PlusMark className="right-0 top-0 translate-x-1/2 -translate-y-1/2" />
          <div className="px-6 py-12 sm:px-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              {/* Marca / voz */}
              <div className="max-w-xs">
                <p className="font-heading text-lg font-semibold leading-snug tracking-tight text-foreground">
                  Páginas que transformam visitantes em clientes.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Criadas por quem já posicionou marcas em dezenas de nichos.
                </p>
              </div>

              {/* Contato */}
              <div className="flex flex-col gap-2.5 sm:items-end">
                <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground/70">
                  Contato
                </span>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-foreground/70"
                >
                  <WhatsappIcon className="h-4 w-4 text-[#25D366]" />
                  Falar no WhatsApp
                </a>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-foreground/70"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Seguir no Instagram
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground/70 sm:flex-row sm:items-center sm:justify-between">
              <span>© {year} · Todos os direitos reservados.</span>
              <span>Feito sob medida.</span>
            </div>
          </div>
        </footer>
      </div>

      <ChatAssistant />
      <HomePromo />
      <WhatsAppInterstitial />
    </div>
  );
}
