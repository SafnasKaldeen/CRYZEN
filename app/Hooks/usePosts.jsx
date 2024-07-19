import { useEffect, useState } from "react";

const usePosts = (id) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      // setPosts(dummyGames);
      // setLoading(false);
      setLoading(true); // Set loading to true when page changes
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${id}/reddit?key=8e74978f034041139f9453f11fce78aa&page_size=30`,
          { next: { revalidate: 3600 } }
        );
        console.log(
          "Fetching suggested games for game with ID: ",
          `https://api.rawg.io/api/games/${id}/reddit?key=8e74978f034041139f9453f11fce78aa`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
        console.log("posts: ", data);
      } catch (error) {
        setError(error);
        // setPosts(dummyGames);
        setLoading(false);
      }
    };

    fetchPosts();

    // Cleanup function (optional)
    return () => {
      // Perform cleanup if needed
    };
  }, [id]); // Depend on pageNum to refetch data when it changes

  return { posts, loading, error };
};

export default usePosts;
