export type TripType = 'one-way' | 'round-trip' | 'multi-city';
export type CabinClass = 'economy' | 'premium-economy' | 'business' | 'first';
export type PassengerType = 'adult' | 'child' | 'infant';
export type SeatPreference = 'window' | 'aisle' | 'none';
export type MealType = '' | 'vegetarian' | 'vegan' | 'halal' | 'kosher' | 'diabetic' | 'glutenFree';

export interface PassengerDetails {
  type: PassengerType;
  title: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  passport: {
    number: string;
    expiry: string;
  };
  contact?: {
    email: string;
    phone: string;
  };
}

export interface TravelDetails {
  tripType: TripType;
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  cabinClass: CabinClass;
  flexibleDates: boolean;
}

export interface PassengerCounts {
  adults: number;
  children: number;
  infants: number;
}

export interface PaymentInfo {
  cardholderName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
  billingAddress: string;
  billingCity: string;
  billingPostal: string;
  saveForFuture: boolean;
  promoCode: string;
}

export interface ExtrasInfo {
  specialAssistance: string[];
  mealPreference: MealType;
  allergies: string;
  checkedBags: number;
  seatPreference: SeatPreference;
  selectedExtras: string[];
  infantOptions: string[];
}

export interface BookingData {
  travelDetails: TravelDetails;
  passengerCounts: PassengerCounts;
  passengers: PassengerDetails[];
  payment: PaymentInfo;
  extras: ExtrasInfo;
}
