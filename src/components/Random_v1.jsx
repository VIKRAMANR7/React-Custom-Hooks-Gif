import { useEffect, useState } from "react";

const Random = () => {
  const [gif, setGif] = useState("");

  const fetchGif = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const imageSrc = data.data.images.downsized_large.url;
      setGif(imageSrc);
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
  };

  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} width="500" alt="Random Gif" />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
};

export default Random;
