"use client";

import React from "react";
import useGenres from "../Hooks/useGenres";
import Link from "next/link";

const GenreList = () => {
  const { Genres, loading, error } = useGenres();

  if (loading) {
    return (
      <React.Fragment>
        <div className="menu m-2">
          <h1 className="text-2xl font-bold mb-4">Genres</h1>
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
          <h1 className="text-2xl font-bold mb-4">Genres</h1>
        </div>
        <div style={{ width: "189.550px", height: "840px" }} className="m-4">
          Error: {error.message}
        </div>
      </React.Fragment>
    );
  }

  const constructLinkWithParams = (genreSlug) => {
    const url = new URL(window.location.href);
    if (url.pathname.includes("games")) {
      url.pathname = "/";
    }
    url.searchParams.set("genres", genreSlug);
    console.log(`${url.pathname}${url.search}`);
    return `${url.pathname}${url.search}`;
  };

  return (
    <ul className="menu m-2">
      <h1 className="text-2xl font-bold mb-4 transition-opacity duration-400 hover:opacity-50">
        Genres
      </h1>
      {Genres.results.map((genre) => (
        <Link href={constructLinkWithParams(genre.slug)} key={genre.id}>
          <div className="card card-side mb-2 bg-black hover:glass cursor-pointer transform hover:scale-105 transition-all duration-300">
            <figure>
              <img
                src={genre.image_background}
                alt={genre.name}
                className="rounded-lg object-fit-cover w-8 h-8 ml-1"
              />
            </figure>
            <div className="card-body p-2">
              <h2 className="font-semibold">{genre.name}</h2>
            </div>
          </div>
        </Link>
      ))}
    </ul>
  );
};

export default GenreList;
