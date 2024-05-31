import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImagenes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getImage = async () => {
    const newImagenes = await getGifs(category);
    setImagenes(newImagenes);
    // console.log("Este es el estado chido", newImagenes);
    setIsLoading(false);
  };

  useEffect(() => {
    getGifs(category);
    getImage();
  }, []);
  return {
    images,
    isLoading,
  };
};
