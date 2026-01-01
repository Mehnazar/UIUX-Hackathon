"use client";

import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LiaSkype } from "react-icons/lia";
import { RiPinterestLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <div className="bg-[#2A254B] w-full text-white">
      {/* Footer Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-12">
        {/* Menu Section */}
        <div className="font-normal text-sm">
          <h1 className="font-Clash-Display mb-4 text-lg">Menu</h1>
          <ul className="space-y-2">
            <li className="font-Satoshi hover:text-gray-300 transition-colors cursor-pointer">New arrivals</li>
            <li className="font-Satoshi hover:text-gray-300 transition-colors cursor-pointer">Best sellers</li>
            <li className="font-Satoshi hover:text-gray-300 transition-colors cursor-pointer">Recently viewed</li>
            <li className="font-Satoshi hover:text-gray-300 transition-colors cursor-pointer">Popular this week</li>
            <li className="font-Satoshi hover:text-gray-300 transition-colors cursor-pointer">All products</li>
          </ul>
        </div>

        {/* Category Section */}
        <div className="font-normal text-sm">
          <h1 className="font-Clash-Display mb-4 text-lg">Categories</h1>
          <ul className="space-y-2">
            <li className="font-Satoshi hover:text-gray-300 transition-colors cursor-pointer">
              <Link href="/Crockery">Crockery</Link>
            </li>
            <li className="font-Satoshi hover:text-gray-300 transition-colors cursor-pointer">Furniture</li>
            <li className="font-Satoshi hover:text-gray-300 transition-colors cursor-pointer">Homeware</li>
            <li className="font-Satoshi hover:text-gray-300 transition-colors cursor-pointer">
              <Link href="/ProductListing2">Plant pots</Link>
            </li>
            <li className="font-Satoshi hover:text-gray-300 transition-colors cursor-pointer">
              <Link href="/ProductListing">Chairs</Link>
            </li>
          </ul>
        </div>

        {/* Our Company Section */}
        <div className="font-normal text-sm">
          <h1 className="font-Clash-Display mb-4 text-lg">Our company</h1>
          <ul className="space-y-2">
            <li className="font-Satoshi hover:text-gray-300 transition-colors cursor-pointer">
              <Link href="/about">About us</Link>
            </li>
            <li className="font-Satoshi hover:text-gray-300 transition-colors cursor-pointer">Vacancies</li>
            <li className="font-Satoshi hover:text-gray-300 transition-colors cursor-pointer">Contact us</li>
            <li className="font-Satoshi hover:text-gray-300 transition-colors cursor-pointer">Privacy</li>
            <li className="font-Satoshi hover:text-gray-300 transition-colors cursor-pointer">Returns policy</li>
          </ul>
        </div>

        {/* Email Signup */}
        <div>
          <h1 className="font-Clash-Display mb-4 text-lg">Join our mailing list</h1>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 bg-white text-black"
              required
            />
            <Button type="submit" className="bg-white text-[#2A254B] hover:bg-gray-200 transition-colors">
              Sign up
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#4E4D93]">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-6 gap-4">
          <h2 className="text-sm font-normal">Copyright 2022 Avion LTD</h2>
          <div className="flex gap-6 text-white">
            <a href="#" className="hover:text-gray-300 transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Facebook">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Skype">
              <LiaSkype size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Twitter">
              <FiTwitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Pinterest">
              <RiPinterestLine size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
