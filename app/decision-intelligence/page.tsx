import type { Metadata } from "next";
import { Hero, PageIntroGrid, PageShell, Panel, SectionLabel } from "@/components/site";

export const metadata: Metadata = {
  title: "Decision Intelligence",
  description:
    "QORWAY turns fragmented enterprise signals into causal, constrained, auditable, and feedback-linked decision intelligence."
};

export default function DecisionIntelligencePage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Decision Intelligence"
        title="From fragmented signals to governed decision execution."
        body="QORWAY is designed for organizations that need decisions to be causal, contextual, constrained, executable, auditable, and continuously improved."
      />

      <PageIntroGrid
        items={[
          {
            title: "Causal reasoning",
            body: "QORWAY emphasizes why a decision path exists, not only what an output recommends."
          },
          {
            title: "Constraint validation",
            body: "Decisions must pass through governance and policy boundaries before they can move toward execution."
          },
          {
            title: "Feedback learning",
            body: "Execution outcomes are captured as evidence so future decisions can become more reliable."
          }
        ]}
      />

      <section className="qorway-container py-16">
        <Panel>
          <SectionLabel>Decision loop</SectionLabel>
          <div className="grid gap-4 md:grid-cols-5">
            {[
              "Data",
              "Graph",
              "Reasoning",
              "Validation",
              "Execution",
              "Feedback",
              "Learning",
              "Resilience",
              "Audit",
              "Governance"
            ].map((item, index) => (
              <div key={item} className="rounded-2xl border border-qorway-border bg-qorway-charcoal/72 p-4">
                <p className="text-xs text-qorway-terracotta">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-sm font-semibold text-qorway-cream">{item}</p>
              </div>
            ))}
          </div>
        </Panel>
      </section>
    </PageShell>
  );
}
