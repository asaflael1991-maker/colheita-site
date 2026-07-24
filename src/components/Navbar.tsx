"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/**
 * Navbar — menu fixo no topo, em duas linhas:
 *
 * - Linha 1: logo (canto esquerdo) + seções da home (âncoras com
 *   scroll suave).
 * - Linha 2: páginas próprias (História, Liderança, Ministérios,
 *   Galeria, Notícias) + botão "Doar agora", centralizados.
 *
 * - Links de âncora (`#id`) rolam suavemente até a seção quando o
 *   usuário já está na home. Se estiver em outra página (/blog,
 *   /historia etc.), o link vira `/#id` — o Next.js navega de volta
 *   pra home e já rola até a seção certa.
 * - Menu mobile (hambúrguer) junta as duas linhas num único dropdown.
 * - `scroll-mt-36` nas seções (ver Section.tsx) compensa a altura das
 *   DUAS linhas do menu fixo ao chegar via âncora.
 */

const sections = [
  { id: "quem-somos", label: "Quem somos" },
  { id: "missao-visao-valores", label: "Missão, visão e valores" },
  { id: "impacto", label: "Impacto" },
  { id: "transparencia", label: "Transparência" },
  { id: "doacoes", label: "Doações" },
  { id: "voluntariado", label: "Voluntariado" },
  { id: "eventos", label: "Eventos" },
  { id: "contato", label: "Contato" },
];

const pages = [
  { href: "/historia", label: "História" },
  { href: "/lideranca", label: "Liderança" },
  { href: "/ministerios", label: "Ministérios" },
  { href: "/galeria", label: "Galeria" },
  { href: "/blog", label: "Notícias" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const anchorHref = (id: string) => (pathname === "/" ? `#${id}` : `/#${id}`);

  return (
    <header className="sticky top-0 z-50 border-b border-[#24262c]/10 bg-[#f8f7f8]/90 backdrop-blur">
      {/* Linha 1: logo (esquerda) + seções da home */}
      <nav className="relative mx-auto flex min-h-[4.5rem] max-w-[1440px] items-center px-6 py-2 lg:px-12">
        <Link
          href="/"
          className="absolute left-6 top-1/2 -translate-y-1/2 shrink-0 lg:left-12"
        >
          <Image
            src="/images/logo.png"
            alt="Colheita — Uma família para pertencer"
            width={1080}
            height={415}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <ul className="hidden w-full flex-wrap items-center justify-center gap-x-6 gap-y-1 lg:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <Link
                href={anchorHref(s.id)}
                className="text-sm text-[#24262c]/70 transition-colors hover:text-[#24262c]"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão hambúrguer (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="absolute right-6 top-1/2 flex h-10 w-10 -translate-y-1/2 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-[#24262c] transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-[#24262c] transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Linha 2: páginas próprias + CTA (só desktop — no mobile fica
          tudo junto no dropdown do hambúrguer) */}
      <div className="hidden border-t border-[#24262c]/10 lg:block">
        <ul className="mx-auto flex max-w-[1440px] items-center justify-center gap-6 px-6 py-2 lg:px-12">
          {pages.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="text-sm text-[#24262c]/70 transition-colors hover:text-[#24262c]"
              >
                {p.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={anchorHref("doacoes")}
              className="rounded-full bg-[#24262c] px-4 py-2 text-sm text-[#f8f7f8] transition-opacity hover:opacity-90"
            >
              Doar agora
            </Link>
          </li>
        </ul>
      </div>

      {/* Menu mobile: junta as duas linhas num único dropdown */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-[#24262c]/10 px-6 py-4 lg:hidden">
          {sections.map((s) => (
            <li key={s.id}>
              <Link
                href={anchorHref(s.id)}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-[#24262c]/80"
              >
                {s.label}
              </Link>
            </li>
          ))}
          <li className="my-2 border-t border-[#24262c]/10" />
          {pages.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-[#24262c]/80"
              >
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
