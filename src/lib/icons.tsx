import { icons, type LucideProps } from "lucide-react";
import { dentalIcons } from "@/components/icons/dental";
import type { IconName } from "@/config/types";

/**
 * Renderiza um ícone pelo nome definido no config.
 * Resolução: primeiro tenta o set odontológico custom (src/components/icons/dental.tsx),
 * depois o Lucide. Se nada bater, cai num fallback ("Sparkles") em vez de quebrar.
 */
export function Icon({
  name,
  size = 24,
  className,
  ...props
}: { name: IconName; size?: number; className?: string } & LucideProps) {
  const Dental = dentalIcons[name as keyof typeof dentalIcons];
  if (Dental) {
    return <Dental width={size} height={size} className={className} />;
  }

  const LucideIcon = icons[name as keyof typeof icons] ?? icons.Sparkles;
  return <LucideIcon size={size} className={className} {...props} />;
}
