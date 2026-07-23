import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import logo from "@/assets/site/logo.png";
import { getServiceBySlug, services } from "@/lib/services-data";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Target,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Serviço não encontrado — A Moderna Serviços" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: `${service.title} — A Moderna Serviços` },
        { name: "description", content: service.fullDesc.slice(0, 160) },
        { property: "og:title", content: service.heroTitle },
        { property: "og:description", content: service.fullDesc.slice(0, 160) },
        { property: "og:type", content: "article" },
        { property: "og:image", content: service.img },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: service.img },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetail,
});

function ServiceNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div>
        <h1 className="text-3xl font-bold">Serviço não encontrado</h1>
        <p className="mt-2 text-muted-foreground">
          O serviço que você procura não existe ou foi movido.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar ao início
        </Link>
      </div>
    </div>
  );
}

function ServiceDetail() {
  const { service } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Link to="/">
            <img src={logo} alt="A Moderna Serviços" className="h-16 w-auto" />
          </Link>
          <div className="hidden items-center gap-4 text-sm font-medium md:flex">
            <span className="flex items-center gap-1.5 text-foreground/80">
              <Phone className="h-4 w-4 text-primary" /> (71) 3244-5000
            </span>
            <a
              href="https://wa.me/5571999799782?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground hover:opacity-95"
            >
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <Link
            to="/"
            hash="servicos"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para Serviços
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-lime)]">
            Serviço
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-white lg:text-5xl">
            {service.heroTitle}
          </h1>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <p className="text-lg leading-relaxed text-foreground/90">
          {service.fullDesc}
        </p>

        <div className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Como Funciona
          </p>
          <h2 className="mt-3 text-3xl font-bold lg:text-4xl">
            Nossos <span style={{ color: "var(--brand-lime)" }}>diferenciais</span>
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.differentials.map((d: string) => (
              <li
                key={d}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <span className="text-sm font-medium leading-relaxed">{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-secondary/40 p-7">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Aplicações Comuns</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {service.applications}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-16 overflow-hidden rounded-3xl p-8 text-white lg:p-12"
          style={{ background: "var(--gradient-cta)" }}
        >
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <h3 className="text-2xl font-bold lg:text-3xl">
                Precisa deste serviço agora?
              </h3>
              <p className="mt-3 text-white/90">
                Fale com um de nossos especialistas e receba um orçamento sem
                compromisso.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/"
                hash="contato"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-primary shadow-lg transition-transform hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" /> Solicitar orçamento
              </Link>
              <a
                href="https://wa.me/5571999799782?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Outros serviços */}
        <div className="mt-20">
          <h3 className="text-xl font-bold">Outros serviços</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  to="/servicos/$slug"
                  params={{ slug: s.slug }}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <img
                    src={s.img}
                    alt=""
                    className="h-16 w-16 shrink-0 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold leading-snug">{s.title}</p>
                    <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-primary">
                      Ver serviço <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* WhatsApp float */}
      <a
        href="https://wa.me/5571999799782?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/30 transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
