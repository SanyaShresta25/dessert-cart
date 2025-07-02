
import ProductList from './components/ProductList';
import Cart from './features/cart/Cart';
import { CartProvider } from './features/cart/CartContext';
import OrderConfirmationModal from './features/cart/OrderConfirmationModal';

const App = () => (
  <CartProvider>
    <div className="min-h-screen bg-rose-50">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <ProductList />
          <Cart />
        </div>
      </div>
      <OrderConfirmationModal />
    </div>
  </CartProvider>
);

export default App;
