import { useEffect, useState } from "react";
import { dummyGames } from "../DummyData/games.js";

const useAchievements = (id) => {
  const [achievements, setAchievements] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      // setAchievements(dummyGames);
      // setLoading(false);
      setLoading(true); // Set loading to true when page changes
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${id}/achievements?key=${process.env.NEXT_PUBLIC_API_KEY}&page_size=30`,
          { next: { revalidate: 3600 } }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Achievements");
        }
        const data = await response.json();
        setAchievements(data);
        setLoading(false);
        console.log("Achievements: ", data);
      } catch (error) {
        setError(error);
        // setAchievements(dummyGames);
        setLoading(false);
      }
    };

    fetchAchievements();

    // Cleanup function (optional)
    return () => {
      // Perform cleanup if needed
    };
  }, [id]); // Depend on pageNum to refetch data when it changes

  return { achievements, loading, error };
};

export default useAchievements;
