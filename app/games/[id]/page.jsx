// pages/index.js (Home component)

"use client";

import React from "react";
import GameProfile from "../../components/GameProfile";

const Home = ({ params: { id } }) => {
  return (
    <body className="bg-black text-white">
      <GameProfile id={id} />
    </body>
  );
};

export default Home;
