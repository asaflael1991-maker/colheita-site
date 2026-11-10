import type { NextRequest } from "next/server";

/**
 * POST /api/devocional/checkout
 *
 * Cria um link de pagamento avulso no Checkout Integrado da InfinitePay
 * para o devocional "Jesus, Senhor de Tudo" e devolve { checkoutUrl }.
 * Depois de pagar, a InfinitePay leva o comprador para
 * /devocional/obrigado (página de download do livro).
 *
 * Configuração (variáveis de ambiente na Vercel, todas opcionais):
 * - INFINITEPAY_HANDLE: InfiniteTag da conta que recebe (padrão: use-lighthouse)
 * - INFINITEPAY_API_KEY: chave "inchk_..." do Checkout Integrado. Sem ela a
 *   cobrança é criada só com a InfiniteTag; com ela, habilita opções extras.
 *
 * Os preços ficam aqui no servidor — o navegador só escolhe o plano.
 */

const API_URL = "https://api.checkout.infinitepay.io/links";
const HANDLE = process.env.INFINITEPAY_HANDLE || "use-lighthouse";
const API_KEY = process.env.INFINITEPAY_API_KEY || "";

const PLANS = {
  mensal: { price: 1000, description: "Devocional Jesus, Senhor de Tudo — Acesso Mensal" },
  anual: { price: 3999, description: "Devocional Jesus, Senhor de Tudo — Acesso Anual" },
} as const;

type Plano = keyof typeof PLANS;

function isPlano(v: unknown): v is Plano {
  return typeof v === "string" && Object.hasOwn(PLANS, v);
}

async function createLink(body: Record<string, unknown>) {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (API_KEY) headers["X-Api-Key"] = API_KEY;
  else body.handle = HANDLE;

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(15000),
  });
  const text = await res.text();
  let data: Record<string, unknown> = {};
  try {
    data = JSON.parse(text);
  } catch {
    /* resposta não-JSON */
  }
  const url = data.url ?? data.checkout_url ?? data.checkoutUrl;
  if (!res.ok || typeof url !== "string") {
    throw new Error(`InfinitePay ${res.status}: ${text.slice(0, 300)}`);
  }
  return url;
}

export async function POST(request: NextRequest) {
  let input: Record<string, unknown>;
  try {
    input = await request.json();
  } catch {
    return Response.json({ error: "JSON inválido" }, { status: 400 });
  }

  const plano = input.plano;
  if (!isPlano(plano)) {
    return Response.json({ error: "Plano inválido" }, { status: 400 });
  }
  // Campo-armadilha anti-spam do formulário.
  if (typeof input.website === "string" && input.website) {
    return Response.json({ error: "Requisição inválida" }, { status: 400 });
  }

  const nome = typeof input.nome === "string" ? input.nome.trim().slice(0, 120) : "";
  const email = typeof input.email === "string" ? input.email.trim().slice(0, 160) : "";
  const whats = typeof input.whatsapp === "string" ? input.whatsapp.replace(/\D/g, "").slice(0, 11) : "";

  const plan = PLANS[plano];
  const base = {
    order_nsu: `devocional-${plano}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    redirect_url: new URL("/devocional/obrigado", request.nextUrl.origin).toString(),
    items: [{ quantity: 1, price: plan.price, description: plan.description }],
  };

  const customer: Record<string, string> = {};
  if (nome) customer.name = nome;
  if (email) customer.email = email;
  if (whats.length >= 10) customer.phone_number = `+55${whats}`;

  try {
    // Tenta com os dados do comprador (já aparecem preenchidos no checkout);
    // se a InfinitePay recusar algum dado, tenta de novo sem eles.
    let url: string;
    try {
      url = await createLink(Object.keys(customer).length ? { ...base, customer } : { ...base });
    } catch (err) {
      if (!Object.keys(customer).length) throw err;
      console.warn("[devocional] checkout com dados do cliente falhou, tentando sem:", err);
      url = await createLink({ ...base });
    }
    console.info(`[devocional] link criado plano=${plano} order=${base.order_nsu}`);
    return Response.json({ status: "aguardando_pagamento", checkoutUrl: url });
  } catch (err) {
    console.error("[devocional] falha ao criar link na InfinitePay:", err);
    return Response.json({ error: "Falha ao criar pagamento" }, { status: 502 });
  }
}
