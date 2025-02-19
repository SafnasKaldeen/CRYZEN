"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(Cookies.get("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    Cookies.set("theme", theme, { expires: 365 });
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <label className="flex cursor-pointer gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={theme === "dark" ? "white" : "black"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={theme === "dark" ? "text-white" : "text-black"}
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <input
        type="checkbox"
        value="synthwave"
        className="toggle theme-controller"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={theme === "dark" ? "white" : "black"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={theme === "dark" ? "text-white" : "text-black"}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  );
};

export default ThemeToggler;
