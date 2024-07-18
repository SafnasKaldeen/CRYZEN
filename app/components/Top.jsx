"use client";

import React from "react";
import useGenres from "../Hooks/useGenres";
import Image from "next/image";

const Top = () => {
  return (
    <ul className="menu m-2">
      <h1 className="text-2xl font-bold mb-4 transition-opacity duration-400 hover:opacity-50">
        Top
      </h1>
      <div className="card card-side mb-2 bg-transparent cursor-pointer transform hover:scale-105 transition-all duration-300 items-center justify-center group">
        <div className="w-8 h-8 bg-zinc-900 rounded flex items-center justify-center group-hover:bg-slate-200 pt-1 pl-1">
          <svg
            className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.104 14.338c0-.2-.173-.324-.384-.273 0 0-.99.236-1.72.236s-1.72-.236-1.72-.236c-.21-.05-.384.072-.384.273v1.058c0 .2.179.365.397.365h3.414c.218 0 .397-.165.397-.365v-1.058zM16.033.73c0-.403-.355-.73-.794-.73H4.761c-.439 0-.794.327-.794.73v6.02c0 1.884.61 3.599 1.716 4.829A5.738 5.738 0 0010 13.499c1.67 0 3.202-.682 4.317-1.92 1.107-1.23 1.716-2.945 1.716-4.83V.73zM3.211 8.211C2.125 7.84 1.625 6.978 1.625 5.545V2.286h1.468V.827H.831c-.438 0-.794.327-.794.73v3.988c0 2.434 1.268 3.916 3.6 4.262a8.274 8.274 0 01-.426-1.596zm1.549 8.644c-.438 0-.793.327-.793.73v3.612c0 .402.355.73.794.73H15.24c.438 0 .793-.328.793-.73v-3.612c0-.403-.355-.73-.793-.73H4.76zM19.169.827h-2.262v1.46h1.468v3.258c0 1.433-.5 2.295-1.586 2.666a8.269 8.269 0 01-.426 1.596c2.332-.346 3.6-1.828 3.6-4.262V1.557c0-.403-.356-.73-.794-.73z"
            ></path>
          </svg>
        </div>
        <div className="card-body p-2">
          <h2 className="font-semibold">Best of the year</h2>
        </div>
      </div>
      <div className="card card-side mb-2 bg-transparent cursor-pointer transform hover:scale-105 transition-all duration-300 items-center justify-center group">
        <div className="w-8 h-8 bg-zinc-900 rounded flex items-center justify-center group-hover:bg-slate-200 pt-1">
          <svg
            className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M0 4h6v12H0V4zm9-4h6v16H9V0zm9 6h6v10h-6V6z"
            ></path>
          </svg>
        </div>
        <div className="card-body p-2">
          <h2 className="font-semibold">Popular in 2024</h2>
        </div>
      </div>
      <div className="card card-side mb-2 bg-transparent cursor-pointer transform hover:scale-105 transition-all duration-300 items-center justify-center group">
        <div className="w-8 h-8 bg-zinc-900 rounded flex items-center justify-center group-hover:bg-slate-200 pt-1">
          <svg
            className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M23.91 5.03a.636.636 0 01-.019.198l-1.535 5.867a.693.693 0 01-.673.505l-9.212.044H3.256c-.32 0-.6-.208-.677-.505L1.044 5.25a.637.637 0 01-.018-.204C.432 4.868 0 4.336 0 3.711c0-.772.657-1.4 1.465-1.4s1.466.628 1.466 1.4c0 .435-.209.824-.535 1.08l1.922 1.851c.486.468 1.16.736 1.85.736.815 0 1.592-.37 2.082-.99l3.159-3.999a1.365 1.365 0 01-.43-.989c0-.772.657-1.4 1.465-1.4.809 0 1.466.628 1.466 1.4 0 .374-.156.714-.407.966l.003.003 3.135 4.01c.49.625 1.27.999 2.088.999.696 0 1.35-.26 1.842-.73l1.935-1.847a1.375 1.375 0 01-.548-1.09c0-.772.657-1.4 1.465-1.4.809 0 1.466.628 1.466 1.4 0 .61-.41 1.127-.98 1.32zm-1.704 8.703c0-.368-.312-.666-.698-.666H3.458c-.385 0-.698.298-.698.666v1.6c0 .369.313.667.698.667h18.05c.386 0 .698-.298.698-.667v-1.6z"
            ></path>
          </svg>
        </div>
        <div className="card-body p-2">
          <h2 className="font-semibold">Top 100</h2>
        </div>
      </div>
    </ul>
  );
};

export default Top;
