---
title: 'Convert HTML Prototype to React Multi-Step Form'
type: 'feature'
created: '2026-03-25'
status: 'done'
baseline_commit: '59aacc1'
context:
  - docs/codebase-summary.md
  - _bmad-output/brainstorming/brainstorming-session-2026-03-25-1300.md
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** The HTML prototype at `prototype/traveller-onboarding.html` demonstrates the UX but lacks production-ready React components, type safety, and modern styling.

**Approach:** Bootstrap a React + TypeScript + Tailwind project and convert the 4-step form (Travel → Personal → Payment → Extras) into reusable components with form state management and JSON output.

## Boundaries & Constraints

**Always:**
- Use React 18+ with TypeScript strict mode
- Use Tailwind CSS for styling (match prototype colors/layout)
- Preserve all 4 steps and field structure from prototype
- Output JSON matching the structure in brainstorming results
- Mobile-responsive (prototype already is)

**Ask First:**
- Adding form validation library (react-hook-form vs native)
- Adding routing (single page vs multi-route)
- Backend integration patterns

**Never:**
- No backend implementation (mock data only)
- No authentication/user management
- No payment processing (UI only)
- No unit tests in this spec

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Complete flow | User fills all 4 steps | JSON object with booking data displayed | N/A |
| Add passenger | Click + on passenger counter | New passenger form section appears | Max 9 passengers |
| Infant selected | Infant count > 0 | Show infant options (seat belt, bassinet) | N/A |
| Navigate steps | Click Next/Previous | Step changes, progress bar updates | N/A |

</frozen-after-approval>

## Code Map

- `prototype/traveller-onboarding.html` -- Reference implementation with all fields/logic
- `src/App.tsx` -- Main app with step management
- `src/components/ProgressBar.tsx` -- 4-step progress indicator
- `src/components/steps/TravelDetailsStep.tsx` -- Step 1: trip type, dates, passengers
- `src/components/steps/PersonalInfoStep.tsx` -- Step 2: passenger details per person
- `src/components/steps/PaymentStep.tsx` -- Step 3: card details, billing
- `src/components/steps/ExtrasStep.tsx` -- Step 4: assistance, meals, baggage, extras
- `src/components/ui/` -- Reusable form controls (Input, Select, Counter, RadioGroup)
- `src/types/booking.ts` -- TypeScript interfaces for form data
- `src/hooks/useBookingForm.ts` -- Form state management hook

## Tasks & Acceptance

**Execution:**
- [x] `package.json` -- Initialize Vite + React + TS + Tailwind project
- [x] `src/types/booking.ts` -- Define BookingData, Passenger, TravelDetails interfaces
- [x] `src/components/ui/` -- Create reusable Input, Select, Counter, RadioGroup, Button components
- [x] `src/components/ProgressBar.tsx` -- Implement step indicator with active/completed states
- [x] `src/components/steps/TravelDetailsStep.tsx` -- Convert Step 1 from prototype
- [x] `src/components/steps/PersonalInfoStep.tsx` -- Convert Step 2 with multi-passenger support
- [x] `src/components/steps/PaymentStep.tsx` -- Convert Step 3 from prototype
- [x] `src/components/steps/ExtrasStep.tsx` -- Convert Step 4 with conditional infant options
- [x] `src/hooks/useBookingForm.ts` -- Manage form state across steps
- [x] `src/App.tsx` -- Wire up steps, navigation, JSON output display
- [x] `tailwind.config.js` -- Configure theme colors matching prototype (#667eea, #764ba2)

**Acceptance Criteria:**
- Given the app is running, when user navigates through all 4 steps, then progress bar updates correctly
- Given Step 1 is complete, when user clicks Next, then Step 2 displays with passenger forms
- Given infant count > 0, when viewing Step 2, then infant options section is visible
- Given all steps complete, when viewing Step 4 summary, then JSON output matches expected structure

## Verification

**Commands:**
- `npm run dev` -- expected: App runs at localhost, form renders
- `npm run build` -- expected: No TypeScript errors, production build succeeds
- `npm run lint` -- expected: No ESLint errors

**Manual checks:**
- Open in browser, complete all 4 steps, verify JSON output displays correctly
- Resize to mobile width, verify responsive layout

## Suggested Review Order

**State Management & Data Flow**

- Central state hook orchestrates all form data across steps
  [`useBookingForm.ts:1`](../../src/hooks/useBookingForm.ts#L1)

- Type definitions establish the booking data contract
  [`booking.ts:1`](../../src/types/booking.ts#L1)

**Main Application Flow**

- App wires steps together with navigation and JSON output
  [`App.tsx:12`](../../src/App.tsx#L12)

- Progress bar tracks current step with visual indicators
  [`ProgressBar.tsx:1`](../../src/components/ProgressBar.tsx#L1)

**Step Components**

- Step 1: Travel details with passenger counter
  [`TravelDetailsStep.tsx:1`](../../src/components/steps/TravelDetailsStep.tsx#L1)

- Step 2: Passenger info with dynamic form generation
  [`PersonalInfoStep.tsx:1`](../../src/components/steps/PersonalInfoStep.tsx#L1)

- Step 3: Payment form with card inputs
  [`PaymentStep.tsx:1`](../../src/components/steps/PaymentStep.tsx#L1)

- Step 4: Extras with conditional infant options
  [`ExtrasStep.tsx:1`](../../src/components/steps/ExtrasStep.tsx#L1)

**Reusable UI Components**

- Form controls: Input, Select, Counter, RadioGroup, Button, Checkbox
  [`ui/`](../../src/components/ui/)

**Configuration**

- Tailwind theme with custom gradient colors
  [`tailwind.config.js:1`](../../tailwind.config.js#L1)
