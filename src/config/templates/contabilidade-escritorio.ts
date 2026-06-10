import type { SiteConfig } from "../types";

/**
 * Template: Contabilidade / Escritório — cliente de demonstração Ferreira Contabilidade.
 * Rota: /contabilidade-ferreira
 * Tom: parceiro de negócios, direto, sem juridiquês. Azul escuro premium.
 * Imagens: Unsplash (demo). Trocar pelas reais do cliente.
 */
export const contabilidadeFerreira: SiteConfig = {
  theme: {
    primary: "#1A3A5C",
    primaryForeground: "#FFFFFF",
    secondary: "#EAF1F8",
    background: "#FFFFFF",
    foreground: "#16202B",
    card: "#FFFFFF",
    muted: "#F5F8FB",
    surfaceDark: "#0E2438",
    surfaceDarkForeground: "#E7EEF6",
    radius: "0.75rem",
    fonts: { heading: "sora", body: "manrope" },
  },

  seo: {
    title: "Ferreira Contabilidade · Contador para a sua empresa",
    description:
      "Abra e cuide da sua empresa sem dor de cabeça. Contabilidade descomplicada para MEI, pequenas empresas e profissionais liberais. Fale com um contador.",
    url: "https://ferreiracontabilidade.com.br",
  },

  contact: {
    whatsapp: "5541998906082",
    whatsappMessage: "Olá! Gostaria de falar com um contador.",
    phoneDisplay: "(41) 99890-6082",
    address: "São José dos Pinhais, PR",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=S%C3%A3o%20Jos%C3%A9%20dos%20Pinhais%20PR&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },

  header: {
    logoText: "Ferreira Contabilidade",
    monogram: "FC",
    subtitle: "Contabilidade",
    links: [],
    ctaLabel: "Falar com contador",
  },

  hero: {
    headline: "A contabilidade da sua empresa em **mãos seguras**, de ponta a ponta.",
    subheadline:
      "Para MEI, pequenas empresas e profissionais liberais em São José dos Pinhais e região. Você foca no crescimento do negócio e a Ferreira cuida de cada imposto, obrigação e prazo.",
    primaryCta: "Falar com contador",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80&fit=crop",
    imageAlt: "Atendimento contábil",
    badges: ["CRC-PR 012345", "+12 anos de mercado"],
    floatCard: { value: "500+", label: "empresas atendidas" },
  },

  services: {
    title: "Pra cada fase do seu **negócio**",
    subtitle: "Seja qual for o seu momento, a gente resolve a parte chata por você.",
    items: [
      {
        icon: "Store",
        title: "MEI",
        description: "Emita nota, pague o DAS em dia e durma tranquilo, sem se perder.",
      },
      {
        icon: "Building2",
        title: "Pequena Empresa",
        description: "Folha, impostos e obrigações em ordem, sem você precisar pensar nisso.",
      },
      {
        icon: "Briefcase",
        title: "Profissional Liberal",
        description: "Médico, advogado ou dentista: menos imposto e mais foco no seu trabalho.",
      },
    ],
  },

  stats: {
    items: [
      { value: "12+", label: "anos de mercado", icon: "Award" },
      { value: "500+", label: "empresas atendidas", icon: "Building2" },
      { value: "24h", label: "para abrir o CNPJ", icon: "Clock" },
      { value: "4.9", label: "nota no Google", icon: "Star" },
    ],
  },

  about: {
    title: "O escritório que **resolve**, não que complica",
    paragraphs: [
      "Há mais de 12 anos a gente cuida da contabilidade de quem empreende na região. Nasceu de uma ideia simples: tirar o peso da burocracia das suas costas e traduzir o que importa numa linguagem que você entende.",
      "Aqui você fala com gente de verdade, tem resposta rápida e nunca é deixado no escuro sobre o seu próprio dinheiro. A gente trata o seu negócio como se fosse o nosso.",
    ],
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700&q=80&fit=crop",
    imageAlt: "Escritório de contabilidade",
    credentials: [
      { label: "Registro CRC-PR 012345" },
      { label: "Atendimento presencial e online" },
      { label: "Especialistas em MEI e Simples Nacional" },
      { label: "Resposta em até 1 dia útil" },
    ],
    stats: [
      { value: "12+", label: "anos de mercado" },
      { value: "500+", label: "empresas" },
      { value: "4.9", label: "nota no Google" },
    ],
    signatureName: "Equipe Ferreira",
    signatureTitle: "Contabilidade · CRC-PR 012345",
  },

  gallery: { title: "", items: [] },

  testimonials: {
    title: "Quem deixou a burocracia **com a gente**",
    subtitle: "O que os clientes falam sobre trabalhar com o escritório.",
    google: {
      rating: "4,9",
      reviewsLabel: "+120 avaliações",
      url: "https://www.google.com/maps/search/?api=1&query=Ferreira+Contabilidade+São+José+dos+Pinhais",
    },
    items: [
      {
        quote:
          "Abriram minha empresa em menos de dois dias e me explicaram cada passo. Pela primeira vez entendi o que estava pagando de imposto.",
        author: "Rafael M.",
        role: "Cliente há 3 anos",
        rating: 5,
      },
      {
        quote:
          "Sempre que tenho dúvida, respondem rápido e sem aquele juridiquês. Me sinto seguro pra focar no meu negócio.",
        author: "Juliana P.",
        role: "Cliente há 5 anos",
        rating: 5,
      },
      {
        quote:
          "Já economizei bastante desde que troquei de contador. Atenção de verdade e zero dor de cabeça com prazos.",
        author: "Marcos A.",
        role: "Cliente há 2 anos",
        rating: 5,
      },
    ],
  },

  faq: {
    title: "Perguntas que **todo mundo faz**",
    items: [
      {
        question: "Vocês atendem online ou só presencial?",
        answer:
          "Os dois. Você resolve tudo pelo WhatsApp e e-mail, e se preferir conversar pessoalmente, é só marcar. Atendemos clientes de várias cidades.",
      },
      {
        question: "Quanto custa abrir um MEI ou uma empresa?",
        answer:
          "A abertura de MEI é simples e a gente faz sem complicação. Para empresa, montamos um plano transparente antes de começar. Chame no WhatsApp pra um orçamento na hora.",
      },
      {
        question: "Já tenho contador. Dá pra trocar pra vocês?",
        answer:
          "Dá sim, e cuidamos de toda a transição pra você não ter trabalho nenhum. Sem multa, sem stress.",
      },
      {
        question: "Que documentos eu preciso pra começar?",
        answer:
          "Depende do seu caso, mas é menos do que parece. Me chama no WhatsApp que eu te passo a listinha certa pro seu perfil.",
      },
    ],
  },

  cta: {
    subtitle: "Pronto pra começar?",
    title: "Abra seu CNPJ em até 24h",
    note: "Sem burocracia, sem juridiquês. A gente cuida de tudo por você.",
    primaryCta: "Abrir minha empresa",
  },

  location: {
    title: "Atendimento **presencial e online**",
    hours: [
      { days: "Segunda a Sexta", hours: "08h às 18h" },
      { days: "Sábado", hours: "Atendimento online" },
    ],
  },

  footer: {
    monogram: "FC",
    name: "Ferreira Contabilidade",
    subline: "CRC-PR 012345 · Contabilidade",
    copyright: "São José dos Pinhais, PR",
  },

  promo: {
    headline: "Imagina isso com o nome do seu escritório.",
    body: "Essa é a impressão que o seu próximo cliente vai ter: **um escritório sério, confiável, a escolha óbvia**. É essa primeira impressão que enche a sua carteira de clientes. Me chama que eu te mostro como a sua ficaria.",
    chips: ["Mais clientes", "Mais autoridade", "Encontrado no Google"],
    primaryCta: "Quero isso pra mim",
    note: "Criada do zero com a sua identidade. Poucos projetos por vez, para cuidar de cada um de perto.",
    dismiss: "Continuar vendo",
    whatsappMessage:
      "Olá! Vi a página de exemplo de contabilidade e quero uma assim, com a minha marca. Como ficaria?",
  },

  sections: {
    order: ["hero", "services", "stats", "about", "testimonials", "faq", "cta", "location"],
  },
};
