import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Libera o HMR/dev quando acessado por 127.0.0.1, localhost ou pelo domínio
  // de preview do Codespaces (evita a tela em branco no dev).
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "*.app.github.dev",
    "*.githubpreview.dev",
  ],
  images: {
    remotePatterns: [
      // Imagens de demonstração. Em produção, troque pelas fotos reais do cliente
      // (idealmente hospedadas no próprio projeto / Vercel Blob).
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // Headers de segurança em todas as rotas. `frame-ancestors 'self'` permite
  // a miniatura (iframe da própria origem) e bloqueia embed/clonagem por terceiros.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
