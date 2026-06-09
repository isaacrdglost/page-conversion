import type { SiteConfig } from "../types";
import { odontoDraAna } from "./odonto-draana";

/**
 * Registry de templates. Cada entrada vira uma rota /<slug> e um card na home.
 * Para adicionar um template: crie o arquivo de config e registre-o aqui.
 */
export interface TemplateEntry {
  /** Vira a URL: /<slug> */
  slug: string;
  config: SiteConfig;
  /** Título acessível do card (caso de uso, sem jargão), ex: "Página para dentistas e consultórios". */
  title: string;
  /** Nicho curto, exibido como eyebrow do card, ex: "Odontologia". */
  niche: string;
  /** Nome do exemplo real, mostrado discretamente ("Exemplo: ..."). */
  name: string;
  /** Frase curta para o card. */
  blurb: string;
}

export const templates: TemplateEntry[] = [
  {
    slug: "odonto-draana",
    config: odontoDraAna,
    title: "Página para dentistas e consultórios",
    niche: "Odontologia",
    name: "Dra. Ana Souza",
    blurb: "Página feita para dentistas atraírem e agendarem novos pacientes pelo WhatsApp.",
  },
];

export function getTemplate(slug: string): TemplateEntry | undefined {
  return templates.find((t) => t.slug === slug);
}

/** Nichos em produção (cards "Em breve", sem rota ainda). Display-only. */
export interface ComingSoonEntry {
  niche: string;
  title: string;
  blurb: string;
  /** Cor de acento do preview (hex). */
  accent: string;
}

export const comingSoon: ComingSoonEntry[] = [
  {
    niche: "Contabilidade",
    title: "Página para contadores e escritórios",
    blurb: "Página para contadores atraírem e fecharem clientes com mais autoridade.",
    accent: "#2563EB",
  },
  {
    niche: "Pet Shop",
    title: "Página para pet shops e clínicas vet",
    blurb: "Página para pet shops e clínicas atraírem tutores e lotarem a agenda.",
    accent: "#F59E0B",
  },
  {
    niche: "Pilates",
    title: "Página para estúdios de pilates",
    blurb: "Página para estúdios e instrutores atraírem alunos e preencherem turmas.",
    accent: "#7C3AED",
  },
  {
    niche: "Eventos & Buffet",
    title: "Página para buffets e eventos",
    blurb: "Página para buffets e produtoras atraírem e fecharem mais eventos.",
    accent: "#CA8A04",
  },
];
