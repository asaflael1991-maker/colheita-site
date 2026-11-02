import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Necessário pro next/image renderizar o SVG exportado do Figma
    // (public/images/cover-illustration.svg). Seguro aqui porque o
    // arquivo é local/estático, não vem de upload de usuário.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Página de vendas do devocional "Jesus, Senhor de Tudo".
  // São páginas HTML estáticas em public/devocional/, servidas em URLs limpas.
  async rewrites() {
    return [
      { source: "/devocional", destination: "/devocional/index.html" },
      { source: "/devocional/obrigado", destination: "/devocional/obrigado.html" },
    ];
  },
};

export default nextConfig;
