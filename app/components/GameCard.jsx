// GameCard.jsx

import React from "react";
import Image from "next/image";

const GameCard = ({ game, index }) => (
  <div key={game.id} className="card glass w-80 h-auto">
    <figure>
      <Image
        src={game.background_image}
        alt={game.name}
        className="w-full h-60 object-cover rounded-t-lg"
        width={320}
        height={180}
        loading={index < 6 ? "eager" : "lazy"}
      />
    </figure>
    <div className="card-body p-4">
      <h2 className="card-title text-xl font-semibold whitespace-nowrap overflow-hidden hover:whitespace-normal">
        {game.name}
      </h2>
      <p className="text-gray-500">
        {game.genres.map((genre) => genre.name).join(", ")}
      </p>
    </div>
  </div>
);

export default GameCard;
