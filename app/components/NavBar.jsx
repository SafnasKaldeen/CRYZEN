"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import OrderBy from "../components/OrderBy";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <React.Fragment>
      <div className="flex justify-between items-center py-6 px-10 text-white">
        <Link href="/">
          <Image
            src="/logo.png"
            width={70}
            height={70}
            alt="logo"
            className="transition-transform transform hover:scale-110"
          />
        </Link>
        <div className="relative w-full mx-8">
          <input
            type="text"
            placeholder="Search 870474 games"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 pl-10 pr-4 bg-gray-700/30 text-white placeholder-gray-400 border border-gray-600 rounded-full focus:border-gray-500 focus:outline-none transition-all duration-300 focus:bg-black/40 hover:border-blue-400/40"
          />
          <Link href={`/search/${searchQuery}`}>
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
          </Link>
        </div>

        {/* `OrderBy` should be hidden on smaller screens */}
        <div className="hidden sm:block">
          <OrderBy />
        </div>
      </div>

      {/* `OrderBy` centered and taking full width on smaller screens */}
      <div className="sm:hidden flex justify-center w-full py-4">
        <OrderBy />
      </div>
    </React.Fragment>
  );
};

export default NavBar;
