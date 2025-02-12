import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Info = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-8 gap-8">
      
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="font-Clash-Display text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          From a studio in London to a global brand with over 400 outlets
        </h2>
        <p className="text-base md:text-lg mb-4">
          When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
        </p>
        <p className="text-base md:text-lg mb-6">
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design—our Chelsea boutique became the hotbed for the London interior design community.
        </p>
        <Button className="bg-[#F9F9F9] text-black px-6 py-2">Get in touch</Button>
      </div>
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/images/Image (1).svg"
          alt="sofa"
          width={720}
          height={603}
          className="w-full max-w-[720px] h-auto"
        />
      </div>
      
    </div>
  );
};

export default Info;
