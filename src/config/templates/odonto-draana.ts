import type { SiteConfig } from "../types";

/**
 * Template: Odontologia / Marca Pessoal — cliente de demonstração Dra. Ana Souza.
 * Rota: /odonto-draana
 *
 * Para um novo cliente do mesmo nicho: copie este arquivo, troque conteúdo,
 * cores (theme) e imagens, e registre em src/config/templates/index.ts.
 *
 * NOTA: imagens são do Unsplash (demonstração). Em produção, troque pelas fotos
 * reais do cliente (idealmente hospedadas no próprio projeto / Vercel Blob).
 */
export const odontoDraAna: SiteConfig = {
  theme: {
    primary: "#2A7F7F",
    primaryForeground: "#FFFFFF",
    secondary: "#EAF4F4",
    background: "#FFFFFF",
    foreground: "#1A2B2B",
    card: "#FFFFFF",
    muted: "#F8FAFA",
    surfaceDark: "#0E3B3B",
    surfaceDarkForeground: "#EAF4F4",
    radius: "0.875rem",
    fonts: { heading: "sora", body: "manrope" },
  },

  seo: {
    title: "Dra. Ana Souza · Odontologia em São José dos Pinhais",
    description:
      "Sou a Dra. Ana Souza, especialista em prótese, implantes e estética. Atendimento humano, sem dor e sem julgamentos. Marque sua consulta pelo WhatsApp.",
    url: "https://draanasouza.com.br",
    ogImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80&fit=crop",
  },

  contact: {
    whatsapp: "5541999999999",
    whatsappMessage: "Olá, Dra. Ana! Gostaria de marcar uma consulta.",
    phoneDisplay: "(41) 99999-9999",
    instagram: "https://instagram.com/draanasouza",
    instagramHandle: "@draanasouza",
    address: "Rua das Flores, 456, Centro, São José dos Pinhais, PR",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=S%C3%A3o%20Jos%C3%A9%20dos%20Pinhais%20PR&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },

  header: {
    logoText: "Dra. Ana Souza",
    logoIcon: "tooth",
    subtitle: "Odontologia",
    links: [],
    ctaLabel: "Marcar consulta",
  },

  hero: {
    headline: "O sorriso que você merece começa com **quem cuida de verdade**",
    subheadline:
      "Sou a Dra. Ana Souza. Há mais de 12 anos cuido de sorrisos com um atendimento próximo, sem dor e sem julgamentos. Marque sua consulta e venha sentir a diferença.",
    primaryCta: "Marcar minha consulta",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=700&q=80&fit=crop&crop=top",
    imageAlt: "Dra. Ana Souza",
    badges: ["CRO-PR 12345", "Especialista em Prótese & Estética"],
    floatCard: { value: "5.0", label: "Avaliação no Google" },
  },

  stats: {
    items: [
      { value: "12+", label: "anos de experiência", icon: "Award" },
      { value: "500+", label: "pacientes atendidos", icon: "Users" },
      { value: "5.0", label: "nota no Google", icon: "Star" },
      { value: "6", label: "especialidades", icon: "tooth" },
    ],
  },

  about: {
    title: "Prazer, eu sou a **Dra. Ana Souza**",
    paragraphs: [
      "Me formei em Odontologia há mais de 12 anos e, desde então, faço questão de um cuidado que começa pela escuta. Antes de qualquer procedimento, eu quero entender a sua história, o seu medo e o que você sonha para o seu sorriso.",
      "Sou especialista em prótese e reabilitação oral, com foco em estética, implantes e clareamento. Ver um paciente que tinha vergonha de sorrir voltar a sorrir de novo é o que move o meu trabalho. É assim que eu cuido de você: com técnica, tecnologia e um olhar humano.",
    ],
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=700&q=80&fit=crop",
    imageAlt: "Dra. Ana Souza em seu consultório",
    credentials: [
      { label: "Especialista em Prótese e Reabilitação Oral · CRO-PR 12345" },
      { label: "Pós-graduação em Implantodontia e Estética Dental" },
      { label: "Foco em atendimento humanizado e sem dor" },
      { label: "Atendimento particular e convênios" },
    ],
    signatureName: "Dra. Ana Souza",
    signatureTitle: "Prótese, Implantes & Estética · CRO-PR 12345",
  },

  services: {
    title: "Cuidado completo para **cada necessidade**",
    subtitle:
      "Do preventivo ao estético, tudo pensado para você sorrir com saúde e confiança.",
    items: [
      {
        icon: "tooth-crown",
        title: "Prótese Dentária",
        description: "Reabilitação oral com naturalidade e função perfeita.",
      },
      {
        icon: "root-canal",
        title: "Endodontia",
        description: "Tratamento de canal com técnica avançada e sem dor.",
      },
      {
        icon: "tooth-sparkle",
        title: "Clareamento",
        description: "Sorriso mais branco com segurança e resultado duradouro.",
      },
      {
        icon: "tooth-shield",
        title: "Consulta Preventiva",
        description: "Avaliação completa para manter sua saúde bucal em dia.",
      },
      {
        icon: "toothbrush",
        title: "Limpeza Dental",
        description: "Remoção de tártaro e polimento para gengiva saudável.",
      },
      {
        icon: "tooth-implant",
        title: "Implante Dentário",
        description: "Solução permanente para dentes ausentes, com alta durabilidade.",
      },
    ],
  },

  gallery: {
    title: "Resultados de **quem confiou** no meu trabalho",
    subtitle:
      "Arraste e veja a transformação de pacientes que um dia também tiveram receio de sorrir.",
    items: [
      {
        label: "Clareamento",
        before:
          "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=700&q=80&fit=crop",
        after:
          "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&q=80&fit=crop",
      },
      {
        label: "Facetas",
        before:
          "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=700&q=80&fit=crop",
        after:
          "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=700&q=80&fit=crop",
      },
    ],
  },

  testimonials: {
    title: "O que dizem **sobre o meu trabalho**",
    subtitle: "Avaliações reais de pacientes que confiaram o sorriso a mim.",
    // Troque a URL pelo link real do perfil do cliente no Google.
    google: {
      rating: "5,0",
      reviewsLabel: "+500 avaliações",
      url: "https://www.google.com/maps/search/?api=1&query=Dra.+Ana+Souza+Odontologia+S%C3%A3o+Jos%C3%A9+dos+Pinhais",
    },
    items: [
      {
        quote:
          "Extremamente simpática, paciente e atenciosa. Ela explica tudo com muito detalhe, desde o diagnóstico até cada etapa do procedimento. Profissional incrível.",
        author: "Camila M.",
        role: "Paciente há 2 anos",
        rating: 5,
      },
      {
        quote:
          "Sou paciente da Dra. Ana há mais de 8 anos. Sempre demonstrou profissionalismo, atenção e carinho. Cuida de mim e da minha família com muita competência.",
        author: "Ana Paula C.",
        role: "Paciente há 8 anos",
        rating: 5,
      },
      {
        quote:
          "Clínica extremamente aconchegante, profissional incrível. Com muita paciência e sempre explicando detalhadamente o procedimento. Recomendo muito!",
        author: "Ketlyn R.",
        role: "Paciente há 1 ano",
        rating: 5,
      },
    ],
  },

  faq: {
    title: "Ficou com **alguma dúvida?**",
    items: [
      {
        question: "Vocês atendem por convênio ou só particular?",
        answer:
          "Atendo de forma particular e também por convênios. Me chame no WhatsApp informando o seu plano que confirmo a cobertura na hora.",
      },
      {
        question: "Dá para parcelar o tratamento?",
        answer:
          "Sim. Trabalho com condições facilitadas e parcelamento, sempre montando um plano que cabe no seu orçamento antes de iniciar qualquer procedimento.",
      },
      {
        question: "Tenho medo de dentista. Como é o atendimento?",
        answer:
          "Você não está sozinha nisso. Boa parte dos meus pacientes chega assim, e o meu atendimento é calmo, sem pressa, com cada etapa explicada e técnicas modernas que tornam os procedimentos praticamente indolores.",
      },
      {
        question: "Como funciona a primeira consulta?",
        answer:
          "A primeira consulta é uma avaliação completa: entendo a sua queixa, examino a sua saúde bucal e monto um plano de tratamento personalizado, com valores transparentes.",
      },
      {
        question: "Onde fica o consultório?",
        answer:
          "Atendo no Centro de São José dos Pinhais, com fácil acesso. O endereço completo e o mapa estão logo abaixo.",
      },
    ],
  },

  cta: {
    subtitle: "Pronto para sorrir?",
    title: "Marque sua consulta hoje",
    note: "Atendimento presencial em São José dos Pinhais · Particular e convênios",
    primaryCta: "Marcar pelo WhatsApp",
  },

  location: {
    title: "Pertinho de você, em **São José dos Pinhais**",
    hours: [
      { days: "Segunda a Sexta", hours: "08h às 18h" },
      { days: "Sábado", hours: "08h às 12h" },
    ],
  },

  footer: {
    logoIcon: "tooth",
    name: "Dra. Ana Souza",
    subline: "CRO-PR 12345 · Odontologia",
    copyright: "São José dos Pinhais, PR",
  },

  // Pop-up de proposta (nossa camada de venda sobre a demo).
  promo: {
    headline: "Imagina isso com o seu nome.",
    body: "Essa é a sensação que o seu próximo paciente vai ter ao te procurar: **o profissional mais desejado, confiável e escalável da sua cidade**. É essa primeira impressão que lota uma agenda. Me chama que eu te mostro como a sua ficaria.",
    chips: ["Agenda lotada", "Referência na sua cidade", "Encontrada no Google"],
    primaryCta: "Quero isso pra mim",
    note: "Poucos projetos por vez, para cuidar de cada um de perto.",
    dismiss: "Continuar vendo",
    whatsappMessage:
      "Olá! Vi a página de exemplo e quero uma assim, com o meu nome. Me mostra como ficaria pro meu consultório?",
  },

  sections: {
    order: ["hero", "stats", "about", "services", "gallery", "testimonials", "faq", "location", "cta"],
  },
};
