import { Icon } from "@/lib/icons";
import type { FooterConfig } from "@/config/types";

function initials(name: string) {
  return name
    .replace(/^(Dra?\.?|Dr\.?)\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Footer({
  footer,
  fallbackName,
  year,
}: {
  footer: FooterConfig;
  fallbackName: string;
  year: number;
}) {
  const name = footer.name ?? fallbackName;
  const mono = footer.monogram ?? initials(name);

  return (
    <footer className="bg-foreground text-background">
      <div className="container-px flex flex-wrap items-center justify-between gap-4 py-10">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
            {footer.logoIcon ? (
              <Icon name={footer.logoIcon} size={20} />
            ) : (
              <span className="font-heading text-[15px] font-semibold">{mono}</span>
            )}
          </span>
          <div>
            <div className="font-heading text-[15px] text-background/80">{name}</div>
            {footer.subline && (
              <div className="text-[11px] font-light tracking-wide text-background/40">
                {footer.subline}
              </div>
            )}
          </div>
        </div>

        <div className="text-right">
          <p className="text-xs font-light text-background/35">
            © {year} · {footer.copyright}
          </p>
          <p className="text-xs font-light text-background/35">Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
