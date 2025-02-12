import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

const ListingB2 = () => {
  return (
    <div className="px-4 py-8 md:px-6">
      {/* Grid layout for product items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Product 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/Photo.svg"
            alt="The Dandy chair"
            height={375}
            width={305}
            className="w-full h-auto"
          />
          <p className="mt-4 text-lg font-medium text-center">The Dandy chair</p>
          <p className="mt-2 text-gray-600 text-center">£250</p>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/Photo (1).svg"
            alt="Rustic Vase Set"
            height={375}
            width={305}
            className="w-full h-auto"
          />
          <p className="mt-4 text-lg font-medium text-center">Rustic Vase Set</p>
          <p className="mt-2 text-gray-600 text-center">£155</p>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/Photo (2).svg"
            alt="The Silky Vase"
            height={375}
            width={305}
            className="w-full h-auto"
          />
          <p className="mt-4 text-lg font-medium text-center">The Silky Vase</p>
          <p className="mt-2 text-gray-600 text-center">£125</p>
        </div>

        {/* Product 4 */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/Photo (3).svg"
            alt="The Lucy Lamp"
            height={375}
            width={305}
            className="w-full h-auto"
          />
          <p className="mt-4 text-lg font-medium text-center">The Lucy Lamp</p>
          <p className="mt-2 text-gray-600 text-center">£399</p>
        </div>
      </div>

      {/* View Collection Button */}
      <div className="flex justify-center mt-10">
        <Button className="bg-gray-100 text-black">View collection</Button>
      </div>
    </div>
  );
};

export default ListingB2;
