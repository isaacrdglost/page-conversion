import { fontVar } from "@/lib/fonts";
import type { ThemeConfig } from "@/config/types";

/**
 * Converte o `theme` do config nas CSS variables consumidas por Tailwind/shadcn.
 *
 * Apenas algumas cores-base são definidas no config; as derivadas (muted,
 * border, ring, etc.) são calculadas via color-mix para manter o config enxuto
 * e garantir harmonia automática. Trocar `primary`/`background` re-tematiza a
 * página inteira.
 */
export function ThemeInjector({ theme }: { theme: ThemeConfig }) {
  const {
    primary,
    primaryForeground,
    secondary,
    background,
    foreground,
    card,
    muted,
    surfaceDark,
    surfaceDarkForeground,
  } = theme;

  const css = `:root{
  --background:${background};
  --foreground:${foreground};
  --card:${card};
  --card-foreground:${foreground};
  --popover:${card};
  --popover-foreground:${foreground};
  --primary:${primary};
  --primary-foreground:${primaryForeground};
  --secondary:${secondary};
  --secondary-foreground:${foreground};
  --muted:${muted};
  --muted-foreground:color-mix(in srgb, ${foreground} 58%, ${background});
  --accent:${muted};
  --accent-foreground:${foreground};
  --border:color-mix(in srgb, ${foreground} 12%, ${background});
  --input:color-mix(in srgb, ${foreground} 14%, ${background});
  --ring:${primary};
  --accent-light:color-mix(in srgb, ${primary} 45%, white);
  --surface-dark:${surfaceDark};
  --surface-dark-foreground:${surfaceDarkForeground};
  --surface-dark-muted:color-mix(in srgb, ${surfaceDarkForeground} 62%, ${surfaceDark});
  --surface-dark-border:color-mix(in srgb, ${surfaceDarkForeground} 14%, ${surfaceDark});
  --radius:${theme.radius};
  --font-heading:${fontVar[theme.fonts.heading]};
  --font-sans:${fontVar[theme.fonts.body]};
}`;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
