import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nossa História — Colheita",
};

const fundadores = [
  "Silvanio Pimentel de Brito",
  "Carinne Garcia",
  "Robson Ferreira Aguiar",
  "Silvia Maria Pimentel",
  "Sabrinne Garcia de Alcântara Pimentel",
];

export default function HistoriaPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[900px] px-6 py-20 lg:px-12 lg:py-28">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#24262c]/50">
          Nossa história
        </p>
        <h1 className="mb-4 text-3xl font-medium tracking-tight lg:text-5xl">
          Como nasceu a Igreja Colheita
        </h1>
        <p className="mb-12 text-lg text-[#24262c]/60">
          Fundada em <strong className="text-[#24262c]">2011</strong>
        </p>

        <div className="space-y-5 text-lg leading-relaxed text-[#24262c]/70">
          <p>
            A Igreja Colheita nasceu no coração de Deus antes de nascer em
            um endereço. Ela surgiu do desejo de ver pessoas encontrando um
            lugar onde pudessem conhecer Jesus, crescer na fé e viver como
            uma verdadeira família.
          </p>
          <p>
            Fundada pelo Pr. Silvanio Pimentel e sua família, foi
            estabelecida com a convicção de que a Igreja não é apenas um
            prédio, mas uma comunidade de discípulos comprometidos em amar
            a Deus, servir às pessoas e anunciar o Evangelho.
          </p>
          <p>
            Desde o início, a visão sempre foi clara: ganhar todas as
            pessoas de nossa geração para Jesus, fortalecendo famílias,
            formando discípulos e despertando cada cristão para viver seus
            dons e talentos no Reino de Deus.
          </p>
          <p>
            O nome Colheita representa uma verdade bíblica: toda semeadura
            feita com amor, oração, lágrimas e fidelidade produzirá frutos
            para a glória de Deus. A igreja nasceu para plantar esperança,
            cultivar vidas e celebrar a colheita que somente Deus pode
            produzir.
          </p>
          <p>
            Hoje, a Igreja Colheita continua avançando com o mesmo
            propósito que marcou seu início: ser uma família para
            pertencer, onde Cristo é o centro, a Palavra é o fundamento, o
            Espírito Santo conduz a caminhada e cada pessoa é chamada a
            crescer, servir e gerar frutos que permaneçam.
          </p>
        </div>

        <div className="mt-14 border-t border-[#24262c]/10 pt-10">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#24262c]/50">
            Fundadores
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {fundadores.map((nome) => (
              <li key={nome} className="text-[#24262c]/80">
                {nome}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 border-t border-[#24262c]/10 pt-10">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#24262c]/50">
            Testemunhos e conquistas
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-[#24262c]/70">
            <p>
              Ao longo da nossa caminhada, temos visto a fidelidade de Deus
              em cada etapa. Entre as principais conquistas que celebramos
              estão vidas transformadas pelo poder do Evangelho, famílias
              restauradas, pessoas libertas, novos discípulos formados e
              muitos batismos que testemunham o agir de Cristo.
            </p>
            <p>
              Também somos gratos pelo fortalecimento das nossas células,
              pelo desenvolvimento de novos líderes, pela expansão dos
              ministérios e pelos projetos sociais, como o Mercado
              Solidário, que tem levado cuidado e esperança a famílias da
              nossa comunidade.
            </p>
            <p>
              Outra grande conquista é ver pessoas descobrindo seus dons e
              servindo com alegria, tornando a Igreja Colheita uma
              verdadeira família para pertencer.
            </p>
            <p>
              Sabemos que ainda há muito caminho pela frente, mas cada
              vida alcançada confirma que Deus continua fazendo crescer a
              Sua obra. Toda honra e toda glória pertencem a Ele.
            </p>
          </div>
          <blockquote className="mt-8 border-l-2 border-[#24262c]/20 pl-4 text-xl italic text-[#24262c]/70">
            &ldquo;Nossa maior conquista nunca foi abrir uma igreja, mas
            ver pessoas sendo transformadas por Jesus e encontrando um
            lugar para pertencer, crescer e servir.&rdquo;
          </blockquote>
        </div>
      </main>
      <Footer />
    </>
  );
}
