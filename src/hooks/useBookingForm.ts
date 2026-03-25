import { useState } from 'react';
import {
  BookingData,
  TravelDetails,
  PassengerCounts,
  PassengerDetails,
  PaymentInfo,
  ExtrasInfo,
} from '../types/booking';

const initialTravelDetails: TravelDetails = {
  tripType: 'round-trip',
  origin: '',
  destination: '',
  departureDate: '',
  returnDate: '',
  cabinClass: 'economy',
  flexibleDates: false,
};

const initialPassengerCounts: PassengerCounts = {
  adults: 1,
  children: 0,
  infants: 0,
};

const initialPayment: PaymentInfo = {
  cardholderName: '',
  cardNumber: '',
  cardExpiry: '',
  cardCvv: '',
  billingAddress: '',
  billingCity: '',
  billingPostal: '',
  saveForFuture: false,
  promoCode: '',
};

const initialExtras: ExtrasInfo = {
  specialAssistance: [],
  mealPreference: '',
  allergies: '',
  checkedBags: 1,
  seatPreference: 'none',
  selectedExtras: [],
  infantOptions: [],
};

export const useBookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [travelDetails, setTravelDetails] = useState<TravelDetails>(initialTravelDetails);
  const [passengerCounts, setPassengerCounts] = useState<PassengerCounts>(initialPassengerCounts);
  const [passengers, setPassengers] = useState<PassengerDetails[]>([
    {
      type: 'adult',
      title: 'mr',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      nationality: 'VN',
      passport: {
        number: '',
        expiry: '',
      },
      contact: {
        email: '',
        phone: '',
      },
    },
  ]);
  const [payment, setPayment] = useState<PaymentInfo>(initialPayment);
  const [extras, setExtras] = useState<ExtrasInfo>(initialExtras);

  const updateTravelDetails = (updates: Partial<TravelDetails>) => {
    setTravelDetails((prev) => ({ ...prev, ...updates }));
  };

  const updatePassengerCounts = (updates: Partial<PassengerCounts>) => {
    setPassengerCounts((prev) => ({ ...prev, ...updates }));
  };

  const updatePassenger = (index: number, updates: Partial<PassengerDetails>) => {
    setPassengers((prev) => {
      const newPassengers = [...prev];
      newPassengers[index] = { ...newPassengers[index], ...updates };
      return newPassengers;
    });
  };

  const updatePayment = (updates: Partial<PaymentInfo>) => {
    setPayment((prev) => ({ ...prev, ...updates }));
  };

  const updateExtras = (updates: Partial<ExtrasInfo>) => {
    setExtras((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getBookingData = (): BookingData => ({
    travelDetails,
    passengerCounts,
    passengers,
    payment,
    extras,
  });

  return {
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
  };
};
