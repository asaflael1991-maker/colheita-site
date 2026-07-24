import type { ReactNode } from "react";

/**
 * Section — wrapper padrão pras seções da home.
 * `scroll-mt-36` compensa a altura do menu fixo (agora em duas linhas)
 * ao chegar via âncora.
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
      className={`scroll-mt-36 border-t border-[#24262c]/10 px-6 py-20 lg:px-12 lg:py-28 ${
        inverted ? "bg-[#24262c] text-[#f8f7f8]" : "bg-[#f8f7f8] text-[#24262c]"
      }`}
    >
      <div className="mx-auto max-w-[1440px]">
        {eyebrow && (
          <p
            className={`mb-3 text-xs uppercase tracking-[0.3em] ${
              inverted ? "text-[#f8f7f8]/50" : "text-[#24262c]/50"
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h2 className="mb-8 text-3xl font-medium tracking-tight lg:text-5xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
