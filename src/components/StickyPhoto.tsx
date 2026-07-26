"use client";

import Image from "next/image";

/**
 * StickyPhoto — foto de fundo que "congela" (fica grudada no topo da
 * tela) enquanto o usuário rola, até a seção seguinte subir e cobri-la
 * por completo — mesma técnica usada no banner de vídeo do topo do
 * site (ScrollVideoHero), aplicada aqui a uma imagem estática.
 *
 * Como funciona:
 * - O wrapper externo é mais alto que a tela (`heightVh`, padrão
 *   200vh) — é esse espaço extra que dá "tempo de rolagem" pra foto
 *   ficar parada na tela.
 * - A camada interna (`sticky top-0 h-screen`) é o que realmente
 *   gruda no topo durante esse trecho.
 * - Assim que o usuário termina de rolar por todo o wrapper, ele
 *   "libera" a foto — e como a próxima seção do site vem logo depois,
 *   com fundo sólido, ela sobe naturalmente e cobre a foto por cima,
 *   como se fosse um cartão se empilhando sobre o outro.
 *
 * Sem nenhuma lógica de `prefers-reduced-motion` aqui: mesmo sem o
 * efeito de "congelar", a foto continua perfeitamente visível e
 * acessível — o efeito é puramente decorativo/estrutural (CSS
 * `position: sticky`), não uma animação JS que precise ser desligada.
 */
export default function StickyPhoto({
  id,
  src,
  alt,
  heightVh = 200,
}: {
  id?: string;
  src: string;
  alt: string;
  heightVh?: number;
}) {
  return (
    <div id={id} className="relative scroll-mt-36" style={{ height: `${heightVh}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />
      </div>
    </div>
  );
}
