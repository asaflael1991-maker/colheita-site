import Link from "next/link";

export default function Footer() {
  const redes = [
    { label: "Instagram", href: "https://www.instagram.com/igrejacolheita_oficial/" },
    { label: "YouTube", href: "https://www.youtube.com/@igrejacolheitaoficial" },
    { label: "TikTok", href: "https://www.tiktok.com/@igrejacolheita_oficial" },
  ];

  return (
    <footer className="border-t border-[#1d1d1b]/10 bg-[#ffffff] px-6 py-10 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 text-sm text-[#1d1d1b]/60 lg:flex-row lg:items-center lg:justify-between">
        <p>&copy; {new Date().getFullYear()} Ministério Colheita Internacional. Todos os direitos reservados.</p>

        <div className="flex flex-wrap gap-6">
          {redes.map((r) => (
            <a
              key={r.label}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1d1d1b]"
            >
              {r.label}
            </a>
          ))}
          <Link href="/blog" className="hover:text-[#1d1d1b]">
            Notícias
          </Link>
          <Link href="/privacidade" className="hover:text-[#1d1d1b]">
            Política de privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
