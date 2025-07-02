import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import type { Product } from './types';

const CartItem: React.FC<{ item: Product }> = ({ item }) => {
  const context = useContext(CartContext);
  if (!context) throw new Error('CartItem must be used within a CartProvider');
  const { removeFromCart } = context;

  return (
    <div className="flex items-center justify-between py-4 border-b border-rose-100 last:border-b-0 font-sans">
      <div className="flex-1">
        <h4 className="font-semibold text-rose-900 text-sm">{item.name}</h4>
        <div className="flex items-center gap-4 mt-1">
          <span className="text-red-600 font-semibold">1x</span>
          <span className="text-rose-400 text-sm">@ ${item.price.toFixed(2)}</span>
          <span className="font-semibold text-rose-900">${item.price.toFixed(2)}</span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => removeFromCart(item.id)}
        className="ml-4 text-rose-400 hover:text-red-500 transition-colors p-1 rounded-full border border-rose-300 hover:border-red-300"
        title={`Remove ${item.name} from cart`}
        aria-label={`Remove ${item.name}`}
      >
        <img src="/assets/images/icon-remove-item.svg" alt="Remove Item Icon" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default CartItem;
