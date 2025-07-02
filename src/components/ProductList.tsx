import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../types/product';

const ProductList: React.FC = () => {
  return (
    <div className="w-full lg:w-2/3 font-sans">
      <h1 className="text-3xl sm:text-4xl font-bold text-rose-900 mb-6 sm:mb-8">Desserts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
