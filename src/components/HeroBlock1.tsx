import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroBlock1 = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto mt-10 px-6 md:px-20 items-center">
      {/* Left Section - Text & Button */}
      <div className="w-full md:w-1/2 bg-[#2A254B] text-white p-6 md:p-20 rounded-lg">
        <h2 className="font-clash-display text-2xl md:text-3xl font-normal leading-snug">
          The furniture brand for the future, with timeless designs
        </h2>
        <Button className="mt-6 bg-[#F9F9F926] px-6">View collection</Button>
        <p className="font-satoshi text-base md:text-lg mt-6">
          A new era in eco-friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors, and a beautiful way to
          display things digitally using modern web technologies.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={"/images/Right Image.svg"}
          alt="Furniture"
          width={670}
          height={1280}
          className="w-full md:w-auto h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default HeroBlock1;
