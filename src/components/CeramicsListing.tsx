"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { useCart } from '@/context/CartContext';
import Toast from './Toast';

const CeramicsListing = () => {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleAddToCart = (product: typeof ceramicsProducts[0]) => {
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
      <div className="px-4 py-8 md:px-6">
        {/* Grid layout for product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ceramicsProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Product Image - Fixed Size */}
              <div className="relative w-full h-64 overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col">
                <h3 className="text-lg font-medium text-[#2A254B] mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">
                  {product.description}
                </p>
                <p className="text-lg font-semibold text-[#2A254B] mb-3">{product.price}</p>
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-[#2A254B] text-white hover:bg-[#1a1530] transition-colors"
                >
                  Add to cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View Collection Button */}
        <div className="flex justify-center mt-10">
          <Button className="bg-gray-100 text-black hover:bg-gray-200 transition-colors px-8 py-2">
            View collection
          </Button>
        </div>
      </div>
    </>
  );
};

// Ceramics Products Data
const ceramicsProducts = [
  {
    id: "ceramic-1",
    image: "/images/ceramics1.webp",
    name: "Artisan Clay Vase",
    price: "£95",
    priceValue: 95,
    description: "A beautifully handcrafted clay vase with organic textures and earthy tones.",
  },
  {
    id: "ceramic-2",
    image: "/images/Photo (2).svg",
    name: "Minimalist Ceramic Bowl",
    price: "£65",
    priceValue: 65,
    description: "Contemporary ceramic bowl with a smooth matte finish.",
  },
  {
    id: "ceramic-3",
    image: "/images/Product Image.svg",
    name: "Rustic Dinner Plates Set",
    price: "£145",
    priceValue: 145,
    description: "Set of 4 handmade dinner plates with rustic glaze finish.",
  },
  {
    id: "ceramic-4",
    image: "/images/Photo (1).svg",
    name: "Handmade Ceramic Mug",
    price: "£35",
    priceValue: 35,
    description: "Charming handmade ceramic mug with comfortable handle.",
  },
  {
    id: "ceramic-5",
    image: "/images/Photo (3).svg",
    name: "Decorative Planter Pot",
    price: "£75",
    priceValue: 75,
    description: "Elegant ceramic planter with drainage hole and saucer.",
  },
];

export default CeramicsListing;
