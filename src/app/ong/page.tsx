import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import StickyPhoto from "@/components/StickyPhoto";
import VerseReveal from "@/components/VerseReveal";

export const metadata: Metadata = {
  title: "Associação Cristã Céus Abertos — Colheita",
};

const frentesDeAtuacao = [
  {
    title: "Mercado Solidário",
    text: "Distribuição periódica de alimentos, roupas e itens de higiene para famílias em situação de vulnerabilidade.",
  },
  {
    title: "Atendimento de rua",
    text: "Acolhimento, alimentação e cuidado direto a pessoas em situação de rua na região.",
  },
  {
    title: "Ações e mutirões",
    text: "Campanhas de arrecadação e mutirões pontuais para reforçar a rede de apoio da comunidade.",
  },
];

const galeria = [
  {
    src: "/images/galeria/mercado-solidario/foto-01.jpg",
    alt: "Voluntários organizando doações no Mercado Solidário",
  },
  {
    src: "/images/galeria/mercado-solidario/foto-02.jpg",
    alt: "Atendimento a famílias no Mercado Solidário",
  },
];

export default function OngPage() {
  return (
    <>
      <Navbar />

      <StickyPhoto
        src="/images/ong/associacao-crista-ceus-abertos.png"
        alt="Voluntários da Associação Cristã Céus Abertos atendendo pessoas em situação de rua"
      >
        <VerseReveal
          text="2 Coríntios 9:7"
          className="text-4xl text-white sm:text-6xl lg:text-8xl"
        />
      </StickyPhoto>

      <main className="mx-auto max-w-[900px] px-6 py-20 lg:px-12 lg:py-28">
        <FadeInView>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#1d1d1b]/50">
            Ação social
          </p>
          <h1 className="mb-6 text-3xl font-medium tracking-tight lg:text-5xl">
            Associação Cristã Céus Abertos
          </h1>
          <p className="mb-12 text-lg leading-relaxed text-[#1d1d1b]/70">
            A Associação Cristã Céus Abertos é o braço social da Igreja
            Colheita, dedicado a levar dignidade, acolhimento e esperança a
            quem mais precisa. Acreditamos que cuidar do próximo também é
            uma forma de adorar a Deus.
          </p>
        </FadeInView>

        <FadeInView className="space-y-5 text-lg leading-relaxed text-[#1d1d1b]/70">
          <p>
            Por meio de ações práticas e constantes, buscamos ser as mãos
            de Jesus na vida de cada pessoa que encontramos — oferecendo
            alimento, acolhimento e, acima de tudo, a mensagem de esperança
            do Evangelho.
          </p>
          <p>
            Toda a atuação da associação é sustentada pela generosidade da
            igreja e de parceiros que acreditam nessa missão.
          </p>
        </FadeInView>

        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-6 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Frentes de atuação
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {frentesDeAtuacao.map((f) => (
              <div key={f.title}>
                <h3 className="mb-1 font-medium">{f.title}</h3>
                <p className="text-sm text-[#1d1d1b]/60">{f.text}</p>
              </div>
            ))}
          </div>
        </FadeInView>

        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-6 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Galeria
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {galeria.map((g) => (
              <div
                key={g.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </FadeInView>

        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <blockquote className="mb-8 border-l-2 border-[#f8a800] pl-4 text-xl italic text-[#1d1d1b]/70">
            &ldquo;Cada um contribua segundo propôs no coração, não com
            tristeza ou por obrigação, porque Deus ama quem dá com
            alegria.&rdquo;
            <footer className="mt-1 not-italic text-sm text-[#1d1d1b]/45">
              2 Coríntios 9:7
            </footer>
          </blockquote>
          <Link
            href="/#doacoes"
            className="inline-block rounded-full bg-[#e5192c] px-6 py-3 text-sm text-[#ffffff] transition-opacity hover:opacity-90"
          >
            Quero contribuir
          </Link>
        </FadeInView>
      </main>
      <Footer />
    </>
  );
}
