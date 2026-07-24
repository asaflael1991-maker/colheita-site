"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero — banner com animação de entrada: a Bíblia "desce" de cima e
 * encaixa sobre a mesa de madeira do fundo, com um brilho sutil no
 * momento em que assenta.
 *
 * Como funciona:
 * - `hero-bg.jpg` e `hero-bible.png` têm exatamente o mesmo tamanho de
 *   canvas (2625×1440) e já vêm pré-compostos na posição final — ou
 *   seja, quando a camada da Bíblia está em y=0, ela encaixa
 *   perfeitamente sobre a mesa do fundo. A animação só precisa
 *   deslocar essa camada de cima (fora da tela) até y=0.
 * - Ambas as camadas usam `fill` + `object-cover` sobre o MESMO
 *   container, então o recorte é sempre idêntico nos dois — a
 *   Bíblia nunca desalinha, seja qual for o tamanho da tela.
 * - `useReducedMotion` pula a queda e o brilho: a Bíblia já aparece
 *   na posição final, sem movimento.
 */
type Firefly = {
  id: number;
  left: number; // %
  top: number; // %
  size: number; // px
  duration: number; // s
  delay: number; // s
  xDrift: number; // px
  yDrift: number; // px
};

const FIREFLY_COUNT = 14;

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [settled, setSettled] = useState(false);
  const [fireflies, setFireflies] = useState<Firefly[]>([]);

  // Gera as posições/trajetos dos vaga-lumes só no cliente, depois do
  // mount — gerar números aleatórios durante o render causaria
  // divergência entre o HTML do servidor e o do navegador (hydration
  // mismatch). Também não gera nada se o usuário pediu menos movimento.
  useEffect(() => {
    if (shouldReduceMotion) return;
    // Intencional: gera posições aleatórias só no cliente para evitar
    // hydration mismatch (ver comentário acima do useEffect).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFireflies(
      Array.from({ length: FIREFLY_COUNT }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: 15 + Math.random() * 70,
        size: 2 + Math.random() * 3,
        duration: 6 + Math.random() * 6,
        delay: Math.random() * 5,
        xDrift: (Math.random() - 0.5) * 120,
        yDrift: (Math.random() - 0.5) * 80,
      }))
    );
  }, [shouldReduceMotion]);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#1a1408]">
      {/* Fundo: mesa de madeira + trigal ao entardecer */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Bíblia: desce e encaixa sobre a mesa */}
      <motion.div
        className="absolute inset-0"
        initial={
          shouldReduceMotion ? { y: 0, opacity: 1 } : { y: "-45vh", opacity: 0 }
        }
        animate={{ y: 0, opacity: 1 }}
        transition={
          shouldReduceMotion
            ? { duration: 0.01 }
            : {
                type: "spring",
                stiffness: 35,
                damping: 12,
                mass: 1.4,
                delay: 0.4,
              }
        }
        onAnimationComplete={() => setSettled(true)}
      >
        <Image
          src="/images/hero-bible.png"
          alt="Bíblia aberta com uma espiga de trigo, sobre uma mesa de madeira em um trigal ao entardecer"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Brilho sutil no momento em que a Bíblia assenta */}
      {settled && !shouldReduceMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 62%, rgba(255,244,214,0.9) 0%, rgba(255,244,214,0) 55%)",
            mixBlendMode: "screen",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.85, 0] }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      )}

      {/* Vaga-lumes: pequenos brilhos passeando pela cena, em loop
          infinito e sutil. Somem com prefers-reduced-motion. */}
      {fireflies.map((f) => (
        <motion.span
          key={f.id}
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: f.size,
            height: f.size,
            background: "rgba(255, 236, 170, 0.95)",
            boxShadow: "0 0 6px 2px rgba(255, 220, 130, 0.8)",
            mixBlendMode: "screen",
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [0, f.xDrift * 0.5, f.xDrift],
            y: [0, f.yDrift * 0.6, f.yDrift],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
}
