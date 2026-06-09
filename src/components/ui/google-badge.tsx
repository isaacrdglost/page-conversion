import { Star, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Logo "G" colorido do Google. */
function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

/**
 * Selo de credibilidade do Google: "[G] 5,0 ★★★★★ · +X avaliações · Ver no Google".
 * O link aponta para o perfil real do cliente — credibilidade ao vivo, sem API.
 */
export function GoogleBadge({
  rating,
  reviewsLabel,
  url,
  tone = "light",
  className,
}: {
  rating: string;
  reviewsLabel?: string;
  url: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-full border px-5 py-2.5 transition-all hover:-translate-y-0.5",
        dark
          ? "border-surface-dark-border bg-white/5 hover:bg-white/[0.08]"
          : "border-border bg-card hover:shadow-md",
        className,
      )}
    >
      <GoogleG className="h-5 w-5" />
      <span className="flex items-center gap-1.5">
        <span className={cn("text-sm font-bold", dark ? "text-surface-dark-foreground" : "text-foreground")}>
          {rating}
        </span>
        <span className="flex text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
          ))}
        </span>
      </span>
      {reviewsLabel && (
        <span className={cn("text-sm", dark ? "text-surface-dark-muted" : "text-muted-foreground")}>
          {reviewsLabel} no Google
        </span>
      )}
      <span
        className={cn(
          "inline-flex items-center gap-1 text-sm font-semibold",
          dark ? "text-accent-light" : "text-primary",
        )}
      >
        Ver no Google
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}
