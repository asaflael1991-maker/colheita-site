"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import type { Evento } from "@/content/eventos";

/**
 * AgendaEventos — cards da agenda (cartaz + data/recorrência, horário,
 * local e título). Client component só para esconder, no navegador,
 * eventos com data que já passaram (a página inicial é estática, então
 * o filtro do servidor só roda a cada publicação).
 */

const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

function hojeISO() {
  // Data de hoje no fuso de Fortaleza/Bahia (UTC-3), formato AAAA-MM-DD.
  return new Date(Date.now() - 3 * 3600 * 1000).toISOString().slice(0, 10);
}

const semInscricao = () => () => {};

function ativo(e: Evento, hoje: string) {
  if (!e.data) return true;
  return (e.dataFim ?? e.data) >= hoje;
}

function selo(e: Evento) {
  if (e.recorrencia) return e.recorrencia;
  if (!e.data) return "";
  const [, m, d] = e.data.split("-").map(Number);
  let txt = `${d} de ${MESES[m - 1]}.`;
  if (e.dataFim && e.dataFim !== e.data) {
    const [, m2, d2] = e.dataFim.split("-").map(Number);
    txt = m2 === m ? `${d} a ${d2} de ${MESES[m - 1]}.` : `${d}/${m} a ${d2}/${m2}`;
  }
  return txt;
}

function ordenar(a: Evento, b: Evento) {
  // Recorrentes primeiro; depois os com data, do mais próximo ao mais distante.
  if (!a.data && b.data) return -1;
  if (a.data && !b.data) return 1;
  return (a.data ?? "").localeCompare(b.data ?? "");
}

export default function AgendaEventos({ eventos }: { eventos: Evento[] }) {
  // No servidor (e na 1ª renderização) mostra todos; no navegador filtra pela data de hoje.
  const hoje = useSyncExternalStore(semInscricao, hojeISO, () => null);

  const lista = eventos.filter((e) => (hoje ? ativo(e, hoje) : true)).sort(ordenar);

  if (lista.length === 0) {
    return (
      <p className="mt-10 text-[#1d1d1b]/50">
        Novos eventos em breve. Acompanhe nosso Instagram.
      </p>
    );
  }

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {lista.map((e) => (
        <article
          key={e.titulo + (e.data ?? e.recorrencia ?? "")}
          className="group flex flex-col overflow-hidden rounded-3xl border border-[#1d1d1b]/10 bg-[#ffffff] transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(29,29,27,0.35)] sm:flex-row"
        >
          <a
            href={e.cartaz}
            target="_blank"
            rel="noopener"
            aria-label={`Ver cartaz de ${e.titulo}`}
            className="relative block w-full shrink-0 overflow-hidden bg-[#1d1d1b]/5 sm:w-[210px]"
            style={{ aspectRatio: e.proporcao ?? 3 / 4 }}
          >
            <Image
              src={e.cartaz}
              alt={`Cartaz: ${e.titulo}${e.subtitulo ? ` — ${e.subtitulo}` : ""}`}
              fill
              sizes="(max-width: 640px) 100vw, 210px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute left-3 top-3 rounded-full bg-[#ffffff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#e5192c] shadow-sm">
              {selo(e)}
            </span>
          </a>

          <div className="flex flex-1 flex-col justify-center gap-3 p-6 sm:p-8">
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs font-medium uppercase tracking-[0.14em] text-[#1d1d1b]/55">
              <span className="inline-flex items-center gap-1.5">
                <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 stroke-[#e5192c]" fill="none" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                {e.horario}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 stroke-[#e5192c]" fill="none" strokeWidth="2">
                  <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                {e.local}
              </span>
            </div>
            <h3 className="text-2xl font-semibold uppercase leading-tight tracking-tight text-[#1d1d1b] lg:text-3xl">
              {e.titulo}
            </h3>
            {e.subtitulo && <p className="text-lg text-[#1d1d1b]/70">{e.subtitulo}</p>}
          </div>
        </article>
      ))}
    </div>
  );
}
