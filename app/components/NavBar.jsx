import React from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggler from "./ThemeToggler";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-1 text-white bg-blue-400">
      <Image src="/logo.png" width={50} height={50} alt="logo" />
      <ThemeToggler />
    </div>
  );
};

export default NavBar;
