import type { ReactNode } from "react";
import FadeInView from "@/components/FadeInView";

/**
 * Section — wrapper padrão pras seções da home.
 * `scroll-mt-36` compensa a altura do menu fixo (agora em duas linhas)
 * ao chegar via âncora.
 *
 * Todo o conteúdo (eyebrow + título + children) entra com fade + leve
 * zoom assim que a seção aparece na tela (via FadeInView) — animação
 * automática pra qualquer texto/imagem colocado dentro de uma Section,
 * sem precisar animar cada uma manualmente.
 */
export default function Section({
  id,
  eyebrow,
  title,
  children,
  tone = "default",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  tone?: "default" | "inverted";
}) {
  const inverted = tone === "inverted";

  return (
    <section
      id={id}
      className={`scroll-mt-36 border-t border-[#1d1d1b]/10 px-6 py-20 lg:px-12 lg:py-28 ${
        inverted ? "bg-[#1d1d1b] text-[#ffffff]" : "bg-[#ffffff] text-[#1d1d1b]"
      }`}
    >
      <FadeInView className="mx-auto max-w-[1440px]">
        {eyebrow && (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#f8a800]">
            {eyebrow}
          </p>
        )}
        <h2 className="mb-8 text-3xl font-medium tracking-tight lg:text-5xl">
          {title}
        </h2>
        {children}
      </FadeInView>
    </section>
  );
}
