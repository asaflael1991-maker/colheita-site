"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useReducedMotion, useMotionValueEvent } from "framer-motion";

/**
 * ScrollVideoHero — banner cujo "vídeo" avança/recua exatamente
 * conforme o usuário rola a página (scroll-scrubbing, técnica usada
 * em sites tipo Apple).
 *
 * Como funciona:
 * - O vídeo original foi convertido em 57 imagens sequenciais
 *   (public/videos/hero-scroll/frame-001.jpg ... frame-057.jpg).
 *   Isso é bem mais confiável que tentar "pular" o currentTime de uma
 *   tag <video> — que trava e engasga em vários navegadores (Safari
 *   do iPhone principalmente) quando o usuário rola rápido.
 * - A seção externa é alta (300vh) — é essa altura extra que dá
 *   "espaço" pro usuário rolar enquanto o vídeo avança. A parte
 *   visível (o <canvas>) fica "grudada" (sticky) na tela durante
 *   essa rolagem.
 * - `useScroll` mede o progresso da rolagem dentro dessa seção
 *   (0 a 1) e escolhe qual das imagens desenhar no canvas.
 * - Todas as imagens são pré-carregadas em segundo plano; se o
 *   usuário rolar rápido antes de tudo carregar, o canvas mantém o
 *   último frame válido em vez de piscar ou ficar em branco.
 *
 * No celular usamos um segundo conjunto de imagens, mais leve
 * (public/videos/hero-scroll-mobile/) — metade dos frames (29 em vez
 * de 57) e metade da resolução (800px de largura em vez de 1600px),
 * cerca de 1.6MB no total em vez de 7.3MB. Isso resolve o travamento
 * que a versão completa causava em celulares, mantendo a animação.
 *
 * Com `prefers-reduced-motion`, nada disso acontece: é exibido só o
 * primeiro frame, numa seção de altura normal (sem o espaço extra de
 * rolagem nem o efeito de "grudar" na tela).
 */

const FRAME_COUNT = 57;
const MOBILE_FRAME_COUNT = 29;
const MOBILE_BREAKPOINT = 768;

const frameSrc = (i: number) =>
  `/videos/hero-scroll/frame-${String(i + 1).padStart(3, "0")}.jpg`;
const frameSrcMobile = (i: number) =>
  `/videos/hero-scroll-mobile/frame-${String(i + 1).padStart(3, "0")}.jpg`;

export default function ScrollVideoHero() {
  const shouldReduceMotion = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastDrawnRef = useRef<number>(0);
  const [firstFrameReady, setFirstFrameReady] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= MOBILE_BREAKPOINT
  );

  // Mantém `isMobile` atualizado se a janela for redimensionada ou o
  // aparelho for rotacionado (ex.: tablet passando de retrato pra
  // paisagem).
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(e.matches);
    onChange(mq);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Conjunto de imagens (e função de caminho) usado neste render —
  // troca automaticamente entre o completo (desktop) e o leve
  // (celular) conforme `isMobile`.
  const frameCount = isMobile ? MOBILE_FRAME_COUNT : FRAME_COUNT;
  const getFrameSrc = isMobile ? frameSrcMobile : frameSrc;

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Desenha uma imagem no canvas imitando `object-fit: cover`
  // (preenche o quadro todo, cortando o excesso, sem distorcer).
  const drawImage = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const scale = Math.max(cw / img.width, ch / img.height);
    const sw = cw / scale;
    const sh = ch / scale;
    const sx = (img.width - sw) / 2;
    const sy = (img.height - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  };

  const drawFrame = (index: number) => {
    const clamped = Math.min(Math.max(index, 0), frameCount - 1);
    const img = imagesRef.current[clamped];
    if (img && img.complete && img.naturalWidth > 0) {
      drawImage(img);
      lastDrawnRef.current = clamped;
    } else {
      // Ainda não carregou — mantém o último frame válido em vez de
      // piscar ou mostrar um quadro em branco.
      const fallback = imagesRef.current[lastDrawnRef.current];
      if (fallback && fallback.complete) drawImage(fallback);
    }
  };

  // Pré-carrega as imagens (o conjunto completo no desktop, o
  // reduzido no celular) e ajusta o tamanho do canvas. Roda de novo
  // se `isMobile` mudar (ex.: girar o aparelho cruzando o breakpoint).
  useEffect(() => {
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    lastDrawnRef.current = 0;
    setFirstFrameReady(false);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(lastDrawnRef.current);
    };
    resize();
    window.addEventListener("resize", resize);

    const images: HTMLImageElement[] = [];
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      if (i === 0) {
        img.onload = () => {
          setFirstFrameReady(true);
          drawFrame(0);
        };
      }
      images.push(img);
    }
    imagesRef.current = images;

    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldReduceMotion, isMobile]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (shouldReduceMotion) return;
    const index = Math.round(latest * (frameCount - 1));
    drawFrame(index);
  });

  if (shouldReduceMotion) {
    return (
      <section className="relative h-[100svh] w-full overflow-hidden bg-[#1a1408]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={frameSrc(0)}
          alt="Bíblia aberta sobre uma mesa de madeira em um trigal ao entardecer"
          className="h-full w-full object-cover"
        />
      </section>
    );
  }

  return (
    <div ref={wrapperRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-[#1a1408]">
        <canvas
          ref={canvasRef}
          className={`h-full w-full transition-opacity duration-500 ${
            firstFrameReady ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
