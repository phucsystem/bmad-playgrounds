import React from 'react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { RadioGroup } from '../ui/RadioGroup';
import { Counter } from '../ui/Counter';
import { Checkbox } from '../ui/Checkbox';
import { TravelDetails, PassengerCounts, TripType, CabinClass } from '../../types/booking';

interface TravelDetailsStepProps {
  travelDetails: TravelDetails;
  passengerCounts: PassengerCounts;
  onUpdateTravelDetails: (updates: Partial<TravelDetails>) => void;
  onUpdatePassengerCounts: (updates: Partial<PassengerCounts>) => void;
}

const airports = [
  'SGN - Ho Chi Minh City',
  'HAN - Hanoi',
  'SIN - Singapore',
  'BKK - Bangkok',
  'HKG - Hong Kong',
  'NRT - Tokyo Narita',
  'ICN - Seoul Incheon',
  'SYD - Sydney',
  'LAX - Los Angeles',
  'LHR - London Heathrow',
];

export const TravelDetailsStep: React.FC<TravelDetailsStepProps> = ({
  travelDetails,
  passengerCounts,
  onUpdateTravelDetails,
  onUpdatePassengerCounts,
}) => {
  const showReturnDate = travelDetails.tripType !== 'one-way';

  return (
    <div className="p-6">
      <h3 className="text-xl text-gray-900 mb-5 pb-3 border-b-2 border-primary">
        Travel Details
      </h3>

      <RadioGroup
        label="Trip Type"
        name="tripType"
        required
        options={[
          { value: 'one-way', label: 'One Way' },
          { value: 'round-trip', label: 'Round Trip' },
          { value: 'multi-city', label: 'Multi-city' },
        ]}
        value={travelDetails.tripType}
        onChange={(value) => onUpdateTravelDetails({ tripType: value as TripType })}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            From <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            list="airports-from"
            placeholder="City or Airport"
            value={travelDetails.origin}
            onChange={(e) => onUpdateTravelDetails({ origin: e.target.value })}
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-base transition-all focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20"
          />
          <datalist id="airports-from">
            {airports.map((airport) => (
              <option key={airport} value={airport} />
            ))}
          </datalist>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            To <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            list="airports-to"
            placeholder="City or Airport"
            value={travelDetails.destination}
            onChange={(e) => onUpdateTravelDetails({ destination: e.target.value })}
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-base transition-all focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20"
          />
          <datalist id="airports-to">
            {airports.map((airport) => (
              <option key={airport} value={airport} />
            ))}
          </datalist>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <Input
          label="Departure Date"
          type="date"
          required
          value={travelDetails.departureDate}
          onChange={(e) => onUpdateTravelDetails({ departureDate: e.target.value })}
          min={new Date().toISOString().split('T')[0]}
        />
        {showReturnDate && (
          <Input
            label="Return Date"
            type="date"
            required
            value={travelDetails.returnDate}
            onChange={(e) => onUpdateTravelDetails({ returnDate: e.target.value })}
            min={travelDetails.departureDate || new Date().toISOString().split('T')[0]}
          />
        )}
      </div>

      <Select
        label="Cabin Class"
        required
        value={travelDetails.cabinClass}
        onChange={(e) => onUpdateTravelDetails({ cabinClass: e.target.value as CabinClass })}
        options={[
          { value: 'economy', label: 'Economy' },
          { value: 'premium-economy', label: 'Premium Economy' },
          { value: 'business', label: 'Business' },
          { value: 'first', label: 'First Class' },
        ]}
      />

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Passengers <span className="text-red-600">*</span>
        </label>
        <div className="flex gap-6 flex-wrap mt-2">
          <Counter
            label="Adults (12+)"
            value={passengerCounts.adults}
            onChange={(value) => onUpdatePassengerCounts({ adults: value })}
            min={1}
          />
          <Counter
            label="Children (2-11)"
            value={passengerCounts.children}
            onChange={(value) => onUpdatePassengerCounts({ children: value })}
          />
          <Counter
            label="Infants (<2)"
            value={passengerCounts.infants}
            onChange={(value) => onUpdatePassengerCounts({ infants: value })}
          />
        </div>
      </div>

      <div className="mb-5">
        <Checkbox
          label="Flexible dates (+/- 3 days)"
          checked={travelDetails.flexibleDates}
          onChange={(e) => onUpdateTravelDetails({ flexibleDates: e.target.checked })}
        />
      </div>
    </div>
  );
};
