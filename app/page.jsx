// pages/index.js

import React from "react";
import GamesList from "./components/GameList";
import Pagination from "./components/Pagination";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full py-8">
      <GamesList pageNum={2} />
    </main>
  );
};

export default Home;
