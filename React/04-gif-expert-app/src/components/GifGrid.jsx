import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const [imagenes, setImagenes] = useState([]);
  const getImage = async () => {
    const newImagenes = await getGifs(category);
    setImagenes(newImagenes);
    console.log("Este es el estado chido", newImagenes);
  };

  useEffect(() => {
    getGifs(category);
    getImage();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {imagenes.map((image) => (
          <GifItem
            key={image.id}
            //sirve para poder tomas las propiedades
            {...image}
            //   title={image.title}
            //   url={image.url}
          />
        ))}
      </div>
    </>
  );
};
