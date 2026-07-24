import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Notícias — Colheita",
};

export default function BlogPage() {
  const categorias = [
    "Eventos especiais",
    "Novas séries de mensagens",
    "Testemunhos",
    "Projetos sociais",
    "Ações missionárias",
    "Conferências",
    "Avisos importantes",
    "Conteúdos para fortalecer sua fé",
  ];

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-28">
        <h1 className="mb-4 text-3xl font-medium tracking-tight lg:text-5xl">
          Acompanhe tudo o que Deus está fazendo.
        </h1>
        <p className="mb-4 max-w-2xl text-lg text-[#24262c]/70">
          Fique por dentro das novidades da Igreja Colheita: aqui você
          acompanha tudo o que acontece em nossa comunidade.
        </p>
        <ul className="mb-12 flex flex-wrap gap-3">
          {categorias.map((c) => (
            <li
              key={c}
              className="rounded-full border border-[#24262c]/15 px-4 py-2 text-sm text-[#24262c]/70"
            >
              {c}
            </li>
          ))}
        </ul>

        {/* TODO: listar posts reais (de um CMS, arquivos MDX, etc.) */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <article key={n} className="rounded-2xl border border-[#24262c]/10 p-6">
              <div className="mb-4 aspect-video rounded-lg bg-[#24262c]/5" />
              <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#24262c]/50">
                Data a definir
              </p>
              <h2 className="font-medium">Título da notícia {n}</h2>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
