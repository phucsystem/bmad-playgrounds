import React from 'react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { RadioGroup } from '../ui/RadioGroup';
import { Counter } from '../ui/Counter';
import { Checkbox } from '../ui/Checkbox';
import { ExtrasInfo, TravelDetails, PassengerCounts, SeatPreference, MealType } from '../../types/booking';

interface ExtrasStepProps {
  extras: ExtrasInfo;
  travelDetails: TravelDetails;
  passengerCounts: PassengerCounts;
  onUpdateExtras: (updates: Partial<ExtrasInfo>) => void;
}

const extraOptions = [
  { id: 'insurance', title: 'Travel Insurance', description: 'Comprehensive coverage' },
  { id: 'esim', title: 'eSIM Data Pack', description: 'Stay connected abroad' },
  { id: 'lounge', title: 'Airport Lounge', description: 'Relax before your flight' },
  { id: 'priority', title: 'Priority Boarding', description: 'Board first' },
];

export const ExtrasStep: React.FC<ExtrasStepProps> = ({
  extras,
  travelDetails,
  passengerCounts,
  onUpdateExtras,
}) => {
  const handleAssistanceToggle = (value: string) => {
    const newAssistance = extras.specialAssistance.includes(value)
      ? extras.specialAssistance.filter((item) => item !== value)
      : [...extras.specialAssistance, value];
    onUpdateExtras({ specialAssistance: newAssistance });
  };

  const handleExtraToggle = (extraId: string) => {
    const extraTitle = extraOptions.find((opt) => opt.id === extraId)?.title || extraId;
    const newExtras = extras.selectedExtras.includes(extraTitle)
      ? extras.selectedExtras.filter((item) => item !== extraTitle)
      : [...extras.selectedExtras, extraTitle];
    onUpdateExtras({ selectedExtras: newExtras });
  };

  const getTotalPassengers = () => {
    const passengersList = [];
    if (passengerCounts.adults > 0)
      passengersList.push(`${passengerCounts.adults} Adult${passengerCounts.adults > 1 ? 's' : ''}`);
    if (passengerCounts.children > 0)
      passengersList.push(
        `${passengerCounts.children} Child${passengerCounts.children > 1 ? 'ren' : ''}`
      );
    if (passengerCounts.infants > 0)
      passengersList.push(`${passengerCounts.infants} Infant${passengerCounts.infants > 1 ? 's' : ''}`);
    return passengersList.join(', ');
  };

  const getCabinClassName = () => {
    return travelDetails.cabinClass
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="p-6">
      <h3 className="text-xl text-gray-900 mb-5 pb-3 border-b-2 border-primary">
        Additional Options
      </h3>

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Special Assistance
        </label>
        <div className="flex gap-3 flex-wrap">
          <Checkbox
            label="Wheelchair"
            checked={extras.specialAssistance.includes('wheelchair')}
            onChange={() => handleAssistanceToggle('wheelchair')}
          />
          <Checkbox
            label="Elder Assistance"
            checked={extras.specialAssistance.includes('elderAssist')}
            onChange={() => handleAssistanceToggle('elderAssist')}
          />
          <Checkbox
            label="Visual/Hearing Support"
            checked={extras.specialAssistance.includes('visualHearing')}
            onChange={() => handleAssistanceToggle('visualHearing')}
          />
        </div>
      </div>

      <Select
        label="Meal Preference"
        value={extras.mealPreference}
        onChange={(e) => onUpdateExtras({ mealPreference: e.target.value as MealType })}
        options={[
          { value: '', label: 'No preference' },
          { value: 'vegetarian', label: 'Vegetarian' },
          { value: 'vegan', label: 'Vegan' },
          { value: 'halal', label: 'Halal' },
          { value: 'kosher', label: 'Kosher' },
          { value: 'diabetic', label: 'Diabetic' },
          { value: 'glutenFree', label: 'Gluten Free' },
        ]}
      />

      <Input
        label="Allergies (Optional)"
        placeholder="e.g., peanuts, shellfish"
        value={extras.allergies}
        onChange={(e) => onUpdateExtras({ allergies: e.target.value })}
      />

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Baggage</label>
        <div className="flex gap-6 flex-wrap mt-2">
          <Counter
            label="Checked Bags (23kg)"
            value={extras.checkedBags}
            onChange={(value) => onUpdateExtras({ checkedBags: value })}
          />
        </div>
      </div>

      <RadioGroup
        label="Seat Preference"
        name="seatPref"
        options={[
          { value: 'window', label: 'Window' },
          { value: 'aisle', label: 'Aisle' },
          { value: 'none', label: 'No Preference' },
        ]}
        value={extras.seatPreference}
        onChange={(value) => onUpdateExtras({ seatPreference: value as SeatPreference })}
      />

      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Extras</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {extraOptions.map((extra) => {
            const isSelected = extras.selectedExtras.includes(extra.title);
            return (
              <div
                key={extra.id}
                onClick={() => handleExtraToggle(extra.id)}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  isSelected
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-300 hover:border-primary hover:bg-blue-50'
                }`}
              >
                <h5 className="text-sm mb-1 font-medium">{extra.title}</h5>
                <p className={`text-xs ${isSelected ? 'opacity-90' : 'opacity-80'}`}>
                  {extra.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h5 className="text-primary mb-3 text-sm font-medium">Booking Summary</h5>
        <div className="space-y-2">
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600 text-sm">Route</span>
            <span className="font-medium text-gray-900 text-sm">
              {travelDetails.origin || '-'} → {travelDetails.destination || '-'}
            </span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600 text-sm">Dates</span>
            <span className="font-medium text-gray-900 text-sm">
              {travelDetails.departureDate || '-'}
              {travelDetails.returnDate && ` - ${travelDetails.returnDate}`}
            </span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600 text-sm">Passengers</span>
            <span className="font-medium text-gray-900 text-sm">{getTotalPassengers()}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600 text-sm">Class</span>
            <span className="font-medium text-gray-900 text-sm">{getCabinClassName()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
