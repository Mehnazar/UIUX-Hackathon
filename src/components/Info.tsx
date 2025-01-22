import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Info = () => {
  return (
    <div className='flex justify-between'>
        <div className='px-8 py-8 font-Clash-Display align-middle items-left '
        style={{
        top:72,
        left:84,
        right:84,
        gap: 25
        }} >
<h2 className='font-Clash-Display text-2xl mt-4 mb-4 px-60 '>From a studio in London to a global brand with
over 400 outlets</h2>
<p className='text-left mt-6 mb-6 px-60'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
     <p className='text-left mt-6 mb-6 px-60'>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
        <Button className="bg-[#F9F9F9] text-black mt-12 ml-60">Get in touch</Button>
        </div>
        
      <div>
        <Image
        src={"/images/Image (1).svg"}
        alt='sofa'
        width={720}
        height={603}
        className='mr-32'/>

      </div>
    </div>
  )
}

export default Info
