// pages/index.js

import React from "react";
import GamesList from "./components/GameList";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";
import Bread from "./components/BreadCrumbs";
import Heading from "./components/Heading";

const Home = () => {
  return (
    <body className="bg-black text-white">
      <NavBar />

      <Aside className="pr-10">
        <main className="flex min-h-screen flex-col justify-between w-full">
          {/* <Bread /> */}
          <Heading />
          <GamesList />
        </main>
      </Aside>
    </body>
  );
};

export default Home;
