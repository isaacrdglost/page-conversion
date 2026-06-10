"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/whatsapp";

type NavLink = { label: string; href: string };

/**
 * Navbar robusta da página de contabilidade. Transparente sobre o hero e fica
 * sólida (com sombra) ao rolar. Links de seção com scroll suave e menu mobile.
 */
export function ContabilNavbar({
  logoText,
  monogram,
  ctaLabel,
  links,
}: {
  logoText: string;
  monogram: string;
  ctaLabel: string;
  links: NavLink[];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-18 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            {monogram}
          </span>
          <span className="font-heading text-[15px] font-semibold tracking-tight text-foreground">
            {logoText}
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            data-demo-pitch
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:inline-flex"
          >
            <WhatsappIcon className="h-4 w-4" />
            {ctaLabel}
          </button>
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="grid h-10 w-10 place-items-center rounded-lg text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-foreground/20 backdrop-blur-[14px]" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute right-0 top-0 flex h-full w-[78%] max-w-xs flex-col bg-background p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-sm font-semibold text-foreground">{logoText}</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  className="grid h-10 w-10 place-items-center rounded-lg text-foreground transition-colors hover:bg-muted"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <ul className="mt-8 flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                data-demo-pitch
                onClick={() => setOpen(false)}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground"
              >
                <WhatsappIcon className="h-4 w-4" />
                {ctaLabel}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
