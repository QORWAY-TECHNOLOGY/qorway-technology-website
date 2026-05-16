import type { Metadata } from "next";
import { Hero, PageIntroGrid, PageShell, Panel, SectionLabel } from "@/components/site";

export const metadata: Metadata = {
  title: "Governance & Security",
  description:
    "QORWAY embeds governance, tenant boundaries, auditability, and sovereign security into the public decision infrastructure narrative."
};

export default function GovernanceSecurityPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Governance & Security"
        title="Governance is embedded before decisions become reality."
        body="QORWAY treats governance, tenant isolation, evidence, security, and sovereign resilience as architecture concerns rather than post-hoc compliance layers."
      />

      <PageIntroGrid
        items={[
          {
            title: "Tenant sovereignty",
            body: "Tenant context, graph state, policies, audit trails, and feedback loops remain isolated by design."
          },
          {
            title: "Constraint-first intelligence",
            body: "PolicyCore validates whether a proposed decision can move forward before orchestration occurs."
          },
          {
            title: "Auditability by default",
            body: "Every decision must be traceable across reasoning, context, validation, orchestration, optimization, execution, and feedback."
          }
        ]}
      />

      <section className="qorway-container py-16">
        <Panel>
          <SectionLabel>Security posture</SectionLabel>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              "Zero Trust orientation",
              "Tenant-scoped execution",
              "Data boundary discipline",
              "Public/private separation",
              "Human oversight where required",
              "EU-oriented governance",
              "Audit-ready evidence",
              "No unbounded intelligence"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-qorway-border bg-qorway-charcoal/72 p-4 text-sm font-semibold text-qorway-cream">
                {item}
              </div>
            ))}
          </div>
        </Panel>
      </section>
    </PageShell>
  );
}
