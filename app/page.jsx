// pages/index.js

import React from "react";
import GamesList from "./components/GameList";
import Pagination from "./components/Pagination";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col justify-between w-full">
      <h1 className="text-7xl text-white text-bold mx-3 mb-8 font-bold">
        HOME
      </h1>
      <GamesList pageNum={2} />
    </main>
  );
};

export default Home;
