
import { createContext,  useReducer, type ReactNode } from 'react';
import { cartReducer } from './reducer';
import type { Product, CartContextType } from './types';

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
    isOrderConfirmed: false
  });

  const totalItems = cart.items.length;
  const totalPrice = cart.items.reduce((sum, item) => sum + item.price, 0);

  const isInCart = (productId: number) => cart.items.some(item => item.id === productId);
  const addToCart = (product: Product) => dispatch({ type: 'ADD_ITEM', payload: product });
  const removeFromCart = (id: number) => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });
  const confirmOrder = () => dispatch({ type: 'CONFIRM_ORDER' });
  const resetOrder = () => dispatch({ type: 'RESET_ORDER' });

  return (
    <CartContext.Provider value={{ cart, totalItems, totalPrice, isInCart, addToCart, removeFromCart, clearCart, confirmOrder, resetOrder }}>
      {children}
    </CartContext.Provider>
  );
};

