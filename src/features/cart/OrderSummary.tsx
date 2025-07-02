import React from 'react';

const OrderSummary: React.FC<{ totalPrice: number }> = ({ totalPrice }) => (
  <div className="mb-6 pt-4 border-t border-rose-100">
    <div className="flex justify-between items-center">
      <span className="text-lg font-semibold text-rose-900">Order Total</span>
      <span className="text-xl font-bold text-rose-900">${totalPrice.toFixed(2)}</span>
    </div>
  </div>
);

export default OrderSummary;
