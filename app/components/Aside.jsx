import React from "react";
import GenreList from "../components/GenreList";
import Releases from "../components/Releases";
import Top from "../components/Top";
import PlatformList from "../components/PlatformList";

const Aside = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open ml-5 relative">
      {/* Checkbox to toggle drawer */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Content area */}
      <div className="drawer-content flex flex-col lg:items-start lg:justify-start">
        {/* Right chevron icon */}
        <label
          htmlFor="my-drawer-2"
          className="lg:hidden fixed top-1/2 right-4 z-50 p-2 bg-black rounded-full cursor-pointer"
          aria-label="open sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </label>
        {children}
      </div>

      {/* Drawer side with conditional background for small screens */}
      <div className="drawer-side h-screen overflow-y-auto">
        {/* Overlay that appears when drawer is open on small screens */}
        <label
          htmlFor="my-drawer-2"
          className="drawer-overlay lg:hidden bg-black bg-opacity-80"
          aria-label="close sidebar"
        ></label>
        <div className="p-4 text-white bg-black lg:bg-transparent bg-opacity-80 lg:bg-opacity-0">
          {/* Content of the drawer */}
          <Top />
          <Releases />
          <PlatformList />
          <GenreList />
        </div>
      </div>
    </div>
  );
};

export default Aside;
