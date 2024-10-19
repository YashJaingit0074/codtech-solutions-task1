import React from 'react';
import { ShopProvider } from './context/ShopContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { ShoppingBag } from 'lucide-react';

function App() {
  return (
    <ShopProvider>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold flex items-center">
              <ShoppingBag size={24} className="mr-2" />
              E-Commerce Store
            </h1>
          </div>
        </header>
        <main className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
              <ProductList />
            </div>
            <div>
              <Cart />
            </div>
          </div>
        </main>
      </div>
    </ShopProvider>
  );
}

export default App;