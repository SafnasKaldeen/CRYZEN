"use client";

import React from "react";
import useGenres from "../Hooks/useGenres";
import Image from "next/image";

const Releases = () => {
  return (
    <ul className="menu m-2">
      <h1 className="text-2xl font-bold mb-4 transition-opacity duration-400 hover:opacity-50">
        Releases
      </h1>
      <div className="card card-side mb-2 bg-transparent cursor-pointer transform hover:scale-105 transition-all duration-300 items-center justify-center group">
        <div className="w-8 h-8 bg-zinc-900 rounded flex items-center justify-center group-hover:bg-slate-200 pl-1">
          <svg
            className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4.929 25.819C1.783 16.36 8.43 12.909 8.43 12.909c-.465 5.046 2.679 8.977 2.679 8.977 1.156-.318 3.363-1.805 3.363-1.805 0 1.805-1.165 5.735-1.165 5.735s4.077-2.875 5.36-7.65c1.281-4.776-2.441-9.57-2.441-9.57.224 3.38-1.03 6.704-3.485 9.244.123-.13.226-.273.305-.43.441-.804 1.15-2.896.735-7.741C13.197 2.868 6.442 0 6.442 0 7.024 4.144 5.28 5.098 1.19 12.964c-4.09 7.864 3.74 12.855 3.74 12.855z"
            ></path>
          </svg>
        </div>

        <div className="card-body p-2">
          <h2 className="font-semibold text-white">Last 24 Hours</h2>
        </div>
      </div>

      <div className="card card-side mb-2 bg-transparent cursor-pointer transform hover:scale-105 transition-all duration-300 items-center justify-center group">
        <div className="w-8 h-8 bg-zinc-900 rounded flex items-center justify-center group-hover:bg-slate-200">
          <svg
            className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M23.48 10.876a1.84 1.84 0 00.435-1.841c-.205-.656-.737-1.124-1.39-1.223l-5.811-.881a.762.762 0 01-.572-.434L13.544 1C13.252.384 12.66 0 12 0s-1.251.384-1.543 1.001L7.86 6.497a.763.763 0 01-.573.434l-5.81.882C.821 7.91.29 8.38.085 9.035a1.84 1.84 0 00.435 1.842l4.204 4.278c.18.182.262.445.22.702l-.992 6.04a1.814 1.814 0 00.375 1.457 1.69 1.69 0 002.122.437l5.197-2.852a.749.749 0 01.707 0l5.197 2.852c.253.139.523.209.8.209.509 0 .99-.236 1.322-.646.33-.408.463-.926.375-1.457l-.992-6.04a.816.816 0 01.219-.702l4.204-4.279z"
            ></path>
          </svg>
        </div>
        <div className="card-body p-2">
          <h2 className="font-semibold">This week</h2>
        </div>
      </div>
      <div className="card card-side mb-2 bg-transparent cursor-pointer transform hover:scale-105 transition-all duration-300 items-center justify-center group">
        <div className="w-8 h-8 bg-zinc-900 rounded flex items-center justify-center group-hover:bg-slate-200 pt-2">
          <svg
            className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3.736 8.017V5.688h1.65c1.145 0 1.9-.635 1.9-1.601 0-.967-.736-1.565-1.929-1.565-1.174 0-1.966.69-2.003 1.73H.252C.298 1.657 2.31 0 5.432 0c2.982 0 5.031 1.482 5.031 3.627 0 1.528-1.034 2.733-2.543 3.01v.174c1.854.194 3.037 1.4 3.037 3.111 0 2.403-2.292 4.078-5.58 4.078C2.236 14 .12 12.306 0 9.702h3.261c.047 1.012.876 1.638 2.171 1.638 1.211 0 2.05-.681 2.05-1.675 0-1.022-.792-1.648-2.097-1.648H3.736zm11.845 5.624V3.406h-.177L12.16 5.569V2.66l3.421-2.3H19v13.282h-3.42z"
            ></path>
          </svg>
        </div>
        <div className="card-body p-2">
          <h2 className="font-semibold">This Month</h2>
        </div>
      </div>
    </ul>
  );
};

export default Releases;
