import React from 'react';
import { Input } from '../ui/Input';
import { Checkbox } from '../ui/Checkbox';
import { PaymentInfo } from '../../types/booking';

interface PaymentStepProps {
  payment: PaymentInfo;
  onUpdatePayment: (updates: Partial<PaymentInfo>) => void;
}

export const PaymentStep: React.FC<PaymentStepProps> = ({ payment, onUpdatePayment }) => {
  return (
    <div className="p-6">
      <h3 className="text-xl text-gray-900 mb-5 pb-3 border-b-2 border-primary">
        Payment Information
      </h3>

      <Input
        label="Cardholder Name"
        required
        placeholder="Name on card"
        value={payment.cardholderName}
        onChange={(e) => onUpdatePayment({ cardholderName: e.target.value })}
      />

      <Input
        label="Card Number"
        required
        placeholder="1234 5678 9012 3456"
        maxLength={19}
        value={payment.cardNumber}
        onChange={(e) => onUpdatePayment({ cardNumber: e.target.value })}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <Input
          label="Expiry Date"
          required
          placeholder="MM/YY"
          maxLength={5}
          value={payment.cardExpiry}
          onChange={(e) => onUpdatePayment({ cardExpiry: e.target.value })}
        />
        <Input
          label="CVV"
          required
          placeholder="123"
          maxLength={4}
          value={payment.cardCvv}
          onChange={(e) => onUpdatePayment({ cardCvv: e.target.value })}
        />
      </div>

      <Input
        label="Billing Address"
        required
        placeholder="Street address"
        value={payment.billingAddress}
        onChange={(e) => onUpdatePayment({ billingAddress: e.target.value })}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <Input
          label="City"
          required
          value={payment.billingCity}
          onChange={(e) => onUpdatePayment({ billingCity: e.target.value })}
        />
        <Input
          label="Postal Code"
          required
          value={payment.billingPostal}
          onChange={(e) => onUpdatePayment({ billingPostal: e.target.value })}
        />
      </div>

      <div className="mb-5">
        <Checkbox
          label="Save payment method for future bookings"
          checked={payment.saveForFuture}
          onChange={(e) => onUpdatePayment({ saveForFuture: e.target.checked })}
        />
      </div>

      <Input
        label="Promo Code (Optional)"
        placeholder="Enter code"
        value={payment.promoCode}
        onChange={(e) => onUpdatePayment({ promoCode: e.target.value })}
      />
    </div>
  );
};
