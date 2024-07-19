// pages/index.js

import React from "react";
import GameListtop10 from "../components/GameListtop10";
import NavBar from "../components/NavBar";
import Aside from "../components/Aside";
import Bread from "../components/BreadCrumbs";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <body className="bg-black text-white">
      <NavBar />

      <Aside className="pr-10">
        <main className="flex min-h-screen flex-col justify-between w-full">
          <Bread />
          <h1 className="text-7xl text-white text-bold mx-3 mb-8 font-bold">
            Top 10 Games
          </h1>
          <GameListtop10 />
        </main>
      </Aside>
    </body>
  );
};

export default Home;
