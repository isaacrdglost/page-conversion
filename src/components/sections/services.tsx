import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/lib/icons";
import type { ServicesConfig } from "@/config/types";

export function Services({ services }: { services: ServicesConfig }) {
  return (
    <section id="servicos" className="bg-muted/40 py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          subtitle={services.subtitle}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08} scale>
              <div className="group h-full rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon name={item.icon} size={28} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
