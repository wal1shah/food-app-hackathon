"use client"; // This is a client component

import { useCart } from "@/context/cartcontext";
import { useState } from "react";

interface AddToCartButtonProps {
  product: {
    _id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [showMessage, setShowMessage] = useState(false);

  // Handle Add to Cart
  const handleAddToCart = () => {
    addToCart(product);
    setShowMessage(true);

    // Hide message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="relative">
      {/* ✅ Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-1/2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        Add to Cart
      </button>

      {showMessage && (
        <div className="absolute top-[100px] left-0 right-0 bg-green-500 text-white text-center py-2 px-4 rounded">
          ✅ Product added to cart!
        </div>
      )}
    </div>
  );
}
