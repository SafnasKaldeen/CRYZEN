// GameCard.jsx

import React from "react";
import Image from "next/image";

const GameCard = ({ game, index }) => (
  <div className="card bg-zinc-900 w-full max-w-xs hover:glass transition-all duration-300 transform hover:scale-105">
    <figure>
      <Image
        src={game.background_image}
        alt={game.name}
        className="w-full h-40 rounded-t-lg"
        width={320}
        height={180}
        objectFit="cover"
        loading={index < 6 ? "eager" : "lazy"}
      />
    </figure>
    <div className="card-body p-4">
      <h2 className="card-title text-xl font-semibold whitespace-nowrap overflow-hidden hover:whitespace-normal">
        {game.name}
      </h2>
      <p className="text-gray-400">
        {game.genres.map((genre) => genre.name).join(", ")}
      </p>
    </div>
  </div>
);

export default GameCard;
