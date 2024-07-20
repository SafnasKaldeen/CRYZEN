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
          `https://api.rawg.io/api/games/${id}/reddit?key=${process.env.NEXT_PUBLIC_API_KEY}&page_size=24`,
          { next: { revalidate: 3600 } }
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
