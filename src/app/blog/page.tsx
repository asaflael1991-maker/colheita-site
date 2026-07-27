import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import { getPostsOrdenados } from "@/content/posts";

export const metadata: Metadata = {
  title: "Notícias — Colheita",
};

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

function formatarData(data: string) {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

export default function BlogPage() {
  const posts = getPostsOrdenados();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-28">
        <FadeInView>
          <h1 className="mb-4 text-3xl font-medium tracking-tight lg:text-5xl">
            Acompanhe tudo o que Deus está fazendo.
          </h1>
          <p className="mb-4 max-w-2xl text-lg text-[#1d1d1b]/70">
            Fique por dentro das novidades da Igreja Colheita: aqui você
            acompanha tudo o que acontece em nossa comunidade.
          </p>
          <ul className="mb-12 flex flex-wrap gap-3">
            {categorias.map((c) => (
              <li
                key={c}
                className="rounded-full border border-[#1d1d1b]/15 px-4 py-2 text-sm text-[#1d1d1b]/70"
              >
                {c}
              </li>
            ))}
          </ul>
        </FadeInView>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <FadeInView key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-2xl border border-[#1d1d1b]/10"
              >
                <div className="relative aspect-video overflow-hidden bg-[#1d1d1b]/5">
                  <Image
                    src={post.imagem}
                    alt={post.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#f8a800]">
                    {post.categoria}
                  </p>
                  <h2 className="mb-2 font-medium">{post.titulo}</h2>
                  <p className="mb-3 text-sm text-[#1d1d1b]/60">
                    {post.resumo}
                  </p>
                  <p className="text-xs text-[#1d1d1b]/40">
                    {formatarData(post.data)}
                  </p>
                </div>
              </Link>
            </FadeInView>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
