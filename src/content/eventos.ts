/**
 * Agenda da igreja — aparece na seção "Agenda" da página inicial.
 *
 * Dois tipos de evento:
 * - Recorrente (culto semanal etc.): preencha `recorrencia`, ex.: "Toda quarta".
 *   Fica sempre visível até ser removido daqui.
 * - Com data: preencha `data` (e `dataFim` se durar mais de um dia),
 *   no formato "AAAA-MM-DD". Some sozinho do site depois que a data passa.
 *
 * O cartaz vai em public/images/eventos/ (formato livre, retrato fica melhor).
 */
export type Evento = {
  titulo: string;
  subtitulo?: string;
  recorrencia?: string;
  data?: string;
  dataFim?: string;
  horario: string;
  local: string;
  cartaz: string;
  /** Proporção do cartaz (largura / altura), para não cortar a arte. */
  proporcao?: number;
};

export const eventos: Evento[] = [
  {
    titulo: "Culto da Trigo",
    subtitulo: "Cheios do Espírito Santo",
    recorrencia: "Toda quarta",
    horario: "19h30",
    local: "Igreja Colheita",
    cartaz: "/images/eventos/culto-da-trigo.jpg",
    proporcao: 698 / 1180,
  },
];
