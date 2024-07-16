// GamesList.jsx

"use client";

import React from "react";
import useGames from "../Hooks/useGames";
import Image from "next/image";
import Pagination from "./Pagination";
import SkeletonCard from "./SkeltonCard";
import GameCard from "./GameCard";

const GamesList = () => {
  const [page, setPage] = React.useState(1);
  const { games, loading, error } = useGames({ pageNum: page });

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-items-center">
        {loading
          ? Array.from({ length: 30 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : games.results &&
            games.results.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
      </div>
      <Pagination pageNum={page} onPageChange={handlePageChange} next={true} />
    </React.Fragment>
  );
};

export default GamesList;
