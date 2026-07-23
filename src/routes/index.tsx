import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/site/logo.png";
import hero from "@/assets/site/hero.jpg";
import { services } from "@/lib/services-data";
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
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Logo className="h-20 w-auto" />
          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            <a href="#" className="text-primary">Home</a>
            <a href="#institucional" className="hover:text-primary">Quem Somos</a>
            <a href="#servicos" className="hover:text-primary">Serviços</a>
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur">
            <Shield className="h-4 w-4" /> Desde 1974 Trabalhando e Colaborando com o Meio Ambiente
          </div>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-tight text-white lg:text-6xl">
            Problemas com <span style={{ color: "var(--brand-lime)" }}>limpeza industrial?</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 lg:text-lg">
            A Moderna Serviços é a parceira de confiança que une agilidade, eficiência e
            compromisso socioambiental para oferecer as melhores soluções em saneamento,
            desentupimento e limpeza técnica para indústrias, condomínios e residências em
            Salvador e região.
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
                <Link
                  to="/servicos/$slug"
                  params={{ slug: svc.slug }}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  Saber Mais <ArrowRight className="h-4 w-4" />
                </Link>
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
        href="https://wa.me/5571999799782?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/30 transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>

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
