import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { FaqConfig } from "@/config/types";

export function Faq({ faq }: { faq: FaqConfig }) {
  return (
    <section id="faq" className="bg-muted/40 py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} subtitle={faq.subtitle} />

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-2xl">
          <Accordion className="w-full">
            {faq.items.map((item, i) => (
              <AccordionItem key={i} value={i} className="border-border">
                <AccordionTrigger className="text-left text-[15px] font-medium text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
