import type { Metadata } from "next";
import "./globals.css";
import { allFontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Páginas de alta conversão, sob medida pro seu negócio",
  description:
    "Criação de páginas profissionais, rápidas e sob medida para o seu ramo. Feitas para transformar visitantes em clientes e fazer o seu negócio crescer.",
  applicationName: "page-conversion",
  openGraph: {
    title: "Páginas de alta conversão, sob medida pro seu negócio",
    description:
      "Páginas profissionais e rápidas, sob medida para o seu ramo. Feitas para transformar visitantes em clientes.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${allFontVariables} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
