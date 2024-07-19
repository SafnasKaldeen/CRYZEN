// pages/index.js

import React from "react";
import GameListtopSearch from "../../components/GameListtopSearch";
import NavBar from "../../components/NavBar";
import Aside from "../../components/Aside";
import Bread from "../../components/BreadCrumbs";
import Heading from "../../components/Heading";

const Home = ({ params: { name } }) => {
  return (
    <body className="bg-black text-white">
      <NavBar />
      <Aside className="pr-10">
        <main className="flex min-h-screen flex-col justify-between w-full">
          <Bread />
          <h1 className="text-7xl text-white text-bold mx-3 mb-8 font-bold">
            Searching for: {name}
          </h1>
          <GameListtopSearch name={name} />
        </main>
      </Aside>
    </body>
  );
};

export default Home;
