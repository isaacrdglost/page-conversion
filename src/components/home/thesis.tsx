import { HomeSection, Heading } from "@/components/home/section";
import { HighlightMark } from "@/components/home/highlight-mark";
import { SketchWindow, SketchCursor, SketchSpark } from "@/components/home/sketches";

/** Tese: a importância da primeira impressão, com ilustração viva à direita. */
export function Thesis() {
  return (
    <HomeSection id="tese">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Heading
          title={
            <>
              A sua reputação já existe. Falta ela <HighlightMark>aparecer</HighlightMark>.
            </>
          }
          subtitle="Anos de experiência, ótimas avaliações, um Instagram com resultado. Só que tudo vive espalhado, e quem te procura encontra dúvida onde devia ver autoridade. Uma página reúne a sua reputação num só lugar e faz você ser escolhido antes do preço."
        />

        {/* Ilustração sketch (estilo Figma), opacidade baixa e em movimento */}
        <div className="relative mx-auto h-60 w-full max-w-sm text-foreground/25 sm:h-72 lg:mx-0">
          <SketchWindow className="absolute left-1/2 top-1/2 h-40 w-56 -translate-x-1/2 -translate-y-1/2 sm:h-48 sm:w-64" />
          <SketchCursor className="absolute bottom-2 left-2 h-16 w-16 text-foreground/35 sm:bottom-4 sm:left-6" />
          <SketchSpark className="absolute right-3 top-2 h-10 w-10 text-foreground/30 sm:right-8" />
        </div>
      </div>
    </HomeSection>
  );
}
