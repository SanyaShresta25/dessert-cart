import React, { useContext } from 'react';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import OrderSummary from './OrderSummary';
import CartActions from './CartActions';
import { CartContext } from './CartContext';

const Cart: React.FC = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('Cart must be used within a CartProvider');
  const { cart, totalItems, totalPrice, clearCart, confirmOrder } = context;

  return (
    <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
      <div className="bg-white rounded-xl p-6 shadow-sm lg:sticky lg:top-4 font-sans">
        <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-6 font-sans">
          Your Cart ({totalItems})
        </h2>

        {cart.items.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <CartList items={cart.items} />
            <OrderSummary totalPrice={totalPrice} />
            <CartActions confirmOrder={confirmOrder} clearCart={clearCart} />
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
