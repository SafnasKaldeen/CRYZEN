import { useEffect, useState } from "react";
import { dummyGames } from "../DummyData/games.js";

const useSuggestedGames = (id) => {
  const [games, setGames] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      // setGames(dummyGames);
      // setLoading(false);
      setLoading(true); // Set loading to true when page changes
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${id}/game-series?key=8e74978f034041139f9453f11fce78aa&page_size=30`,
          { next: { revalidate: 3600 } }
        );
        console.log(
          "Fetching suggested games for game with ID: ",
          `https://api.rawg.io/api/games/${id}/game-series?key=8e74978f034041139f9453f11fce78aa`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch games");
        }
        const data = await response.json();
        setGames(data);
        setLoading(false);
        console.log("Suggested Games: ", data);
      } catch (error) {
        // setError(error);
        setGames(dummyGames);
        setLoading(false);
      }
    };

    fetchGames();

    // Cleanup function (optional)
    return () => {
      // Perform cleanup if needed
    };
  }, [id]); // Depend on pageNum to refetch data when it changes

  return { games, loading, error };
};

export default useSuggestedGames;
