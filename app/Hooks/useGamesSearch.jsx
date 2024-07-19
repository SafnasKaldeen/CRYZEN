import { useEffect, useState } from "react";

const useGamesSearch = ({ search, pageNum }) => {
  const [games, setGames] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=8e74978f034041139f9453f11fce78aa&page_size=32&page=${pageNum}&search=${search}`,
          {
            next: { revalidate: 3600 },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch games");
        }
        const data = await response.json();
        console.log("Games: ", data);
        setGames(data);
      } catch (error) {
        // setGames(dummyGames);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();

    // Cleanup function (optional)
    return () => {
      // Perform cleanup if needed
    };
  }, [pageNum, search]); // Depend on searchParams and pageNum to refetch data when they change

  return { games, loading, error };
};

export default useGamesSearch;
