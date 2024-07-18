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
      return <MdComputer className="text-1xl text-white hover:text-blue-400" />;
    case "Web":
      return <MdWeb className="text-1xl text-white hover:text-blue-400" />;
    case "Neo Geo":
      return <FaNeos className="text-1xl text-white hover:text-blue-400" />;
    case "PlayStation":
      return (
        <FaPlaystation className="text-1xl text-white hover:text-blue-400" />
      );
    case "iOS":
      return <FaApple className="text-1xl text-white hover:text-blue-400" />;
    case "Xbox":
      return <FaXbox className="text-1xl text-white hover:text-blue-400" />;
    case "Apple Macintosh":
      return <FaApple className="text-1xl text-white hover:text-blue-400" />;
    case "Android":
      return <FaAndroid className="text-1xl text-white hover:text-blue-400" />;
    case "Linux":
      return <FaLinux className="text-1xl text-white hover:text-blue-400" />;
    case "Nintendo":
      return (
        <SiNintendogamecube className="text-1xl text-white hover:text-blue-400" />
      );
    case "Atari":
      return <SiAtari className="text-1xl text-white hover:text-blue-400" />;
    case "Commodore / Amiga":
      return (
        <SiCommodore className="text-1xl text-white hover:text-blue-400" />
      );
    case "SEGA":
      return <SiSega className="text-1xl text-white hover:text-blue-400" />;
    case "3DO":
      return <SiD3Dotjs className="text-1xl text-white hover:text-blue-400" />;
    default:
      return null;
  }
};

const Platforms = ({ platforms }) => {
  return (
    <div className="flex space-x-2 pb-2 pt-2">
      {platforms.map((platform) => (
        <div key={platform.id} className="text-white">
          {RenderIcon({ platform: platform.platform.name })}
        </div>
      ))}
    </div>
  );
};

export default Platforms;
