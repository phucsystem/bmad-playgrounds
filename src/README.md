# Flight Booking Multi-Step Form

React + TypeScript + Tailwind CSS multi-step onboarding form for flight bookings.

## Project Structure

```
src/
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Counter.tsx
│   │   ├── Input.tsx
│   │   ├── RadioGroup.tsx
│   │   └── Select.tsx
│   ├── steps/           # Form step components
│   │   ├── TravelDetailsStep.tsx    # Step 1: Trip type, dates, passengers
│   │   ├── PersonalInfoStep.tsx     # Step 2: Passenger details
│   │   ├── PaymentStep.tsx          # Step 3: Payment information
│   │   └── ExtrasStep.tsx           # Step 4: Extras & summary
│   └── ProgressBar.tsx  # Step progress indicator
├── hooks/
│   └── useBookingForm.ts # Form state management hook
├── types/
│   └── booking.ts        # TypeScript interfaces
├── App.tsx               # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles with Tailwind

## Features

- 4-step form flow with progress indicator
- Responsive design (mobile-first)
- TypeScript strict mode
- Dynamic passenger forms based on counts
- Conditional infant options display
- JSON output for backend integration
- Tailwind CSS with custom theme colors (#667eea, #764ba2)

## Running the Application

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## Form Steps

1. **Travel Details**: Trip type, origin/destination, dates, cabin class, passenger counts
2. **Passenger Information**: Details for each passenger (adults, children, infants)
3. **Payment**: Card details and billing address
4. **Extras**: Assistance, meals, baggage, seat preferences, and booking summary

## State Management

The `useBookingForm` hook manages all form state including:
- Travel details
- Passenger counts and details
- Payment information
- Extras and preferences
- Step navigation

## JSON Output

Final step displays booking data in JSON format for backend integration.
