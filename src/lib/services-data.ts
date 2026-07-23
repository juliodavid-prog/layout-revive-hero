import s8 from "@/assets/site/s8.jpg";
import s9 from "@/assets/site/s9.jpg";
import s10 from "@/assets/site/s10.jpg";
import hidrojateamento from "@/assets/site/hidrojateamento.png.asset.json";
import realDesentup from "@/assets/site/real-desentup.jpg.asset.json";
import realInundacao from "@/assets/site/real-inundacao.jpg.asset.json";
import realLavagem from "@/assets/site/real-lavagem.jpg.asset.json";
import realGordura from "@/assets/site/real-gordura.jpg.asset.json";
import realFossa from "@/assets/site/real-fossa.jpg.asset.json";
import realTecnica from "@/assets/site/real-tecnica.jpg.asset.json";

export type Service = {
  slug: string;
  img: string;
  title: string; // card title
  desc: string; // card short desc
  heroTitle: string; // detail page title
  fullDesc: string;
  differentials: string[];
  applications: string;
};

export const services: Service[] = [
  {
    slug: "desentupimento-e-desobstrucao",
    img: realDesentup.url,
    title: "Desentupimento e Desobstrução",
    desc: "Entupiu? Não quebre pisos nem paredes antes de falar com a gente.",
    heroTitle:
      "Desentupimento e Desobstrução Técnica: Solução Rápida Sem Quebra-Quebra",
    fullDesc:
      "O entupimento de tubulações pode parar a rotina de uma residência, comércio ou indústria, gerando maus odores e prejuízos. Antes de quebrar pisos ou paredes, conte com nossa tecnologia de ponta para desobstruir qualquer encanamento de forma limpa e rápida.",
    differentials: [
      "Diagnóstico preciso sem danificar estrutura",
      "Técnica não destrutiva (sem obras)",
      "Atendimento emergencial",
      "Higienização completa contra novos entupimentos",
    ],
    applications:
      "Redes de esgoto, águas pluviais, ralos, pias, vasos sanitários e colunas prediais.",
  },
  {
    slug: "esgotamento-de-inundacoes",
    img: realInundacao.url,
    title: "Esgotamentos de inundações, lama e lagoas",
    desc: "Chuvas fortes, vazamentos ou acidentes podem causar inundações desastrosas, gerando lama e risco à saúde.",
    heroTitle:
      "Esgotamento e Drenagem de Alto Volume para Situações Críticas",
    fullDesc:
      "Acidentes operacionais, vazamentos ou chuvas intensas podem causar inundações graves. Oferecemos soluções rápidas de esgotamento e sucção para recuperar áreas afetadas.",
    differentials: [
      "Bombas de super vácuo de alta potência",
      "Remoção de lamas densas a longas distâncias",
      "Desassoreamento de lagoas",
      "Descarte ecológico em estações autorizadas",
    ],
    applications: "Indústrias, construtoras, condomínios e áreas públicas.",
  },
  {
    slug: "lavagem-de-galpoes-e-pisos",
    img: realLavagem.url,
    title: "Lavagem de galpões, pisos industriais e vias",
    desc: "Usamos caminhões com alto vácuo e hidrojateamento para lavar e sugar os resíduos ao mesmo tempo.",
    heroTitle: "Limpeza Pesada Integrada: Hidrojateamento + Auto Vácuo",
    fullDesc:
      "A sujeira incrustada, graxas e óleos em galpões e pisos industriais comprometem a segurança e a imagem da empresa. Combinamos pressão extrema e sucção simultânea para uma limpeza profunda.",
    differentials: [
      "Limpeza de grandes metragens em tempo recorde",
      "Remoção de óleos, graxas e tintas",
      "Sucção imediata da água suja sem alagamentos",
      "Secagem rápida",
    ],
    applications:
      "Galpões logísticos, pátios de manobra, pisos industriais, epóxi e estacionamentos.",
  },
  {
    slug: "limpeza-de-caixas-de-gordura",
    img: realGordura.url,
    title: "Limpeza de caixas de gordura industriais",
    desc: "A caixa de gordura protege seu encanamento, mas quando fica cheia, o pesadelo começa.",
    heroTitle:
      "Manutenção Preventiva e Limpeza Especializada para Caixas de Gordura",
    fullDesc:
      "A caixa de gordura evita o entupimento da rede pública. Quando cheia, causa mau cheiro, pragas e transbordamentos.",
    differentials: [
      "Prevenção contra pragas urbanas",
      "Adequação às normas sanitárias e ambientais",
      "Raspagem completa das paredes do reservatório",
      "Emissão de Certificado/MTR de descarte legal",
    ],
    applications:
      "Cozinhas industriais, restaurantes, shoppings, hotéis e indústrias alimentícias.",
  },
  {
    slug: "limpeza-de-fossa-septica",
    img: realFossa.url,
    title: "Limpeza de fossa séptica e sumidouro",
    desc: "Realizamos o esgotamento total com caminhões de super vácuo, transportando os resíduos com total segurança.",
    heroTitle:
      "Esgotamento Sanitário Especializado com Proteção Ambiental",
    fullDesc:
      "Fossas sépticas e sumidouros exigem manutenção periódica para evitar contaminação do solo e maus odores. Executamos o esgotamento total com segurança.",
    differentials: [
      "Sucção a vácuo sem contato manual",
      "Preservação da estrutura do reservatório",
      "Caminhões-tanque homologados",
      "Destinação 100% legalizada em ETE",
    ],
    applications: "Residências, condomínios, indústrias e áreas rurais.",
  },
  {
    slug: "limpeza-tecnica-industrial",
    img: realTecnica.url,
    title: "Limpeza técnica industrial",
    desc: "Limpeza de estruturas complexas, garantindo que sua produção volte a operar com eficiência máxima.",
    heroTitle:
      "Soluções Customizadas para Estruturas Industriais Complexas",
    fullDesc:
      "O acúmulo de resíduos em linhas de produção reduz a produtividade. Oferecemos limpeza técnica sob medida para manter sua indústria operando com eficiência máxima.",
    differentials: [
      "Equipe certificada em NR 33 (Espaço Confinado) e NR 35 (Altura)",
      "Hidrojateamento de alta pressão ajustável",
      "Foco na redução de downtime da fábrica",
      "Uso de EPIs específicos",
    ],
    applications:
      "Cabines de pintura, reatores, misturadores, esteiras e tubulações industriais.",
  },
  {
    slug: "transporte-de-residuos",
    img: s8,
    title: "Transporte de resíduos e efluentes",
    desc: "Nossos caminhões-tanque hermeticamente fechados isolam a carga, garantindo um transporte zero vazamento do seu endereço até o local de descarte final autorizado.",
    heroTitle:
      "Transporte Rodoviário de Resíduos com Foco em Zero Vazamento",
    fullDesc:
      "O transporte de efluentes exige licenças ambientais e equipamentos adequados para garantir a segurança no trajeto até a destinação final.",
    differentials: [
      "Tanques hermeticamente fechados e isolados",
      "Emissão de MTR (Manifesto de Transporte de Resíduos)",
      "Motoristas com treinamento MOPP",
      "Atendimento às classes I e II de resíduos",
    ],
    applications:
      "Efluentes industriais, sanitários e resíduos perigosos ou não perigosos.",
  },
  {
    slug: "limpeza-de-reservatorios",
    img: s9,
    title: "Limpeza e desinfecção de reservatórios e caixas d'água",
    desc: "Nossos técnicos certificados (NR 33 e NR 35) realizam a desinfecção profunda e segura das suas caixas d'água e cisternas.",
    heroTitle:
      "Garantia de Água Pura e Potável para Residências e Empresas",
    fullDesc:
      "Realizamos a sanificação e desinfecção profunda de caixas d'água e cisternas, garantindo o cumprimento das exigências sanitárias.",
    differentials: [
      "Equipe treinada em NR 33 e NR 35",
      "Produtos bactericidas aprovados pela ANVISA",
      "Não altera sabor ou odor da água",
      "Emissão de laudo de potabilidade/higienização",
    ],
    applications: "Condomínios, indústrias, comércios, hospitais e escolas.",
  },
  {
    slug: "limpeza-de-tanques-industriais",
    img: s10,
    title: "Limpeza de tanques industriais",
    desc: "Entramos em espaços confinados (NR 33) equipados com todos os EPIs necessários e tecnologia de hidrojateamento para devolver seu tanque às condições originais.",
    heroTitle:
      "Higienização de Tanques em Espaços Confinados com Tecnologia de Ponta",
    fullDesc:
      "Limpeza e descontaminação técnica de tanques de combustíveis, químicos e produtos industriais para manutenção ou troca de insumo.",
    differentials: [
      "Execução rigorosa conforme NR 33 (Espaço Confinado)",
      "Monitoramento contínuo de gases com detectores",
      "Hidrojateamento de alta pressão para remoção de borras",
      "Tanques devolvidos prontos para inspeção",
    ],
    applications:
      "Tanques de combustível, insumos químicos, silos e reservatórios petroquímicos.",
  },
  {
    slug: "hidrojateamento",
    img: hidrojateamento,
    title: "Hidrojateamento de Alta e Ultra Pressão",
    desc: "Desobstrução, limpeza pesada e remoção de incrustações severas em tubulações e superfícies usando apenas o poder da água sob alta pressão.",
    heroTitle:
      "Hidrojateamento de Alta e Ultra Pressão: Potência e Precisão Sem Danificar Suas Estruturas",
    fullDesc:
      "O hidrojateamento é uma das técnicas mais eficientes e sustentáveis para desobstrução de redes e limpeza pesada de superfícies industriais e urbanas. Utilizando apenas água comprimida em altíssima pressão, o sistema remove incrustações severas, tintas, óleos e detritos sem a necessidade de produtos químicos agressivos ou métodos destrutivos. Nossos equipamentos trabalham com pressões ajustáveis para atender desde limpezas delicadas até as incrustações mais rígidas em tubulações de grande porte e superfícies metálicas ou de concreto.",
    differentials: [
      "Econômico e ecológico: utiliza apenas água, sem reagentes químicos poluentes",
      "Preservação de estruturas: limpa com máxima eficiência sem danificar tubulação ou piso",
      "Alta capacidade de desobstrução: remove raízes, gordura petrificada, cimento e calcificações",
      "Versatilidade operacional: bicos especiais que navegam por curvas e longas extensões de rede",
    ],
    applications:
      "Limpeza e desobstrução de redes de esgoto e águas pluviais; preparação de superfícies para pintura industrial e remoção de graxas/tintas; decapagem e limpeza interna de tubulações, caldeiras e permutadores; higienização de canaletas, caixas e galerias subterrâneas.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
