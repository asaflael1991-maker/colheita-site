import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import StickyPhoto from "@/components/StickyPhoto";
import VerseReveal from "@/components/VerseReveal";

export const metadata: Metadata = {
  title: "Associação Cristã Céus Abertos — Colheita",
};

const missao = [
  "Fornecer alimentos, roupas, produtos de higiene e outros recursos essenciais às pessoas necessitadas",
  "Promover assistência social e acolhimento às famílias da comunidade",
  "Desenvolver atividades educacionais e cursos profissionalizantes",
  "Oferecer oportunidades culturais, esportivas e artísticas para crianças e jovens",
  "Prestar serviços de aconselhamento e orientação",
  "Apoiar o desenvolvimento emocional, social e espiritual dos beneficiados",
  "Promover o Evangelho de Jesus Cristo por meio do evangelismo, do serviço ao próximo e do apoio a igrejas e ministérios cristãos",
  "Incentivar a autonomia, a dignidade e a transformação da realidade social das famílias atendidas",
];

const visaoFutura = [
  "Atendimento médico",
  "Atendimento odontológico",
  "Acompanhamento psicológico",
  "Aulas de alfabetização para adultos",
  "Reforço escolar para crianças e adolescentes",
  "Atendimento e orientação jurídica",
  "Cursos profissionalizantes",
  "Oficinas de geração de renda",
  "Atendimento e acompanhamento de famílias",
  "Bazar solidário",
  "Atividades culturais",
  "Projetos esportivos",
  "Serviços de aconselhamento",
  "Ações de prevenção à violência e ao uso de drogas",
  "Programas de capacitação e inclusão social",
];

const valores = [
  {
    title: "Amor ao próximo",
    text: "Acreditamos que toda pessoa deve ser tratada com amor, atenção, cuidado e respeito, independentemente de sua condição social, origem, história ou crença.",
  },
  {
    title: "Dignidade humana",
    text: "Reconhecemos o valor de cada ser humano e trabalhamos para que todas as pessoas atendidas tenham seus direitos, sua história e sua dignidade respeitados.",
  },
  {
    title: "Solidariedade",
    text: "Incentivamos a cooperação, o voluntariado, a generosidade e o envolvimento da sociedade na construção de uma comunidade mais justa e acolhedora.",
  },
  {
    title: "Integridade",
    text: "Agimos com honestidade, responsabilidade, coerência e transparência na administração dos recursos, na realização dos projetos e no relacionamento com beneficiários, voluntários, doadores e parceiros.",
  },
  {
    title: "Transparência",
    text: "Buscamos prestar contas de nossas atividades e dos recursos recebidos, garantindo clareza e responsabilidade na gestão institucional.",
  },
  {
    title: "Respeito",
    text: "Valorizamos as diferenças e promovemos um ambiente de acolhimento, sem discriminação, preconceito, constrangimento ou tratamento desigual.",
  },
  {
    title: "Justiça social",
    text: "Trabalhamos para reduzir desigualdades, defender os vulneráveis e ampliar o acesso a oportunidades, direitos e serviços essenciais.",
  },
  {
    title: "Responsabilidade social",
    text: "Desenvolvemos ações planejadas e comprometidas com as necessidades reais da comunidade, buscando resultados que gerem transformação e impacto positivo.",
  },
  {
    title: "Ética",
    text: "Todas as atividades da associação devem ser conduzidas de acordo com princípios éticos, respeitando a legislação, a privacidade, a segurança e os direitos das pessoas atendidas.",
  },
  {
    title: "Compromisso",
    text: "Assumimos com seriedade a responsabilidade de servir às famílias e à comunidade, buscando sempre melhorar a qualidade de nossas ações e projetos.",
  },
  {
    title: "Compaixão",
    text: "Não buscamos apenas identificar necessidades, mas nos aproximar das pessoas, compreender suas dores e oferecer apoio de maneira humana e sensível.",
  },
  {
    title: "Valorização da família",
    text: "Entendemos que a família exerce um papel fundamental na formação e na proteção das pessoas. Por isso, buscamos fortalecer os vínculos familiares e comunitários.",
  },
  {
    title: "Proteção integral de crianças e adolescentes",
    text: "Priorizamos a segurança, o bem-estar, a educação e o desenvolvimento saudável de crianças e adolescentes, mantendo uma postura firme contra qualquer forma de violência, exploração, negligência ou abuso.",
  },
  {
    title: "Fé cristã",
    text: "Nossas ações são inspiradas nos ensinamentos de Jesus Cristo, especialmente no amor, na misericórdia, na justiça, no serviço e no cuidado com os necessitados.",
  },
  {
    title: "Cooperação",
    text: "Acreditamos que a transformação social acontece por meio da união entre voluntários, famílias, igrejas, empresas, organizações sociais, instituições públicas e toda a comunidade.",
  },
];

const causaAtendida = [
  "Pobreza",
  "Desemprego",
  "Insegurança alimentar",
  "Falta de acesso à educação",
  "Ausência de qualificação profissional",
  "Dificuldade de acesso à saúde",
  "Desestruturação familiar",
  "Violência",
  "Evasão escolar",
  "Exposição de crianças e jovens às ruas",
  "Falta de acesso ao esporte, à cultura e ao lazer",
  "Isolamento social",
  "Ausência de orientação e aconselhamento",
];

const publicoBeneficiado = [
  "Famílias em situação de vulnerabilidade social",
  "Famílias em situação de insegurança alimentar",
  "Crianças da comunidade",
  "Adolescentes e jovens",
  "Pessoas em situação de rua",
  "Mães solo",
  "Órfãos",
  "Viúvas",
  "Idosos",
  "Pessoas desempregadas",
  "Pessoas com baixa renda",
  "Pessoas que necessitam de aconselhamento e apoio",
  "Famílias com dificuldade de acesso a serviços essenciais",
];

const areasDeAtuacao = [
  {
    title: "Segurança alimentar",
    text: "Distribuição de marmitas, sopas, cestas básicas e outros alimentos para famílias e pessoas em situação de vulnerabilidade.",
  },
  {
    title: "Assistência social",
    text: "Acolhimento, orientação, acompanhamento de famílias e encaminhamento para serviços públicos e parceiros.",
  },
  {
    title: "Educação",
    text: "Aulas de alfabetização para adultos, reforço escolar, oficinas educativas e atividades de incentivo à leitura.",
  },
  {
    title: "Qualificação profissional",
    text: "Cursos profissionalizantes, capacitações e oficinas que ajudem jovens e adultos a ingressarem ou retornarem ao mercado de trabalho.",
  },
  {
    title: "Cultura",
    text: "Aulas de balé, música, dança, artes e outras atividades culturais voltadas principalmente para crianças e adolescentes.",
  },
  {
    title: "Esporte",
    text: "Aulas de artes marciais, atividades físicas e projetos esportivos como instrumentos de disciplina, saúde, integração e proteção social.",
  },
  {
    title: "Saúde",
    text: "Realização futura de atendimentos médicos, odontológicos e ações preventivas de saúde, por meio de profissionais voluntários e instituições parceiras.",
  },
  {
    title: "Orientação jurídica",
    text: "Realização futura de atendimentos e orientações jurídicas gratuitas ou acessíveis para pessoas sem condições financeiras de contratar assistência particular.",
  },
  {
    title: "Apoio emocional e aconselhamento",
    text: "Escuta, acolhimento, aconselhamento e direcionamento para pessoas e famílias enfrentando conflitos, perdas, crises ou dificuldades emocionais.",
  },
  {
    title: "Evangelismo e apoio cristão",
    text: "Promoção do Evangelho de Jesus Cristo por meio de ações evangelísticas, projetos sociais e apoio a igrejas e ministérios cristãos.",
  },
  {
    title: "Geração de renda",
    text: "Realização de bazares solidários, oficinas, cursos e projetos que contribuam para a autonomia financeira das famílias atendidas.",
  },
];

const objetivosEspecificos = [
  "Combater a fome e a insegurança alimentar",
  "Apoiar famílias em situação de pobreza e vulnerabilidade",
  "Proporcionar atividades educativas, culturais e esportivas",
  "Ampliar as oportunidades de qualificação profissional",
  "Contribuir para a permanência de crianças e adolescentes na escola",
  "Prevenir situações de violência, negligência e exclusão social",
  "Fortalecer os vínculos familiares e comunitários",
  "Oferecer acolhimento, aconselhamento e apoio emocional",
  "Incentivar o voluntariado e a responsabilidade social",
  "Estabelecer parcerias com empresas, igrejas, órgãos públicos e outras organizações",
  "Proporcionar oportunidades para que pessoas e famílias conquistem autonomia",
  "Promover valores cristãos por meio do amor, do serviço e do cuidado com o próximo",
];

const impactoEsperado = [
  "Redução da insegurança alimentar",
  "Melhoria da qualidade de vida das famílias",
  "Fortalecimento dos vínculos familiares",
  "Aumento do acesso à educação e à cultura",
  "Proteção de crianças e adolescentes",
  "Diminuição da exposição de jovens às ruas e à violência",
  "Desenvolvimento de habilidades pessoais e profissionais",
  "Fortalecimento da autoestima e da autonomia",
  "Geração de oportunidades de emprego e renda",
  "Promoção da cidadania",
  "Crescimento do voluntariado",
  "Fortalecimento da solidariedade comunitária",
  "Transformação espiritual e social por meio do Evangelho",
];

const galeria = [
  {
    src: "/images/galeria/mercado-solidario/foto-01.jpg",
    alt: "Voluntários organizando doações no Mercado Solidário",
  },
  {
    src: "/images/galeria/mercado-solidario/foto-02.jpg",
    alt: "Atendimento a famílias no Mercado Solidário",
  },
];

/** Lista simples em formato de "pill" — pra listas curtas de palavras
 *  ou frases (mesmo estilo já usado em "Áreas de voluntariado" na
 *  home). */
function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-[#1d1d1b]/15 px-4 py-2 text-sm text-[#1d1d1b]/70"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Lista com marcador simples, em duas colunas — pra listas de frases
 *  mais longas (objetivos, impacto esperado etc). */
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-3 text-[#1d1d1b]/70 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#e5192c]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function OngPage() {
  return (
    <>
      <Navbar />

      <StickyPhoto
        src="/images/ong/associacao-crista-ceus-abertos.png"
        alt="Voluntários da Associação Cristã Céus Abertos atendendo pessoas em situação de rua"
      >
        <VerseReveal
          text="2 Coríntios 9:7"
          className="text-4xl text-white sm:text-6xl lg:text-8xl"
        />
      </StickyPhoto>

      <main className="mx-auto max-w-[900px] px-6 py-20 lg:px-12 lg:py-28">
        {/* 1. Quem somos */}
        <FadeInView>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#1d1d1b]/50">
            Quem somos
          </p>
          <h1 className="mb-6 text-3xl font-medium tracking-tight lg:text-5xl">
            Associação Cristã Céus Abertos
          </h1>
        </FadeInView>

        <FadeInView className="space-y-5 text-lg leading-relaxed text-[#1d1d1b]/70">
          <p>
            A Associação Cristã Céus Abertos é uma organização social
            cristã, sem fins lucrativos, sediada na cidade de Fortaleza,
            Ceará. A instituição atua no atendimento de famílias em
            situação de vulnerabilidade social, crianças, adolescentes,
            jovens e pessoas necessitadas da comunidade.
          </p>
          <p>
            A Associação nasceu com o propósito de cuidar de pessoas de
            maneira integral, atendendo necessidades sociais,
            educacionais, emocionais, culturais e espirituais. Por meio de
            ações práticas, buscamos levar dignidade, esperança, proteção
            e novas oportunidades para aqueles que mais precisam.
          </p>
          <p className="text-base text-[#1d1d1b]/55">
            Avenida Major Assis, nº 1690, bairro Jardim Guanabara,
            Fortaleza – Ceará
            <br />
            CNPJ 42.118.366/0001-00
          </p>
        </FadeInView>

        {/* 2. História do projeto */}
        <FadeInView className="mt-14 space-y-5 border-t border-[#1d1d1b]/10 pt-10 text-lg leading-relaxed text-[#1d1d1b]/70">
          <h2 className="mb-2 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            História do projeto
          </h2>
          <p>
            A história da Associação Cristã Céus Abertos começou há mais
            de dez anos, antes mesmo de sua formalização jurídica. Naquele
            período, um grupo de voluntários já desenvolvia, de maneira
            independente e não oficial, diversas ações de assistência à
            comunidade — entre elas o projeto Mão Amiga, criado para
            atender pessoas em situação de rua.
          </p>
          <p>
            Durante as madrugadas, especialmente nos períodos mais frios,
            os voluntários percorriam as ruas distribuindo marmitas,
            sopas, roupas, cobertores e produtos de higiene pessoal. Mais
            do que entregar alimentos, o projeto oferecia acolhimento,
            atenção, cuidado e uma palavra de esperança às pessoas que
            viviam em condições extremamente vulneráveis.
          </p>
          <p>
            Com o passar do tempo, o trabalho foi crescendo: a equipe
            passou também a distribuir cestas básicas para famílias
            carentes da comunidade, ampliando o atendimento para crianças,
            jovens, idosos, mães solo, desempregados e famílias em
            situação de insegurança alimentar.
          </p>
          <p>
            Em 2021 aconteceu a formalização da instituição, com a
            abertura do CNPJ, oficializando o nascimento da Associação
            Cristã Céus Abertos — um passo importante para o
            fortalecimento do trabalho social, permitindo desenvolver
            parcerias, receber doações, apresentar projetos e ampliar sua
            capacidade de atendimento.
          </p>
          <p className="font-medium text-[#1d1d1b]">
            A Associação Cristã Céus Abertos é, portanto, o resultado de
            mais de uma década de serviço voluntário, fé, solidariedade,
            compromisso social e amor ao próximo.
          </p>
        </FadeInView>

        {/* 3. Missão */}
        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Nossa missão
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-[#1d1d1b]/70">
            Promover o desenvolvimento humano e social por meio de ações
            que contribuam para prevenir e aliviar a pobreza, proteger
            pessoas em situação de vulnerabilidade e fortalecer os
            vínculos familiares e comunitários.
          </p>
          <BulletList items={missao} />
          <p className="mt-6 text-lg leading-relaxed text-[#1d1d1b]/70">
            Nossa missão não se limita a amenizar necessidades imediatas.
            Buscamos criar caminhos para que as pessoas desenvolvam suas
            habilidades, recuperem sua dignidade e tenham oportunidades de
            construir uma nova história.
          </p>
        </FadeInView>

        {/* 4. Visão */}
        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Nossa visão
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-[#1d1d1b]/70">
            Ser uma instituição reconhecida pelo compromisso com a
            transformação social, pelo cuidado com as pessoas e pela
            promoção de oportunidades que contribuam para o fortalecimento
            das famílias e da comunidade. Temos como visão crescer de
            maneira organizada, responsável e sustentável, ampliando a
            variedade de serviços oferecidos. Sonhamos em estruturar,
            futuramente:
          </p>
          <TagList items={visaoFutura} />
        </FadeInView>

        {/* 5. Valores */}
        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-2 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Nossos valores
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-[#1d1d1b]/70">
            A atuação da Associação Cristã Céus Abertos está fundamentada
            em princípios cristãos, sociais e éticos que orientam todas as
            nossas ações.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v) => (
              <div key={v.title}>
                <h3 className="mb-1 font-medium">{v.title}</h3>
                <p className="text-sm text-[#1d1d1b]/60">{v.text}</p>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* 6. Causa atendida */}
        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Causa atendida
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-[#1d1d1b]/70">
            A principal causa atendida pela Associação Cristã Céus Abertos
            é a vulnerabilidade social vivenciada por famílias, crianças,
            adolescentes e jovens da comunidade, que pode se manifestar
            por meio de diferentes situações:
          </p>
          <TagList items={causaAtendida} />
          <p className="mt-6 text-lg leading-relaxed text-[#1d1d1b]/70">
            A associação atua tanto no atendimento das necessidades
            emergenciais quanto na prevenção de problemas sociais: a
            entrega de alimentos, roupas e produtos de higiene ajuda a
            enfrentar necessidades imediatas, enquanto as atividades
            educacionais, culturais, esportivas e profissionalizantes
            contribuem para a prevenção da violência, da evasão escolar,
            da criminalidade e do uso de drogas.
          </p>
        </FadeInView>

        {/* 7. Público beneficiado */}
        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Público beneficiado
          </h2>
          <TagList items={publicoBeneficiado} />
          <p className="mt-6 text-lg leading-relaxed text-[#1d1d1b]/70">
            As crianças e os jovens recebem atenção especial: aulas de
            balé, artes marciais e demais atividades pretendidas pela
            associação são instrumentos de inclusão, disciplina,
            desenvolvimento, convivência comunitária e proteção,
            afastando-os da exposição às ruas, à violência e às drogas.
          </p>
        </FadeInView>

        {/* 8. Áreas de atuação */}
        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-6 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Áreas de atuação
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {areasDeAtuacao.map((a) => (
              <div key={a.title}>
                <h3 className="mb-1 font-medium">{a.title}</h3>
                <p className="text-sm text-[#1d1d1b]/60">{a.text}</p>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* 9 e 10. Objetivo geral e específicos */}
        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Objetivo geral
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-[#1d1d1b]/70">
            Promover assistência, proteção, desenvolvimento e inclusão
            social de pessoas em situação de vulnerabilidade, contribuindo
            para a melhoria de sua qualidade de vida e para o
            fortalecimento da comunidade.
          </p>

          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Objetivos específicos
          </h2>
          <BulletList items={objetivosEspecificos} />
        </FadeInView>

        {/* 11. Impacto social esperado */}
        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Impacto social esperado
          </h2>
          <BulletList items={impactoEsperado} />
        </FadeInView>

        {/* 12. Compromisso institucional */}
        <FadeInView className="mt-14 space-y-5 border-t border-[#1d1d1b]/10 pt-10 text-lg leading-relaxed text-[#1d1d1b]/70">
          <h2 className="mb-2 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Compromisso institucional
          </h2>
          <p>
            A Associação Cristã Céus Abertos reafirma seu compromisso de
            desenvolver projetos com responsabilidade, ética, transparência
            e respeito às pessoas. Todo atendimento preserva a dignidade e
            a privacidade dos beneficiados, evitando qualquer forma de
            exposição constrangedora ou utilização indevida de imagens e
            informações pessoais.
          </p>
          <p>
            A associação também se compromete a administrar de forma
            responsável os recursos recebidos e a utilizá-los
            exclusivamente para o desenvolvimento de suas finalidades e
            projetos sociais. Mais do que distribuir recursos, nosso
            propósito é construir relacionamentos, fortalecer famílias e
            oferecer caminhos para que cada pessoa atendida possa ter
            acesso a novas oportunidades.
          </p>
        </FadeInView>

        {/* 13. Declaração institucional */}
        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Declaração institucional
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-[#1d1d1b]/70">
            <p>
              A Associação Cristã Céus Abertos nasceu do desejo de servir
              e do compromisso de transformar a fé em atitudes concretas.
              Cremos que pequenas ações podem produzir grandes mudanças.
              Uma refeição entregue, uma criança acolhida, uma família
              assistida, um jovem capacitado ou uma pessoa aconselhada
              podem representar o começo de uma nova história.
            </p>
          </div>
          <blockquote className="mt-8 border-l-2 border-[#f8a800] pl-4 text-xl italic text-[#1d1d1b]/70">
            &ldquo;Nossa missão é manter os céus abertos sobre a
            comunidade por meio do amor, do cuidado, da solidariedade e do
            serviço.&rdquo;
          </blockquote>
          <p className="mt-6 text-lg leading-relaxed text-[#1d1d1b]/70">
            Seguiremos trabalhando para que mais pessoas sejam alcançadas,
            protegidas, fortalecidas e preparadas para viver com
            dignidade, propósito e esperança.
          </p>
        </FadeInView>

        {/* Galeria */}
        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <h2 className="mb-6 text-sm uppercase tracking-[0.2em] text-[#1d1d1b]/50">
            Galeria
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {galeria.map((g) => (
              <div
                key={g.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </FadeInView>

        {/* CTA */}
        <FadeInView className="mt-14 border-t border-[#1d1d1b]/10 pt-10">
          <blockquote className="mb-8 border-l-2 border-[#f8a800] pl-4 text-xl italic text-[#1d1d1b]/70">
            &ldquo;Cada um contribua segundo propôs no coração, não com
            tristeza ou por obrigação, porque Deus ama quem dá com
            alegria.&rdquo;
            <footer className="mt-1 not-italic text-sm text-[#1d1d1b]/45">
              2 Coríntios 9:7
            </footer>
          </blockquote>
          <Link
            href="/#doacoes"
            className="inline-block rounded-full bg-[#e5192c] px-6 py-3 text-sm text-[#ffffff] transition-opacity hover:opacity-90"
          >
            Quero contribuir
          </Link>
        </FadeInView>
      </main>
      <Footer />
    </>
  );
}
