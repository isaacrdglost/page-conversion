import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { templates, getTemplate } from "@/config/templates";
import { SiteTemplate } from "@/components/site-template";

/** Gera as rotas estáticas a partir do registry de templates. */
export function generateStaticParams() {
  return templates.map((t) => ({ template: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ template: string }>;
}): Promise<Metadata> {
  const { template } = await params;
  const entry = getTemplate(template);
  if (!entry) return {};
  const { seo } = entry.config;
  return {
    title: seo.title,
    description: seo.description,
    metadataBase: seo.url ? new URL(seo.url) : undefined,
    // Páginas de exemplo não devem ser indexadas (blindagem anti-clone).
    robots: { index: false, follow: false },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.url,
      type: "website",
      images: seo.ogImage ? [{ url: seo.ogImage }] : undefined,
    },
  };
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ template: string }>;
}) {
  const { template } = await params;
  const entry = getTemplate(template);
  if (!entry) notFound();

  return <SiteTemplate config={entry.config} year={new Date().getFullYear()} />;
}
