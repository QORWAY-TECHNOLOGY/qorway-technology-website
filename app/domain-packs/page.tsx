import type { Metadata } from "next";
import { Hero, PageShell, Panel, SectionLabel, TextCard, publicDomainPacks } from "@/components/site";

export const metadata: Metadata = {
  title: "Domain Packs",
  description:
    "Public-safe overview of QORWAY Domain Pack categories including Finance, Supply Chain, CSRD/RSE, Regulator, Workforce Capital, and Sovereign Resilience."
};

const descriptions: Record<string, string> = {
  Finance: "Capital allocation, financial exposure, margin dynamics, cash pressure, and decision economics.",
  "Supply Chain": "Supplier dependency, logistics risk, operational continuity, route fragility, and resilience exposure.",
  "CSRD / RSE": "Sustainability, double materiality, evidence, auditability, and reporting readiness.",
  Regulator: "Jurisdictional context, obligations, policy constraints, public accountability, and review pathways.",
  "Workforce Capital": "Human capability, AI-assisted work, upskilling, oversight, productivity, and operational autonomy.",
  "Sovereign Resilience": "Provider dependency, data residency, crash readiness, digital autonomy, and continuity risk."
};

export default function DomainPacksPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Domain Packs"
        title="Public domain categories for contextual decision intelligence."
        body="Domain Packs make QORWAY domain-aware without turning the public website into a copy of the private core. This page explains categories, not private implementation internals."
      />

      <section className="qorway-container grid gap-5 py-12 md:grid-cols-3">
        {publicDomainPacks.map((pack) => (
          <TextCard key={pack} title={pack} body={descriptions[pack]} />
        ))}
      </section>

      <section className="qorway-container py-16">
        <Panel>
          <SectionLabel>Public-safe boundary</SectionLabel>
          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-qorway-cream">
            Domain Packs are described here as concepts, not as executable contracts.
          </h2>
          <p className="mt-6 max-w-3xl leading-8 text-qorway-sand">
            The public website does not expose private Domain Pack internals, tenant-specific extensions, scoring models, runtime registries, prompts, or implementation contracts.
          </p>
        </Panel>
      </section>
    </PageShell>
  );
}
