import { useEffect, useState } from "react";
import { dummyGames } from "../DummyData/games.js";

const useTrailers = (id) => {
  const [trailers, setScreenshots] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScreenshots = async () => {
      // setScreenshots(dummyGames);
      // setLoading(false);
      setLoading(true); // Set loading to true when page changes
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${id}/movies?key=${process.env.NEXT_PUBLIC_API_KEY}&page_size=30`,
          { next: { revalidate: 3600 } }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Screenshots");
        }
        const data = await response.json();
        setScreenshots(data);
        setLoading(false);
        console.log("Screenshots: ", data);
      } catch (error) {
        setError(error);
        // setScreenshots(dummyGames);
        setLoading(false);
      }
    };

    fetchScreenshots();

    // Cleanup function (optional)
    return () => {
      // Perform cleanup if needed
    };
  }, [id]); // Depend on pageNum to refetch data when it changes

  return { trailers, loading, error };
};

export default useTrailers;
