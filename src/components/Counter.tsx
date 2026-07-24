"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Counter — número que "conta" de 0 até o valor final assim que entra
 * na tela (uma única vez), tipo "+1030 Batismos" em sites de igreja.
 *
 * Com `prefers-reduced-motion`, mostra o número final direto, sem
 * contagem.
 */
export default function Counter({
  value,
  prefix = "",
  suffix = "",
  label,
  duration = 1.6,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(shouldReduceMotion ? value : 0);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [isInView, shouldReduceMotion, value, duration]);

  return (
    <div ref={ref}>
      <p className="text-4xl font-medium text-[#f8a800] lg:text-6xl">
        {prefix}
        {display.toLocaleString("pt-BR")}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-[#ffffff]/60">{label}</p>
    </div>
  );
}
