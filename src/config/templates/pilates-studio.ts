import type { SiteConfig } from "../types";

/**
 * Template: Pilates / Studio — cliente de demonstração Studio Lótus.
 * Rota: /pilates-studiolotus
 * Tom: calmante, encorajador. Sage premium, serif elegante.
 * Cor: sage aprofundado (#5F7F63) para contraste de botão (briefing pedia #7A9E7E).
 * Imagens: Unsplash (demo). Trocar pelas reais do cliente.
 */
export const pilatesStudioLotus: SiteConfig = {
  theme: {
    primary: "#5F7F63",
    primaryForeground: "#FFFFFF",
    secondary: "#EAF0EA",
    background: "#FFFFFF",
    foreground: "#232A24",
    card: "#FFFFFF",
    muted: "#F4F7F4",
    surfaceDark: "#2A332B",
    surfaceDarkForeground: "#EAF0EA",
    radius: "1rem",
    fonts: { heading: "fraunces", body: "manrope" },
  },

  seo: {
    title: "Studio Lótus · Pilates com acompanhamento de verdade",
    description:
      "Pilates com cuidado individual para aliviar dores, melhorar a postura e a sua qualidade de vida. Agende uma aula experimental sem compromisso.",
    url: "https://studiolotus.com.br",
  },

  contact: {
    whatsapp: "5541999999999",
    whatsappMessage: "Olá! Gostaria de agendar uma aula experimental.",
    phoneDisplay: "(41) 99999-9999",
    address: "Rua das Acácias, 88, Água Verde, Curitiba, PR",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Curitiba%20PR&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },

  header: {
    logoText: "Studio Lótus",
    monogram: "SL",
    subtitle: "Pilates",
    links: [],
    ctaLabel: "Aula experimental",
  },

  hero: {
    headline: "Cuide do seu corpo com quem entende de **movimento**.",
    subheadline:
      "Pilates com acompanhamento individual de verdade. Menos dor, mais postura e a leveza de se sentir bem no próprio corpo, no seu ritmo.",
    primaryCta: "Agendar aula experimental",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&q=80&fit=crop",
    imageAlt: "Aula de pilates",
    badges: ["CREF 012345-G/PR", "+200 alunas ativas"],
    floatCard: { value: "4.9", label: "transformações reais" },
  },

  services: {
    title: "O que você vai **sentir**",
    subtitle: "O foco não é o método, é como você se sente a cada semana.",
    items: [
      {
        icon: "HeartPulse",
        title: "Menos dor",
        description: "Alívio real das dores nas costas e na coluna, em poucas semanas.",
      },
      {
        icon: "PersonStanding",
        title: "Mais postura",
        description: "Corpo mais alinhado, equilibrado e firme no dia a dia.",
      },
      {
        icon: "Sparkles",
        title: "Mais disposição",
        description: "Energia e leveza pra fazer o que você ama, sem cansaço.",
      },
      {
        icon: "UserCheck",
        title: "Acompanhamento individual",
        description: "Cada exercício pensado pra você, com correção e atenção de perto.",
      },
    ],
  },

  gallery: {
    title: "O nosso **espaço**",
    subtitle: "Um ambiente calmo, acolhedor e pensado pro seu bem-estar.",
    layout: "grid",
    items: [
      { image: "https://images.unsplash.com/photo-1591258370814-01609b341790?w=600&q=80&fit=crop", label: "Aula em aparelho" },
      { image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80&fit=crop", label: "Solo e alongamento" },
      { image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80&fit=crop", label: "Acompanhamento" },
      { image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80&fit=crop", label: "Ambiente clean" },
    ],
  },

  about: {
    title: "Prazer, sou a **Marina**",
    paragraphs: [
      "Sou instrutora de pilates há mais de 10 anos e acredito que movimento é cuidado. Já ajudei centenas de alunas a saírem da dor e reencontrarem o prazer de mexer o corpo.",
      "Aqui não tem academia lotada nem pressão. Tem atenção individual, escuta e um plano pensado pra você, do seu jeito e no seu tempo.",
    ],
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=700&q=80&fit=crop",
    imageAlt: "Instrutora de pilates",
    credentials: [
      { label: "Formação CREF 012345-G/PR" },
      { label: "Especialização em pilates clínico" },
      { label: "Atendimento individual e em duplas" },
      { label: "Foco em alívio de dores e postura" },
    ],
    stats: [
      { value: "10+", label: "anos de experiência" },
      { value: "200+", label: "alunas ativas" },
      { value: "4.9", label: "nota no Google" },
    ],
    signatureName: "Marina Alves",
    signatureTitle: "Instrutora · CREF 012345-G/PR",
  },

  testimonials: {
    title: "Histórias de **transformação**",
    subtitle: "O que mudou na vida de quem treina aqui.",
    google: {
      rating: "4,9",
      reviewsLabel: "+150 avaliações",
      url: "https://www.google.com/maps/search/?api=1&query=Studio+Lotus+pilates+Curitiba",
    },
    items: [
      {
        quote:
          "Tinha dor lombar há anos e já tinha tentado de tudo. Em três meses no studio a dor sumiu. A Marina cuida de cada detalhe.",
        author: "Sandra M.",
        role: "Aluna há 1 ano",
        rating: 5,
      },
      {
        quote:
          "Nunca consegui manter academia, mas aqui é diferente. Atenção total, sem pressão, e os resultados aparecem. Virou meu momento da semana.",
        author: "Letícia C.",
        role: "Aluna há 8 meses",
        rating: 5,
      },
      {
        quote:
          "Minha postura melhorou demais e durmo muito melhor. O ambiente é calmo e a Marina é atenciosa de verdade. Recomendo a todas.",
        author: "Rosana T.",
        role: "Aluna há 2 anos",
        rating: 5,
      },
    ],
  },

  faq: {
    title: "Antes da sua **primeira aula**",
    items: [
      {
        question: "Nunca fiz pilates. Consigo começar?",
        answer:
          "Com certeza. A maioria das alunas começa do zero. A primeira aula é uma avaliação tranquila pra entender o seu corpo e montar um plano no seu ritmo.",
      },
      {
        question: "A aula experimental é paga?",
        answer:
          "A primeira aula é uma experimental sem compromisso. Você conhece o studio, sente como é e decide com calma. Me chama no WhatsApp pra agendar.",
      },
      {
        question: "Tenho uma lesão ou dor crônica. Posso fazer?",
        answer:
          "Sim, e nesses casos o acompanhamento individual faz toda a diferença. Cada exercício é adaptado pra você, com segurança e respeito aos seus limites.",
      },
      {
        question: "Como funcionam os horários?",
        answer:
          "As aulas são com hora marcada, em turmas pequenas ou individuais. Me chama no WhatsApp que a gente encontra o melhor horário pra sua rotina.",
      },
    ],
  },

  cta: {
    subtitle: "Que tal começar leve?",
    title: "Faça uma aula experimental",
    note: "Sem compromisso, sem pressão. Venha sentir a diferença no seu corpo.",
    primaryCta: "Agendar minha experimental",
  },

  location: {
    title: "Pertinho de você, no **Água Verde**",
    hours: [
      { days: "Segunda a Sexta", hours: "06h às 21h" },
      { days: "Sábado", hours: "08h às 12h" },
    ],
  },

  footer: {
    monogram: "SL",
    name: "Studio Lótus",
    subline: "Pilates · CREF 012345-G/PR",
    copyright: "Curitiba, PR",
  },

  promo: {
    headline: "Imagina isso com o nome do seu studio.",
    body: "Essa é a sensação que a sua próxima aluna vai ter ao te encontrar: **um studio acolhedor, profissional, a escolha certa**. É essa primeira impressão que preenche as suas turmas. Me chama que eu te mostro como o seu ficaria.",
    chips: ["Mais alunas", "Mais autoridade", "Encontrado no Google"],
    primaryCta: "Quero isso pra mim",
    note: "Criada do zero com a sua identidade. Poucos projetos por vez, para cuidar de cada um de perto.",
    dismiss: "Continuar vendo",
    whatsappMessage:
      "Olá! Vi a página de exemplo do studio de pilates e quero uma assim, com a minha marca. Como ficaria?",
  },

  sections: {
    order: ["hero", "services", "gallery", "about", "stats", "testimonials", "faq", "cta", "location"],
  },
};
