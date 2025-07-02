import React from 'react';

interface Props {
  confirmOrder: () => void;
  clearCart: () => void;
}

const CartActions: React.FC<Props> = ({ confirmOrder, clearCart }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-2 text-sm text-rose-500 bg-green-50 p-3 rounded-lg">
      <img src="/assets/images/icon-carbon-neutral.svg" alt="Carbon Neutral" className="w-5 h-5" />
      <span>This is a carbon-neutral delivery</span>
    </div>
    <button
      type="button"
      onClick={confirmOrder}
      className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-full font-semibold transition-colors text-sm"
      title="Confirm Order"
      aria-label="Confirm Order"
    >
      Confirm Order
    </button>
    <button
      type="button"
      onClick={clearCart}
      className="w-full bg-rose-100 hover:bg-rose-200 text-rose-900 py-2 px-4 rounded-full font-semibold transition-colors text-sm"
      title="Clear Cart"
      aria-label="Clear Cart"
    >
      Clear All
    </button>
  </div>
);

export default CartActions;
