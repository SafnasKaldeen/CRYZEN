import React from "react";
import Link from "next/link";
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
      return <MdComputer className="text-1xl" />;
    case "Web":
      return <MdWeb className="text-1xl" />;
    case "Neo Geo":
      return <FaNeos className="text-1xl" />;
    case "PlayStation":
      return <FaPlaystation className="text-1xl" />;
    case "iOS":
      return <FaApple className="text-1xl" />;
    case "Xbox":
      return <FaXbox className="text-1xl" />;
    case "Apple Macintosh":
      return <FaApple className="text-1xl" />;
    case "Android":
      return <FaAndroid className="text-1xl" />;
    case "Linux":
      return <FaLinux className="text-1xl" />;
    case "Nintendo":
      return <SiNintendogamecube className="text-1xl" />;
    case "Atari":
      return <SiAtari className="text-1xl" />;
    case "Commodore / Amiga":
      return <SiCommodore className="text-1xl" />;
    case "SEGA":
      return <SiSega className="text-1xl" />;
    case "3DO":
      return <SiD3Dotjs className="text-1xl" />;
    default:
      return null;
  }
};

const Platforms = ({ platforms, size }) => {
  return (
    <div className="flex space-x-2 pb-2 pt-2">
      {platforms.map((platform) => (
        <div key={platform.id} className={" " + size}>
          {RenderIcon({ platform: platform.platform.name })}
        </div>
      ))}
    </div>
  );
};

export default Platforms;
