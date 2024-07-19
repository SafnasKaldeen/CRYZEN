import React from "react";

import { FaPlaystation } from "react-icons/fa6";
import { FaSteam } from "react-icons/fa6";
import { SiEpicgames } from "react-icons/si";
import { FaXbox } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";
import { RiXboxLine } from "react-icons/ri";
import { GoGlobe } from "react-icons/go";
import { SiNintendogamecube } from "react-icons/si";
import { FaGooglePlay } from "react-icons/fa6";
import { FaItchIo } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa6";

const RenderIcon = ({ store }) => {
  switch (store) {
    case "Steam":
      return <FaSteam className="text-3xl" />;
    case "Xbox 360 Store":
      return <RiXboxLine className="text-3xl" />;
    case "Epic Games":
      return <SiEpicgames className="text-3xl" />;
    case "PlayStation Store":
      return <FaPlaystation className="text-3xl" />;
    case "App Store":
      return <FaApple className="text-3xl" />;
    case "Xbox Store":
      return <FaXbox className="text-3xl" />;
    case "GOG":
      return <GoGlobe className="text-3xl" />;
    case "Google Play":
      return <FaGooglePlay className="text-3xl" />;
    case "Nintendo Store":
      return <SiNintendogamecube className="text-3xl" />;
    case "itch.io":
      return <FaItchIo className="text-3xl" />;
    default:
      return <FaWordpress className="text-3xl" />;
  }
};

const storeBatch = ({ store, size }) => {
  return (
    <div className="card card-side mb-2 px-2 bg-zinc-900 cursor-pointer transform hover:scale-105 items-center justify-center hover:bg-slate-200 pt-1 text-white hover:text-black transition-colors duration-300">
      <div className="w-8 h-8 rounded flex items-center justify-center">
        <RenderIcon store={store} />
      </div>
      <div className="card-body p-2">
        <h2 className="font-semibold">{store}</h2>
      </div>
    </div>
  );
};

export default storeBatch;
