import { useEffect, useState } from "react";
import { dummyGames } from "../DummyData/games.js"; // Assuming you have dummy data for fallback

const useGame = (id) => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("No game ID provided");
      setLoading(false);
      return;
    }

    const fetchGame = async () => {
      setLoading(true); // Set loading to true when fetching data
      console.log("Fetching game with ID: ", id);
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${id}?key=8e74978f034041139f9453f11fce78aa`,
          { next: { revalidate: 3600 } }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch game");
        }
        const data = await response.json();
        setGame(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        console.log(dummyGames.results.find((game) => game.id === id));
        setGame(dummyGames.results.find((game) => game.id === id));
        // setGame(dummyGames.results.find((game) => game.id === id)); // Use dummy game if available
        setLoading(false);
      }
    };

    fetchGame();
  }, [id]); // Depend on id to refetch data when it changes

  return { game, loading, error };
};

export default useGame;
