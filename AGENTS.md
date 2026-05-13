# QORWAY Technology Website — Codex Instructions

## Project Role

You are coding the official public website for QORWAY Technology.

QORWAY is not a SaaS app, not a chatbot, not an analytics dashboard, and not a generic AI tool.

QORWAY is a sovereign Decision Intelligence infrastructure for Europe.

The website must feel like an institutional infrastructure website for C-level executives, technical leaders, public-sector stakeholders, investors, and enterprise architects.

## Strategic Positioning

QORWAY builds sovereign Decision Intelligence infrastructure for organizations that need to reason, validate, execute, and govern decisions at system level.

Core statement:

“From fragmented enterprise systems to causal, constrained, executable intelligence.”

The website must explain that QORWAY connects:

```text
data → reasoning → constraint validation → execution → feedback → learning
```

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

The site may explain the architecture at a high level.

## Core Architecture

QORWAY operates as a 5-layer Decision Intelligence infrastructure:

1. Atlas — Causal Intelligence Engine
2. Domain Packs — Context & Business Intelligence Layer
3. PolicyCore — Constraint Validation Layer
4. PulseFlow — Execution Orchestration Layer
5. GreenCore — Execution Optimization Layer

These layers are supported by the Knowledge Graph Infrastructure.

## Design Principles

The UI must express:

1. Sovereignty by Design
   The interface must feel secure, independent, European, institutional, and technically controlled.

2. Causality
   The UI should show why decisions happen, not only what the output is.

3. Constraint by Architecture
   The visual system must show rules, validation gates, boundaries, policy layers, and controlled execution.

4. Auditability by Default
   The interface must make traces, evidence, lifecycle, validation, and feedback visually central.

## Visual Identity

Brand style:

- Deep black / near-black background
- Warm beige / cream surfaces and text accents
- Terracotta / orange accent for signal, decision, and active state
- Pixelated pangolin symbol as the QORWAY visual anchor
- Minimal, sovereign, architectural, high-trust, European technology aesthetic

Avoid:

- generic SaaS gradients
- childish illustrations
- chatbot UI clichés
- blue-purple AI startup look
- flashy Web3 aesthetics
- random glassmorphism
- overused AI orb visuals

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

Run before completion:

```bash
npm run lint
npm run build
```

If errors occur, fix them before final response.

## Pages Required

Initial scope:

- Home
- Architecture
- Decision Intelligence
- Domain Packs
- Governance & Security
- Contact / Pilot

The first implementation may ship the Home page and reusable foundations first, then expand iteratively.

## Review Guidelines

Before finishing, review:

- Does it look like sovereign infrastructure, not SaaS?
- Does it protect private IP?
- Are all architecture concepts public-safe?
- Is the design system applied consistently?
- Is the site visually premium and credible?
- Is the code clean, typed, and maintainable?
