import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";

export const metadata: Metadata = {
  title: "Ministérios — Colheita",
};

const ministerios: {
  nome: string;
  objetivo: string;
  comoFunciona: string;
  horario: string;
  publico: string;
  responsavel: string;
  rede?: string;
  logo?: string;
}[] = [
  {
    nome: "Ministério de Louvor",
    objetivo:
      "Conduzir a igreja à adoração, criando um ambiente onde pessoas possam se conectar com Deus através da música e da excelência ministerial.",
    comoFunciona:
      "Realiza ensaios, ministra nos cultos e eventos da igreja e promove o desenvolvimento espiritual e técnico dos músicos e ministros.",
    horario: "Conforme escala ministerial e ensaios semanais",
    publico: "Músicos, cantores e instrumentistas",
    responsavel: "Ir. Emerson e Irª. Nívea",
    rede: "@ministeriochedvar",
    logo: "/images/ministerios/louvor.jpg",
  },
  {
    nome: "Ministério Kids",
    objetivo:
      "Ensinar a Palavra de Deus às crianças de maneira criativa, segura e adequada para cada faixa etária.",
    comoFunciona:
      "Cultos infantis durante as celebrações, atividades bíblicas, brincadeiras, louvor e discipulado infantil.",
    horario: "Domingos, durante os cultos",
    publico: "Crianças",
    responsavel: "Irª. Valéria e Alexandra",
    rede: "@colheitakidssede",
    logo: "/images/ministerios/kids.jpg",
  },
  {
    nome: "Ministério de Mulheres",
    objetivo:
      "Fortalecer mulheres em sua caminhada com Cristo, promovendo comunhão, discipulado e crescimento espiritual.",
    comoFunciona:
      "Encontros, conferências, células, estudos bíblicos e ações voltadas ao desenvolvimento feminino.",
    horario: "Conforme calendário da igreja",
    publico: "Mulheres",
    responsavel: "Pra. Carinne Pimentel e Time de Fé",
    rede: "@mulherescolheitaoficial",
    logo: "/images/ministerios/mulheres.jpg",
  },
  {
    nome: "Ministério de Homens",
    objetivo:
      "Desenvolver homens comprometidos com Deus, suas famílias e a missão da igreja.",
    comoFunciona:
      "Encontros, discipulados, retiros e ações voltadas ao crescimento espiritual e liderança masculina.",
    horario: "Conforme calendário da igreja",
    publico: "Homens",
    responsavel: "Ir. Roniel e Ir. Felipe",
    rede: "@homenscolheitaoficial",
    logo: "/images/ministerios/homens.jpg",
  },
  {
    nome: "Ministério de Jovens",
    objetivo: "Formar uma geração apaixonada por Jesus e comprometida com o Reino de Deus.",
    comoFunciona:
      "Cultos de jovens, pequenos grupos, eventos, discipulado, evangelismo e ações sociais.",
    horario: "Conforme calendário da juventude",
    publico: "Jovens",
    responsavel: "Ir. Weric, Irª. Aira, Ir. Miguel Garcia e Mariana",
    rede: "@trigoyouth",
    logo: "/images/ministerios/jovens.jpg",
  },
  {
    nome: "Ministério Profético",
    objetivo:
      "Fortalecer uma cultura de oração, sensibilidade ao Espírito Santo e edificação da igreja.",
    comoFunciona:
      "Reuniões de intercessão, cobertura espiritual dos cultos e treinamento ministerial.",
    horario: "Conforme agenda ministerial",
    publico: "Membros da igreja",
    responsavel: "Pra. Sabrinne",
  },
  {
    nome: "Ministério de Células",
    objetivo:
      "Promover discipulado, comunhão e cuidado pastoral através dos pequenos grupos.",
    comoFunciona:
      "As células se reúnem semanalmente em casas para comunhão, estudo da Palavra, oração e evangelismo.",
    horario: "Durante a semana, conforme cada célula",
    publico: "Toda a igreja",
    responsavel: "Pr. Pedro e Pra. Jéssica",
  },
  {
    nome: "Ministério de Voluntários",
    objetivo:
      "Desenvolver uma cultura de serviço, integrando e capacitando voluntários para servir com excelência.",
    comoFunciona:
      "Recepção de novos voluntários, treinamentos, acompanhamento e organização das equipes.",
    horario: "Conforme escalas",
    publico: "Membros que desejam servir",
    responsavel: "Irª. Regina",
  },
  {
    nome: "Ministério de Comunicação",
    objetivo:
      "Comunicar a mensagem do Evangelho com excelência dentro e fora da igreja.",
    comoFunciona:
      "Produção de artes, vídeos, fotografias, transmissões ao vivo, redes sociais e cobertura dos eventos.",
    horario: "Conforme escalas e programação da igreja",
    publico: "Toda a igreja e comunidade",
    responsavel: "Lucas Weyne, Miguel Garcia e Clara Mariano",
  },
];

const projetosComunitarios = [
  {
    nome: "Balé",
    publico: "Crianças da comunidade",
    responsavel: "Miss. Samara Carneiro",
    rede: "@ass.ceusabertos",
  },
  {
    nome: "Krav Maga",
    publico: "Aberto para toda a comunidade, público unissex",
    responsavel: "Ir. Wesley e Ira. Raquel",
    rede: "@ass.ceusabertos",
  },
];

export default function MinisteriosPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[1200px] px-6 py-20 lg:px-12 lg:py-28">
        <FadeInView>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#1d1d1b]/50">
            Ministérios
          </p>
          <h1 className="mb-14 text-3xl font-medium tracking-tight lg:text-5xl">
            Onde você pode servir e crescer
          </h1>
        </FadeInView>

        <div className="grid gap-10 sm:grid-cols-2">
          {ministerios.map((m, i) => (
            <FadeInView
              key={m.nome}
              delay={(i % 2) * 0.1}
              className="rounded-2xl border border-[#1d1d1b]/10 p-6"
            >
              <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-[#1d1d1b]/5">
                {m.logo && (
                  <Image
                    src={m.logo}
                    alt={`Logo do ${m.nome}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-6"
                  />
                )}
              </div>
              <h2 className="mb-2 text-xl font-medium">{m.nome}</h2>
              <p className="mb-3 text-[#1d1d1b]/70">{m.objetivo}</p>
              <p className="mb-4 text-sm text-[#1d1d1b]/60">
                {m.comoFunciona}
              </p>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[#1d1d1b]/10 pt-4 text-sm">
                <div>
                  <dt className="text-[#1d1d1b]/45">Quando</dt>
                  <dd className="text-[#1d1d1b]/80">{m.horario}</dd>
                </div>
                <div>
                  <dt className="text-[#1d1d1b]/45">Público</dt>
                  <dd className="text-[#1d1d1b]/80">{m.publico}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-[#1d1d1b]/45">Responsável</dt>
                  <dd className="text-[#1d1d1b]/80">
                    {m.responsavel}
                    {m.rede && (
                      <span className="text-[#1d1d1b]/45"> · {m.rede}</span>
                    )}
                  </dd>
                </div>
              </dl>
            </FadeInView>
          ))}
        </div>

        <div className="mt-20 border-t border-[#1d1d1b]/10 pt-12">
          <h2 className="mb-8 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Projetos na comunidade
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {projetosComunitarios.map((p, i) => (
              <FadeInView
                key={p.nome}
                delay={i * 0.1}
                className="rounded-2xl border border-[#1d1d1b]/10 p-6"
              >
                <div className="mb-4 aspect-video rounded-lg bg-[#1d1d1b]/5" />
                <h3 className="mb-2 text-xl font-medium">{p.nome}</h3>
                <p className="mb-1 text-sm text-[#1d1d1b]/70">{p.publico}</p>
                <p className="text-sm text-[#1d1d1b]/50">
                  {p.responsavel} · {p.rede}
                </p>
              </FadeInView>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
