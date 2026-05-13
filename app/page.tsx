const layers = [
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

const loop = [
  "Data",
  "Reasoning",
  "Constraint validation",
  "Execution",
  "Feedback",
  "Learning"
];

const principles = [
  "Sovereignty by design",
  "Causality over correlation",
  "Constraint-native execution",
  "Auditability by default"
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-qorway-terracotta">
      {children}
    </p>
  );
}

function Header() {
  return (
    <header className="border-b border-qorway-border bg-qorway-black/80 backdrop-blur">
      <div className="qorway-container flex min-h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="QORWAY Technology home">
          <span className="grid h-9 w-9 place-items-center border border-qorway-border bg-qorway-charcoal text-qorway-terracotta">
            Q
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.22em]">
            QORWAY Technology
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-qorway-sand md:flex" aria-label="Primary navigation">
          <a href="#architecture">Architecture</a>
          <a href="#governance">Governance</a>
          <a href="#boundary">Boundary</a>
          <a href="#contact" className="text-qorway-cream">Pilot</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-qorway-border py-10 text-sm text-qorway-muted">
      <div className="qorway-container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© 2026 QORWAY Technology. All rights reserved.</p>
        <p>Sovereign Decision Intelligence Infrastructure for Europe.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-qorway-grid bg-[length:48px_48px]">
      <Header />

      <section className="qorway-container grid gap-12 py-24 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-32">
        <div>
          <SectionLabel>Sovereign Decision Intelligence Infrastructure</SectionLabel>
          <h1 className="font-display text-5xl font-semibold leading-tight tracking-[-0.05em] text-qorway-cream md:text-7xl">
            From fragmented enterprise systems to causal, constrained, executable intelligence.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-qorway-sand">
            QORWAY builds the infrastructure layer that helps organizations reason, validate, execute, and govern decisions at system level.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#architecture" className="border border-qorway-terracotta bg-qorway-terracotta px-6 py-3 text-sm font-semibold text-qorway-black">
              Explore architecture
            </a>
            <a href="#boundary" className="border border-qorway-border px-6 py-3 text-sm font-semibold text-qorway-cream">
              Public / private boundary
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-qorway-border bg-qorway-graphite/88 p-6 shadow-sovereign">
          <div className="mb-6 flex items-center justify-between border-b border-qorway-border pb-4">
            <span className="text-xs uppercase tracking-[0.22em] text-qorway-muted">Decision loop</span>
            <span className="text-xs text-qorway-terracotta">audit-ready</span>
          </div>
          <div className="space-y-3">
            {loop.map((item, index) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl border border-qorway-border bg-qorway-charcoal/70 p-4">
                <span className="grid h-8 w-8 place-items-center border border-qorway-border text-xs text-qorway-terracotta">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-qorway-cream">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="qorway-container py-20" id="architecture">
        <SectionLabel>Core system architecture</SectionLabel>
        <div className="grid gap-5 md:grid-cols-5">
          {layers.map((layer) => (
            <article key={layer.name} className="rounded-3xl border border-qorway-border bg-qorway-graphite/82 p-5">
              <h2 className="text-xl font-semibold text-qorway-cream">{layer.name}</h2>
              <p className="mt-3 min-h-16 text-sm leading-6 text-qorway-sand">{layer.role}</p>
              <p className="mt-6 border-t border-qorway-border pt-4 text-xs uppercase tracking-[0.16em] text-qorway-muted">
                {layer.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="qorway-container grid gap-6 py-20 md:grid-cols-2" id="governance">
        <div className="rounded-[2rem] border border-qorway-border bg-qorway-charcoal/80 p-8">
          <SectionLabel>What QORWAY is not</SectionLabel>
          <ul className="space-y-4 text-qorway-sand">
            <li>Not a SaaS application.</li>
            <li>Not an analytics dashboard.</li>
            <li>Not a chatbot.</li>
            <li>Not a generic workflow automation tool.</li>
          </ul>
        </div>
        <div className="rounded-[2rem] border border-qorway-border bg-qorway-charcoal/80 p-8">
          <SectionLabel>What QORWAY is</SectionLabel>
          <p className="text-2xl font-semibold leading-10 text-qorway-cream">
            A governed decision infrastructure runtime designed to make intelligence causal, constrained, executable, auditable, and continuously improved.
          </p>
        </div>
      </section>

      <section className="qorway-container py-20">
        <SectionLabel>Design principles</SectionLabel>
        <div className="grid gap-4 md:grid-cols-4">
          {principles.map((principle) => (
            <div key={principle} className="rounded-3xl border border-qorway-border bg-qorway-graphite/72 p-6 text-lg font-semibold text-qorway-cream">
              {principle}
            </div>
          ))}
        </div>
      </section>

      <section className="qorway-container py-20" id="boundary">
        <div className="rounded-[2rem] border border-qorway-border bg-qorway-graphite/88 p-8 md:p-10">
          <SectionLabel>Public / private boundary</SectionLabel>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-qorway-cream">Public website</h2>
              <p className="mt-4 leading-8 text-qorway-sand">
                Communicates vision, architecture, governance principles, and public-safe system language.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-qorway-cream">Private implementation</h2>
              <p className="mt-4 leading-8 text-qorway-sand">
                Protects schemas, prompts, scoring models, causal rules, production contracts, and real Domain Pack internals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="qorway-container py-24" id="contact">
        <div className="rounded-[2rem] border border-qorway-border bg-qorway-terracotta p-10 text-qorway-black md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.28em]">Pilot conversations</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            Build a decision infrastructure before adding another layer of disconnected AI.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8">
            QORWAY is designed for regulated, sovereign, and high-accountability environments where decisions must be explainable, governed, and traceable by default.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
