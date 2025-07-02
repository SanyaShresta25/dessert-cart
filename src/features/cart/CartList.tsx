import React from 'react';
import CartItem from './CartItem';
import type { Product } from './types';

const CartList: React.FC<{ items: Product[] }> = ({ items }) => (
  <div className="mb-6">
    {items.map((item) => (
      <CartItem key={item.id} item={item} />
    ))}
  </div>
);

export default CartList;
