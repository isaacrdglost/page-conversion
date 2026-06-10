import type { SiteConfig } from "../types";

/**
 * Template: Pet Shop / Veterinário — cliente de demonstração Patas & Cia.
 * Rota: /petshop-patasecia
 * Tom: caloroso, divertido mas responsável. Laranja acolhedor.
 * "Regras/Transparência" do briefing implementada como FAQ.
 * Imagens: Unsplash (demo). Trocar pelas reais do cliente.
 */
export const petshopPatasECia: SiteConfig = {
  theme: {
    primary: "#E0791A",
    primaryForeground: "#FFFFFF",
    secondary: "#FDF1E3",
    background: "#FFFFFF",
    foreground: "#2A211A",
    card: "#FFFFFF",
    muted: "#FBF6F1",
    surfaceDark: "#241A10",
    surfaceDarkForeground: "#F6EEE3",
    radius: "1rem",
    fonts: { heading: "poppins", body: "manrope" },
  },

  seo: {
    title: "Patas & Cia · Pet shop e banho e tosa com carinho",
    description:
      "Banho e tosa, veterinário e hotel pet com cuidado de verdade. Seu pet tratado como parte da família. Agende pelo WhatsApp.",
    url: "https://patasecia.com.br",
  },

  contact: {
    whatsapp: "5541999999999",
    whatsappMessage: "Olá! Gostaria de agendar um horário para o meu pet.",
    phoneDisplay: "(41) 99999-9999",
    address: "Rua dos Bichos, 321, Bairro Alto, Curitiba, PR",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Curitiba%20PR&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },

  header: {
    logoText: "Patas & Cia",
    monogram: "PC",
    subtitle: "Pet Shop",
    links: [],
    ctaLabel: "Agendar pelo WhatsApp",
  },

  hero: {
    headline: "Cuidado de verdade para quem você **mais ama**.",
    subheadline:
      "Banho e tosa, veterinário e hotelzinho com carinho de quem entende de bicho. Seu pet sai feliz, cheiroso e bem cuidado, sempre.",
    primaryCta: "Agendar pelo WhatsApp",
    image:
      "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=700&q=80&fit=crop",
    imageAlt: "Cachorro feliz",
    badges: ["+8 anos no bairro", "Veterinário na casa"],
    floatCard: { value: "5.0", label: "milhares de pets felizes" },
  },

  services: {
    title: "Tudo que o seu pet **precisa**",
    subtitle: "Num lugar só, com gente que ama animais de verdade.",
    items: [
      {
        icon: "Scissors",
        title: "Banho e Tosa",
        description: "Seu bichinho sai cheiroso, macio e feliz, do jeitinho que ele merece.",
      },
      {
        icon: "Stethoscope",
        title: "Veterinário",
        description: "Consultas, vacinas e check-up com atenção e sem estresse pro seu pet.",
      },
      {
        icon: "House",
        title: "Hotel Pet",
        description: "Viajou? Seu amigo fica em boas mãos, com conforto e muito carinho.",
      },
      {
        icon: "ShoppingBag",
        title: "Loja",
        description: "Ração, petiscos e acessórios escolhidos a dedo pra cada fase do seu pet.",
      },
    ],
  },

  stats: {
    items: [
      { value: "8+", label: "anos no bairro", icon: "Award" },
      { value: "5000+", label: "pets atendidos", icon: "PawPrint" },
      { value: "5.0", label: "nota no Google", icon: "Star" },
      { value: "6", label: "dias por semana", icon: "Clock" },
    ],
  },

  gallery: {
    title: "Quem já passou **por aqui**",
    subtitle: "Um pouquinho da alegria que rola todo dia na Patas & Cia.",
    layout: "grid",
    items: [
      { image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80&fit=crop", label: "Banho e tosa" },
      { image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80&fit=crop", label: "Gatinhos" },
      { image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&q=80&fit=crop", label: "Tosa higiênica" },
      { image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=80&fit=crop", label: "Check-up" },
      { image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&q=80&fit=crop", label: "Hora do carinho" },
      { image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80&fit=crop", label: "Sempre felizes" },
    ],
  },

  about: {
    title: "A gente trata como **família**",
    paragraphs: [
      "A Patas & Cia nasceu do amor por animais. Há mais de 8 anos a gente cuida dos pets do bairro como se fossem nossos, com paciência, carinho e respeito pelo tempo de cada um.",
      "Aqui ninguém é só mais um. Você é avisado de tudo, acompanha o cuidado do seu amigo e leva pra casa um pet feliz e tranquilo.",
    ],
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=700&q=80&fit=crop",
    imageAlt: "Equipe do pet shop com animais",
    credentials: [
      { label: "Veterinário responsável na casa" },
      { label: "Profissionais de banho e tosa experientes" },
      { label: "Ambiente limpo e seguro para os pets" },
      { label: "Atendimento com hora marcada" },
    ],
    stats: [
      { value: "8+", label: "anos no bairro" },
      { value: "5000+", label: "pets atendidos" },
      { value: "5.0", label: "no Google" },
    ],
    signatureName: "Família Patas & Cia",
    signatureTitle: "Cuidando de quem você ama",
  },

  testimonials: {
    title: "O que os **tutores** falam",
    subtitle: "Avaliações de quem confia o seu melhor amigo à gente.",
    google: {
      rating: "5,0",
      reviewsLabel: "+300 avaliações",
      url: "https://www.google.com/maps/search/?api=1&query=Patas+e+Cia+pet+shop+Curitiba",
    },
    items: [
      {
        quote:
          "Meu cachorro era um furacão no banho e aqui ele fica calminho. Sai lindo e cheiroso, e ainda me mandam foto. Amo demais.",
        author: "Carla S.",
        role: "Tutora do Thor",
        rating: 5,
      },
      {
        quote:
          "Atendimento maravilhoso e super cuidadoso. A veterinária explica tudo com calma e nunca me empurra nada. Confiança total.",
        author: "Bruno L.",
        role: "Tutor da Mel",
        rating: 5,
      },
      {
        quote:
          "Deixei minha gata no hotelzinho na viagem e fiquei tranquila o tempo todo. Voltou feliz e bem cuidada. Recomendo de olhos fechados.",
        author: "Patrícia R.",
        role: "Tutora da Nina",
        rating: 5,
      },
    ],
  },

  faq: {
    title: "Pra cuidar bem **de todo mundo**",
    subtitle: "Algumas combinações que deixam o atendimento seguro e tranquilo.",
    items: [
      {
        question: "Preciso apresentar a carteira de vacinação?",
        answer:
          "Sim, pra segurança de todos os pets pedimos a vacinação em dia (V8/V10 e antirrábica). Se estiver atrasada, a gente te ajuda a regularizar com a nossa veterinária.",
      },
      {
        question: "Como funciona o agendamento?",
        answer:
          "Tudo por horário marcado, pra ninguém esperar e cada pet ter a atenção que merece. É só chamar no WhatsApp e escolher o melhor horário.",
      },
      {
        question: "E se o meu pet for muito agitado ou tímido?",
        answer:
          "Sem problema. A gente respeita o tempo de cada um, vai com calma e nunca força nada. Pets especiais recebem um cuidado ainda mais atencioso.",
      },
      {
        question: "Vocês buscam e levam em casa?",
        answer:
          "Em alguns bairros sim. Me chama no WhatsApp com o seu endereço que eu confirmo na hora se atende a sua região.",
      },
    ],
  },

  cta: {
    subtitle: "Bora cuidar do seu melhor amigo?",
    title: "Agende o banho ou a consulta",
    note: "Atendimento com hora marcada e todo o carinho que o seu pet merece.",
    primaryCta: "Agendar pelo WhatsApp",
  },

  location: {
    title: "Pertinho de você, no **Bairro Alto**",
    hours: [
      { days: "Segunda a Sexta", hours: "08h às 19h" },
      { days: "Sábado", hours: "08h às 14h" },
    ],
  },

  footer: {
    monogram: "PC",
    name: "Patas & Cia",
    subline: "Pet Shop · Banho, tosa e veterinário",
    copyright: "Curitiba, PR",
  },

  promo: {
    headline: "Imagina isso com o nome do seu pet shop.",
    body: "Essa é a sensação que o próximo tutor vai ter ao te encontrar: um lugar confiável, caprichado, a escolha óbvia do bairro. É essa primeira impressão que lota a sua agenda. Me chama que eu te mostro como a sua ficaria.",
    chips: ["Mais clientes", "Mais confiança", "Encontrado no Google"],
    primaryCta: "Quero isso pra mim",
    note: "Criada do zero com a sua identidade. Poucos projetos por vez, para cuidar de cada um de perto.",
    dismiss: "Continuar vendo",
    whatsappMessage:
      "Olá! Vi a página de exemplo do pet shop e quero uma assim, com a minha marca. Como ficaria?",
  },

  sections: {
    order: ["hero", "services", "stats", "gallery", "about", "testimonials", "faq", "cta", "location"],
  },
};
