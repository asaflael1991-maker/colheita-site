import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";

export const metadata: Metadata = {
  title: "Liderança — Colheita",
};

const pastoresPrincipais = [
  {
    nome: "Pr. Silvanio Pimentel",
    cargo: "Pastor Presidente",
    foto: "/images/lideranca/silvanio-2026.jpg",
    bio: "Fundador e Pastor Presidente da Igreja Colheita, dedica sua vida à proclamação do Evangelho, ao discipulado e à formação de líderes. É apaixonado por ensinar a Palavra de Deus de forma simples, prática e transformadora, conduzindo a igreja com a visão de formar discípulos, fortalecer famílias e alcançar pessoas para Cristo. Seu propósito é ver cada cristão descobrir seu chamado e viver uma vida de serviço ao Reino de Deus.",
  },
  {
    nome: "Pra. Carinne Pimentel",
    cargo: "Pastora",
    foto: "/images/lideranca/carinne-2026.jpg",
    bio: "Pastora e cofundadora da Igreja Colheita, exerce um ministério voltado ao cuidado das pessoas, especialmente das mulheres e das famílias. Atua no discipulado, aconselhamento e desenvolvimento espiritual, servindo com sensibilidade, amor e dedicação. Sua missão é fortalecer mulheres para que vivam plenamente o propósito de Deus.",
  },
];

const equipePastoral: { nome: string; foto?: string; bio: string }[] = [
  {
    nome: "Pr. Daniel e Pra. Sabrinne",
    foto: "/images/lideranca/daniel-sabrinne-2026.jpg",
    bio: "Pastores que servem com sensibilidade, compromisso e amor ao Reino de Deus, contribuindo para o discipulado, a formação de líderes e o desenvolvimento espiritual da Igreja Colheita.",
  },
  {
    nome: "Pr. Fabiano e Ir. Sileide",
    foto: "/images/lideranca/fabiano-2026.jpg",
    bio: "Atuam no cuidado da igreja, contribuindo para o crescimento espiritual dos membros e o desenvolvimento dos ministérios.",
  },
  {
    nome: "Pr. Victor e Ir. Val",
    foto: "/images/lideranca/victor-val.jpg",
    bio: "Servem com dedicação e compromisso ao Reino de Deus, contribuindo para o crescimento espiritual e o discipulado na Igreja Colheita.",
  },
  {
    nome: "Pr. Helandson e Ir. Mikaelle",
    foto: "/images/lideranca/helandson-mikaele.jpg",
    bio: "Apaixonados pelo discipulado e pelo desenvolvimento de novos líderes, servindo com excelência e compromisso com o Reino de Deus.",
  },
  {
    nome: "Irs. Gabriel e Celeste",
    foto: "/images/lideranca/gabriel-celeste-2026.jpg",
    bio: "Servem com dedicação e compromisso ao Reino de Deus, contribuindo para o crescimento espiritual e o discipulado na Igreja Colheita.",
  },
  {
    nome: "Irs. Gleuson e Sara",
    foto: "/images/lideranca/gleuson-2026.jpg",
    bio: "Servem com dedicação e compromisso ao Reino de Deus, contribuindo para o crescimento espiritual e o discipulado na Igreja Colheita.",
  },
  {
    nome: "Irs. Leonardo e Suiane",
    foto: "/images/lideranca/leonardo-suiane-2026.jpg",
    bio: "Servem com dedicação e compromisso ao Reino de Deus, contribuindo para o crescimento espiritual e o discipulado na Igreja Colheita.",
  },
  {
    nome: "Ir. Nildo e Pra. Fernanda",
    foto: "/images/lideranca/nildo-fernanda-2026.jpg",
    bio: "Servem com dedicação e compromisso ao Reino de Deus, contribuindo para o crescimento espiritual e o discipulado na Igreja Colheita.",
  },
  {
    nome: "Ir. Rafael Olegário",
    foto: "/images/lideranca/rafael-olegario-2026.jpg",
    bio: "Serve com dedicação e compromisso ao Reino de Deus, contribuindo para o crescimento espiritual e o discipulado na Igreja Colheita.",
  },
  {
    nome: "Ir. Rebeca",
    foto: "/images/lideranca/rebeca-2026.jpg",
    bio: "Serve com dedicação e compromisso ao Reino de Deus, contribuindo para o crescimento espiritual e o discipulado na Igreja Colheita.",
  },
];

export default function LiderancaPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[1100px] px-6 py-20 lg:px-12 lg:py-28">
        <FadeInView>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#1d1d1b]/50">
            Liderança
          </p>
          <h1 className="mb-14 text-3xl font-medium tracking-tight lg:text-5xl">
            Quem conduz a Igreja Colheita
          </h1>
        </FadeInView>

        <h2 className="mb-8 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
          Pastores presidentes
        </h2>
        <div className="mb-16 grid gap-10 md:grid-cols-2">
          {pastoresPrincipais.map((p, i) => (
            <FadeInView key={p.nome} delay={i * 0.1}>
              <div className="relative mb-4 aspect-square overflow-hidden rounded-2xl bg-[#1d1d1b]/5">
                {p.foto && (
                  <Image
                    src={p.foto}
                    alt={p.nome}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                )}
              </div>
              <h3 className="font-medium">{p.nome}</h3>
              <p className="mb-2 text-sm text-[#1d1d1b]/50">{p.cargo}</p>
              <p className="text-[#1d1d1b]/70">{p.bio}</p>
            </FadeInView>
          ))}
        </div>

        <h2 className="mb-8 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
          Equipe pastoral
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {equipePastoral.map((p, i) => (
            <FadeInView key={p.nome} delay={(i % 3) * 0.1}>
              <div className="relative mb-3 aspect-square overflow-hidden rounded-2xl bg-[#1d1d1b]/5">
                {p.foto && (
                  <Image
                    src={p.foto}
                    alt={p.nome}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                )}
              </div>
              <h3 className="font-medium">{p.nome}</h3>
              <p className="text-sm text-[#1d1d1b]/60">{p.bio}</p>
            </FadeInView>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
