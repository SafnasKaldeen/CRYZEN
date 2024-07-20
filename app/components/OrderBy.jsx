"use client";

import React, { useState, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const OrderBy = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // default sort order
  const [shouldDisplay, setShouldDisplay] = useState(true);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);

    // Update the URL with the selected order parameter and sort order
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set(
      "ordering",
      sortOrder === "asc" ? newValue : `-${newValue}`
    );
    window.history.pushState(null, "", currentUrl.toString());
  };

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    // Update the URL with the selected order parameter and new sort order
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set(
      "ordering",
      newSortOrder === "asc" ? selectedValue : `-${selectedValue}`
    );
    window.history.pushState(null, "", currentUrl.toString());
  };

  // Initialize the selected value and sort order based on the current URL query parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const orderParam = urlParams.get("ordering");
    const path = window.location.pathname;

    if (
      path.includes("/games/") ||
      path.includes("/search/") ||
      path.includes("/Top-10")
    ) {
      setShouldDisplay(false);
    } else {
      if (orderParam) {
        const isDescending = orderParam.startsWith("-");
        const value = isDescending ? orderParam.substring(1) : orderParam;
        setSelectedValue(value);
        setSortOrder(isDescending ? "desc" : "asc");
      }
    }
  }, []);

  if (!shouldDisplay) return null; // Don't render anything if the component should not be displayed

  return (
    <div className="form-control w-full max-w-xs py-0 px-2">
      <div className="flex items-center space-x-2">
        <p
          className={`text-xs ${
            sortOrder === "asc" ? "text-green-400" : "text-red-400"
          }`}
        >
          {sortOrder === "asc" ? "Ascending" : "Descending"}
        </p>
        <button
          className="flex items-center justify-center p-2 text-gray-400"
          onClick={toggleSortOrder}
        >
          {sortOrder === "asc" ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        <select
          id="order-select"
          className="select select-bordered text-base py-2 pl-10 pr-4 bg-gray-700/30 text-white placeholder-zinc-900 border border-gray-600 rounded-full focus:border-gray-500 focus:outline-none transition-all duration-300 focus:bg-black/40 hover:border-blue-400/40"
          value={selectedValue}
          onChange={handleChange}
        >
          <option value="" disabled>
            {selectedValue ? `Order By: ${selectedValue}` : "Select an option"}
          </option>
          <option className="bg-zinc-900" value="released">
            Released
          </option>
          <option className="bg-zinc-900" value="name">
            Name
          </option>
          <option className="bg-zinc-900" value="rating">
            Rating
          </option>
          <option className="bg-zinc-900" value="metacritic">
            Metacritic
          </option>
        </select>
      </div>
    </div>
  );
};

export default OrderBy;
