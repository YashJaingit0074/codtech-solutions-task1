import React from 'react';
import { useShopContext } from '../context/ShopContext';
import { Trash2, Plus, Minus } from 'lucide-react';

const Cart: React.FC = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useShopContext();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-500 hover:text-red-500 mr-2"
                >
                  <Minus size={20} />
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="text-gray-500 hover:text-green-500 ml-2"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-bold">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors flex items-center"
              >
                <Trash2 size={20} className="mr-2" />
                Clear Cart
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;