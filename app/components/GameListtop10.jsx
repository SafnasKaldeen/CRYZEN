import React from "react";
import GameCard from "./GameCard";
import { Top10 } from "../DummyData/Top10";
import useGamesSearch from "../hooks/useGamesSearch";

const GameListtop10 = () => {
  const { games, loading, error } = useGamesSearch("cyber");

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 mx-4 mr-8 mb-5">
        {Top10.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default GameListtop10;
