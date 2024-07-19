import React, { useState } from "react";
import useAchievements from "../Hooks/useAchievements";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Button,
  Image as NextImage,
} from "@nextui-org/react";
import Image from "next/image";

const Achievements = ({ id }) => {
  const { achievements, loading, error } = useAchievements(id);
  const initialCount = 8;
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  const handleShowLess = () => {
    setVisibleCount(initialCount);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <React.Fragment>
      <h2 className="text-2xl font-bold mb-4 ml-3 hover:opacity-50">
        Achievement Badges
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 w-auto">
        {achievements.results.slice(0, visibleCount).map((achievement) => (
          <Card
            key={achievement.id}
            className="max-w-[400px] bg-slate-700 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:glass"
          >
            <CardHeader className="flex gap-3 items-center p-4 bg-slate-800">
              <Image
                alt={achievement.name}
                height={50}
                width={50}
                src={achievement.image}
                className="rounded"
              />
              <div className="flex flex-col">
                <p className="text-lg font-semibold text-white">
                  {achievement.name}
                </p>
                <p className="text-sm text-gray-400">{achievement.percent}%</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="p-4 text-white">
              <p className="text-base">{achievement.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {visibleCount < achievements.results.length && (
          <Button
            onClick={handleSeeMore}
            className="btn btn-outline btn-info mx-4"
          >
            See More
          </Button>
        )}
        {visibleCount > initialCount && (
          <Button
            onClick={handleShowLess}
            className="btn btn-outline btn-error mx-4"
          >
            Show Less
          </Button>
        )}
      </div>
    </React.Fragment>
  );
};

export default Achievements;
