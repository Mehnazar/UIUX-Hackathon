"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Toast from "./Toast";

const Listing = () => {
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
      <div className="w-full h-auto px-6 py-10">
        <h2 className="font-normal text-2xl md:text-3xl text-center md:text-left">New Ceramics</h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6">
        {products.map((product) => (
          <div key={product.id} className="text-center group">
            <div className="relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                height={375}
                width={305}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
            </div>
            <p className="mt-2 font-medium">{product.name}</p>
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
    id: "1",
    image: "/images/Photo.svg",
    name: "The Dandy Chair",
    price: "£250",
    priceValue: 250,
    description: "A timeless design with modern comfort"
  },
  {
    id: "2",
    image: "/images/Photo (1).svg",
    name: "Rustic Vase Set",
    price: "£155",
    priceValue: 155,
    description: "Beautiful handcrafted vase set"
  },
  {
    id: "3",
    image: "/images/Photo (2).svg",
    name: "The Silky Vase",
    price: "£125",
    priceValue: 125,
    description: "Elegant vase with smooth finish"
  },
  {
    id: "4",
    image: "/images/Photo (3).svg",
    name: "The Lucy Lamp",
    price: "£399",
    priceValue: 399,
    description: "Modern lamp with ambient lighting"
  },
];

export default Listing;
