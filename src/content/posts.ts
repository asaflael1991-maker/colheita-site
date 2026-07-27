/**
 * posts.ts — conteúdo do blog/notícias.
 *
 * COMO ADICIONAR UM POST NOVO:
 * 1. Copie um dos objetos abaixo (do { até a }, )
 * 2. Cole antes ou depois dos outros, dentro do array `posts`
 * 3. Troque os valores:
 *    - slug: identificador único na URL (só letras minúsculas,
 *      números e hífen, sem espaço nem acento) — ex: "festa-da-colheita-2026"
 *    - titulo: aparece na listagem e no topo do post
 *    - data: formato "AAAA-MM-DD" (ex: "2026-03-15")
 *    - categoria: uma das que já usamos (ou crie uma nova)
 *    - resumo: 1-2 frases, aparece só na listagem
 *    - imagem: caminho da foto de capa (coloque o arquivo em
 *      public/images/blog/ primeiro)
 *    - corpo: um parágrafo por linha, entre aspas, separados por vírgula
 * 4. Salve o arquivo — pronto, o post já aparece no site
 *
 * Pra REMOVER um post, apague o bloco inteiro dele (do { até a },
 * incluindo a vírgula do final).
 */

export type Post = {
  slug: string;
  titulo: string;
  data: string; // AAAA-MM-DD
  categoria: string;
  resumo: string;
  imagem: string;
  corpo: string[];
};

export const posts: Post[] = [
  {
    slug: "the-bridge-colheita-2026",
    titulo: "THE BRIDGE COLHEITA 2026",
    data: "2026-07-26",
    categoria: "Eventos especiais",
    resumo:
      "Encontro de Férias: um mês dedicado a buscar mais de Deus, enquanto muitos descansam o corpo, nós vamos despertar o espírito.",
    imagem: "/images/blog/the-bridge-2026.jpg",
    corpo: [
      "Encontro de Férias",
      "Será um mês dedicado a buscar mais de Deus.",
      "Nas férias, muitos descansam o corpo, mas Deus quer despertar o espírito.",
      "Enquanto muitos se distraem, nós vamos nos posicionar.",
      "Enquanto muitos se afastam, nós vamos atravessar uma ponte para uma nova estação.",
    ],
  },
];

// Posts ordenados do mais recente pro mais antigo (usado na listagem)
export function getPostsOrdenados(): Post[] {
  return [...posts].sort((a, b) => (a.data < b.data ? 1 : -1));
}

export function getPostPorSlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
