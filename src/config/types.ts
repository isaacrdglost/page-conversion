/**
 * Sistema de configuração da One-Page.
 *
 * Toda a página é dirigida por um único objeto `SiteConfig`. Para entregar um
 * novo cliente, em teoria basta criar um novo arquivo de config e fazer deploy
 * — nenhum componente precisa ser tocado.
 *
 * Convenção de cor: use HEX (ex: "#0F766E"). O ThemeInjector converte para as
 * CSS variables que o Tailwind/shadcn consomem.
 */

/** Nome de um ícone do lucide-react (ex: "Sparkles", "Smile"). */
export type IconName = string;

export interface ThemeConfig {
  /** Cor principal da marca — botões, destaques, links. */
  primary: string;
  /** Texto que fica por cima da cor primária (geralmente branco). */
  primaryForeground: string;
  /** Cor de apoio para gradientes/detalhes secundários. */
  secondary: string;
  /** Cor de fundo da página. */
  background: string;
  /** Cor do texto principal. */
  foreground: string;
  /** Fundo de cartões/seções elevadas. */
  card: string;
  /** Tom suave para fundos alternados de seção. */
  muted: string;
  /** Fundo das seções escuras de destaque (ex: teal profundo "#0E3B3B"). */
  surfaceDark: string;
  /** Texto sobre as seções escuras (claro). */
  surfaceDarkForeground: string;
  /** Raio de borda base (ex: "0.75rem"). Controla o arredondamento geral. */
  radius: string;
  /** Par de fontes — devem existir no registro em src/lib/fonts.ts. */
  fonts: {
    /** Fonte de títulos/display. */
    heading: FontKey;
    /** Fonte de corpo de texto. */
    body: FontKey;
  };
}

/** Fontes disponíveis no registro (src/lib/fonts.ts). */
export type FontKey =
  | "fraunces"
  | "playfair"
  | "inter"
  | "manrope"
  | "geist"
  | "cormorant"
  | "poppins"
  | "sora";

export interface ContactConfig {
  /** Telefone só com dígitos e DDI, ex: "5511999999999" — usado no link do WhatsApp. */
  whatsapp: string;
  /** Mensagem pré-preenchida ao abrir o WhatsApp. */
  whatsappMessage: string;
  /** Telefone formatado para exibição, ex: "(11) 99999-9999". */
  phoneDisplay: string;
  email?: string;
  instagram?: string;
  instagramHandle?: string;
  /** Endereço completo para exibição. */
  address?: string;
  /** URL de embed do Google Maps (iframe src). */
  mapEmbedUrl?: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  /** URL canônica do site, ex: "https://draana.com.br". */
  url?: string;
  /** Caminho da imagem de compartilhamento (Open Graph). */
  ogImage?: string;
}

export interface NavLink {
  label: string;
  /** Âncora para a seção, ex: "#servicos". */
  href: string;
}

export interface HeaderConfig {
  /** Texto do logo (nome exibido). */
  logoText: string;
  /** Ícone da marca (ex: "tooth"). Tem prioridade sobre o monograma. */
  logoIcon?: IconName;
  /** Iniciais do monograma, ex: "AS". Usado se não houver logoIcon. */
  monogram?: string;
  /** Linha pequena sob o nome, ex: "Odontologia". */
  subtitle?: string;
  /** Links de navegação. Pode ser vazio para um header minimalista (só CTA). */
  links: NavLink[];
  ctaLabel: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroConfig {
  /** Tag pequena acima do título, ex: "Dentista • Especialista em Estética". */
  eyebrow?: string;
  /** Título principal. Use **texto** para destacar trechos na cor primária. */
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta?: string;
  /** Imagem principal (foto do profissional). */
  image: string;
  imageAlt: string;
  /** Selos curtos abaixo do CTA, ex: ["CRO-PR 12345", "12 anos de experiência"]. */
  badges?: string[];
  /** Mini-provas exibidas abaixo do CTA (alternativa aos badges). */
  stats?: HeroStat[];
  /** Card de prova social flutuante sobre a foto. */
  floatCard?: {
    icon?: IconName;
    value: string;
    label: string;
  };
}

export interface AboutConfig {
  eyebrow?: string;
  title: string;
  /** Parágrafos da bio. */
  paragraphs: string[];
  /** Foto do profissional. */
  image: string;
  imageAlt: string;
  /** Nome assinado, ex: "Dra. Ana Beatriz". */
  signatureName?: string;
  signatureTitle?: string;
  /** Credenciais/selos, ex: "CRO-SP 12345", "Pós em Implantodontia". */
  credentials?: { icon?: IconName; label: string }[];
  /** Números de autoridade ao final, ex: [{ value: "12+", label: "anos" }]. */
  stats?: { value: string; label: string }[];
}

export interface ServiceItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface ServicesConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: ServiceItem[];
}

export interface StatItem {
  /** Valor numérico/curto, ex: "+1.200", "15", "98%". */
  value: string;
  label: string;
  icon?: IconName;
}

export interface StatsConfig {
  title?: string;
  items: StatItem[];
}

export interface BeforeAfterItem {
  /** Layout "compare": imagem do antes. */
  before?: string;
  /** Layout "compare": imagem do depois. */
  after?: string;
  /** Layout "grid": imagem única. */
  image?: string;
  /** Legenda (ex: "Casamento · Mar/2025"). */
  label?: string;
}

export interface GalleryConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** "compare" = slider antes/depois (odonto); "grid" = grade de fotos (eventos). Default "compare". */
  layout?: "compare" | "grid";
  items: BeforeAfterItem[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
  avatar?: string;
}

export interface TestimonialsConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: Testimonial[];
  /** Selo de credibilidade do Google (nota + link pro perfil real). */
  google?: {
    /** Nota exibida, ex: "5,0". */
    rating: string;
    /** Texto de volume, ex: "+500 avaliações". */
    reviewsLabel?: string;
    /** Link para o perfil/avaliações no Google (Maps/Business). */
    url: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: FaqItem[];
}

export interface CtaConfig {
  title: string;
  subtitle?: string;
  primaryCta: string;
  /** Texto de reforço, ex: "Resposta em até 1 hora no horário comercial." */
  note?: string;
}

export interface LocationConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Horários, ex: [{ days: "Seg–Sex", hours: "09h às 19h" }]. */
  hours?: { days: string; hours: string }[];
}

/**
 * Faixa enxuta de convênios/planos aceitos (versão de entrada; a versão detalhada
 * com logos é upsell premium). O CTA direciona ao WhatsApp ("confira quais").
 */
export interface ConveniosConfig {
  /** Ex: "Aceitamos convênios e planos de saúde". */
  title: string;
  /** Texto do link/CTA. Ex: "Confira os planos aceitos". */
  cta?: string;
}

export interface FooterConfig {
  /** Ícone da marca (ex: "tooth"). Tem prioridade sobre o monograma. */
  logoIcon?: IconName;
  /** Iniciais do monograma. Usado se não houver logoIcon. */
  monogram?: string;
  /** Nome exibido no rodapé. Se ausente, usa o logoText do header. */
  name?: string;
  /** Linha pequena sob o nome, ex: "CRO-PR 12345 · Odontologia". */
  subline?: string;
  /** Linha de descrição curta. */
  tagline?: string;
  /** CNPJ para o rodapé (legitimidade; usar em escritórios/estabelecimentos). */
  cnpj?: string;
  /** Texto de copyright (o ano é adicionado automaticamente). */
  copyright: string;
}

/**
 * Liga/desliga seções e define a ordem de renderização.
 * Remover uma chave de `order` remove a seção da página.
 */
export interface SectionsToggle {
  order: SectionKey[];
}

export type SectionKey =
  | "hero"
  | "stats"
  | "about"
  | "services"
  | "gallery"
  | "testimonials"
  | "faq"
  | "cta"
  | "location"
  | "convenios";

/**
 * Pop-up de proposta (NOSSA camada de venda sobre a demo). Dispara quando o
 * visitante rola até o fim ou passa um tempo na página. O CTA leva ao nosso
 * WhatsApp (business.ts), não ao contato do cliente fictício.
 */
export interface PromoConfig {
  /** Liga/desliga o pop-up nesta página. Default: ligado. */
  enabled?: boolean;
  headline: string;
  body: string;
  /** Selos curtos de benefício, ex: ["Mais pacientes", "Agenda cheia"]. */
  chips?: string[];
  primaryCta: string;
  /** Linha curta de reforço (quebra de objeção/escassez), entre os chips e o CTA. */
  note?: string;
  /** Texto do botão de dispensar. Default: "Continuar vendo". */
  dismiss?: string;
  /** Mensagem pré-preenchida no nosso WhatsApp. */
  whatsappMessage: string;
}

export interface SiteConfig {
  theme: ThemeConfig;
  seo: SeoConfig;
  contact: ContactConfig;
  header: HeaderConfig;
  hero: HeroConfig;
  about: AboutConfig;
  services: ServicesConfig;
  /** Faixa de números independente. Opcional — nem todo template usa. */
  stats?: StatsConfig;
  gallery: GalleryConfig;
  testimonials: TestimonialsConfig;
  faq: FaqConfig;
  cta: CtaConfig;
  location: LocationConfig;
  /** Faixa enxuta de convênios aceitos (opcional). */
  convenios?: ConveniosConfig;
  footer: FooterConfig;
  sections: SectionsToggle;
  /** Pop-up de proposta. Se ausente, usa um default genérico. */
  promo?: PromoConfig;
}
