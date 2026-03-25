# BMAD Playgrounds

Demo project showcasing the BMAD (Build Measure Analyze Deploy) Method for AI-assisted software development.

## Current Project: Flight Booking Onboarding Form

A multi-step traveller onboarding form for flight bookings, developed using BMAD brainstorming techniques.

### Live Prototype

Open the interactive prototype:
```bash
open prototype/traveller-onboarding.html
```

### Form Flow

```
Step 1: Travel Details → Step 2: Personal Info → Step 3: Payment → Step 4: Extras
```

### Features

| Step | Fields |
|------|--------|
| **Travel Details** | Trip type, origin/destination, dates, passengers, cabin class |
| **Personal Info** | Name, DOB, passport, contact (per passenger) |
| **Payment** | Card details, billing address, promo code |
| **Extras** | Special assistance, meals, baggage, seat preference |

### Key UX Patterns

- Progressive disclosure (show extras after core fields)
- Conditional fields (age-based options for infants/children)
- Auto-fill support for repeat bookings
- JSON output for backend integration

## Project Structure

```
bmad-demo/
├── _bmad/                    # BMAD method configuration (v6.2.1)
├── _bmad-output/             # Generated artifacts
│   └── brainstorming/        # Brainstorming session results
├── prototype/                # Interactive prototypes
│   └── traveller-onboarding.html
├── design-artifacts/         # Design documentation
└── docs/                     # Project documentation
```

## Brainstorming Session

The form design was developed through a structured brainstorming session using:

1. **Role Playing** — Personas: Business traveller, Family planner, Elderly traveller
2. **SCAMPER Method** — Systematic field optimization
3. **Six Thinking Hats** — Validation from all angles

See full session: `_bmad-output/brainstorming/brainstorming-session-2026-03-25-1300.md`

## Next Steps

- [ ] Implement React/TypeScript frontend
- [ ] Add form validation
- [ ] Connect to booking API
- [ ] Add unit tests

## Tech Stack (Planned)

- Frontend: React + TypeScript
- Styling: Tailwind CSS
- State: React Hook Form
- Output: JSON for API integration

## BMAD Method

This project uses the BMAD Method v6.2.1 for AI-assisted development. Available workflows:

| Phase | Workflow |
|-------|----------|
| Analysis | `/bmad-brainstorming`, `/bmad-product-brief` |
| Planning | `/bmad-create-prd`, `/bmad-create-ux-design` |
| Solutioning | `/bmad-create-architecture`, `/bmad-create-epics-and-stories` |
| Implementation | `/bmad-quick-dev`, `/bmad-dev-story` |

Run `/bmad-help` for guidance on next steps.

## License

MIT
