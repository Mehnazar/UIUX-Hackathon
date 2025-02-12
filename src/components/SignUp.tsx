import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignUp = () => {
  return (
    <div className="w-full h-auto bg-[#F9F9F9] py-10 px-4">
      <div className="max-w-[1273px] mx-auto bg-white border border-gray-300 p-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Join the club and get the benefits
        </h1>
        <p className="text-sm sm:text-base mt-4">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
        </p>

        {/* Responsive Form */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <Input 
            type="email" 
            placeholder="your@email.com" 
            className="px-4 py-2 border border-gray-300 w-full sm:w-[300px]"
          />
          <Button type="submit" className="w-full sm:w-auto px-6 py-2">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
