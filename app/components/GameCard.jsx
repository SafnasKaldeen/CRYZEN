import React from "react";
import Image from "next/image";
import Link from "next/link";
import Platforms from "../components/Platforms";

const returnColor = (rating) => {
  if (rating > 4) {
    return "text-green-400";
  } else if (rating > 3) {
    return "text-yellow-400";
  } else if (rating < 1) return "text-red-400";
  return "white";
};

const GameCard = ({ game, index }) => (
  <Link href={`/games/${game.id}`} passHref>
    <div className="card bg-zinc-900 w-full max-w-xs hover:glass transition-all duration-300 transform hover:scale-105 flex flex-col no-underline">
      <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
        <Image
          src={game.background_image}
          alt={game.name}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300"
        />
      </div>
      <div className="card-body p-4 flex-1 flex flex-col">
        <Platforms platforms={game.parent_platforms} />
        <div className="flex w-full justify-between items-center mb-2">
          <h2 className="card-title text-xl font-bold break-words whitespace-break-spaces overflow-hidden">
            {game.name}
          </h2>
          <span
            className={"text-sm pt-1 font-bold " + returnColor(game.rating)}
          >
            {game.rating}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex w-full justify-between items-center border-opacity-50 py-2">
            <span className="text-sm text-gray-400">Release Date:</span>
            <span className="text-sm font-semibold">{game.released}</span>
          </div>
          <div className="divider w-full m-0"></div>
          <div className="flex w-full justify-between items-center py-2">
            <span className="text-sm text-gray-400">Genres: </span>
            <span className="text-sm font-semibold">
              {game.genres.map((genre) => genre.name).join(", ")}
            </span>
          </div>
          <div className="divider w-full m-0"></div>
          <div className="flex w-full justify-between items-center py-2">
            <span className="text-sm text-gray-400">Ratings Count: </span>
            <span className="text-sm font-semibold">{game.ratings_count}</span>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default GameCard;
