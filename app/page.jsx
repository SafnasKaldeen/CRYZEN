import React, { Suspense } from "react";
import GamesList from "./components/GameList";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";
import Heading from "./components/Heading";

const Home = () => {
  return (
    <html lang="en">
      <head>
        <title>Home</title>
      </head>
      <body className="bg-black text-white">
        <NavBar />
        <Aside className="pr-10">
          <main className="flex min-h-screen flex-col justify-between w-full">
            <Heading />
            <Suspense fallback={<div>Loading...</div>}>
              <GamesList />
            </Suspense>
          </main>
        </Aside>
      </body>
    </html>
  );
};

export default Home;
