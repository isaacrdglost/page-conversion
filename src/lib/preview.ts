/**
 * Detecta se a página está sendo exibida como prévia na miniatura da home:
 * exige `?preview=1` E estar dentro de um iframe (`window.self !== window.top`).
 *
 * Blindagem: uma visita DIRETA a `/<slug>?preview=1` (top-level) não conta como
 * preview, então o pop-up de venda, o selo "Exemplo" e o WhatsApp float voltam a
 * aparecer. Como o embed cross-origin é bloqueado (X-Frame-Options/CSP), só a
 * própria origem consegue acionar o modo limpo.
 * Client-side apenas; em SSR retorna false.
 */
export function isPreviewMode(): boolean {
  if (typeof window === "undefined") return false;
  let framed = false;
  try {
    framed = window.self !== window.top;
  } catch {
    // Acesso a window.top bloqueado = estamos num iframe de outra origem.
    framed = true;
  }
  if (!framed) return false;
  return new URLSearchParams(window.location.search).get("preview") === "1";
}
