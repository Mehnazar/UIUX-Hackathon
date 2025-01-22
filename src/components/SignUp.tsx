import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignUp = () => {
  return (
    <div className='w-[1440px] h-[481px] bg-[#F9F9F9]'>
      <div className='w-[1273px] h-[364px] mt-[52px] ml-[93px] bg-white border border-gray-300 p-6'>
        <div className="text-center mt-4">
          <h1 className='text-4xl'>Join the club and get the benefits</h1>
          <p className='font-stoshi text-base mt-4'>
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores, and more
          </p>
        </div>
      </div>

      {/* Centered form under the gray border */}
      <div className="flex justify-center items-center mt-6">
        <div className="flex space-x-2">
          <Input 
            type="email" 
            placeholder="your@email.com" 
            className="px-4 py-2 border border-gray-300" 
          />
          <Button type="submit" className="px-6 py-2">Sign up</Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
