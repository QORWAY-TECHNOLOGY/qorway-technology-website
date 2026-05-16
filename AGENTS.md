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

QORWAY must be described as infrastructure for organizations operating under:

- digital dependency
- regulatory pressure
- operational fragility
- provider concentration
- data residency constraints
- supplier dependency
- geopolitical instability

---

## Public Decision Loop

The website may describe the public loop as:

```text
data → graph → reasoning → constraint validation → orchestration → optimization → execution → feedback → learning
```

Do not publish implementation contracts, registries, internal scoring logic, or private runtime details.

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

Do not expose private Domain Pack internals.

---

## Public / Private Boundary

This website must only expose public-safe concepts.

Do NOT expose:

- production schemas
- internal prompts
- causal rule libraries
- scoring models
- PolicyCore implementation rules
- PulseFlow production contracts
- GreenCore routing logic
- private Domain Pack internals
- tenant-specific data
- proprietary execution logic
- runtime registries

The site may explain the architecture at a high level.

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

Avoid:

- generic SaaS gradients
- childish illustrations
- chatbot UI clichés
- blue-purple AI startup look
- flashy Web3 aesthetics
- random glassmorphism
- overused AI orb visuals

---

## Color Tokens

Use CSS variables and Tailwind tokens.

```css
--qorway-black: #080807;
--qorway-graphite: #141310;
--qorway-charcoal: #1d1a16;
--qorway-cream: #f3e8d0;
--qorway-sand: #d8c7a3;
--qorway-muted: #9c8f78;
--qorway-terracotta: #c8643b;
--qorway-copper: #a94e2c;
--qorway-border: rgba(243, 232, 208, 0.16);
```

---

## Technical Requirements

Use:

- Next.js App Router
- TypeScript strict mode
- Tailwind CSS
- Accessible semantic HTML
- Responsive design
- Static export compatibility for GitHub Pages
- No unnecessary dependencies
- Clean reusable components

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

If errors occur, fix them before final response.

---

## Review Guidelines

Before finishing, review:

- Does it look like sovereign infrastructure, not SaaS?
- Does it protect private IP?
- Are all architecture concepts public-safe?
- Is Sovereign Resilience visible?
- Is Workforce Capital visible?
- Is the public/private boundary explicit?
- Is the site downstream from `qorway_technology`?
- Is the design system applied consistently?
- Is the code clean, typed, and maintainable?
