"use client";

import { useEffect, useRef } from "react";

/**
 * Coordenação entre os modais/pop-ups do site.
 *
 * Regras:
 * - Só um modal ativo por vez (sem sobreposição, que travava o scroll).
 * - Modais acionados pelo usuário (quiz, interstitial, pitch) abrem na hora e
 *   derrubam qualquer pop-up automático que esteja na tela: a intenção vence.
 * - Pop-ups automáticos (ancoragem de valor) esperam a vez: não abrem com outro
 *   na tela e respeitam um intervalo após o último fechar, pra não virar spam.
 *   Se forem barrados, tentam de novo quando dá — então ainda aparecem e fazem
 *   parte da experiência.
 */

const COOLDOWN_MS = 8000; // intervalo mínimo entre um modal fechar e um automático abrir

let active: string | null = null;
let lastClosedAt = 0;
let pending: (() => void) | null = null;
let retryTimer: ReturnType<typeof setTimeout> | null = null;

const subscribers = new Set<() => void>();
const emit = () => subscribers.forEach((fn) => fn());

export function subscribeModal(fn: () => void) {
  subscribers.add(fn);
  return () => {
    subscribers.delete(fn);
  };
}

export function getActiveModal() {
  return active;
}

function canAutoOpen() {
  return active === null && Date.now() - lastClosedAt >= COOLDOWN_MS;
}

function scheduleRetry() {
  if (!pending || retryTimer) return;
  const wait = Math.max(0, COOLDOWN_MS - (Date.now() - lastClosedAt)) + 50;
  retryTimer = setTimeout(() => {
    retryTimer = null;
    if (!pending) return;
    if (canAutoOpen()) {
      const run = pending;
      pending = null;
      run();
    } else {
      scheduleRetry();
    }
  }, wait);
}

/** Modal acionado pelo usuário: assume a tela na hora e derruba o anterior. */
export function openModal(id: string) {
  active = id;
  emit();
}

/** Libera o modal (no fechamento). Dá a vez a um automático pendente. */
export function releaseModal(id: string) {
  if (active !== id) return;
  active = null;
  lastClosedAt = Date.now();
  emit();
  scheduleRetry();
}

/**
 * Pop-up automático pede pra abrir. Abre agora se a tela estiver livre e fora do
 * intervalo; senão fica pendente e tenta quando puder. `run` deve, ele mesmo,
 * chamar openModal(id) e abrir o modal local.
 */
export function requestAutoModal(run: () => void) {
  if (canAutoOpen()) {
    run();
    return;
  }
  pending = run;
  scheduleRetry();
}

/** Fecha o modal local automaticamente quando outro assume a tela. */
export function useModalSync(id: string, isOpen: boolean, onForceClose: () => void) {
  const cb = useRef(onForceClose);
  cb.current = onForceClose;
  useEffect(() => {
    if (!isOpen) return;
    return subscribeModal(() => {
      if (getActiveModal() !== id) cb.current();
    });
  }, [id, isOpen]);
}
