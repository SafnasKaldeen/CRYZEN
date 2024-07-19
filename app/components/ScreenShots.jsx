import React from "react";
import useScreenshots from "../Hooks/useScreenshots";
import Image from "next/image";

const ScreenShots = ({ id }) => {
  const { screenshots, loading, error } = useScreenshots(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <React.Fragment>
      {/* <h1 className="text-5xl font-bold ml-4 mb-10">Gameplay Screenshots</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 mx-4 mr-14">
        {screenshots.results.map((screenshot) => (
          <div
            key={screenshot.id}
            className="card card-side bg-black cursor-pointer transform hover:scale-105 transition-all duration-300"
          >
            <Image
              src={screenshot.image}
              alt={screenshot.id}
              width={500}
              height={250}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ScreenShots;
