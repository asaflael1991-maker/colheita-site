import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade — Colheita",
};

export default function PrivacidadePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[840px] px-6 py-20 lg:px-12 lg:py-28">
        <h1 className="mb-8 text-3xl font-medium tracking-tight lg:text-4xl">
          Política de privacidade
        </h1>
        {/* TODO: substituir pelo texto real, revisado com um advogado/DPO
            (LGPD exige itens específicos: dados coletados, finalidade,
            base legal, direitos do titular, contato do DPO etc.) */}
        <div className="space-y-6 text-[#24262c]/70">
          <p>
            Este é um texto de exemplo. Substitua pela política de
            privacidade real da organização, revisada por um profissional
            jurídico à luz da LGPD (Lei Geral de Proteção de Dados).
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
