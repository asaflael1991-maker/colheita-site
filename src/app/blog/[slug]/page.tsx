import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import { getPostPorSlug, posts } from "@/content/posts";

// Gera uma página estática pra cada post em posts.ts no momento do
// build (npm run build) — não precisa de banco de dados.
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostPorSlug(slug);
  return { title: post ? `${post.titulo} — Colheita` : "Post não encontrado" };
}

function formatarData(data: string) {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostPorSlug(slug);

  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[840px] px-6 py-20 lg:px-12 lg:py-28">
        <FadeInView>
          <Link
            href="/blog"
            className="mb-8 inline-block text-sm text-[#1d1d1b]/60 underline underline-offset-4 hover:text-[#1d1d1b]"
          >
            ← Voltar pras notícias
          </Link>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#f8a800]">
            {post.categoria}
          </p>
          <h1 className="mb-4 text-3xl font-medium tracking-tight lg:text-5xl">
            {post.titulo}
          </h1>
          <p className="mb-10 text-sm text-[#1d1d1b]/40">
            {formatarData(post.data)}
          </p>
        </FadeInView>

        <FadeInView className="relative mb-10 aspect-video overflow-hidden rounded-2xl bg-[#1d1d1b]/5">
          <Image
            src={post.imagem}
            alt={post.titulo}
            fill
            sizes="840px"
            className="object-cover"
          />
        </FadeInView>

        <FadeInView className="space-y-5 text-lg leading-relaxed text-[#1d1d1b]/70">
          {post.corpo.map((paragrafo, i) => (
            <p key={i}>{paragrafo}</p>
          ))}
        </FadeInView>
      </main>
      <Footer />
    </>
  );
}
