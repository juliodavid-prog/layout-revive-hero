import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/site/logo.png";
import hero from "@/assets/site/hero.jpg";
import s1 from "@/assets/site/s1.jpg";
import s2 from "@/assets/site/s2.jpg";
import s3 from "@/assets/site/s3.jpg";
import s4 from "@/assets/site/s4.jpg";
import s5 from "@/assets/site/s5.jpg";
import s6 from "@/assets/site/s6.jpg";
import s7 from "@/assets/site/s7.jpg";
import s8 from "@/assets/site/s8.jpg";
import s9 from "@/assets/site/s9.jpg";
import s10 from "@/assets/site/s10.jpg";
import {
  Phone,
  MessageCircle,
  Shield,
  Wrench,
  Leaf,
  Award,
  Users,
  Clock,
  MapPin,
  Mail,
  ArrowRight,
  Send,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Moderna Serviços — Desentupimento e Saneamento em Salvador" },
      {
        name: "description",
        content:
          "Desde 1974, a parceira de confiança em Salvador para desentupimento, hidrojateamento, limpeza de fossa e gestão de resíduos.",
      },
      { property: "og:title", content: "A Moderna Serviços — Saneamento em Salvador" },
      {
        property: "og:description",
        content:
          "Soluções completas em saneamento, desentupimento e limpeza técnica para residências, condomínios e indústrias.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    img: s1,
    title: "Desentupimento e Desobstrução",
    desc: "Entupiu? Não quebre pisos nem paredes antes de falar com a gente.",
  },
  {
    img: s2,
    title: "Esgotamentos de inundações, lama e lagoas",
    desc: "Chuvas fortes, vazamentos ou acidentes podem causar inundações desastrosas, gerando lama e risco à saúde.",
  },
  {
    img: s3,
    title: "Hidrojateamento de alta performance",
    desc: "O hidrojateamento utiliza jatos de água em alta e ultra pressão para destruir crostas, gordura e detritos que bloqueiam o fluxo.",
  },
  {
    img: s4,
    title: "Lavagem de galpões, pisos industriais e vias",
    desc: "Usamos caminhões com alto vácuo e hidrojateamento para lavar e sugar os resíduos ao mesmo tempo.",
  },
  {
    img: s5,
    title: "Limpeza de caixas de gordura industriais",
    desc: "A caixa de gordura protege seu encanamento, mas quando fica cheia, o pesadelo começa.",
  },
  {
    img: s6,
    title: "Limpeza de fossa séptica e sumidouro",
    desc: "Realizamos o esgotamento total com caminhões de super vácuo, transportando os resíduos com total segurança.",
  },
  {
    img: s7,
    title: "Limpeza técnica industrial",
    desc: "Limpeza de estruturas complexas, garantindo que sua produção volte a operar com eficiência máxima.",
  },
  {
    img: s8,
    title: "Transporte de resíduos e efluentes",
    desc: "Nossos caminhões-tanque hermeticamente fechados isolam a carga, garantindo um transporte zero vazamento do seu endereço até o local de descarte final autorizado.",
  },
  {
    img: s9,
    title: "Limpeza e desinfecção de reservatórios e caixas d'água",
    desc: "Nossos técnicos certificados (NR 33 e NR 35) realizam a desinfecção profunda e segura das suas caixas d'água e cisternas.",
  },
  {
    img: s10,
    title: "Limpeza de tanques industriais",
    desc: "Entramos em espaços confinados (NR 33) equipados com todos os EPIs necessários e tecnologia de hidrojateamento para devolver seu tanque às condições originais.",
  },
];

const features = [
  {
    icon: Wrench,
    title: "Tecnologia sem quebrar paredes",
    desc: "Equipamentos modernos como hidrojateamento e super vácuo resolvem obstruções de forma limpa e inteligente.",
  },
  {
    icon: Leaf,
    title: "Responsabilidade ambiental",
    desc: "Transporte e descarte de resíduos seguindo rigorosamente a lei, protegendo sua empresa de multas.",
  },
  {
    icon: Award,
    title: "Assessoria completa",
    desc: "Orientamos nossos clientes sobre exigências de licenças ambientais, como parceiro estratégico.",
  },
  {
    icon: Users,
    title: "Treinamento de alto nível",
    desc: "Profissionais com NR 33 (espaços confinados) e NR 35 (trabalho em altura) para total segurança.",
  },
];

function Logo({ className = "h-12" }: { className?: string }) {
  return <img src={logo} alt="A Moderna Serviços" className={className} />;
}

function CtaButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href="#contato"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-green/30 transition-transform hover:scale-[1.02] ${className}`}
      style={{ background: "var(--gradient-cta)" }}
    >
      {children}
    </a>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
          <Logo className="h-14 w-auto" />
          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            <a href="#" className="text-primary">Home</a>
            <a href="#institucional" className="hover:text-primary">Quem Somos</a>
            <a href="#servicos" className="hover:text-primary">Serviços</a>
            <a href="#" className="hover:text-primary">Equipamentos</a>
            <a href="#" className="hover:text-primary">Blog</a>
            <a href="#contato" className="hover:text-primary">Contato</a>
          </nav>
          <div className="hidden items-center gap-4 text-sm font-medium md:flex">
            <span className="flex items-center gap-1.5 text-foreground/80">
              <Phone className="h-4 w-4 text-primary" /> (71) 3244-5000
            </span>
            <span className="hidden text-foreground/80 xl:inline">(71) 3244-5422</span>
            <a
              href="https://wa.me/5571999799782"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground hover:opacity-95"
            >
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur">
            <Shield className="h-4 w-4" /> Desde 1974 Trabalhando e Colaborando com o Meio Ambiente
          </div>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-tight text-white lg:text-6xl">
            Problemas com entupimento ou resíduos?
            <br />
            <span style={{ color: "var(--brand-lime)" }}>Resolva rápido.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 lg:text-lg">
            A Moderna Serviços é a parceira de confiança de residências, condomínios e indústrias
            em Salvador e região para serviços de saneamento, desentupimento e limpeza técnica.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Nossos Serviços</p>
          <h2 className="mt-3 text-4xl font-bold lg:text-5xl">
            Soluções completas em <span style={{ color: "var(--brand-lime)" }}>saneamento</span>
            <br /> e <span style={{ color: "var(--brand-lime)" }}>limpeza</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Atendemos residências, condomínios e indústrias com tecnologia de ponta e equipes
            certificadas.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <article
              key={svc.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={svc.img}
                  alt={svc.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-snug">{svc.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{svc.desc}</p>
                <a
                  href="#contato"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  Saber Mais <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton>Solicitar orçamento para seu serviço <ArrowRight className="h-4 w-4" /></CtaButton>
        </div>
      </section>

      {/* Institucional */}
      <section id="institucional" className="bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Institucional</p>
            <h2 className="mt-3 text-4xl font-bold lg:text-5xl">
              Mais de 5 décadas de <span style={{ color: "var(--brand-lime)" }}>excelência</span>
              <br /> em <span style={{ color: "var(--brand-lime)" }}>Salvador</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Desde 1974, unimos tecnologia de ponta e equipes altamente treinadas para resolver o
              seu problema de forma rápida, segura e com total respeito ao meio ambiente. Somos
              rigorosamente licenciados pelos órgãos competentes (Inema, Embasa, Ibama), garantindo
              que sua empresa ou condomínio fique livre de multas e dores de cabeça.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Inema", "Embasa", "Ibama"].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full bg-card px-4 py-1.5 text-sm font-medium text-foreground/80 shadow-sm"
                >
                  <Award className="h-3.5 w-3.5 text-primary" /> {b}
                </span>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              <strong style={{ color: "var(--brand-lime)" }}>Precisa de urgência?</strong> Temos
              atendimento 24 horas para emergências (mediante agendamento prévio), cobrindo a
              capital, interior e litoral baiano.
            </p>
            <div className="mt-8">
              <CtaButton>
                Solicitar orçamento sem compromisso agora <ArrowRight className="h-4 w-4" />
              </CtaButton>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Contato</p>
            <h2 className="mt-3 text-4xl font-bold lg:text-5xl">
              Fale com nossos
              <br /> <span style={{ color: "var(--brand-lime)" }}>especialistas</span>
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Chega de dores de cabeça com encanamentos entupidos ou incertezas sobre o descarte dos
              seus resíduos. Solicite agora um orçamento sem compromisso.
            </p>

            <div className="mt-8 space-y-5">
              <ContactRow icon={Phone} title="Telefone">
                (71) 3244-5000
                <br />
                (71) 3244-5422
                <br />
                WhatsApp: (71) 99979-9782
              </ContactRow>
              <ContactRow icon={Clock} title="Atendimento">
                24 horas com agendamento prévio
              </ContactRow>
              <ContactRow icon={MapPin} title="Área de atuação">
                Salvador — Capital, interior e Litoral baiano
              </ContactRow>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-border bg-card p-7 shadow-sm"
          >
            <h3 className="text-xl font-bold">Solicite seu orçamento rápido</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label="Nome completo" placeholder="Seu nome" />
              <Field label="WhatsApp / Telefone" placeholder="(71) 99999-9999" />
            </div>
            <div className="mt-5">
              <Field label="E-mail" type="email" placeholder="seu@email.com" />
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <SelectField label="Como nos conheceu?" options={["Google", "Indicação", "Redes sociais", "Outro"]} />
              <SelectField
                label="Serviço desejado"
                options={services.map((s) => s.title)}
              />
            </div>
            <div className="mt-5">
              <label className="block text-sm font-medium">
                Como podemos te ajudar? Conte sobre o problema.
              </label>
              <textarea
                rows={4}
                placeholder="Descreva brevemente sua necessidade..."
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold text-white shadow-lg shadow-primary/30 hover:opacity-95"
              style={{ background: "var(--gradient-cta)" }}
            >
              <Send className="h-4 w-4" /> Enviar minha solicitação agora
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-footer text-footer-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-end gap-3">
              <Logo className="h-16 w-auto" />
              <span className="pb-1 text-xs text-footer-foreground/70">Desde 1974</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-footer-foreground/80">
              Somos a escolha de confiança em Salvador e região para serviços de saneamento
              ambiental, desentupimento, hidrojateamento e gestão de resíduos.
            </p>
          </div>
          <div>
            <h4 className="text-base font-bold">Serviços</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-footer-foreground/80">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a href="#servicos" className="hover:text-white">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold">Conheça as empresas do grupo</h4>
            <div className="mt-4 space-y-4 text-sm text-footer-foreground/80">
              <div>
                <p className="font-semibold text-white">Sul Leste Remoção e Transporte de Resíduos</p>
                <p>São Paulo - SP | 11 2035-6699</p>
              </div>
              <div>
                <p className="font-semibold text-white">Limpa Fossa Moderna</p>
                <p>Aracajú - SE | 79 3259-8300</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-base font-bold">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm text-footer-foreground/80">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (71) 3244-5000</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (71) 3244-5422</li>
              <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp: (71) 99979-9782</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Salvador — BA</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> contato@amodernaservicos.com.br</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-footer-foreground/70 md:flex-row">
            <p>© 2026 A Moderna Serviços. Todos os direitos reservados.</p>
            <p>Atendimento 24h com agendamento prévio · Capital, Interior e Litoral</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp float */}
      <a
        href="https://wa.me/5571999799782"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/40 transition-transform hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium">{label}</span>
      <select
        defaultValue=""
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      >
        <option value="" disabled>
          Selecione
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
