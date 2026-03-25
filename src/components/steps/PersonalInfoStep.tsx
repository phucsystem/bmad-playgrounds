import React, { useEffect } from 'react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Checkbox } from '../ui/Checkbox';
import { PassengerDetails, PassengerCounts } from '../../types/booking';

interface PersonalInfoStepProps {
  passengerCounts: PassengerCounts;
  passengers: PassengerDetails[];
  onUpdatePassenger: (index: number, updates: Partial<PassengerDetails>) => void;
  onSetPassengers: (passengers: PassengerDetails[]) => void;
}

export const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({
  passengerCounts,
  passengers,
  onUpdatePassenger,
  onSetPassengers,
}) => {
  useEffect(() => {
    const totalPassengers = passengerCounts.adults + passengerCounts.children + passengerCounts.infants;
    const currentPassengerCount = passengers.length;

    if (totalPassengers > currentPassengerCount) {
      const newPassengers = [...passengers];
      for (let passengerIndex = currentPassengerCount; passengerIndex < totalPassengers; passengerIndex++) {
        let passengerType: 'adult' | 'child' | 'infant' = 'adult';
        if (passengerIndex >= passengerCounts.adults + passengerCounts.children) {
          passengerType = 'infant';
        } else if (passengerIndex >= passengerCounts.adults) {
          passengerType = 'child';
        }

        newPassengers.push({
          type: passengerType,
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
          contact: passengerIndex === 0 ? { email: '', phone: '' } : undefined,
        });
      }
      onSetPassengers(newPassengers);
    } else if (totalPassengers < currentPassengerCount) {
      onSetPassengers(passengers.slice(0, totalPassengers));
    }
  }, [passengerCounts, passengers, onSetPassengers]);

  const [infantOptions, setInfantOptions] = React.useState<string[]>([]);

  const handleInfantOptionToggle = (option: string) => {
    setInfantOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  return (
    <div className="p-6">
      <h3 className="text-xl text-gray-900 mb-5 pb-3 border-b-2 border-primary">
        Passenger Information
      </h3>

      {passengers.map((passenger, index) => (
        <div key={index} className="bg-gray-50 rounded-xl p-5 mb-4">
          <h4 className="text-primary mb-4 text-base font-semibold">
            Passenger {index + 1} ({passenger.type.charAt(0).toUpperCase() + passenger.type.slice(1)})
            {index === 0 && ' - Lead Passenger'}
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-5">
            <div className="md:col-span-3">
              <Select
                label="Title"
                required
                value={passenger.title}
                onChange={(e) => onUpdatePassenger(index, { title: e.target.value })}
                options={[
                  { value: 'mr', label: 'Mr' },
                  { value: 'mrs', label: 'Mrs' },
                  { value: 'ms', label: 'Ms' },
                  { value: 'dr', label: 'Dr' },
                ]}
              />
            </div>
            <div className="md:col-span-4">
              <Input
                label="First Name"
                required
                placeholder="As on passport"
                value={passenger.firstName}
                onChange={(e) => onUpdatePassenger(index, { firstName: e.target.value })}
              />
            </div>
            <div className="md:col-span-5">
              <Input
                label="Last Name"
                required
                placeholder="As on passport"
                value={passenger.lastName}
                onChange={(e) => onUpdatePassenger(index, { lastName: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            <Input
              label="Date of Birth"
              type="date"
              required
              value={passenger.dateOfBirth}
              onChange={(e) => onUpdatePassenger(index, { dateOfBirth: e.target.value })}
            />
            <Select
              label="Gender"
              value={passenger.gender}
              onChange={(e) => onUpdatePassenger(index, { gender: e.target.value })}
              options={[
                { value: '', label: 'Select...' },
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
              ]}
            />
            <Select
              label="Nationality"
              required
              value={passenger.nationality}
              onChange={(e) => onUpdatePassenger(index, { nationality: e.target.value })}
              options={[
                { value: 'VN', label: 'Vietnam' },
                { value: 'SG', label: 'Singapore' },
                { value: 'TH', label: 'Thailand' },
                { value: 'US', label: 'United States' },
                { value: 'GB', label: 'United Kingdom' },
                { value: 'AU', label: 'Australia' },
                { value: 'JP', label: 'Japan' },
                { value: 'KR', label: 'South Korea' },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <Input
              label="Passport Number"
              required
              placeholder="e.g., A12345678"
              value={passenger.passport.number}
              onChange={(e) =>
                onUpdatePassenger(index, {
                  passport: { ...passenger.passport, number: e.target.value },
                })
              }
            />
            <Input
              label="Passport Expiry"
              type="date"
              required
              helperText="Must be valid for 6+ months after travel"
              value={passenger.passport.expiry}
              onChange={(e) =>
                onUpdatePassenger(index, {
                  passport: { ...passenger.passport, expiry: e.target.value },
                })
              }
            />
          </div>

          {index === 0 && passenger.contact && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Email"
                type="email"
                required
                placeholder="your@email.com"
                value={passenger.contact.email}
                onChange={(e) =>
                  onUpdatePassenger(index, {
                    contact: { ...passenger.contact!, email: e.target.value },
                  })
                }
              />
              <Input
                label="Phone"
                type="tel"
                required
                placeholder="+84 123 456 789"
                value={passenger.contact.phone}
                onChange={(e) =>
                  onUpdatePassenger(index, {
                    contact: { ...passenger.contact!, phone: e.target.value },
                  })
                }
              />
            </div>
          )}
        </div>
      ))}

      {passengerCounts.infants > 0 && (
        <div className="bg-yellow-50 border border-yellow-400 rounded-lg p-4 mt-4">
          <h5 className="text-yellow-800 text-sm mb-3 font-medium">
            Infant Options (for passengers under 2)
          </h5>
          <div className="flex gap-3 flex-wrap">
            <Checkbox
              label="Baby Seat Belt"
              checked={infantOptions.includes('seatBelt')}
              onChange={() => handleInfantOptionToggle('seatBelt')}
            />
            <Checkbox
              label="Bassinet Request"
              checked={infantOptions.includes('bassinet')}
              onChange={() => handleInfantOptionToggle('bassinet')}
            />
            <Checkbox
              label="Baby Sleepwear"
              checked={infantOptions.includes('sleepwear')}
              onChange={() => handleInfantOptionToggle('sleepwear')}
            />
          </div>
        </div>
      )}
    </div>
  );
};
