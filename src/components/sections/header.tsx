"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icon } from "@/lib/icons";
import type { HeaderConfig } from "@/config/types";

function initials(text: string) {
  return text
    .replace(/^(Dra?\.?|Dr\.?)\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Header({
  header,
  whatsappHref,
}: {
  header: HeaderConfig;
  whatsappHref: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const mono = header.monogram ?? initials(header.logoText);
  const hasLinks = header.links.length > 0;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="container-px flex h-[72px] items-center justify-between">
        {/* Logo + monograma */}
        <a href="#hero" className="flex items-center gap-3.5">
          <span className="relative grid h-[42px] w-[42px] place-items-center overflow-hidden rounded-xl bg-primary text-primary-foreground">
            {header.logoIcon ? (
              <Icon name={header.logoIcon} size={24} className="relative" />
            ) : (
              <span className="relative font-heading text-base font-semibold tracking-tight">
                {mono}
              </span>
            )}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-[17px] font-medium tracking-wide text-foreground">
              {header.logoText}
            </span>
            {header.subtitle && (
              <span className="text-[10px] font-light uppercase tracking-[0.15em] text-primary">
                {header.subtitle}
              </span>
            )}
          </span>
        </a>

        {hasLinks && (
          <ul className="hidden items-center gap-8 md:flex">
            {header.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <a
          data-demo-pitch
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-[13px] font-medium tracking-wide text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-95 md:inline-block"
        >
          {header.ctaLabel}
        </a>

        {/* Mobile: CTA sempre visível; menu só se houver links */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            data-demo-pitch
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-[13px] font-medium text-primary-foreground"
          >
            {header.ctaLabel}
          </a>
          {hasLinks && (
            <button
              className="inline-flex items-center justify-center rounded-md p-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          )}
        </div>
      </nav>

      {hasLinks && open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <ul className="container-px flex flex-col gap-1 py-4">
            {header.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}
