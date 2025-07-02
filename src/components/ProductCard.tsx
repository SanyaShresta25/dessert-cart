import React, { useContext } from 'react';
import type { Product } from '../features/cart/types';
import { CartContext } from '../features/cart/CartContext';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const context = useContext(CartContext);
  if (!context) throw new Error('ProductCard must be used within a CartProvider');

  const { isInCart, addToCart } = context;
  const inCart = isInCart(product.id);

  return (
    <div className="rounded-2xl overflow-hidden font-sans">
      <div className="relative">
        <picture>
          <source media="(max-width: 640px)" srcSet={product.imageMobile} />
          <source media="(max-width: 1024px)" srcSet={product.imageTablet} />
          <img
            src={product.imageDesktop}
            alt={product.name}
            className="w-full h-48 sm:h-56 object-cover rounded-2xl"
          />
        </picture>
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => !inCart && addToCart(product)}
            disabled={inCart}
            className={`px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold border-2 transition-all whitespace-nowrap min-w-max
              ${inCart
                ? 'bg-red-600 text-white cursor-not-allowed'
                : 'bg-white border-red-600 text-red-600 hover:bg-red-600 hover:text-white'}`}
            type="button"
            aria-label={inCart ? 'Already in cart' : 'Add to cart'}
            title={inCart ? 'Already in cart' : 'Add to cart'}
          >
            <img src="/assets/images/icon-add-to-cart.svg" alt="" className="w-4 h-4" />
            {inCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <div className="p-4 pt-8 text-[16px]">
        <p className="text-sm text-rose-400 mb-1">{product.category}</p>
        <h3 className="font-semibold text-rose-900 mb-1">{product.name}</h3>
        <p className="text-red-600 font-bold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
