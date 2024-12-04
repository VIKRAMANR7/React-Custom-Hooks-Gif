import { useEffect, useState } from "react";

const Random = () => {
  const [tag, setTag] = useState("dogs");
  const [gif, setGif] = useState("");

  const fetchGif = async (tag) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    try {
      const response = await fetch(url);
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

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img src={gif} width="500" alt="Random Gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
};

export default Random;
