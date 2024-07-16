import { useEffect, useState } from "react";

const useGames = ({ pageNum }) => {
  const [games, setGames] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "https://api.rawg.io/api/games?key=8e74978f034041139f9453f11fce78aa&page_size=30&page=" +
            pageNum,
          { next: { revalidate: 3600 } }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch games");
        }
        const data = await response.json();
        setGames(data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchGames();

    // Cleanup function (optional)
    return () => {
      // Perform cleanup if needed
    };
  }, [pageNum]);

  return { games, loading, error };
};

export default useGames;
