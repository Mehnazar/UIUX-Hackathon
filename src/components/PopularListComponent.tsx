import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const ProductListComponent = () => {
  return (
    <div className="px-4 py-8 md:px-6">
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Product 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/Pd1 (1).svg"
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
            src="/images/Pd1 (2).svg"
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
            src="/images/Pd1 (3).svg"
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
            src="/images/Pd1 (4).svg"
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

export default ProductListComponent;
