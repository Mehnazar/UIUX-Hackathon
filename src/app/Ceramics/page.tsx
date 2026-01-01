import React from 'react';
import CeramicsHero from '@/components/CeramicsHero';
import CeramicsListing from '@/components/CeramicsListing';
import SignUp from '@/components/SignUp';
import FeatureBlock from '@/components/FeatureBlock';

const Ceramics = () => {
  return (
    <div className="px-4 md:px-6 max-w-screen-xl mx-auto space-y-10 md:space-y-16">
      <CeramicsHero />
      <CeramicsListing />
      <FeatureBlock />
      <SignUp />
    </div>
  );
};

export default Ceramics;
