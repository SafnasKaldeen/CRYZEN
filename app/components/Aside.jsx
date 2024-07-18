import React from "react";
import GenreList from "../components/GenreList";
import Releases from "../components/Releases";
import Top from "../components/Top";

const Aside = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open  ml-5">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col lg:items-start lg:justify-start">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Side Menu
        </label>
        {children}
      </div>
      <div className="drawer-side h-auto">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Top />
        <Releases />
        <GenreList />
      </div>
    </div>
  );
};

export default Aside;
