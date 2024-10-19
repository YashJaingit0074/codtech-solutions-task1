import React from 'react';
import { Product } from '../types';
import { useShopContext } from '../context/ShopContext';
import { ShoppingCart } from 'lucide-react';

const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Earbuds',
    price: 79.99,
    description: 'High-quality wireless earbuds with noise cancellation.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    description: 'Feature-packed smartwatch with health tracking capabilities.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 3,
    name: 'Portable Charger',
    price: 49.99,
    description: 'High-capacity portable charger for all your devices.',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
];

const ProductList: React.FC = () => {
  const { addToCart } = useShopContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center"
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;