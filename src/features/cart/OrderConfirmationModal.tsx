import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import type { Product } from './types';

const OrderConfirmationModal: React.FC = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('OrderConfirmationModal must be used within a CartProvider');
  const { cart, totalPrice, resetOrder } = context;

  if (!cart.isOrderConfirmed) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-end sm:items-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-confirmation-title"
    >
      <div className="bg-white rounded-t-2xl sm:rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto font-sans shadow-lg animate-slide-up sm:animate-fade-in">
        {/* Header */}
        <div className="text-center px-6 pt-6 sm:pt-8">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <img src="/assets/images/icon-order-confirmed.svg" alt="Order Confirmed" className="w-6 h-6" />
          </div>
          <h2 id="order-confirmation-title" className="text-2xl font-bold text-rose-900 mb-1">
            Order Confirmed
          </h2>
          <p className="text-rose-500 text-sm mb-4">We hope you enjoy your food!</p>
        </div>

        
        <div className="bg-rose-50 px-6 py-4 rounded-lg mx-6 mb-6 space-y-3">
          {cart.items.map((item: Product) => (
            <div key={item.id} className="flex items-center justify-between border-b last:border-none pb-3">
              <div className="flex items-center gap-3">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="text-sm font-semibold text-rose-900">{item.name}</p>
                  <p className="text-xs text-rose-400">@ ${item.price.toFixed(2)}</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-rose-900">
                ${item.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        
        <div className="flex justify-between items-center text-lg font-bold text-rose-900 px-6 mb-6">
          <span>Order Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        
        <div className="px-6 pb-6">
          <button
            type="button"
            onClick={resetOrder}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-full font-semibold transition-colors text-sm"
            aria-label="Start a new order"
            title="Start New Order"
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
