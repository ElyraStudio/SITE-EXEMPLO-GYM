import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Dumbbell, Zap, Flame, Instagram, MapPin, Check, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "IRON FORGE — Academia que entrega resultado real" },
      { name: "description", content: "Treino personalizado, equipamento de ponta e ambiente motivador. Agende sua aula experimental grátis na IRON FORGE." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Benefits />
      <Plans />
      <ContactCTA />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-xl tracking-wider">
          <Dumbbell className="text-primary" size={22} />
          IRON FORGE
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#benefits" className="hover:text-primary transition">Benefícios</a>
          <a href="#plans" className="hover:text-primary transition">Planos</a>
          <a href="#contact" className="hover:text-primary transition">Contato</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold text-sm hover:opacity-90 transition">
          Aula grátis
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <img
        src={heroImg}
        alt="Atleta treinando na academia IRON FORGE"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-primary uppercase mb-6">
            <span className="h-px w-8 bg-primary" /> Academia 24h
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6">
            Transforme<br />
            seu corpo. <span className="text-primary">Forje</span><br />
            sua força.
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-10">
            O treino que você merece, com a estrutura que o seu resultado exige. Sem desculpas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold tracking-wide uppercase text-sm shadow-[var(--shadow-glow-lg)] hover:shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5"
            >
              Agendar aula experimental grátis
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </a>
          </div>
          <div className="mt-12 flex gap-8 text-sm">
            <div><div className="font-display text-3xl text-primary">+2.000</div><div className="text-muted-foreground">Alunos ativos</div></div>
            <div><div className="font-display text-3xl text-primary">24/7</div><div className="text-muted-foreground">Acesso liberado</div></div>
            <div><div className="font-display text-3xl text-primary">15</div><div className="text-muted-foreground">Coaches</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: Dumbbell, title: "Treino Personalizado", desc: "Plano sob medida com avaliação física, periodização e acompanhamento semanal de coaches certificados." },
    { icon: Zap, title: "Equipamento de Ponta", desc: "Maquinário Hammer Strength, racks olímpicos e área funcional pensada para performance real." },
    { icon: Flame, title: "Ambiente Motivador", desc: "Energia, música e uma comunidade que empurra você além do limite — todos os dias." },
  ];
  return (
    <section id="benefits" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Por que IRON FORGE</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">Tudo que você precisa<br />para evoluir.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group relative bg-card border border-border p-8 rounded-lg hover:border-primary transition-all">
              <div className="inline-flex p-3 bg-primary/10 rounded-md mb-6 group-hover:bg-primary/20 transition">
                <it.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-2xl mb-3">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  const plans = [
    { name: "Mensal", price: "149", period: "/mês", features: ["Acesso ilimitado 24h", "Avaliação física inicial", "App de treino"], highlight: false },
    { name: "Trimestral", price: "119", period: "/mês", features: ["Tudo do mensal", "1 aula PT por mês", "Acompanhamento mensal", "Economia de R$ 90"], highlight: true },
    { name: "Anual", price: "89", period: "/mês", features: ["Tudo do trimestral", "3 aulas PT por mês", "Plano nutricional", "Economia de R$ 720"], highlight: false },
  ];
  return (
    <section id="plans" className="py-24 md:py-32 bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Planos</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">Escolha o seu ritmo.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-lg p-8 border transition-all ${
                p.highlight
                  ? "bg-primary text-primary-foreground border-primary shadow-[var(--shadow-glow-lg)] md:-translate-y-4"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background text-primary text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-primary">
                  Mais escolhido
                </span>
              )}
              <h3 className="font-display text-2xl mb-2">Plano {p.name}</h3>
              <div className="mb-6 flex items-end gap-1">
                <span className="text-sm opacity-70">R$</span>
                <span className="font-display text-5xl">{p.price}</span>
                <span className={`text-sm ${p.highlight ? "opacity-80" : "text-muted-foreground"}`}>{p.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={18} className={p.highlight ? "text-primary-foreground" : "text-primary"} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center font-bold tracking-wide uppercase text-sm py-3 rounded-md transition ${
                  p.highlight
                    ? "bg-background text-primary hover:opacity-90"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                Assinar agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  const [form, setForm] = useState({ nome: "", whatsapp: "", objetivo: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.whatsapp.trim()) return;
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Vamos começar</span>
          <h2 className="font-display text-4xl md:text-6xl mt-3">Comece hoje mesmo.</h2>
          <p className="text-muted-foreground mt-4">Deixe seus dados e nossa equipe entra em contato em até 1 hora útil.</p>
        </div>

        {sent ? (
          <div className="bg-card border border-primary rounded-lg p-10 text-center shadow-[var(--shadow-glow)]">
            <h3 className="font-display text-2xl text-primary mb-2">Recebemos seu contato!</h3>
            <p className="text-muted-foreground">Em breve nossa equipe vai chamar você no WhatsApp.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="bg-card border border-border rounded-lg p-8 md:p-10 space-y-5">
            <Field label="Nome" value={form.nome} onChange={(v) => setForm({ ...form, nome: v })} placeholder="Seu nome completo" maxLength={100} />
            <Field label="WhatsApp" value={form.whatsapp} onChange={(v) => setForm({ ...form, whatsapp: v })} placeholder="(11) 99999-9999" maxLength={20} />
            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Objetivo</label>
              <select
                value={form.objetivo}
                onChange={(e) => setForm({ ...form, objetivo: e.target.value })}
                className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition"
              >
                <option value="">Selecione…</option>
                <option>Emagrecimento</option>
                <option>Hipertrofia</option>
                <option>Condicionamento</option>
                <option>Saúde geral</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-bold tracking-wide uppercase text-sm py-4 rounded-md shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-lg)] transition-all"
            >
              Quero minha aula grátis
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, maxLength }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; maxLength?: number }) {
  return (
    <div>
      <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        required
        className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 font-display text-xl tracking-wider mb-4">
            <Dumbbell className="text-primary" size={22} />
            IRON FORGE
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">Forjando atletas todos os dias, 24 horas por dia.</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-sm text-muted-foreground hover:text-primary transition"
          >
            <Instagram size={18} /> @ironforge
          </a>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest text-primary mb-4">Endereço</h4>
          <p className="text-sm text-muted-foreground flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
            Av. Paulista, 1000 — Bela Vista<br />São Paulo, SP — 01310-100
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm tracking-widest text-primary mb-4">Localização</h4>
          <div className="rounded-md overflow-hidden border border-border aspect-video">
            <iframe
              title="Mapa IRON FORGE"
              src="https://www.google.com/maps?q=Av.+Paulista,+1000,+São+Paulo&output=embed"
              className="w-full h-full grayscale contrast-125"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-border text-xs text-muted-foreground flex justify-between">
        <span>© {new Date().getFullYear()} IRON FORGE. Todos os direitos reservados.</span>
        <span>CNPJ 00.000.000/0001-00</span>
      </div>
    </footer>
  );
}
