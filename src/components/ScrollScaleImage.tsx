"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * ScrollScaleImage — imagem que cresce (dá zoom) conforme o usuário
 * rola a página até ela, e depois dá lugar ao conteúdo seguinte —
 * efeito usado em sites institucionais tipo igrejadacidade.org.br.
 *
 * Diferente do FadeInView/WatercolorImage (que disparam UMA vez, ao
 * entrar na tela): aqui a escala fica constantemente amarrada à
 * posição do scroll, então o crescimento é contínuo e reversível — se
 * o usuário rolar pra cima, a imagem encolhe de volta.
 *
 * Como funciona:
 * - `useScroll` mede o progresso do elemento cruzando a tela: 0 = a
 *   imagem ainda está entrando por baixo da viewport; 1 = ela chegou
 *   ao centro.
 * - Esse progresso é traduzido numa escala de 0.82 → 1 — a imagem
 *   começa um pouco "recolhida" e cresce até o tamanho normal.
 *
 * Com `prefers-reduced-motion`, a imagem aparece direto no tamanho
 * final, sem nenhum efeito de zoom ligado ao scroll.
 */
export default function ScrollScaleImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1]);

  return (
    <div ref={ref} className={`overflow-hidden rounded-2xl ${className}`}>
      <motion.div
        className="relative h-full w-full"
        style={shouldReduceMotion ? undefined : { scale }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
