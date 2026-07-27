import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollVideoHero from "@/components/ScrollVideoHero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import StickyPhoto from "@/components/StickyPhoto";
import MinistryMarquee from "@/components/MinistryMarquee";
import Counter from "@/components/Counter";
import PixCopyButton from "@/components/PixCopyButton";

const valores = [
  {
    title: "Cristo é o centro",
    text: "Tudo o que fazemos aponta para Jesus.",
  },
  {
    title: "A Bíblia é nosso fundamento",
    text: "Vivemos segundo a Palavra de Deus como autoridade para nossa fé e prática.",
  },
  {
    title: "Pessoas são nossa missão",
    text: "Cada pessoa possui um propósito e um valor inestimável diante de Deus.",
  },
  {
    title: "Comunhão",
    text: "Crescemos melhor quando caminhamos juntos.",
  },
  {
    title: "Excelência",
    text: "Servimos a Deus oferecendo sempre o nosso melhor.",
  },
  {
    title: "Amor ao próximo",
    text: "Demonstramos o Evangelho através de atitudes de cuidado, generosidade e compaixão.",
  },
  {
    title: "Discipulado",
    text: "Acreditamos no crescimento espiritual contínuo e na multiplicação de discípulos.",
  },
];

const areasVoluntariado = [
  "Recepção",
  "Louvor",
  "Infantil",
  "Comunicação",
  "Produção",
  "Intercessão",
  "Evangelismo",
  "Ações sociais",
  "Discipulado",
];

const tiposEventos = [
  "Natal de Amor",
  "Auto de Páscoa",
  "Conferência THE BRIDGE",
  "Retiro da Juventude",
  "Retiro de Casais",
  "Retiro de Homens (Montanha)",
  "Conferência de Mulheres (Ellas)",
  "Festa da Colheita",
  "Escola de Vida Ministerial",
  "Cursos de Formação",
  "Encontros de Células",
  "Campanhas de Oração e Jejum",
  "Batismos",
  "Santa Ceia",
  "Ações Sociais",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <ScrollVideoHero />

        <Section
          id="quem-somos"
          eyebrow="Quem somos"
          title="Uma igreja para viver Jesus todos os dias."
        >
          <div className="max-w-4xl space-y-5 text-lg text-[#1d1d1b]/70">
            <p>
              A Igreja Colheita nasceu com o propósito de anunciar o
              Evangelho de Jesus Cristo e formar uma comunidade onde
              pessoas encontram fé, pertencimento e propósito.
            </p>
            <p>
              Somos uma igreja que acredita no poder transformador da
              Palavra de Deus, na atuação do Espírito Santo e na
              importância de viver o Evangelho de forma prática, através
              do amor, da comunhão e do serviço ao próximo.
            </p>
            <p>
              Mais do que um lugar para participar de cultos, somos uma
              família espiritual que caminha junta, discipula pessoas e
              compartilha esperança em cada geração.
            </p>
            <p className="font-medium text-[#1d1d1b]">
              Aqui, cada vida importa.
              <br />
              Cada história pode ser transformada.
              <br />
              Cada pessoa é bem-vinda.
            </p>
          </div>
        </Section>

        <StickyPhoto
          src="/images/quem-somos/fachada.jpg"
          alt="Fachada da Igreja Colheita"
          imageWidth={1871}
          imageHeight={822}
        />

        <Section
          id="missao-visao-valores"
          eyebrow="Propósito"
          title="Missão, visão e valores"
        >
          <blockquote className="mb-14 max-w-3xl border-l-2 border-[#f8a800] pl-4 text-xl italic text-[#1d1d1b]/70">
            &ldquo;A terra se encherá do conhecimento da glória do Senhor,
            como as águas cobrem o mar.&rdquo;
            <footer className="mt-1 not-italic text-sm text-[#1d1d1b]/45">
              Habacuque 2:14
            </footer>
          </blockquote>

          <div className="mb-14 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
                Missão
              </h3>
              <p className="text-lg text-[#1d1d1b]/70">
                Ganhar todas as pessoas para Jesus.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
                Visão
              </h3>
              <p className="text-lg text-[#1d1d1b]/70">
                Formar uma igreja forte, não apenas uma igreja grande.
              </p>
            </div>
          </div>

          <h3 className="mb-6 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Valores
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v) => (
              <div key={v.title}>
                <h4 className="mb-1 font-medium">{v.title}</h4>
                <p className="text-sm text-[#1d1d1b]/60">{v.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="impacto"
          eyebrow="Nosso impacto"
          title="Transformação acontece quando vidas encontram Jesus."
          tone="inverted"
        >
          <div className="max-w-4xl space-y-5 text-lg text-[#ffffff]/75">
            <p>
              Ao longo da nossa caminhada temos visto famílias restauradas,
              pessoas encontrando esperança, jovens descobrindo propósito e
              comunidades sendo alcançadas pelo amor de Deus.
            </p>
            <p>
              Por meio dos cultos, células, discipulados, ministérios, ações
              sociais e evangelismo, buscamos fazer a diferença dentro e
              fora das paredes da igreja.
            </p>
            <p className="font-medium text-[#ffffff]">
              Nosso maior impacto não é medido em números, mas nas vidas
              transformadas pelo poder do Evangelho.
            </p>
          </div>

          {/* TODO: substituir pelos números reais da igreja — os valores
              abaixo são só placeholders de exemplo */}
          <div className="mt-14 grid gap-8 border-t border-[#ffffff]/15 pt-10 sm:grid-cols-3">
            <Counter value={500} suffix="+" label="Batismos" />
            <Counter value={9} label="Ministérios ativos" />
            <Counter value={15} label="Anos de história" />
          </div>
        </Section>

        <Section
          id="transparencia"
          eyebrow="Prestação de contas"
          title="Administramos cada recurso com responsabilidade e integridade."
          tone="accent"
          eyebrowColor="text-[#1d1d1b]"
        >
          <div className="max-w-4xl space-y-5 text-lg text-[#ffffff]/85">
            <p>
              Entendemos que toda contribuição representa um ato de
              confiança e adoração. Por isso, buscamos uma administração
              responsável, ética e comprometida com os princípios bíblicos.
            </p>
            <p>
              As ofertas e contribuições são direcionadas para a manutenção
              da igreja, desenvolvimento de ministérios, ações missionárias,
              projetos sociais e expansão do Reino de Deus.
            </p>
            <p>
              Nosso compromisso é honrar a confiança da igreja através de
              uma gestão séria e transparente.
            </p>
          </div>
        </Section>

        <StickyPhoto
          id="ong"
          src="/images/ong/associacao-crista-ceus-abertos.png"
          alt="Voluntários da Associação Cristã Céus Abertos atendendo pessoas em situação de rua"
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-[0.3em] text-[#f8a800] lg:mb-3">
            Ação social
          </p>
          <h2 className="mb-2 max-w-2xl text-xl font-medium tracking-tight text-white sm:text-2xl lg:mb-5 lg:text-5xl">
            Associação Cristã Céus Abertos
          </h2>
          <p className="max-w-xl text-sm text-white/85 lg:text-lg">
            Nossa ONG, braço social da Igreja Colheita, dedicada a levar
            dignidade, acolhimento e esperança a quem mais precisa.
          </p>
          <Link
            href="/ong"
            className="mt-3 inline-block rounded-full bg-[#ffffff] px-5 py-2 text-sm text-[#1d1d1b] transition-opacity hover:opacity-90 lg:mt-6 lg:px-6 lg:py-3"
          >
            Saiba mais
          </Link>
        </StickyPhoto>

        <Section
          id="doacoes"
          eyebrow="Ajude a transformar"
          title="Sua generosidade transforma vidas."
          tone="inverted"
        >
          <div className="max-w-4xl space-y-5 text-lg text-[#ffffff]/75">
            <p>
              Cada oferta representa uma oportunidade de levar esperança,
              fortalecer ministérios, apoiar projetos sociais e expandir a
              mensagem do Evangelho.
            </p>
            <p>
              Ao contribuir, você participa daquilo que Deus está
              realizando através da Igreja Colheita.
            </p>
            <p className="font-medium text-[#ffffff]">
              Toda semente plantada gera frutos que alcançam vidas.
            </p>
            <blockquote className="border-l-2 border-[#f8a800] pl-4 italic text-[#ffffff]/70">
              &ldquo;Cada um contribua segundo propôs no coração, não com
              tristeza ou por obrigação, porque Deus ama quem dá com
              alegria.&rdquo;
              <footer className="mt-1 not-italic text-sm text-[#ffffff]/45">
                2 Coríntios 9:7
              </footer>
            </blockquote>
          </div>
          <button className="mt-8 rounded-full bg-[#e5192c] px-6 py-3 text-sm text-[#ffffff] transition-opacity hover:opacity-90">
            Quero Contribuir
          </button>

          <PixCopyButton pixKey="42.118.366/0001-00" />
        </Section>

        <StickyPhoto
          src="/images/doacoes/mercado.jpg"
          alt="Voluntários organizando doações de alimentos no Mercado Solidário da Igreja Colheita"
          imageWidth={1871}
          imageHeight={822}
        />

        <Section
          id="voluntariado"
          eyebrow="Participe"
          title="Deus nos chamou para servir."
        >
          <div className="max-w-4xl space-y-5 text-lg text-[#1d1d1b]/70">
            <p>
              Acreditamos que cada pessoa recebeu dons e talentos para fazer
              diferença na vida de outras pessoas.
            </p>
            <p className="text-[#1d1d1b]">Existem diversas áreas onde você pode servir:</p>
          </div>
          <ul className="mt-6 flex flex-wrap gap-3">
            {areasVoluntariado.map((area) => (
              <li
                key={area}
                className="rounded-full border border-[#1d1d1b]/15 px-4 py-2 text-sm text-[#1d1d1b]/70"
              >
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-[#1d1d1b]/70">
            Servir é uma oportunidade de crescer espiritualmente e fazer
            parte daquilo que Deus está construindo.
          </p>
          <button className="mt-6 rounded-full bg-[#e5192c] px-6 py-3 text-sm text-[#ffffff] transition-opacity hover:opacity-90">
            Quero Servir
          </button>
        </Section>

        <Section
          id="eventos"
          eyebrow="Agenda"
          title="Nossa igreja vive em movimento."
        >
          <p className="mb-6 max-w-4xl text-lg text-[#1d1d1b]/70">
            Durante todo o ano promovemos encontros que fortalecem a fé e
            aproximam pessoas.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tiposEventos.map((evento) => (
              <li
                key={evento}
                className="border-l-2 border-[#1d1d1b]/20 pl-4 text-[#1d1d1b]/70"
              >
                {evento}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-[#1d1d1b]/70">
            Confira nossa agenda e participe conosco.
          </p>
          <button className="mt-6 rounded-full bg-[#e5192c] px-6 py-3 text-sm text-[#ffffff] transition-opacity hover:opacity-90">
            Ver Agenda
          </button>

          {/* TODO: substituir pelo link real do Google Agenda. Como pegar:
              Google Agenda (no navegador) → engrenagem → Configurações →
              clica na sua agenda na lista à esquerda → "Integrar agenda" →
              copia a URL do campo "Link de incorporação" (começa com
              https://calendar.google.com/calendar/embed?src=...) e cola
              no `src` do iframe abaixo. */}
          <div className="mt-10 flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-[#1d1d1b]/20 bg-[#1d1d1b]/[0.02]">
            <p className="max-w-sm px-6 text-center text-sm text-[#1d1d1b]/40">
              Calendário do Google Agenda entra aqui — me manda o link de
              incorporação da sua agenda que eu configuro.
            </p>
          </div>
        </Section>

        <MinistryMarquee />

        <Section
          id="contato"
          eyebrow="Fale com a gente"
          title="Será um prazer receber você."
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="max-w-lg space-y-4 text-lg text-[#1d1d1b]/70">
                <p>
                  Estamos de portas abertas para acolher sua família.
                </p>
                <p>
                  Se você deseja tirar dúvidas, pedir oração, conhecer
                  nossos ministérios ou agendar uma visita, fale conosco.
                  Nossa equipe terá alegria em atender você.
                </p>
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                {[
                  ["Telefone", "A definir"],
                  ["WhatsApp", "A definir"],
                  ["E-mail", "A definir"],
                  ["Endereço", "Ministério Colheita Internacional"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="uppercase tracking-[0.15em] text-[#1d1d1b]/45">
                      {label}
                    </dt>
                    <dd className="mt-1 text-[#1d1d1b]/80">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 border-t border-[#1d1d1b]/10 pt-8">
                <h3 className="mb-3 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
                  Horários de culto
                </h3>
                <ul className="space-y-1 text-[#1d1d1b]/80">
                  <li>Domingo — 10h e 18h</li>
                  <li>Quarta-feira — 19h30</li>
                </ul>
                <p className="mt-3 text-sm text-[#1d1d1b]/60">
                  Também transmitimos cultos online pelo YouTube e Instagram.
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/cF3UXQkKyhtAMquR6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm underline underline-offset-4 text-[#1d1d1b]/70 hover:text-[#1d1d1b]"
              >
                Ver no Google Maps →
              </a>

              <button className="mt-8 block rounded-full bg-[#e5192c] px-6 py-3 text-sm text-[#ffffff] transition-opacity hover:opacity-90">
                Planeje sua Visita
              </button>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#1d1d1b]/10">
              <iframe
                title="Localização — Ministério Colheita Internacional"
                src="https://www.google.com/maps?q=-22.4224735,-42.9611588&z=16&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
