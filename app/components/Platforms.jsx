import React from "react";
import { MdComputer, MdWeb } from "react-icons/md";
import { FaNeos } from "react-icons/fa6";
import {
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import {
  SiNintendogamecube,
  SiAtari,
  SiCommodore,
  SiSega,
  SiD3Dotjs,
} from "react-icons/si";

const RenderIcon = ({ platform }) => {
  switch (platform) {
    case "PC":
      return <MdComputer className="text-2xl" />;
    case "Web":
      return <MdWeb className="text-2xl" />;
    case "Neo Geo":
      return <FaNeos className="text-2xl" />;
    case "PlayStation":
      return <FaPlaystation className="text-2xl" />;
    case "iOS":
      return <FaApple className="text-2xl" />;
    case "Xbox":
      return <FaXbox className="text-2xl" />;
    case "Apple Macintosh":
      return <FaApple className="text-2xl" />;
    case "Android":
      return <FaAndroid className="text-2xl" />;
    case "Linux":
      return <FaLinux className="text-2xl" />;
    case "Nintendo":
      return <SiNintendogamecube className="text-2xl" />;
    case "Atari":
      return <SiAtari className="text-2xl" />;
    case "Commodore / Amiga":
      return <SiCommodore className="text-2xl" />;
    case "SEGA":
      return <SiSega className="text-2xl" />;
    case "3DO":
      return <SiD3Dotjs className="text-2xl" />;
    default:
      return null;
  }
};

const Platforms = ({ platforms, size }) => {
  return (
    <div className="flex space-x-4 pb-2 pt-2">
      {platforms &&
        platforms.map((platform) => (
          <div
            key={platform.id}
            className={`text-white hover:text-blue-400 ${size}`}
          >
            {RenderIcon({ platform: platform.platform.name })}
          </div>
        ))}
    </div>
  );
};

export default Platforms;
