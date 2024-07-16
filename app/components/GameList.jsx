"use client";

import React from "react";
import useGames from "../Hooks/useGames";
import Image from "next/image";
import Pagination from "./Pagination";

const GamesList = () => {
  const [page, setPage] = React.useState(1);
  const { games, loading, error } = useGames({ pageNum: page });

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-items-center">
        {games &&
          games.map((game) => (
            <div key={game.id} className="card glass w-80 h-auto">
              <figure>
                <Image
                  src={game.background_image}
                  alt={game.name}
                  className="w-full h-60 object-cover rounded-t-lg"
                  width={320}
                  height={180}
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-xl font-semibold">
                  {game.name}
                </h2>
                <p className="text-gray-500">Released: {game.released}</p>
              </div>
            </div>
          ))}
      </div>
      <Pagination pageNum={page} onPageChange={handlePageChange} />
    </React.Fragment>
  );
};

export default GamesList;
