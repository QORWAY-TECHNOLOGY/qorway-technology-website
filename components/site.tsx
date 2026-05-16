import type { ReactNode } from "react";

export const navItems = [
  { href: "/architecture/", label: "Architecture" },
  { href: "/decision-intelligence/", label: "Decision Intelligence" },
  { href: "/domain-packs/", label: "Domain Packs" },
  { href: "/governance-security/", label: "Governance" },
  { href: "/contact/", label: "Pilot" }
];

export const layers = [
  {
    name: "Atlas",
    role: "Causal Intelligence Engine",
    answer: "What should happen?"
  },
  {
    name: "Domain Packs",
    role: "Context & Business Intelligence Layer",
    answer: "How does this domain work structurally?"
  },
  {
    name: "PolicyCore",
    role: "Constraint Validation Layer",
    answer: "Is this allowed to move forward?"
  },
  {
    name: "PulseFlow",
    role: "Execution Orchestration Layer",
    answer: "How does this decision move through systems?"
  },
  {
    name: "GreenCore",
    role: "Execution Optimization Layer",
    answer: "Where and how should this execute optimally?"
  }
];

export const publicDomainPacks = [
  "Finance",
  "Supply Chain",
  "CSRD / RSE",
  "Regulator",
  "Workforce Capital",
  "Sovereign Resilience"
];

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-qorway-terracotta">
      {children}
    </p>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-qorway-border bg-qorway-black/86 backdrop-blur">
      <div className="qorway-container flex min-h-20 items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-3" aria-label="QORWAY Technology home">
          <span className="grid h-9 w-9 place-items-center border border-qorway-border bg-qorway-charcoal text-qorway-terracotta">
            Q
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.22em]">
            QORWAY Technology
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-qorway-sand lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-qorway-cream">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-qorway-border py-10 text-sm text-qorway-muted">
      <div className="qorway-container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© 2026 QORWAY Technology. All rights reserved.</p>
        <p>Sovereign Decision Intelligence Infrastructure for Europe.</p>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-qorway-grid bg-[length:48px_48px]">
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export function Hero({ eyebrow, title, body, cta }: { eyebrow: string; title: string; body: string; cta?: ReactNode }) {
  return (
    <section className="qorway-container py-20 md:py-28">
      <div className="max-w-5xl">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="font-display text-5xl font-semibold leading-tight tracking-[-0.05em] text-qorway-cream md:text-7xl">
          {title}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-qorway-sand">{body}</p>
        {cta ? <div className="mt-10">{cta}</div> : null}
      </div>
    </section>
  );
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[2rem] border border-qorway-border bg-qorway-graphite/82 p-7 shadow-sovereign ${className}`}>
      {children}
    </div>
  );
}

export function TextCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-3xl border border-qorway-border bg-qorway-charcoal/78 p-6">
      <h2 className="text-xl font-semibold text-qorway-cream">{title}</h2>
      <p className="mt-4 leading-7 text-qorway-sand">{body}</p>
    </article>
  );
}

export function PageIntroGrid({ items }: { items: Array<{ title: string; body: string }> }) {
  return (
    <section className="qorway-container grid gap-5 py-14 md:grid-cols-3">
      {items.map((item) => (
        <TextCard key={item.title} title={item.title} body={item.body} />
      ))}
    </section>
  );
}
