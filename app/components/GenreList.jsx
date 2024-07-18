"use client";

import React from "react";
import useGenres from "../Hooks/useGenres";
import Image from "next/image";

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

  return (
    <ul className="menu m-2">
      <h1 className="text-2xl font-bold mb-4 transition-opacity duration-400 hover:opacity-50">
        Genres
      </h1>
      {Genres.results.map((genre) => (
        <div
          className="card card-side mb-2 bg-black hover:glass cursor-pointer transform hover:scale-105 transition-all duration-300"
          key={genre.id}
        >
          <figure>
            {/* <Image
              src={genre.image_background}
              alt={genre.name}
              width={40}
              height={40}
              className="rounded-lg"
              objectFit="crop"
            /> */}
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
      ))}
    </ul>
  );
};

export default GenreList;
