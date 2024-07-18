// SuggestedGamesList.jsx

"use client";

import React from "react";
import useSuggestedGames from "../Hooks/useSuggestedGames";
import Image from "next/image";
import Pagination from "./Pagination";
import SkeletonCard from "./SkeltonCard";
import GameCard from "./GameCard";

const SuggestedGamesList = ({ id }) => {
  const [page, setPage] = React.useState(1);
  const { games, loading, error } = useSuggestedGames(id);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  return (
    <React.Fragment>
      {games && games.results.length > 0 && (
        <h1 className="text-5xl font-bold ml-4 mb-10">
          Games of the same series
        </h1>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 mx-4 mr-8">
        {loading
          ? Array.from({ length: 9 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : games.results &&
            games.results
              //   .filter((game) => game.genres.some((g) => g.name === "Action"))
              .map((game, index) => (
                <GameCard
                  key={game.id}
                  game={game}
                  index={index}
                  genre="Action"
                />
              ))}
      </div>
      {games && games.results.length > 30 && (
        <div className="items-center mb-10 justify-center flex">
          <Pagination
            pageNum={page}
            onPageChange={handlePageChange}
            next={games.next ? true : false}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default SuggestedGamesList;
