import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Popular = () => {
  return (
    <div className="w-full h-auto px-4 sm:px-6 mt-10 mb-10">
      <h2 className="font-normal text-2xl sm:text-3xl md:text-4xl text-center md:text-left mb-6">
        Our Popular Products
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <Image src={product.image} alt={product.name} width={product.width} height={product.height} className="w-full h-auto object-cover" />
            <p className="font-medium mt-2">{product.name}</p>
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
  { image: "/images/Large.svg", name: "The Poplar Suede Sofa", price: "£980", width: 630, height: 375 },
  { image: "/images/Parent (1).svg", name: "The Dandy Chair", price: "£250", width: 305, height: 375 },
  { image: "/images/Parent (2).svg", name: "The Dandy Chair", price: "£250", width: 305, height: 375 },
];

export default Popular;
