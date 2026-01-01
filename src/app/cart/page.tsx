"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import Link from "next/link";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="px-4 py-12 md:px-10 md:py-20 text-center">
        <h1 className="text-3xl font-Clash-Display mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Add some items to your cart to continue shopping.</p>
        <Link href="/">
          <Button className="bg-[#2A254B] text-white hover:bg-[#1a1530]">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 md:px-10 md:py-12">
      <h1 className="text-3xl font-Clash-Display mb-8">Your Shopping Cart</h1>

      {/* Cart Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-spacing-2">
        {/* Headers */}
        <div className="bg-gray-100 font-Satoshi text-base px-4 py-3 text-center md:text-left font-semibold">
          Product
        </div>
        <div className="bg-gray-100 font-Satoshi text-base px-4 py-3 text-center md:text-left font-semibold">
          Quantity
        </div>
        <div className="bg-gray-100 font-Satoshi text-base px-4 py-3 text-center md:text-left font-semibold">
          Total
        </div>

        {/* Cart Items */}
        {cartItems.map((item) => (
          <React.Fragment key={item.id}>
            {/* Product Info */}
            <div className="flex flex-col md:flex-row items-center bg-gray-50 p-4 gap-4 border border-gray-200">
              <Image
                src={item.image}
                alt={item.name}
                width={109}
                height={134}
                className="object-cover"
              />
              <div className="text-center md:text-left flex-1">
                <h2 className="font-Clash-Display text-lg font-medium">{item.name}</h2>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                <p className="font-medium mt-2 text-[#2A254B]">£{item.price}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex justify-center items-center bg-gray-50 px-4 py-2 border border-gray-200">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-2 hover:bg-gray-200 rounded transition-colors"
                  aria-label="Decrease quantity"
                >
                  <FiMinus />
                </button>
                <span className="w-12 text-center font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-2 hover:bg-gray-200 rounded transition-colors"
                  aria-label="Increase quantity"
                >
                  <FiPlus />
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 hover:bg-red-100 text-red-600 rounded transition-colors ml-2"
                  aria-label="Remove item"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>

            {/* Item Total */}
            <div className="bg-gray-50 font-Satoshi text-base px-4 py-2 flex items-center justify-center border border-gray-200">
              <span className="font-medium text-lg">£{item.price * item.quantity}</span>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Subtotal Section */}
      <div className="mt-8 text-center md:text-right border-t pt-6">
        <h2 className="text-2xl font-Clash-Display text-[#2A254B]">
          Subtotal: £{getCartTotal()}
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Taxes and shipping are calculated at checkout.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-end mt-6">
          <Link href="/">
            <Button variant="outline" className="w-full md:w-auto border-[#2A254B] text-[#2A254B] hover:bg-gray-100">
              Continue Shopping
            </Button>
          </Link>
          <Button className="w-full md:w-auto bg-[#2A254B] text-white hover:bg-[#1a1530] px-8 py-3">
            Go to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
