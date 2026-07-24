# Daily Hero — Arkkhe

Cover/hero section recriada a partir do frame do Figma **"Daily Hero 23 — Arkkhe"**
(node `Cover`, 22001:27). Stack: **Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## O que falta pra ficar pixel-perfect

Por limitação de rede no ambiente onde este projeto foi gerado, dois assets do Figma
não puderam ser baixados automaticamente. O projeto já está com os placeholders certos
no lugar — só falta trocar os arquivos:

1. **Imagem de fundo** (layer `4e7510e6-f67d...` / node `28001:31`)
   - Exporte a imagem no Figma (2x, JPG ou WEBP)
   - Salve em `public/images/cover-bg.jpg`
   - O componente `Hero.tsx` já aponta pra esse caminho e troca o gradiente
     placeholder automaticamente assim que o arquivo existir

2. **Ilustração decorativa** (node `28001:32`, "Vector 25")
   - Exporte como SVG no Figma
   - Substitua `public/images/cover-illustration.svg` pelo arquivo exportado

3. **Fonte "Grinola"**
   - É uma fonte licenciada (Zeenesia Studio), não está no Google Fonts
   - Por enquanto o projeto usa `Cormorant` (Google Fonts) como substituta visual
   - Se você tiver a licença da Grinola:
     1. Coloque os arquivos `.woff2` em `public/fonts/`
     2. Em `src/app/layout.tsx`, troque o `next/font/google` pelo `next/font/local`:
        ```ts
        import localFont from "next/font/local";

        const grinola = localFont({
          src: "../../public/fonts/Grinola-Regular.woff2",
          variable: "--font-grinola",
        });
        ```

## Estrutura

```
src/
  app/
    layout.tsx      # fontes (next/font) + metadata
    page.tsx         # monta a página
    globals.css       # tokens de cor e base styles (Tailwind v4)
  components/
    Hero.tsx          # seção "Cover" com as animações Framer Motion
public/
  images/             # assets visuais (ver seção acima)
```

## Design tokens (extraídos do Figma via MCP)

| Token | Valor |
|---|---|
| Background | `#f8f7f8` |
| Texto principal | `#24262c` |
| Veil/gradiente | `rgb(227, 224, 229)` → transparente |
| Display (título) | Grinola / 178px desktop, `clamp()` responsivo |
| Contador | Grinola, 113.8px (número) + 41.1px a 50% opacidade (fração) |

## Deploy na Vercel

```bash
npx vercel
```

ou conecte o repositório em https://vercel.com/new — o projeto já está com
`npm run build` limpo (Next 16, Turbopack) e zero warnings de ESLint.
