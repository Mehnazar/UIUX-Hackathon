import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Cart = () => {
  return (
    <div className="px-4 py-6 md:px-10 md:py-12">
      {/* Cart Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-spacing-2">
        {/* Headers */}
        <div className="bg-gray-100 font-Satoshi text-base px-4 py-2 text-center md:text-left">
          Product
        </div>
        <div className="bg-gray-100 font-Satoshi text-base px-4 py-2 text-center md:text-left">
          Quantity
        </div>
        <div className="bg-gray-100 font-Satoshi text-base px-4 py-2 text-center md:text-left">
          Total
        </div>

        {/* Product 1 */}
        <div className="flex flex-col md:flex-row items-center bg-gray-100 p-4 gap-4">
          <Image src="/images/Product Image.svg" alt="vase" width={109} height={134} />
          <div className="text-center md:text-left">
            <h2 className="font-Clash-Display text-lg">Graystone Vase</h2>
            <p className="text-sm">A timeless ceramic vase with a tri-color grey glaze.</p>
            <p className="font-medium mt-1">£85</p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-gray-100 px-4 py-2">
          <Input type="number" className="w-16 text-center" />
        </div>
        <div className="bg-gray-100 font-Satoshi text-base px-4 py-2 text-center">£85</div>

        {/* Product 2 */}
        <div className="flex flex-col md:flex-row items-center bg-gray-100 p-4 gap-4">
          <Image src="/images/Product Image (1).svg" alt="vase" width={109} height={134} />
          <div className="text-center md:text-left">
            <h2 className="font-Clash-Display text-lg">Basic White Vase</h2>
            <p className="text-sm">Beautiful and simple, this is one for the classics.</p>
            <p className="font-medium mt-1">£125</p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-gray-100 px-4 py-2">
          <Input type="number" className="w-16 text-center" />
        </div>
        <div className="bg-gray-100 font-Satoshi text-base px-4 py-2 text-center">£125</div>
      </div>

      {/* Subtotal Section */}
      <div className="mt-8 text-center md:text-right">
        <h2 className="text-xl font-Clash-Display">Subtotal: £210</h2>
        <p className="text-sm text-gray-600 mt-2">Taxes and shipping are calculated at checkout.</p>
        <Button className="mt-4 px-6 py-2 bg-[#2A254B] text-white w-full md:w-auto">
          Go to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
