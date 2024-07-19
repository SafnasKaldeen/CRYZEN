import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { dummyGames } from "../DummyData/games.js";

const useGames = () => {
  const [games, setGames] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams(); // Use useSearchParams to access query parameters

  useEffect(() => {
    const fetchGames = async () => {
      // Convert searchParams to an object
      const params = Object.fromEntries(searchParams.entries());
      console.log("Query Parameters:", params); // Log query parameters

      // Construct the URL with query parameters
      const url = new URL("https://api.rawg.io/api/games");
      url.searchParams.set("key", "8e74978f034041139f9453f11fce78aa");
      url.searchParams.set("page_size", "36");
      url.searchParams.set("page", params.page || "1");
      if (params.genres) {
        url.searchParams.set("genres", params.genres || "");
      }
      if (params.parent_platforms) {
        url.searchParams.set("parent_platforms", params.parent_platforms || "");
      }
      console.log("Constructed URL:", url.toString()); // Print the new URL

      // Simulate data fetching with dummy data
      // setGames(dummyGames);
      // setLoading(false);

      // Uncomment this part to use real data fetching

      try {
        const response = await fetch(url.toString(), {
          next: { revalidate: 3600 },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch games");
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
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
  }, [searchParams]); // Depend on searchParams to refetch data when it changes

  return { games, loading, error };
};

export default useGames;
