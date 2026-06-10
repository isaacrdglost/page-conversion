/**
 * Trava de scroll compartilhada entre todos os modais.
 *
 * Cada modal salvar/restaurar `body.style.overflow` por conta própria quebra
 * quando dois se sobrepõem: o segundo salva o estado já travado e, ao fechar,
 * restaura para "hidden", deixando a página congelada. Aqui usamos um contador:
 * só travamos no primeiro lock e só restauramos quando o último solta.
 */

let locks = 0;
let prevOverflow = "";

export function lockScroll() {
  if (typeof document === "undefined") return;
  if (locks === 0) {
    prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  locks += 1;
}

export function unlockScroll() {
  if (typeof document === "undefined") return;
  locks = Math.max(0, locks - 1);
  if (locks === 0) {
    document.body.style.overflow = prevOverflow;
  }
}
