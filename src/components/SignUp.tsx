"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Simulate successful signup
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 3000);
  };

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
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <div className="w-full sm:w-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-gray-300 w-full sm:w-[300px]"
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto px-6 py-2 bg-[#2A254B] text-white hover:bg-[#1a1530] transition-colors">
            Sign up
          </Button>
        </form>

        {error && (
          <p className="text-red-600 text-sm mt-2">{error}</p>
        )}
        {success && (
          <p className="text-green-600 text-sm mt-2">Thank you for subscribing!</p>
        )}
      </div>
    </div>
  );
}

export default SignUp;
