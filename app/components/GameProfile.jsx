import React from "react";
import SuggestedGameList from "../components/SuggestedGameList";
import useGame from "../Hooks/useGameID";
import NavBar from "../components/NavBar";
import Aside from "../components/Aside";
import ScreenShots from "../components/ScreenShots";
import Platforms from "../components/Platforms";
import StoreBatch from "./StoreBatch";
import YouTubePlayer from "../components/YouTubePlayer";
import AchievementsDisplay from "../components/AchievementsDisplay";
import Posts from "../components/Posts";

const returnColor = (metacritic) => {
  if (metacritic >= 80) {
    return "green-500";
  } else if (metacritic >= 50) {
    return "yellow-500";
  } else if (metacritic > 30) {
    return "white";
  } else {
    return "red-500";
  }
};

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
              <div
                className={`font-bold ml-3 border-2 p-2 rounded ${
                  game.metacritic
                    ? `border-${returnColor(game.metacritic)}`
                    : "border-gray-500"
                }`}
              >
                <p className={`text-${returnColor(game.metacritic)}`}>
                  {game.metacritic || "No Metacritic Score"}
                </p>
              </div>
              <span className="font-semibold ml-3">
                Average Playtime: {game.playtime} hours
              </span>
            </div>

            <div className="mt-9">
              <div className="flex flex-col items-center mb-5">
                {/* <ScreenShots id={id} /> */}
              </div>
            </div>
            <div className="flex flex-col mb-5 mx-3">
              {game.stores.length > 0 && (
                <h2 className="text-3xl text-white font-bold mb-5">
                  Stores Available
                </h2>
              )}
              <div className="flex flex-row flex-wrap gap-2">
                {game.stores.map((store) => (
                  <div
                    key={store.store.id}
                    className="flex flex-row items-center"
                  >
                    <StoreBatch store={store.store.name} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-9">
              <div className="flex flex-col items-center mb-5">
                {/* <YouTubePlayer id={id} /> */}
              </div>
            </div>
            {game.description_raw && (
              <div className="flex flex-col mb-5 ml-3">
                <h2 className="text-3xl text-white font-bold mb-5">About</h2>
                <p className="text-white text-lg mb-4 mr-10 leading-relaxed break-words text-justify">
                  {game.description_raw}
                </p>
              </div>
            )}
            <div className="relative z-10 mb-6 mr-6">
              {/* <AchievementsDisplay id={id} /> */}
            </div>
            <Posts id={id} />
            <div className="flex flex-col mb-5 mx-3">
              <h2 className="text-3xl text-white font-bold mb-5">Tags</h2>
              <div className="flex flex-row flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <div key={tag.id} className="flex flex-row items-center">
                    <StoreBatch store={tag.name} />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10 mb-6">
              {/* <SuggestedGameList id={id} /> */}
            </div>
          </main>
        </Aside>
      </div>
    </div>
  );
};

export default GameProfile;
