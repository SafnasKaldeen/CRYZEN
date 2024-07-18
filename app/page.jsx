// pages/index.js

import React from "react";
import GamesList from "./components/GameList";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";

const Home = () => {
  return (
    <body className="bg-black text-white">
      <NavBar />
      <Aside className="pr-10">
        <main className="flex min-h-screen flex-col justify-between w-full">
          <h1 className="text-7xl text-white text-bold mx-3 mb-8 font-bold">
            HOME
          </h1>
          <GamesList pageNum={2} />
        </main>
      </Aside>
    </body>
  );
};

export default Home;
