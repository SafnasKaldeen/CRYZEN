// components/PlatformList.jsx
"use client";

import React from "react";
import usePlatform from "../Hooks/usePlatform";
import Link from "next/link";
import Plt from "../components/PlatformsAside";

const PlatformList = () => {
  const { Platforms, loading, error } = usePlatform();

  if (loading) {
    return (
      <React.Fragment>
        <div className="menu m-2">
          <h1 className="text-2xl font-bold mb-4">Platforms</h1>
        </div>
        <div style={{ width: "189.550px", height: "840px" }} className="m-4">
          Loading...
        </div>
      </React.Fragment>
    );
  }

  if (error) {
    return (
      <React.Fragment>
        <div className="menu m-2">
          <h1 className="text-2xl font-bold mb-4">Platforms</h1>
        </div>
        <div style={{ width: "189.550px", height: "840px" }} className="m-4">
          Error: {error.message}
        </div>
      </React.Fragment>
    );
  }

  const constructLinkWithParams = (platformId) => {
    const url = new URL(window.location.href);
    url.searchParams.set("parent_platforms", platformId);
    console.log(`${url.pathname}${url.search}`);
    return `${url.pathname}${url.search}`;
  };

  return (
    <ul className="menu m-2">
      <h1 className="text-2xl font-bold mb-4 transition-opacity duration-400 hover:opacity-50">
        Platforms
      </h1>
      {Platforms.results.map((platform) => (
        <Link href={constructLinkWithParams(platform.id)} key={platform.id}>
          <div className="card card-side mb-2 bg-transparent cursor-pointer transform hover:scale-105 transition-all duration-300 items-center justify-center group">
            <div className="w-8 h-8 bg-zinc-900 rounded flex items-center justify-center group-hover:bg-slate-200 pt-1 group-hover:text-black">
              <Plt
                size={"text-2xl"}
                platforms={[
                  {
                    platform: {
                      name: platform.name,
                    },
                  },
                ]}
              />
            </div>
            <div className="card-body p-2">
              <h2 className="font-semibold">{platform.name}</h2>
            </div>
          </div>
        </Link>
      ))}
    </ul>
  );
};

export default PlatformList;
