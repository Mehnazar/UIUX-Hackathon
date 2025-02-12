import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Listing = () => {
  return (
    <div className="w-full h-auto px-6 py-10">
      <h2 className="font-normal text-2xl md:text-3xl text-center md:text-left">New Ceramics</h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <Image src={product.image} alt={product.name} height={375} width={305} className="w-full h-auto object-cover" />
            <p className="mt-2 font-medium">{product.name}</p>
            <p className="mt-1 text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-10">
        <Button className="bg-gray-100 text-black">View Collection</Button>
      </div>
    </div>
  );
};

// Product Data
const products = [
  { image: "/images/Photo.svg", name: "The Dandy Chair", price: "£250" },
  { image: "/images/Photo (1).svg", name: "Rustic Vase Set", price: "£155" },
  { image: "/images/Photo (2).svg", name: "The Silky Vase", price: "£125" },
  { image: "/images/Photo (3).svg", name: "The Lucy Lamp", price: "£399" },
];

export default Listing;
