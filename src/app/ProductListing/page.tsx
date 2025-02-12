import React from 'react';

import ListingB3 from '@/components/ListingB3';
import ProductListing1 from '@/components/ProductListing1';
import SignUp from '@/components/SignUp';
import FeautureBlock from '@/components/FeatureBlock';

const ProductListing = () => {
  return (
    <div className="px-4 md:px-6 max-w-screen-xl mx-auto space-y-10 md:space-y-16">
      <ProductListing1 />
      <ListingB3 />
      <FeautureBlock />
      <SignUp />
    </div>
  );
};

export default ProductListing;
