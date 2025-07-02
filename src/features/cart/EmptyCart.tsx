import React from 'react';

const EmptyCart: React.FC = () => (
  <div className="text-center py-8">
    <div className="w-24 h-24 mx-auto mb-4 bg-rose-100 rounded-full flex items-center justify-center">
     <img src="/assets/images/illustration-empty-cart.svg" alt="Empty Cart" className="w-24 h-24" />

    </div>
    <p className="text-rose-500 font-sans text-sm">Your added items will appear here</p>
  </div>
);

export default EmptyCart;