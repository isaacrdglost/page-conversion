/**
 * Contato do NOSSO negócio (interno) — usado nos CTAs que falam com a gente,
 * como o pop-up de proposta sobre as páginas de demonstração.
 * Fonte única: troque aqui e vale em todo lugar.
 */
export const business = {
  whatsapp: "5541998906082",
  phoneDisplay: "(41) 99890-6082",
  instagramHandle: "@isaaclost_",
  instagramUrl: "https://instagram.com/isaaclost_",
};

/** Link de WhatsApp para o nosso número, com mensagem pré-preenchida. */
export function businessWhatsappHref(message: string): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
