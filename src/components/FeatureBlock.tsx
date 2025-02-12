import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";
import { VscFileSymlinkDirectory } from "react-icons/vsc";

const FeatureBlock = () => {
  return (
    <div className="mt-10 px-6 md:px-16">
      {/* Centered Heading */}
      <h3 className="font-clash-display font-normal text-2xl text-center mb-8">
        What makes our brand different
      </h3>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 font-satoshi">
        {/** Feature Items */}
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
            <feature.icon size={32} className="text-[#2A254B]" />
            <h4 className="font-bold mt-4">{feature.title}</h4>
            <p className="text-sm mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/** Feature Data */
const features = [
  {
    icon: TbTruckDelivery,
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard.",
  },
  {
    icon: CiCircleCheck,
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftsmanship.",
  },
  {
    icon: VscFileSymlinkDirectory,
    title: "Unbeatable prices",
    description: "For our materials and quality, you won’t find better prices anywhere.",
  },
  {
    icon: LuSprout,
    title: "Recycled packaging",
    description: "We use 100% recycled packaging to ensure our footprint is manageable.",
  },
];

export default FeatureBlock;
