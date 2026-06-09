import { MapPin, Clock, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Highlight } from "@/components/ui/highlight";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import type { LocationConfig, ContactConfig } from "@/config/types";

export function Location({
  location,
  contact,
  whatsappHref,
  ctaLabel,
}: {
  location: LocationConfig;
  contact: ContactConfig;
  whatsappHref: string;
  ctaLabel: string;
}) {
  return (
    <section id="localizacao" className="py-20 sm:py-28">
      <div className="container-px grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal delay={0.05} direction="right">
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              <Highlight text={location.title} />
            </h2>
          </Reveal>

          <div className="mt-9 flex flex-col gap-6">
            {contact.address && (
              <InfoItem icon={<MapPin className="h-5 w-5" />} title="Endereço">
                {contact.address}
              </InfoItem>
            )}
            {location.hours && location.hours.length > 0 && (
              <InfoItem icon={<Clock className="h-5 w-5" />} title="Horários de atendimento">
                {location.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.hours}
                  </span>
                ))}
              </InfoItem>
            )}
            <InfoItem icon={<Phone className="h-5 w-5" />} title="Contato">
              {contact.phoneDisplay}
              <span className="block">Atendimento também via WhatsApp</span>
            </InfoItem>
          </div>

          <Reveal delay={0.2}>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
            >
              <WhatsappIcon className="h-[18px] w-[18px]" />
              {ctaLabel}
            </a>
          </Reveal>
        </div>

        {contact.mapEmbedUrl && (
          <Reveal delay={0.15}>
            <div className="h-[360px] overflow-hidden rounded-3xl border border-border sm:h-[440px]">
              <iframe
                src={contact.mapEmbedUrl}
                title="Mapa da localização"
                className="h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function InfoItem({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
        {icon}
      </span>
      <span className="pt-1">
        <span className="block text-[13px] font-semibold text-foreground">{title}</span>
        <span className="mt-1 block text-[13px] leading-relaxed text-muted-foreground">
          {children}
        </span>
      </span>
    </Reveal>
  );
}
