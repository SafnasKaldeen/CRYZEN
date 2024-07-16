import React from "react";

const Aside = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open h-screen">
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
      <div className="drawer-side h-full">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu text-base-content w-80 h-full">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 3</a>
          </li>
          <li>
            <a>Sidebar Item 4</a>
          </li>
          <li>
            <a>Sidebar Item 5</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
