import type { Metadata } from "next";
import { Hero, PageIntroGrid, PageShell, Panel, SectionLabel } from "@/components/site";

export const metadata: Metadata = {
  title: "Contact / Pilot",
  description:
    "Start a pilot conversation with QORWAY Technology for sovereign decision intelligence infrastructure."
};

export default function ContactPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Contact / Pilot"
        title="Start with a governed pilot conversation."
        body="QORWAY is designed for organizations that need decision infrastructure under constraint: regulation, digital dependency, operational fragility, data residency, sovereign resilience, and accountability."
        cta={
          <a href="mailto:contact@qorway.com" className="inline-flex border border-qorway-terracotta bg-qorway-terracotta px-6 py-3 text-sm font-semibold text-qorway-black">
            contact@qorway.com
          </a>
        }
      />

      <PageIntroGrid
        items={[
          {
            title: "Enterprise leaders",
            body: "Explore where fragmented systems, slow decisions, unclear governance, or weak execution traceability create decision debt."
          },
          {
            title: "Technical leaders",
            body: "Discuss how causal reasoning, constraint validation, orchestration, optimization, and auditability should be separated architecturally."
          },
          {
            title: "Institutional partners",
            body: "Evaluate QORWAY through the lens of European digital sovereignty, resilience, governance, and accountable decision infrastructure."
          }
        ]}
      />

      <section className="qorway-container py-16">
        <Panel>
          <SectionLabel>Public boundary</SectionLabel>
          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-qorway-cream">
            Pilot conversations begin from public-safe architecture, not private implementation disclosure.
          </h2>
          <p className="mt-6 max-w-3xl leading-8 text-qorway-sand">
            The public website explains what QORWAY is, why it exists, and how its architecture is organized. Private implementation depth remains protected until the appropriate governance, confidentiality, and commercial context exists.
          </p>
        </Panel>
      </section>
    </PageShell>
  );
}
