# QORWAY Technology Website — Agent Instructions

## Project Role

You are coding the official public website for QORWAY Technology.

QORWAY is not a SaaS app, not a chatbot, not an analytics dashboard, and not a generic AI tool.

QORWAY is a sovereign Decision Intelligence infrastructure for Europe.

The website must feel like an institutional infrastructure website for C-level executives, technical leaders, public-sector stakeholders, investors, and enterprise architects.

---

## Source-of-Truth Order

The website is downstream from the public architecture repository.

Use this order:

```text
Private Core → Public Architecture Repository → Public Website → Cross-Repo QA → ODC later
```

The website must not invent doctrine directly from the private core.

The website must communicate the public-safe narrative already validated in `qorway_technology`.

---

## Strategic Positioning

QORWAY builds sovereign Decision Intelligence infrastructure for organizations that need to reason, validate, execute, optimize, and govern decisions at system level.

Current public statement:

> Governed decision infrastructure for constrained digital environments.

QORWAY must be described as infrastructure for organizations operating under digital dependency, regulatory pressure, operational fragility, provider concentration, data residency constraints, supplier dependency, and geopolitical instability.

---

## Public Decision Loop

The website may describe the public loop as:

```text
data → graph → reasoning → constraint validation → orchestration → optimization → execution → feedback → learning
```

Use public architecture language only.

---

## Core Architecture

QORWAY operates as a five-layer Decision Intelligence infrastructure:

1. Atlas — Causal Intelligence Engine
2. Domain Packs — Context & Business Intelligence Layer
3. PolicyCore — Constraint Validation Layer
4. PulseFlow — Execution Orchestration Layer
5. GreenCore — Execution Optimization Layer

These layers are supported by Knowledge Graph Infrastructure.

---

## Required Public Concepts

The website must include public-safe explanations of:

- Built for constrained digital environments
- Sovereign Resilience
- Workforce Capital
- Public concepts / private implementation boundary
- Atlas
- Domain Packs
- PolicyCore
- PulseFlow
- GreenCore
- Knowledge Graph Infrastructure
- Tenant boundary
- Governance and auditability

---

## Public Domain Pack Categories

The website may list these public-safe Domain Pack categories:

- Finance
- Supply Chain
- CSRD / RSE
- Regulator
- Workforce Capital
- Sovereign Resilience

---

## Public / Private Boundary

This website must expose only public-safe concepts.

It may explain the architecture at a high level.

Implementation depth belongs outside the website.

---

## Required Pages

The public website should include:

- Home
- Architecture
- Decision Intelligence
- Domain Packs
- Governance & Security
- Contact / Pilot

Use reusable components where possible.

Avoid turning the site into a dashboard or SaaS application mockup.

---

## Design Principles

The UI must express:

1. Sovereignty by design
2. Causality over correlation
3. Constraint by architecture
4. Auditability by default
5. Institutional credibility
6. European technology seriousness

---

## Visual Identity

Brand style:

- Deep black / near-black background
- Warm beige / cream surfaces and text accents
- Terracotta / orange accent for signal, decision, and active state
- Minimal, sovereign, architectural, high-trust, European technology aesthetic

Avoid generic SaaS, chatbot, Web3, and overused AI visual clichés.

---

## Technical Requirements

Use Next.js App Router, TypeScript strict mode, Tailwind CSS, accessible semantic HTML, responsive design, static export compatibility, and clean reusable components.

`next.config.mjs` should preserve static export settings:

```js
output: "export"
images: { unoptimized: true }
trailingSlash: true
```

Run before completion:

```bash
npm run lint
npm run build
```

---

## Review Guidelines

Before finishing, review:

- Does it look like sovereign infrastructure, not SaaS?
- Are all architecture concepts public-safe?
- Is Sovereign Resilience visible?
- Is Workforce Capital visible?
- Is the public/private boundary explicit?
- Is the site downstream from `qorway_technology`?
- Is the design system applied consistently?
- Is the code clean, typed, and maintainable?
