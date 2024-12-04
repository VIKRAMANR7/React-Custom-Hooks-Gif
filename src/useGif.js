import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");

  const fetchGif = async (tag) => {
    try {
      const response = await fetch(tag ? `${url}&tag=${tag}` : url);
      const data = await response.json();
      const imageSrc = data.data.images.downsized_large.url;
      setGif(imageSrc);
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);
  return { gif, fetchGif };
};

export default useGif;
