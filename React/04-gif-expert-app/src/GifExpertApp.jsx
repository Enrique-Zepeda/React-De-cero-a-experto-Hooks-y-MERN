import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);
  console.log(categories);
  const onAddCategory = () => {
    //para agregar una nueva categoria al arreglo al final
    // setCategories([...categories, "valorant"]);
    //para agregar una nueva categoria al arreglo al inicio
    setCategories(["valorant", ...categories]);
  };
  return (
    <>
      <div>GifExpertApp</div>
      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
        {/* <li></li> */}
      </ol>
    </>
  );
};