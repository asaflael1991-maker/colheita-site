import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";

export const metadata: Metadata = {
  title: "Galeria de fotos — Colheita",
};

// Lista das fotos em public/images/gallery. Pra adicionar mais fotos:
// 1. Coloque o arquivo em public/images/gallery/
// 2. Adicione uma linha aqui com o nome do arquivo
const photos = [
  "foto-01.jpg",
  "foto-02.jpg",
  "foto-03.jpg",
  "foto-04.jpg",
  "foto-05.jpeg",
  "foto-06.jpeg",
  "foto-07.jpeg",
  "foto-08.jpeg",
  "foto-09.jpeg",
  "foto-10.jpeg",
  "foto-11.jpeg",
  "foto-12.jpeg",
  "foto-13.jpg",
  "foto-14.jpg",
  "foto-15.jpg",
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
          <p className="mb-12 max-w-2xl text-[#1d1d1b]/60">
            Momentos registrados em nossos cultos e encontros.
          </p>
        </FadeInView>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {photos.map((file, i) => (
            <FadeInView
              key={file}
              delay={(i % 3) * 0.1}
              className="break-inside-avoid overflow-hidden rounded-xl bg-[#1d1d1b]/5"
            >
              <Image
                src={`/images/gallery/${file}`}
                alt={`Foto ${i + 1} da galeria`}
                width={800}
                height={800}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover"
              />
            </FadeInView>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
