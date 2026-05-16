import { Hero, PageShell, Panel, SectionLabel, TextCard, layers, publicDomainPacks } from "@/components/site";

const loop = [
  "Data",
  "Knowledge Graph",
  "Atlas reasoning",
  "Domain context",
  "PolicyCore validation",
  "PulseFlow orchestration",
  "GreenCore optimization",
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

export default function Home() {
  return (
    <PageShell>
      <Hero
        eyebrow="Sovereign Decision Intelligence Infrastructure"
        title="Governed decision infrastructure for constrained digital environments."
        body="QORWAY helps organizations reason, validate, orchestrate, optimize, and govern decisions under digital dependency, regulatory pressure, operational fragility, provider concentration, data residency constraints, and geopolitical instability."
        cta={
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="/architecture/" className="border border-qorway-terracotta bg-qorway-terracotta px-6 py-3 text-sm font-semibold text-qorway-black">
              Explore architecture
            </a>
            <a href="/contact/" className="border border-qorway-border px-6 py-3 text-sm font-semibold text-qorway-cream">
              Discuss a pilot
            </a>
          </div>
        }
      />

      <section className="qorway-container grid gap-6 py-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
        <div>
          <SectionLabel>Built for constrained digital environments</SectionLabel>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-qorway-cream md:text-5xl">
            QORWAY is not another interface on top of fragmented systems.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-qorway-sand">
            It is a public-safe architecture for organizations that need decisions to remain causal, constrained, auditable, resilient, and executable when the operating environment becomes unstable.
          </p>
        </div>
        <Panel>
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
        </Panel>
      </section>

      <section className="qorway-container py-20" id="architecture">
        <SectionLabel>Core architecture</SectionLabel>
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

      <section className="qorway-container grid gap-6 py-20 md:grid-cols-2">
        <TextCard
          title="Sovereign Resilience"
          body="QORWAY models provider dependency, data residency, supplier concentration, crash readiness, regulatory monitoring, and operational autonomy as decision architecture concerns."
        />
        <TextCard
          title="Workforce Capital"
          body="QORWAY treats human capability, AI-assisted work, upskilling, oversight, productivity, and operational autonomy as governed decision infrastructure."
        />
      </section>

      <section className="qorway-container py-20">
        <SectionLabel>Public Domain Pack categories</SectionLabel>
        <div className="grid gap-4 md:grid-cols-3">
          {publicDomainPacks.map((pack) => (
            <div key={pack} className="rounded-3xl border border-qorway-border bg-qorway-graphite/72 p-6 text-lg font-semibold text-qorway-cream">
              {pack}
            </div>
          ))}
        </div>
      </section>

      <section className="qorway-container py-20">
        <SectionLabel>Design principles</SectionLabel>
        <div className="grid gap-4 md:grid-cols-4">
          {principles.map((principle) => (
            <div key={principle} className="rounded-3xl border border-qorway-border bg-qorway-charcoal/78 p-6 text-lg font-semibold text-qorway-cream">
              {principle}
            </div>
          ))}
        </div>
      </section>

      <section className="qorway-container py-20" id="boundary">
        <Panel className="md:p-10">
          <SectionLabel>Public concepts / private implementation boundary</SectionLabel>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-qorway-cream">Public website</h2>
              <p className="mt-4 leading-8 text-qorway-sand">
                Communicates vision, architecture, governance principles, sovereign resilience, Workforce Capital, and public-safe system language.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-qorway-cream">Private implementation</h2>
              <p className="mt-4 leading-8 text-qorway-sand">
                Protects implementation depth, private Domain Pack internals, runtime details, tenant material, and proprietary execution logic.
              </p>
            </div>
          </div>
        </Panel>
      </section>

      <section className="qorway-container py-24" id="contact">
        <div className="rounded-[2rem] border border-qorway-border bg-qorway-terracotta p-10 text-qorway-black md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.28em]">Pilot conversations</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            Build decision infrastructure before adding another disconnected AI layer.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8">
            QORWAY is designed for regulated, sovereign, and high-accountability environments where decisions must be explainable, governed, resilient, and traceable by default.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
