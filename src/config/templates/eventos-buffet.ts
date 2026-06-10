import type { SiteConfig } from "../types";

/**
 * Template: Eventos / Buffet — cliente de demonstração Espaço Villa Real.
 * Rota: /eventos-villareal
 * Tom: emotivo e aspiracional, aterrissando em info prática. Dourado elegante.
 * Cor: dourado aprofundado (#9A7B2E) para legibilidade de texto/botão
 * (briefing pedia #C9A84C, claro demais com texto branco). Identidade dourada mantida.
 * Galeria = seção protagonista (layout grid). Imagens: Unsplash (demo).
 */
export const eventosVillaReal: SiteConfig = {
  theme: {
    primary: "#9A7B2E",
    primaryForeground: "#FFFFFF",
    secondary: "#F4EAD0",
    background: "#FFFFFF",
    foreground: "#2A2620",
    card: "#FFFFFF",
    muted: "#FAF6EC",
    surfaceDark: "#221E14",
    surfaceDarkForeground: "#F0E8D2",
    radius: "0.5rem",
    fonts: { heading: "playfair", body: "manrope" },
  },

  seo: {
    title: "Espaço Villa Real · O cenário do seu evento dos sonhos",
    description:
      "Casamentos, aniversários e eventos corporativos num espaço completo e elegante. Veja a galeria e verifique a disponibilidade da sua data.",
    url: "https://espacovillareal.com.br",
  },

  contact: {
    whatsapp: "5541999999999",
    whatsappMessage: "Olá! Gostaria de verificar a disponibilidade de uma data.",
    phoneDisplay: "(41) 99999-9999",
    address: "Estrada do Vale, km 4, Região dos Lagos, Curitiba, PR",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Curitiba%20PR&t=&z=12&ie=UTF8&iwloc=&output=embed",
  },

  header: {
    logoText: "Espaço Villa Real",
    monogram: "VR",
    subtitle: "Eventos",
    links: [],
    ctaLabel: "Verificar data",
  },

  hero: {
    headline: "O cenário perfeito para o seu **momento especial**.",
    subheadline:
      "Um espaço completo e elegante para transformar o seu grande dia em memória. Estrutura, beleza e uma equipe que cuida de cada detalhe com você.",
    primaryCta: "Verificar data disponível",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&fit=crop",
    imageAlt: "Espaço de eventos decorado",
    badges: ["Até 300 convidados", "+500 eventos realizados"],
    floatCard: { value: "500+", label: "eventos inesquecíveis" },
  },

  gallery: {
    title: "Momentos que **aconteceram aqui**",
    subtitle: "Cada foto é um evento real que viveu no Villa Real.",
    layout: "grid",
    items: [
      { image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80&fit=crop", label: "Casamento · Mar/2025" },
      { image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80&fit=crop", label: "Recepção · Fev/2025" },
      { image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80&fit=crop", label: "Aniversário · Jan/2025" },
      { image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80&fit=crop", label: "Confraternização · Dez/2024" },
      { image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80&fit=crop", label: "Festa · Nov/2024" },
      { image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80&fit=crop", label: "Celebração · Out/2024" },
      { image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=600&q=80&fit=crop", label: "Mesa posta · Set/2024" },
      { image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80&fit=crop", label: "Corporativo · Ago/2024" },
      { image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&q=80&fit=crop", label: "Jardim · Jul/2024" },
    ],
  },

  services: {
    title: "Para cada **celebração**",
    subtitle: "Estrutura sob medida para o tipo do seu evento.",
    items: [
      {
        icon: "Heart",
        title: "Casamentos",
        description: "Do altar à pista, o cenário dos sonhos para até 300 convidados.",
      },
      {
        icon: "Cake",
        title: "Aniversários",
        description: "Festas inesquecíveis, com espaço e estrutura para a sua família toda.",
      },
      {
        icon: "Briefcase",
        title: "Corporativo",
        description: "Confraternizações e eventos de empresa com elegância e organização.",
      },
      {
        icon: "PartyPopper",
        title: "Confraternizações",
        description: "Aquela comemoração especial, do seu jeito, com todo conforto.",
      },
    ],
  },

  about: {
    title: "Um espaço feito para **emocionar**",
    paragraphs: [
      "Há mais de 10 anos o Villa Real recebe os momentos mais importantes da vida das pessoas. São salão climatizado, jardim, ampla cozinha, estacionamento e uma equipe que trata o seu evento como se fosse o nosso.",
      "Aqui você não aluga só um espaço: ganha um parceiro que cuida de cada detalhe pra você curtir o seu dia sem preocupação.",
    ],
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700&q=80&fit=crop",
    imageAlt: "Salão de eventos",
    credentials: [
      { label: "Salão climatizado para até 300 convidados" },
      { label: "Jardim, cozinha equipada e amplo estacionamento" },
      { label: "Som, iluminação e equipe de apoio" },
      { label: "Parceiros de buffet, decoração e DJ" },
    ],
    stats: [
      { value: "500+", label: "eventos realizados" },
      { value: "300", label: "convidados" },
      { value: "5.0", label: "nota no Google" },
    ],
    signatureName: "Espaço Villa Real",
    signatureTitle: "O cenário do seu momento",
  },

  stats: {
    items: [
      { value: "500+", label: "eventos realizados", icon: "PartyPopper" },
      { value: "300", label: "convidados", icon: "Users" },
      { value: "10+", label: "anos de história", icon: "Calendar" },
      { value: "5.0", label: "nota no Google", icon: "Star" },
    ],
  },

  testimonials: {
    title: "Histórias que **ficaram pra sempre**",
    subtitle: "O que as famílias falam sobre o seu dia no Villa Real.",
    google: {
      rating: "5,0",
      reviewsLabel: "+200 avaliações",
      url: "https://www.google.com/maps/search/?api=1&query=Espaco+Villa+Real+eventos+Curitiba",
    },
    items: [
      {
        quote:
          "Meu casamento foi um sonho. O espaço é lindo e a equipe cuidou de tudo. Minha família nunca vai esquecer esse dia.",
        author: "Amanda e Felipe",
        role: "Casamento, 2025",
        rating: 5,
      },
      {
        quote:
          "Fiz o aniversário de 15 anos da minha filha e foi perfeito. Organização impecável e atenção do começo ao fim. Recomendo demais.",
        author: "Cláudia R.",
        role: "Aniversário, 2024",
        rating: 5,
      },
      {
        quote:
          "Fizemos a confraternização da empresa e superou as expectativas. Estrutura completa e tudo no horário. Voltaremos com certeza.",
        author: "Ricardo T.",
        role: "Evento corporativo, 2024",
        rating: 5,
      },
    ],
  },

  faq: {
    title: "Tudo que você precisa **saber**",
    items: [
      {
        question: "O que está incluso no espaço?",
        answer:
          "Salão climatizado, jardim, cozinha equipada, estacionamento amplo, som e iluminação básicos e equipe de apoio. Buffet, decoração e DJ entram via parceiros, com indicação nossa.",
      },
      {
        question: "Qual a capacidade do espaço?",
        answer:
          "Recebemos eventos de até 300 convidados, com layouts diferentes para casamento, aniversário ou corporativo. Conta pra gente o tamanho do seu evento que ajustamos tudo.",
      },
      {
        question: "Como verifico se a minha data está livre?",
        answer:
          "É só me chamar no WhatsApp com a data desejada que eu confirmo a disponibilidade na hora. As datas mais procuradas costumam fechar com antecedência.",
      },
      {
        question: "Posso agendar uma visita ao espaço?",
        answer:
          "Pode e recomendamos. Ver o espaço pessoalmente faz toda a diferença. Marque a sua visita pelo WhatsApp no melhor horário pra você.",
      },
    ],
  },

  cta: {
    subtitle: "Datas são finitas.",
    title: "Verifique se a sua data está disponível",
    note: "As datas mais procuradas fecham rápido. Garanta a sua antes que alguém reserve.",
    primaryCta: "Verificar pelo WhatsApp",
  },

  location: {
    title: "Onde os melhores momentos **acontecem**",
    hours: [
      { days: "Visitas", hours: "Segunda a Sábado, com hora marcada" },
      { days: "Eventos", hours: "Todos os dias" },
    ],
  },

  footer: {
    monogram: "VR",
    name: "Espaço Villa Real",
    subline: "Eventos · Casamentos e celebrações",
    copyright: "Curitiba, PR",
  },

  promo: {
    headline: "Imagina isso com o nome do seu espaço.",
    body: "Essa é a sensação que os próximos noivos vão ter ao te encontrar: **um espaço dos sonhos, confiável, a escolha certa**. É essa primeira impressão que fecha a sua agenda. Me chama que eu te mostro como a sua ficaria.",
    chips: ["Mais reservas", "Mais autoridade", "Encontrado no Google"],
    primaryCta: "Quero isso pra mim",
    note: "Criada do zero com a sua identidade. Poucos projetos por vez, para cuidar de cada um de perto.",
    dismiss: "Continuar vendo",
    whatsappMessage:
      "Olá! Vi a página de exemplo de eventos e quero uma assim, com a minha marca. Como ficaria?",
  },

  sections: {
    order: ["hero", "gallery", "services", "about", "stats", "testimonials", "faq", "cta", "location"],
  },
};
