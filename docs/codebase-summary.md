# Codebase Summary

## Project: BMAD Playgrounds

**Status:** Prototype Phase
**BMAD Version:** 6.2.1

## Current Focus

Flight Booking Onboarding Form — multi-step traveller data collection.

## Directory Structure

| Directory | Purpose |
|-----------|---------|
| `_bmad/` | BMAD method configuration, agents, workflows |
| `_bmad-output/` | Generated artifacts (brainstorming, reports) |
| `prototype/` | Interactive HTML prototypes |
| `design-artifacts/` | Design documentation templates |
| `docs/` | Project documentation |

## Key Files

| File | Description |
|------|-------------|
| `prototype/traveller-onboarding.html` | Interactive 4-step form prototype |
| `_bmad-output/brainstorming/*.md` | Brainstorming session results |

## Tech Stack

| Layer | Technology |
|-------|------------|
| Prototype | HTML5, CSS3, Vanilla JS |
| Planned Frontend | React, TypeScript, Tailwind |
| Output Format | JSON (for API integration) |

## Form Architecture

```
Travel Details → Personal Info → Payment → Extras → JSON Output
      ↓              ↓            ↓          ↓
  Trip type      Per-passenger  Card      Assistance
  Dates          Passport       Billing   Meals
  Passengers     Contact        Promo     Baggage
```

## Development Phases

| Phase | Status | Artifacts |
|-------|--------|-----------|
| Brainstorming | Complete | Session report |
| Prototype | Complete | HTML form |
| Implementation | Pending | — |
| Testing | Pending | — |

## BMAD Workflows Used

- `bmad-brainstorming` — Role Playing, SCAMPER, Six Thinking Hats
- `bmad-help` — Workflow guidance
