import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";

export const metadata: Metadata = {
  title: "Galeria de fotos — Colheita",
};

// Álbuns da galeria, organizados por tema. Pra adicionar um álbum
// novo: crie uma pasta em public/images/galeria/<slug>/ com as fotos
// nomeadas foto-01.jpg, foto-02.jpg... e adicione uma entrada aqui.
const albuns: { slug: string; titulo: string; fotos: string[] }[] = [
  {
    slug: "associacao-ceus-abertos",
    titulo: "Associação Céus Abertos",
    fotos: Array.from({ length: 38 }, (_, i) => `foto-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    slug: "cursos",
    titulo: "Cursos",
    fotos: Array.from({ length: 18 }, (_, i) => `foto-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    slug: "eventos",
    titulo: "Eventos",
    fotos: Array.from({ length: 5 }, (_, i) => `foto-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    slug: "jovens",
    titulo: "Jovens",
    fotos: Array.from({ length: 9 }, (_, i) => `foto-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    slug: "kids",
    titulo: "Kids",
    fotos: Array.from({ length: 8 }, (_, i) => `foto-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    slug: "mercado-solidario",
    titulo: "Mercado Solidário",
    fotos: Array.from({ length: 2 }, (_, i) => `foto-${String(i + 1).padStart(2, "0")}.jpg`),
  },
];

export default function GaleriaPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-28">
        <FadeInView>
          <h1 className="mb-4 text-3xl font-medium tracking-tight lg:text-5xl">
            Galeria de fotos
          </h1>
          <p className="mb-16 max-w-2xl text-[#1d1d1b]/60">
            Momentos registrados em nossos cultos, ministérios e encontros.
          </p>
        </FadeInView>

        {albuns.map((album) => (
          <div key={album.slug} className="mb-20">
            <FadeInView>
              <h2 className="mb-6 text-xl font-medium tracking-tight">
                {album.titulo}
              </h2>
            </FadeInView>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {album.fotos.map((file, i) => (
                <FadeInView
                  key={file}
                  delay={(i % 4) * 0.08}
                  className="aspect-square overflow-hidden rounded-xl bg-[#1d1d1b]/5"
                >
                  <Image
                    src={`/images/galeria/${album.slug}/${file}`}
                    alt={`${album.titulo} — foto ${i + 1}`}
                    width={500}
                    height={500}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="h-full w-full object-cover"
                  />
                </FadeInView>
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
