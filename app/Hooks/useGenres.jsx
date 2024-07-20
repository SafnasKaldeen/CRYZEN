import { useEffect, useState } from "react";
import { dummyGames } from "../DummyData/games.js";
import dummyGenres from "../DummyData/genres.js";

const useGenres = () => {
  const [Genres, setGenres] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      setGenres(dummyGenres);
      setLoading(false);
      // setLoading(true); // Set loading to true when page changes
      // try {
      //   const response = await fetch(
      //     `https://api.rawg.io/api/genres?${process.env.NEXT_PUBLIC_API_KEY}`,
      //     { next: { revalidate: 3600 } }
      //   );
      //   if (!response.ok) {
      //     throw new Error("Failed to fetch Genres");
      //   }
      //   const data = await response.json();
      //   setGenres(data);
      //   setLoading(false);
      // } catch (error) {
      //   // setError(error);
      //   setGenres(dummyGenres);
      //   setLoading(false);
      // }
    };

    fetchGenres();

    // Cleanup function (optional)
    return () => {
      // Perform cleanup if needed
    };
  }, []); // Depend on pageNum to refetch data when it changes

  return { Genres, loading, error };
};

export default useGenres;
