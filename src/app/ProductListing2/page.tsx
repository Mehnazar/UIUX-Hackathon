import React from 'react';
import ListingB2 from '@/components/ListingB2';
import Image from 'next/image';
import ProductListComponent from '@/components/PopularListComponent';

const ProductListing2 = () => {
  return (
    <div className="px-4 md:px-6 max-w-screen-xl mx-auto space-y-8 sm:space-y-10 md:space-y-16">
      {/* Banner Image */}
      <div className="w-full">
        <Image
          src="/images/Frame 143.svg"
          alt="frame"
          width={1440}
          height={209}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Product Listings */}
      <div className="space-y-6 sm:space-y-8 md:space-y-12">
        <ListingB2 />
        <ProductListComponent />
        <ListingB2 />
      </div>
    </div>
  );
};

export default ProductListing2;