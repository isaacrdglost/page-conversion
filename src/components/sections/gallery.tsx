import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { BeforeAfter } from "@/components/ui/before-after";
import type { GalleryConfig } from "@/config/types";

export function Gallery({ gallery }: { gallery: GalleryConfig }) {
  const layout = gallery.layout ?? "compare";

  return (
    <section id="galeria" className="py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          subtitle={gallery.subtitle}
        />

        {layout === "grid" ? (
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.items.map((item, i) => (
              <Reveal key={item.label ?? i} delay={(i % 3) * 0.08} scale>
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
                  <Image
                    src={item.image ?? ""}
                    alt={item.label ?? "Foto"}
                    fill
                    sizes="(max-width: 768px) 90vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.label && (
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-3 text-xs font-medium text-white">
                      {item.label}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <>
            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {gallery.items.map((item, i) => (
                <Reveal key={item.label ?? i} delay={(i % 2) * 0.1} scale>
                  <BeforeAfter before={item.before ?? ""} after={item.after ?? ""} label={item.label} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <p className="mt-6 text-center text-xs text-muted-foreground">
                Arraste para comparar · Resultados reais podem variar de caso para caso
              </p>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
