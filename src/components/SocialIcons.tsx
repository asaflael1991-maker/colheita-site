/**
 * Ícones de redes sociais em SVG puro (sem dependência externa).
 * Usam `fill`/`stroke="currentColor"` — herdam automaticamente a cor
 * do texto ao redor (inclusive no hover), então sempre ficam no mesmo
 * tom da tipografia, sem precisar sincronizar cor manualmente.
 */

export function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function YouTubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 9.2v5.6l5-2.8-5-2.8Z" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M14 3.5c.6 2 2.1 3.3 4.2 3.5v2.6c-1.5 0-2.9-.4-4.2-1.3v6.4a5.3 5.3 0 1 1-4.6-5.3v2.7a2.6 2.6 0 1 0 2.1 2.6V3.5H14Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
