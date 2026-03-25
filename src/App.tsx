import React from 'react';
import { ProgressBar } from './components/ProgressBar';
import { TravelDetailsStep } from './components/steps/TravelDetailsStep';
import { PersonalInfoStep } from './components/steps/PersonalInfoStep';
import { PaymentStep } from './components/steps/PaymentStep';
import { ExtrasStep } from './components/steps/ExtrasStep';
import { Button } from './components/ui/Button';
import { useBookingForm } from './hooks/useBookingForm';

const STEP_LABELS = ['Travel', 'Passengers', 'Payment', 'Extras'];

function App() {
  const {
    currentStep,
    travelDetails,
    passengerCounts,
    passengers,
    payment,
    extras,
    updateTravelDetails,
    updatePassengerCounts,
    updatePassenger,
    updatePayment,
    updateExtras,
    setPassengers,
    nextStep,
    prevStep,
    getBookingData,
  } = useBookingForm();

  const [showJSON, setShowJSON] = React.useState(false);

  const handleNext = () => {
    if (currentStep === 4) {
      setShowJSON(true);
    } else {
      nextStep();
    }
  };

  const generateJSON = () => {
    const bookingData = getBookingData();
    return {
      booking: {
        tripType: bookingData.travelDetails.tripType,
        origin: bookingData.travelDetails.origin,
        destination: bookingData.travelDetails.destination,
        departureDate: bookingData.travelDetails.departureDate,
        returnDate: bookingData.travelDetails.returnDate,
        cabinClass: bookingData.travelDetails.cabinClass,
        flexibleDates: bookingData.travelDetails.flexibleDates,
        passengers: {
          adults: bookingData.passengerCounts.adults,
          children: bookingData.passengerCounts.children,
          infants: bookingData.passengerCounts.infants,
          details: bookingData.passengers,
        },
        baggage: {
          checked: bookingData.extras.checkedBags,
        },
        extras: {
          selectedExtras: bookingData.extras.selectedExtras,
          specialAssistance: bookingData.extras.specialAssistance,
          mealPreference: bookingData.extras.mealPreference,
          allergies: bookingData.extras.allergies,
          seatPreference: bookingData.extras.seatPreference,
          infantOptions: bookingData.extras.infantOptions,
        },
        payment: {
          cardholderName: bookingData.payment.cardholderName,
          cardLast4: bookingData.payment.cardNumber.slice(-4),
          saveForFuture: bookingData.payment.saveForFuture,
        },
        promoCode: bookingData.payment.promoCode,
      },
    };
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-dark text-white px-6 py-6 text-center">
          <h1 className="text-2xl mb-2">Book Your Flight</h1>
          <p className="opacity-80 text-sm">Complete the form to book your flight</p>
        </div>

        <ProgressBar currentStep={currentStep} totalSteps={4} steps={STEP_LABELS} />

        {currentStep === 1 && (
          <TravelDetailsStep
            travelDetails={travelDetails}
            passengerCounts={passengerCounts}
            onUpdateTravelDetails={updateTravelDetails}
            onUpdatePassengerCounts={updatePassengerCounts}
          />
        )}

        {currentStep === 2 && (
          <PersonalInfoStep
            passengerCounts={passengerCounts}
            passengers={passengers}
            onUpdatePassenger={updatePassenger}
            onSetPassengers={setPassengers}
          />
        )}

        {currentStep === 3 && (
          <PaymentStep payment={payment} onUpdatePayment={updatePayment} />
        )}

        {currentStep === 4 && (
          <>
            <ExtrasStep
              extras={extras}
              travelDetails={travelDetails}
              passengerCounts={passengerCounts}
              onUpdateExtras={updateExtras}
            />
            {showJSON && (
              <div className="px-6 pb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  JSON Output (for integration)
                </label>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-blue-300 font-mono text-xs whitespace-pre-wrap break-words">
                    {JSON.stringify(generateJSON(), null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </>
        )}

        <div className="flex justify-between px-6 py-6 bg-gray-50 border-t border-gray-200">
          <Button
            variant="secondary"
            onClick={prevStep}
            style={{ visibility: currentStep === 1 ? 'hidden' : 'visible' }}
          >
            Previous
          </Button>
          <Button variant="primary" onClick={handleNext}>
            {currentStep === 4 ? 'Complete Booking' : 'Next Step'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
