"use client";

import { useCart } from "@/context/cartcontext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {/* ✅ Show Cart Items */}
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item._id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-700">${item.price}.00</p>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="bg-[#FF9F0D] text-white px-3 py-1 rounded hover:bg-yellow-300"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* ✅ Total Price & Checkout */}
          <div className="mt-6 p-4 bg-gray-200 rounded-lg">
            <h2 className="text-2xl font-bold">Total Bill:</h2>
            <p className="my-5 text-lg font-bold">
              Cart Subtotal:{" "}
              <span>
                ${totalPrice}
                .00
              </span>
            </p>
          </div>

          <div>
            <button
              className="w-full bg-[#FF9F0D] text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
              onClick={() => alert("Proceeding to Checkout")}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
