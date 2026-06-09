import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { BeforeAfter } from "@/components/ui/before-after";
import type { GalleryConfig } from "@/config/types";

export function Gallery({ gallery }: { gallery: GalleryConfig }) {
  return (
    <section id="resultados" className="py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          subtitle={gallery.subtitle}
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {gallery.items.map((item, i) => (
            <Reveal key={item.label ?? i} delay={(i % 2) * 0.1} scale>
              <BeforeAfter before={item.before} after={item.after} label={item.label} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Arraste para comparar · Resultados reais podem variar de caso para caso
          </p>
        </Reveal>
      </div>
    </section>
  );
}
