"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Toast from "./Toast";

const Popular = () => {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.priceValue,
      image: product.image,
      description: product.description,
    });
    setToastMessage(`${product.name} added to cart!`);
    setShowToast(true);
  };

  return (
    <>
      {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} />}
      <div className="w-full h-auto px-4 sm:px-6 mt-10 mb-10">
      <h2 className="font-normal text-2xl sm:text-3xl md:text-4xl text-center md:text-left mb-6">
        Our Popular Products
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="text-center group">
            <div className="relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={product.width}
                height={product.height}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
            </div>
            <p className="font-medium mt-2">{product.name}</p>
            <p className="mt-1 text-gray-600">{product.price}</p>
            <Button
              onClick={() => handleAddToCart(product)}
              className="mt-3 w-full bg-[#2A254B] text-white hover:bg-[#1a1530] transition-colors"
            >
              Add to Cart
            </Button>
          </div>
        ))}
      </div>

        {/* Centered Button */}
        <div className="flex justify-center mt-10">
          <Link href="/ProductListing">
            <Button className="bg-gray-100 text-black hover:bg-gray-200 transition-colors">View Collection</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

// Product Data
const products = [
  {
    id: "5",
    image: "/images/Large.svg",
    name: "The Poplar Suede Sofa",
    price: "£980",
    priceValue: 980,
    width: 630,
    height: 375,
    description: "Luxurious suede sofa for ultimate comfort"
  },
  {
    id: "6",
    image: "/images/Parent (1).svg",
    name: "The Dandy Chair",
    price: "£250",
    priceValue: 250,
    width: 305,
    height: 375,
    description: "Classic chair with modern appeal"
  },
  {
    id: "7",
    image: "/images/Parent (2).svg",
    name: "The Dandy Chair",
    price: "£250",
    priceValue: 250,
    width: 305,
    height: 375,
    description: "Classic chair with modern appeal"
  },
];

export default Popular;
