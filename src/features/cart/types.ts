export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageDesktop: string;
  imageTablet: string;
  imageMobile: string;
  thumbnail: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOrderConfirmed: boolean;
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'CLEAR_CART' }
  | { type: 'CONFIRM_ORDER' }
  | { type: 'RESET_ORDER' };

export interface CartContextType {
  cart: CartState;
  totalItems: number;
  totalPrice: number;
  isInCart: (productId: number) => boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  confirmOrder: () => void;
  resetOrder: () => void;
}
