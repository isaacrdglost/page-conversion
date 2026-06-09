import type { SVGProps } from "react";

/**
 * Set de ícones odontológicos de linha, desenhados à mão.
 * Estilo: traço 1.6, sem preenchimento, herda a cor via `currentColor`.
 * Pensados para parear com o Lucide (mesma vibe de outline).
 *
 * Para usar no config, referencie a chave em `dentalIcons` (ex: "tooth-sparkle").
 */

type IconProps = SVGProps<SVGSVGElement>;

/** Silhueta de dente reutilizada como base de vários ícones. */
const TOOTH_PATH =
  "M12 3.2c-1.7 0-2.7.9-4 .9-1 0-2-.7-3 .1C3.8 5.3 4 7.2 4.6 9.8c.4 1.9.6 3.4 1 5.4.3 1.7.5 3.8 1.6 3.8.9 0 1.2-1.4 1.5-3 .3-1.5.5-2.6 1.3-2.6s1 1.1 1.3 2.6c.3 1.6.6 3 1.5 3 1.1 0 1.3-2.1 1.6-3.8.4-2 .6-3.5 1-5.4.6-2.6.8-4.5-.4-5.5-1-.8-2-.1-3-.1-1.3 0-2.3-1-4-1z";

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Dente simples — uso geral / consulta. */
export function Tooth(props: IconProps) {
  return (
    <Svg {...props}>
      <path d={TOOTH_PATH} />
    </Svg>
  );
}

/** Clareamento — dente com brilho. */
export function ToothSparkle(props: IconProps) {
  return (
    <Svg {...props}>
      <path d={TOOTH_PATH} />
      <path d="M18.2 2.4l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4L16.3 4.3l1.4-.5z" />
    </Svg>
  );
}

/** Implante — dente sobre parafuso (roscas). */
export function ToothImplant(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 2.6c-1.5 0-2.4.8-3.6.8-.9 0-1.8-.6-2.7.1C4.4 4.6 4.6 6.3 5.2 8.6c.2.9.4 1.7.6 2.6" />
      <path d="M18.8 4.3c-.9-.7-1.8-.1-2.7-.1-1.2 0-2.1-.8-3.6-.8" />
      <path d="M18.2 8.6c.2-.9.4-1.7.6-2.6" />
      <path d="M9 13h6M9.4 16h5.2M10 19h4M11 21.6h2" />
    </Svg>
  );
}

/** Prevenção — dente protegido por escudo. */
export function ToothShield(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 2.6c-1.5 0-2.4.8-3.6.8-.9 0-1.8-.6-2.7.1C4.4 4.6 4.6 6.3 5.2 8.6c.4 1.7.5 3 .9 4.8.3 1.5.4 3.4 1.4 3.4.8 0 1.1-1.3 1.3-2.7.3-1.3.5-2.3 1.2-2.3" />
      <path d="M16 9.5l3.2 1.1v2.6c0 2-1.4 3.4-3.2 4-1.8-.6-3.2-2-3.2-4v-2.6L16 9.5z" />
    </Svg>
  );
}

/** Limpeza — escova de dente. */
export function Toothbrush(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 20l6.5-6.5" />
      <path d="M11.5 12.5l-2-2 6-6a1.4 1.4 0 0 1 2 2l-6 6z" />
      <path d="M9.5 10.5l1 1M11 9l1 1M12.5 7.5l1 1" />
    </Svg>
  );
}

/** Prótese / coroa — dente com coroa no topo. */
export function ToothCrown(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5.6 11c-.4-1.6-.6-2.8-.9-3.8" />
      <path d="M18.4 11c.4-1.6.6-2.8.9-3.8" />
      <path d="M6.5 14.6c.3 1.5.5 3.4 1.5 3.4.8 0 1.1-1.4 1.4-3 .3-1.5.5-2.6 1.3-2.6h.6c.8 0 1 1.1 1.3 2.6.3 1.6.6 3 1.4 3 1 0 1.2-1.9 1.5-3.4" />
      <path d="M4.4 9.5L6 6l2.4 2L12 4l3.6 4L18 6l1.6 3.5-2 1.2H6.4l-2-1.2z" />
    </Svg>
  );
}

/** Endodontia — dente com canais (raiz). */
export function RootCanal(props: IconProps) {
  return (
    <Svg {...props}>
      <path d={TOOTH_PATH} />
      <path d="M10.6 8.5l-.4 7.5M13.4 8.5l.4 7.5" />
      <circle cx="12" cy="7.3" r="1" />
    </Svg>
  );
}

/** Ortodontia — aparelho (fio com bráquetes). */
export function Braces(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 9c0 5 3 9 9 9s9-4 9-9" />
      <path d="M3 12h18" />
      <rect x="6" y="10.6" width="2.6" height="2.6" rx="0.5" />
      <rect x="10.7" y="10.6" width="2.6" height="2.6" rx="0.5" />
      <rect x="15.4" y="10.6" width="2.6" height="2.6" rx="0.5" />
    </Svg>
  );
}

/** Mapa nome -> componente. As chaves são o que vai no config. */
export const dentalIcons = {
  tooth: Tooth,
  "tooth-sparkle": ToothSparkle,
  "tooth-implant": ToothImplant,
  "tooth-shield": ToothShield,
  toothbrush: Toothbrush,
  "tooth-crown": ToothCrown,
  "root-canal": RootCanal,
  braces: Braces,
} as const;

export type DentalIconName = keyof typeof dentalIcons;
