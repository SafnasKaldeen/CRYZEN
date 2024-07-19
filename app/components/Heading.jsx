"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

const platformDictionary = {
  1: "PC",
  2: "PlayStation",
  3: "Xbox",
  4: "iOS",
  8: "Android",
  5: "Apple Macintosh",
  6: "Linux",
  7: "Nintendo",
  9: "Atari",
  10: "Commodore / Amiga",
  11: "SEGA",
  12: "3DO",
  13: "Neo Geo",
  14: "Web",
};

const Heading = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Calculate the heading title based on current URL parameters
  const platformId = searchParams.get("parent_platforms");
  const genre = searchParams.get("genres");
  const platformName = platformDictionary[platformId] || "";
  let headingTitle = "HOME";

  if (platformName && genre) {
    headingTitle = `${platformName} ${genre} Games`;
  } else if (platformName) {
    headingTitle = `${platformName} Games`;
  } else if (genre) {
    headingTitle = `${genre.charAt(0).toUpperCase() + genre.slice(1)} Games`;
  }

  return (
    <h1 className="text-7xl text-white text-bold mx-3 mb-8 font-bold">
      {headingTitle}
    </h1>
  );
};

export default Heading;
