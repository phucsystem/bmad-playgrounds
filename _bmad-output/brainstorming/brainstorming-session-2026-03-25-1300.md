---
stepsCompleted: [1, 2, 3, 4]
inputDocuments: []
session_topic: 'Traveller onboarding form inputs for internal flight booking platform'
session_goals: 'Identify all necessary fields to collect from travellers to make flight bookings on their behalf'
selected_approach: 'AI-Recommended Techniques'
techniques_used: ['Role Playing', 'SCAMPER Method', 'Six Thinking Hats']
ideas_generated: 45
session_active: false
workflow_completed: true
context_file: ''
---

# Brainstorming Session: Traveller Onboarding Form Inputs

**Date:** 2026-03-25
**Facilitator:** AI-Assisted
**Participant:** Phuc

---

## Session Overview

**Topic:** Traveller onboarding form inputs for internal flight booking platform

**Goals:**
- Identify all necessary fields to collect from travellers
- Make flight bookings on behalf of travellers
- Support pre-flight check-in and trip planning
- Ensure regulatory compliance (passport, visa)
- Handle special travel requests

### Target Users
- Business travellers
- Leisure/casual travellers
- All types (mixed)

### Key Requirements
- No user registration needed (just personal info + contact)
- Regulatory compliance fields (passport, visa)
- Special requests support (baby seat belt, baby sleepwear, vegetarian, etc.)
- Frontend only, output JSON for backend integration
- Mobile + Desktop responsive

---

## Technique Execution Results

### Technique 1: Role Playing

**Personas Explored:**

| Persona | Key Insights |
|---------|--------------|
| **Sarah (Business Traveller)** | Hates re-entering personal info; abandons with too many manual inputs; appreciates offers/promotions; rarely needs special requests |
| **David (Family Planner)** | Multi-passenger complexity; conditional fields for children/infants; manual input is stressful |
| **Margaret (Elderly)** | Needs prominent special assistance; dietary requirements; confirmation of accommodations |

**Key Discoveries:**
- Auto-fill and profile saving critical for repeat bookers
- Conditional logic based on passenger age reduces clutter
- Special assistance must be prominent, not buried
- Confirmation echo builds confidence

### Technique 2: SCAMPER Method

| Letter | Optimization |
|--------|--------------|
| **S (Substitute)** | Auto-complete address from postal code; date pickers; geo-detect country |
| **C (Combine)** | Phone with country code; date range picker; single special needs section |
| **A (Adapt)** | Saved traveller profiles; "booking for someone else" toggle |
| **M (Modify)** | Magnify: required fields, assistance, price. Minimize: promos, T&C |
| **P (Put to use)** | DOB → age logic; email → notifications; passport → expiry warnings |
| **E (Eliminate)** | Remove: middle name (optional), fax, marketing source |
| **R (Rearrange)** | New flow: Travel → Personal → Payment → Extras |

### Technique 3: Six Thinking Hats

| Hat | Validation |
|-----|------------|
| **White (Facts)** | Regulatory must-haves: legal name, DOB, passport, contact, payment |
| **Red (Emotions)** | Address overwhelm, anxiety, frustration through progressive disclosure |
| **Yellow (Benefits)** | Value-adds: meal preference, frequent flyer, seat preference, insurance |
| **Black (Risks)** | Mitigate: name mismatch, passport expiry, wrong age category, payment failure |
| **Green (Creative)** | New ideas: "travelling with" links, preferred language, carbon offset |
| **Blue (Process)** | Confirmed 4-step flow with Travel Details first |

---

## Final Form Structure

### Form Flow (Optimized)

```
Step 1: Travel Details → Step 2: Personal Info → Step 3: Payment → Step 4: Additional Options
```

**Rationale:** Show flights/prices first to hook users, then collect details after commitment.

---

### Step 1: Travel Details

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Trip type | Radio | Yes | One-way / Round-trip / Multi-city |
| Origin city | Autocomplete | Yes | With airport code |
| Destination city | Autocomplete | Yes | With airport code |
| Departure date | Date picker | Yes | Calendar UI |
| Return date | Date picker | Conditional | If round-trip |
| Number of passengers | Stepper | Yes | Adults / Children / Infants |
| Cabin class | Dropdown | Yes | Economy / Business / First |
| Flexible dates | Toggle | No | +/- 3 days search |

---

### Step 2: Personal Info (Per Passenger)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Title | Dropdown | Yes | Mr / Mrs / Ms / Dr |
| First name | Text | Yes | "As on passport" helper |
| Last name | Text | Yes | "As on passport" helper |
| Date of birth | Date picker | Yes | Triggers age logic |
| Gender | Dropdown | Conditional | If airline requires |
| Nationality | Dropdown | Yes | Geo-detect default |
| Passport number | Text | Yes (intl) | Typed, not uploaded |
| Passport expiry | Date picker | Yes (intl) | Auto-warn if < 6 months |
| Email | Email | Yes | Lead passenger only |
| Phone | Tel + country | Yes | Lead passenger only |
| Emergency contact | Text + Tel | No | Optional |

**Conditional Fields (Age-Based):**

| Condition | Show Fields |
|-----------|-------------|
| Infant (< 2) | Baby seat belt, bassinet request, infant meal |
| Child (2-12) | Child meal preference |
| Adult with infant | "Infant travelling with" selector |

---

### Step 3: Payment Info

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Cardholder name | Text | Yes | |
| Card number | Text (masked) | Yes | Auto-detect card type |
| Expiry date | MM/YY | Yes | |
| CVV | Text (3-4 digits) | Yes | |
| Billing address | Autocomplete | Yes | Postal code → auto-fill |
| Save payment method | Checkbox | No | "Save for future bookings" |
| Promo code | Text | No | Collapsible section |

---

### Step 4: Additional Options

| Category | Field | Type | Required | Notes |
|----------|-------|------|----------|-------|
| **Special Assistance** | Wheelchair | Checkbox | No | |
| | Elder assistance | Checkbox | No | |
| | Visual/hearing impairment | Checkbox | No | |
| **Meal Preferences** | Meal type | Dropdown | No | Vegetarian, Vegan, Halal, Kosher, Diabetic |
| | Allergies | Text | No | Free text |
| **Baggage** | Checked bags | Stepper | No | Per passenger |
| | Extra cabin bag | Toggle | No | |
| | Sports equipment | Checkbox + type | No | |
| **Extras** | Travel insurance | Toggle + plan | No | |
| | eSIM data pack | Toggle + plan | No | |
| | Airport lounge | Toggle | No | |
| | Seat preference | Selector | No | Window / Aisle / None |
| **Infant Extras** | Baby seat belt | Checkbox | No | Conditional: infant present |
| | Baby sleepwear | Checkbox | No | Conditional: infant present |
| | Bassinet request | Checkbox | No | Conditional: infant present |

---

## UX Patterns

| Pattern | Implementation |
|---------|----------------|
| **Progressive disclosure** | Show extras only after core fields complete |
| **Auto-fill / profiles** | Save traveller profiles for repeat bookings |
| **Conditional fields** | Age-based, trip-type-based visibility |
| **Validation warnings** | Passport expiry, name mismatch alerts |
| **Confirmation echo** | Summary screen showing special requests confirmed |
| **"Add Traveller"** | Multi-passenger with copy/link options |
| **Geo-detection** | Auto-detect country, phone code |
| **Smart defaults** | Pre-select common options |

---

## JSON Output Structure (For Integration)

```json
{
  "booking": {
    "tripType": "round-trip",
    "origin": { "city": "string", "code": "string" },
    "destination": { "city": "string", "code": "string" },
    "departureDate": "ISO-date",
    "returnDate": "ISO-date",
    "cabinClass": "economy|business|first",
    "passengers": [
      {
        "type": "adult|child|infant",
        "title": "string",
        "firstName": "string",
        "lastName": "string",
        "dateOfBirth": "ISO-date",
        "gender": "string",
        "nationality": "string",
        "passport": {
          "number": "string",
          "expiry": "ISO-date"
        },
        "contact": {
          "email": "string",
          "phone": "string"
        },
        "specialAssistance": ["wheelchair", "elder-assist"],
        "mealPreference": "string",
        "allergies": "string",
        "seatPreference": "window|aisle|none",
        "infantExtras": {
          "seatBelt": true,
          "sleepwear": false,
          "bassinet": true
        }
      }
    ],
    "baggage": {
      "checked": 2,
      "extraCabin": false,
      "sportsEquipment": null
    },
    "extras": {
      "insurance": { "selected": true, "plan": "comprehensive" },
      "esim": { "selected": false },
      "lounge": false
    },
    "payment": {
      "cardholderName": "string",
      "cardLast4": "string",
      "billingAddress": {}
    },
    "promoCode": "string"
  }
}
```

---

## Session Summary

**Creative Achievements:**
- 45+ field concepts identified across 4 form steps
- Smart conditional logic for age-based options
- UX optimizations to reduce manual input friction
- Regulatory compliance fields included
- Special needs prominently featured

**Breakthrough Insights:**
1. **Flow change:** Travel details FIRST hooks users before asking for personal info
2. **Conditional logic:** Age drives which options appear — reduces clutter significantly
3. **Profile saving:** Critical for business travellers who book frequently
4. **Confirmation echo:** Builds confidence for special assistance requests

**Techniques That Worked Well:**
- Role Playing revealed persona-specific pain points
- SCAMPER systematically optimized each field category
- Six Thinking Hats validated from regulatory, emotional, and creative angles

---

## Next Steps

1. **Design:** Create wireframes/mockups for the 4-step flow
2. **Implement:** Build responsive frontend (React/Vue/etc.)
3. **Validate:** Test with real users matching our personas
4. **Integrate:** Connect JSON output to backend booking API

---

*Session completed: 2026-03-25*
*Total ideas: 45+ | Techniques: 3 | Duration: ~30 minutes*
