import React from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggler from "./ThemeToggler";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-6  px-10 text-white">
      <Image src="/logo.png" width={50} height={50} alt="logo" />
      <ThemeToggler />
    </div>
  );
};

export default NavBar;
