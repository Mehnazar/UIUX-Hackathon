import React from 'react'
import HeroBlock1 from '../components/HeroBlock1'
import FeatureBlock from '../components/FeatureBlock'
import Listing from '../components/Listing'
import Popular from '../components/Popular'

import Info from '../components/Info'
import SignUp from '@/components/SignUp'


const Home = () => {
  
  return (
    <div>
      <HeroBlock1/>
      <FeatureBlock/>
      <Listing/>
      <Popular/>
      <SignUp/>
      <Info/>
    
    </div>
  )
}

export default Home
