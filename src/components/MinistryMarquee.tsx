import Image from "next/image";

/**
 * MinistryMarquee — faixa horizontal com os logos dos ministérios,
 * rolando sozinha em loop infinito (efeito comum em sites de igreja/
 * marca, tipo o carrossel de logos do igrejadacidade.org.br).
 *
 * Técnica: a lista de logos é renderizada DUAS vezes seguidas dentro
 * de uma faixa que desliza -50% via CSS (`animate-marquee`, definida
 * em globals.css). Como a segunda metade é idêntica à primeira, o
 * momento em que ela "reinicia" o loop é invisível — parece uma
 * rolagem contínua e infinita.
 *
 * `prefers-reduced-motion` já é tratado globalmente em globals.css
 * (zera a duração de qualquer animação CSS), então a faixa aparece
 * parada, sem esforço extra aqui.
 */

const logos = [
  { nome: "Ministério de Louvor", src: "/images/ministerios/louvor.jpg" },
  { nome: "Ministério Kids", src: "/images/ministerios/kids.jpg" },
  { nome: "Ministério de Mulheres", src: "/images/ministerios/mulheres.jpg" },
  { nome: "Ministério de Homens", src: "/images/ministerios/homens.jpg" },
  { nome: "Ministério de Jovens", src: "/images/ministerios/jovens.jpg" },
];

export default function MinistryMarquee() {
  return (
    <div className="overflow-hidden border-y border-[#1d1d1b]/10 bg-[#ffffff] py-8">
      <div className="animate-marquee flex w-max items-center gap-16">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo.nome}-${i}`}
            className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl"
          >
            <Image
              src={logo.src}
              alt={logo.nome}
              fill
              sizes="64px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
