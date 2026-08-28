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
    foto: "/images/lideranca/silvanio.jpg",
    bio: "Fundador e Pastor Presidente da Igreja Colheita, dedica sua vida à proclamação do Evangelho, ao discipulado e à formação de líderes. É apaixonado por ensinar a Palavra de Deus de forma simples, prática e transformadora, conduzindo a igreja com a visão de formar discípulos, fortalecer famílias e alcançar pessoas para Cristo. Seu propósito é ver cada cristão descobrir seu chamado e viver uma vida de serviço ao Reino de Deus.",
  },
  {
    nome: "Pra. Carinne Pimentel",
    cargo: "Pastora",
    foto: "/images/lideranca/carinne.jpg",
    bio: "Pastora e cofundadora da Igreja Colheita, exerce um ministério voltado ao cuidado das pessoas, especialmente das mulheres e das famílias. Atua no discipulado, aconselhamento e desenvolvimento espiritual, servindo com sensibilidade, amor e dedicação. Sua missão é fortalecer mulheres para que vivam plenamente o propósito de Deus.",
  },
];

const equipePastoral: { nome: string; foto?: string; bio: string }[] = [
  {
    nome: "Pr. Daniel e Pra. Sabrinne",
    foto: "/images/lideranca/daniel-sabrinne.jpg",
    bio: "Pastores que servem com sensibilidade, compromisso e amor ao Reino de Deus, contribuindo para o discipulado, a formação de líderes e o desenvolvimento espiritual da Igreja Colheita.",
  },
  {
    nome: "Pr. Fabiano",
    foto: "/images/lideranca/fabiano.jpg",
    bio: "Pastor que atua no cuidado da igreja, contribuindo para o crescimento espiritual dos membros e o desenvolvimento dos ministérios.",
  },
  {
    nome: "Pr. Helandson",
    foto: "/images/lideranca/helandson-mikaele.jpg",
    bio: "Pastor apaixonado pelo discipulado e pelo desenvolvimento de novos líderes, servindo com excelência e compromisso com o Reino de Deus.",
  },
  {
    nome: "Pr. Gabriel e Pra. Celeste",
    foto: "/images/lideranca/gabriel-celeste.jpg",
    bio: "Pastores que servem com dedicação e compromisso ao Reino de Deus, contribuindo para o crescimento espiritual e o discipulado na Igreja Colheita.",
  },
  {
    nome: "Pr. Gleuson",
    foto: "/images/lideranca/gleuson.jpg",
    bio: "Pastor que serve com dedicação e compromisso ao Reino de Deus, contribuindo para o crescimento espiritual e o discipulado na Igreja Colheita.",
  },
  {
    nome: "Pr. Leonardo e Pra. Suiane",
    foto: "/images/lideranca/leonardo-suiane.jpg",
    bio: "Pastores que servem com dedicação e compromisso ao Reino de Deus, contribuindo para o crescimento espiritual e o discipulado na Igreja Colheita.",
  },
  {
    nome: "Pr. Nildo e Pra. Fernanda",
    foto: "/images/lideranca/nildo-fernanda.jpg",
    bio: "Pastores que servem com dedicação e compromisso ao Reino de Deus, contribuindo para o crescimento espiritual e o discipulado na Igreja Colheita.",
  },
  {
    nome: "Pr. Rafael Olegário",
    foto: "/images/lideranca/rafael-olegario.jpg",
    bio: "Pastor que serve com dedicação e compromisso ao Reino de Deus, contribuindo para o crescimento espiritual e o discipulado na Igreja Colheita.",
  },
  {
    nome: "Pra. Rebeca",
    foto: "/images/lideranca/rebeca.jpg",
    bio: "Pastora que serve com dedicação e compromisso ao Reino de Deus, contribuindo para o crescimento espiritual e o discipulado na Igreja Colheita.",
  },
];

const liderancaMinisterios: {
  ministerio: string;
  lideres: string;
  bio: string;
  foto?: string;
}[] = [
  {
    ministerio: "Ministério de Louvor",
    lideres: "Ir. Emerson e Irª. Nívea",
    bio: "Líderes do Ministério de Louvor da Igreja Colheita, dedicam-se a conduzir a igreja à adoração por meio da música, servindo com excelência, sensibilidade e compromisso com a presença de Deus.",
  },
  {
    ministerio: "Ministério Kids",
    lideres: "Irª. Valéria e Ira. Alexandra",
    bio: "Líderes do Ministério Kids, têm a missão de ensinar a Palavra de Deus às crianças de forma criativa, segura e acolhedora.",
  },
  {
    ministerio: "Ministério de Mulheres",
    lideres: "Pra. Carinne Pimentel e time de fé",
    bio: "Dedica sua vida ao discipulado, aconselhamento e fortalecimento espiritual das mulheres, inspirando-as a viver sua identidade em Cristo.",
  },
  {
    ministerio: "Ministério de Homens",
    lideres: "Ir. Roniel e Ir. Felipe",
    bio: "Trabalham para fortalecer homens em sua caminhada cristã, incentivando uma vida de caráter, responsabilidade, comunhão e liderança.",
    foto: "/images/lideranca/roniel-carmeline.jpg",
  },
  {
    ministerio: "Ministério de Jovens",
    lideres: "Ir. Weric, Irª. Aira, Ir. Miguel Garcia e Ira. Mariana",
    bio: "Têm como missão despertar uma geração apaixonada por Jesus, comprometida com o Evangelho e preparada para influenciar o mundo.",
  },
  {
    ministerio: "Ministério Profético",
    lideres: "Pra. Sabrinne, Mis. Samara e Ira. Gabrielly",
    bio: "Dedica-se a promover uma cultura de oração, sensibilidade à voz do Espírito Santo e edificação da igreja.",
  },
  {
    ministerio: "Ministério de Comunicação",
    lideres: "Lucas Weyne, Miguel Garcia e Clara Mariano",
    bio: "Cuida da comunicação da Igreja Colheita dentro e fora dos cultos, produzindo arte, vídeo, fotografia e cobertura dos eventos com excelência.",
  },
  {
    ministerio: "Ministério de Células",
    lideres: "Prs. Pedro, Jéssica e Mikaele",
    bio: "Coordenam as células da Igreja Colheita, cuidando do discipulado, da comunhão e do acompanhamento espiritual dos pequenos grupos que se reúnem durante a semana.",
    foto: "/images/lideranca/pedro-jessica.jpg",
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
          Pastores principais
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
        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

        <h2 className="mb-8 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
          Líderes de ministérios
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {liderancaMinisterios.map((l, i) => (
            <FadeInView key={l.ministerio} delay={(i % 3) * 0.1}>
              <div className="relative mb-3 aspect-square overflow-hidden rounded-2xl bg-[#1d1d1b]/5">
                {l.foto && (
                  <Image
                    src={l.foto}
                    alt={l.ministerio}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                )}
              </div>
              <h3 className="font-medium">{l.ministerio}</h3>
              <p className="mb-1 text-sm text-[#1d1d1b]/50">{l.lideres}</p>
              <p className="text-sm text-[#1d1d1b]/60">{l.bio}</p>
            </FadeInView>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
