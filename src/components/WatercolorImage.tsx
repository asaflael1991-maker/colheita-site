"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";

/**
 * WatercolorImage — imagem que "aparece" ao entrar na tela como se
 * estivesse sendo pintada em aquarela: começa desfocada, sem cor e com
 * uma borda suave e irregular (mancha de tinta se espalhando), e vai
 * ganhando nitidez, cor e forma definida.
 *
 * - `useInView({ once: true })`: a animação dispara só uma vez, na
 *   primeira vez que a imagem entra ~15% da viewport (não repete toda
 *   vez que o usuário rola pra cima e pra baixo).
 * - A "mancha" é uma máscara radial (`mask-image`) que cresce de um
 *   círculo pequeno e borrado até cobrir a imagem inteira — leve o
 *   suficiente pra rodar bem em celular, e funciona em todos os
 *   navegadores modernos (Chrome, Safari, Firefox).
 * - Com `prefers-reduced-motion`, a imagem aparece direto, nítida e
 *   colorida, sem nenhuma animação.
 */
export default function WatercolorImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const play = isInView && !shouldReduceMotion;

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          // Fallback estático pro Safari mais antigo, que só entende o
          // prefixo -webkit-. Não anima nesses casos, mas a imagem
          // aparece normalmente (sem quebrar) — o blur/cor abaixo
          // continua animando via `filter`, que tem suporte universal.
          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%, black 68%, transparent 100%)",
        }}
        initial={{
          maskImage:
            "radial-gradient(circle at 50% 50%, black 0%, transparent 0%)",
        }}
        animate={
          play || shouldReduceMotion
            ? {
                maskImage:
                  "radial-gradient(circle at 50% 50%, black 68%, transparent 100%)",
              }
            : undefined
        }
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="h-full w-full"
          initial={{ opacity: 0, filter: "blur(22px) saturate(0.15)" }}
          animate={
            play || shouldReduceMotion
              ? { opacity: 1, filter: "blur(0px) saturate(1)" }
              : undefined
          }
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
