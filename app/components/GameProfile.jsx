import React from "react";
import SuggestedGameList from "../components/SuggestedGameList";
import useGame from "../Hooks/useGameID";
import NavBar from "../components/NavBar";
import Aside from "../components/Aside";
import ScreenShots from "../components/ScreenShots";
import Platforms from "../components/Platforms";

const GameProfile = ({ id }) => {
  const { game, loading, error } = useGame(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!game) {
    return <div>No game found</div>;
  }

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0"
        style={{
          height: "100vh",
          backgroundImage: `url(${game.background_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
          filter: "blur(2px)",
          opacity: 0.4,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 75%, black 100%)",
          }}
        ></div>
      </div>
      <div className="relative z-10">
        <NavBar />
        <Aside className="pr-10">
          <main className="flex flex-col justify-between w-full min-h-screen">
            <h1 className="text-7xl text-white mx-3 mb-8 font-bold z-10">
              {game.name}
            </h1>
            <div className="flex flex-row items-center mb-5">
              <span className="flex flex-col ml-3 badge badge-zinc-900 p-5">
                <Platforms
                  platforms={game.parent_platforms}
                  size={"text-2xl"}
                />
              </span>
              <span className="font-semibold ml-3">
                Average Playtime: {game.playtime} hours
              </span>
            </div>

            <div className="mt-9">
              <div className="flex flex-col items-center mb-5">
                <ScreenShots id={id} />
              </div>
            </div>
            <div className="relative z-10 mb-6">
              <SuggestedGameList id={id} />
            </div>
          </main>
        </Aside>
      </div>
    </div>
  );
};

export default GameProfile;
