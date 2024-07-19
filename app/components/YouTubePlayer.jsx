import React, { useState, useRef } from "react";
import useTrailers from "../Hooks/useTrailers";
import Image from "next/image";

const Trailers = ({ id }) => {
  const { trailers, loading, error } = useTrailers(id);
  const [hovered, setHovered] = useState(null);
  const videoRefs = useRef({});

  const handleMouseEnter = (id) => {
    setHovered(id);
    if (videoRefs.current[id]) {
      videoRefs.current[id].play();
    }
  };

  const handleMouseLeave = (id) => {
    setHovered(null);
    if (videoRefs.current[id]) {
      videoRefs.current[id].pause();
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 mx-4 mr-8">
        {trailers.results.map((trailer) => (
          <div
            key={trailer.id}
            className="relative group w-full cursor-pointer transform hover:scale-105 transition-all duration-300"
            onMouseEnter={() => handleMouseEnter(trailer.id)}
            onMouseLeave={() => handleMouseLeave(trailer.id)}
          >
            {/* Trailer preview image */}
            <Image
              src={trailer.preview}
              alt={trailer.id}
              width={500}
              height={250}
              objectFit="cover"
              className="rounded-lg"
            />

            {/* Trailer video */}
            <video
              ref={(el) => (videoRefs.current[trailer.id] = el)}
              className={`absolute inset-0 w-full h-full border-2 rounded-lg transition-opacity duration-300 ${
                hovered === trailer.id ? "opacity-100" : "opacity-0"
              }`}
              src={trailer.data.max}
              controls
            ></video>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Trailers;
