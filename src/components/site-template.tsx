import type { SiteConfig, SectionKey } from "@/config/types";
import { whatsappHref } from "@/lib/contact";
import { ThemeInjector } from "@/components/theme-injector";

import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Gallery } from "@/components/sections/gallery";
import { About } from "@/components/sections/about";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Location } from "@/components/sections/location";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { PromoModal } from "@/components/promo-modal";
import { ExampleBadge } from "@/components/example-badge";

/**
 * Renderiza uma One-Page completa a partir de um SiteConfig.
 * Cada template (cliente) é só um config diferente passado aqui.
 * O ThemeInjector aplica o tema desta página, sobrescrevendo os defaults.
 */
export function SiteTemplate({ config: c, year }: { config: SiteConfig; year: number }) {
  const wa = whatsappHref(c.contact);

  const sections: Record<SectionKey, React.ReactNode> = {
    hero: <Hero hero={c.hero} whatsappHref={wa} />,
    services: <Services services={c.services} />,
    gallery: <Gallery gallery={c.gallery} />,
    about: <About about={c.about} />,
    stats: c.stats ? <Stats stats={c.stats} /> : null,
    testimonials: <Testimonials testimonials={c.testimonials} />,
    faq: <Faq faq={c.faq} />,
    location: (
      <Location
        location={c.location}
        contact={c.contact}
        whatsappHref={wa}
        ctaLabel="Marcar pelo WhatsApp"
      />
    ),
    cta: <Cta cta={c.cta} whatsappHref={wa} />,
  };

  return (
    <>
      <ThemeInjector theme={c.theme} />
      <Header header={c.header} whatsappHref={wa} />
      <main>
        {c.sections.order.map((key) => (
          <div key={key}>{sections[key]}</div>
        ))}
      </main>
      <Footer footer={c.footer} fallbackName={c.header.logoText} year={year} />
      <WhatsAppFloat href={wa} />
      <PromoModal promo={c.promo} />
      <ExampleBadge />
    </>
  );
}
