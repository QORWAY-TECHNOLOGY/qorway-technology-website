import type { Metadata } from "next";
import { Hero, PageIntroGrid, PageShell, Panel, SectionLabel, layers } from "@/components/site";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "Explore the public-safe QORWAY architecture: Atlas, Domain Packs, PolicyCore, PulseFlow, GreenCore, and Knowledge Graph Infrastructure."
};

export default function ArchitecturePage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Architecture"
        title="Five coordinated layers for governed decision infrastructure."
        body="QORWAY separates reasoning, context, validation, orchestration, and optimization so that decisions remain causal, constrained, auditable, resilient, and executable."
      />

      <section className="qorway-container py-12">
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

      <PageIntroGrid
        items={[
          {
            title: "Knowledge Graph Infrastructure",
            body: "The Knowledge Graph provides system memory, causal structure, dependency visibility, decision lineage, and feedback context."
          },
          {
            title: "Tenant Boundary",
            body: "QORWAY distinguishes reusable public domain structure from private tenant operating reality. One tenant's graph must never become another tenant's intelligence."
          },
          {
            title: "Runtime Loop",
            body: "The public loop is data, graph, reasoning, context, validation, orchestration, optimization, execution, feedback, and learning."
          }
        ]}
      />

      <section className="qorway-container py-16">
        <Panel>
          <SectionLabel>Public architecture boundary</SectionLabel>
          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-qorway-cream">
            This page explains layer responsibilities. It does not expose implementation internals.
          </h2>
          <p className="mt-6 max-w-3xl leading-8 text-qorway-sand">
            Private implementation depth remains outside the website. The site communicates the public trust layer only.
          </p>
        </Panel>
      </section>
    </PageShell>
  );
}
