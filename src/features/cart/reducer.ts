import type { CartAction, CartState } from './types';

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) return state;
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };

    case 'CONFIRM_ORDER':
      return {
        ...state,
        isOrderConfirmed: true
      };

    case 'RESET_ORDER':
      return {
        items: [],
        isOrderConfirmed: false
      };

    default:
      return state;
  }
};