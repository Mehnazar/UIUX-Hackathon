"use client";

import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="bg-white text-[#22202E] border-b">
      <div className="flex justify-between items-center px-4 py-3 md:px-6">
        {/* Search Icon */}
        <CiSearch className="text-xl md:text-2xl cursor-pointer hover:text-[#2A254B] transition-colors" />

        {/* Logo */}
        <Link href="/">
          <h2 className="font-normal text-xl md:text-2xl hover:text-[#2A254B] transition-colors cursor-pointer">Avion</h2>
        </Link>

        {/* Cart and User Icons */}
        <div className="flex items-center gap-3">
          <Link href={"/cart"} className="relative">
            <IoCartOutline className="text-xl md:text-2xl hover:text-[#2A254B] transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#2A254B] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href={"/login"}>
            <FaRegUser className="text-xl md:text-2xl hover:text-[#2A254B] transition-colors" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
