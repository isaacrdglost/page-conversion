import type { SiteConfig } from "../types";
import { odontoDraAna } from "./odonto-draana";
import { contabilidadeFerreira } from "./contabilidade-escritorio";
import { petshopPatasECia } from "./petshop";
import { pilatesStudioLotus } from "./pilates-studio";
import { eventosVillaReal } from "./eventos-buffet";

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
  {
    slug: "contabilidade-ferreira",
    config: contabilidadeFerreira,
    title: "Página para contadores e escritórios",
    niche: "Contabilidade",
    name: "Ferreira Contabilidade",
    blurb: "Página para contadores atraírem e fecharem clientes com mais autoridade.",
  },
  {
    slug: "petshop-patasecia",
    config: petshopPatasECia,
    title: "Página para pet shops e clínicas vet",
    niche: "Pet Shop",
    name: "Patas & Cia",
    blurb: "Página para pet shops e clínicas atraírem tutores e lotarem a agenda.",
  },
  {
    slug: "pilates-studiolotus",
    config: pilatesStudioLotus,
    title: "Página para estúdios de pilates",
    niche: "Pilates",
    name: "Studio Lótus",
    blurb: "Página para estúdios e instrutores atraírem alunos e preencherem turmas.",
  },
  {
    slug: "eventos-villareal",
    config: eventosVillaReal,
    title: "Página para buffets e espaços de eventos",
    niche: "Eventos & Buffet",
    name: "Espaço Villa Real",
    blurb: "Página para buffets e produtoras atraírem e fecharem mais eventos.",
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

export const comingSoon: ComingSoonEntry[] = [];
