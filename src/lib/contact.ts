import type { ContactConfig } from "@/config/types";

/** Monta o link do WhatsApp (wa.me) com a mensagem pré-preenchida do config. */
export function whatsappHref(contact: ContactConfig): string {
  const base = `https://wa.me/${contact.whatsapp}`;
  return contact.whatsappMessage
    ? `${base}?text=${encodeURIComponent(contact.whatsappMessage)}`
    : base;
}
