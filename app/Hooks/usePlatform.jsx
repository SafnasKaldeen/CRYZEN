import { useEffect, useState } from "react";
import { dummyPlatforms } from "../DummyData/platforms.js";

const usePlatform = () => {
  const [Platforms, setPlatform] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlatforms = async () => {
      setPlatform(dummyPlatforms);
      setLoading(false);
      // setLoading(true); // Set loading to true when page changes
      // try {
      //   const response = await fetch(
      //     `https://api.rawg.io/api/platforms/lists/parents?key=8e74978f034041139f9453f11fce78aa`,
      //     { next: { revalidate: 3600 } }
      //   );
      //   if (!response.ok) {
      //     throw new Error("Failed to fetch platforms");
      //   }
      //   const data = await response.json();
      //   setPlatform(data);
      //   setLoading(false);
      //   console.log("Platforms: ", data);
      // } catch (error) {
      //   setError(error);
      //   // setPlatform(dummyGenres);
      //   setLoading(false);
      // }
    };

    fetchPlatforms();

    // Cleanup function (optional)
    return () => {
      // Perform cleanup if needed
    };
  }, []); // Depend on pageNum to refetch data when it changes

  return { Platforms, loading, error };
};

export default usePlatform;
