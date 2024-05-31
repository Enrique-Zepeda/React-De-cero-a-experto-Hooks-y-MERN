import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  console.log(categories);
  const onAddCategory = (newCategory) => {
    //para agregar una nueva categoria al arreglo al final
    // setCategories([...categories, "valorant"]);
    //para agregar una nueva categoria al arreglo al inicio
    // setCategories([newCategory, ...categories]);

    //Validar si una categoria es unica de manera que puede tener el mismo nombre pero con minusculas o mayusculas
    // if (categories.includes(newCategory)) return;
    //No permite el mismo nombre
    if (
      categories.some(
        (category) => category.toLowerCase() === newCategory.toLowerCase()
      )
    )
      return;

    console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <div>GifExpertApp</div>
      <AddCategory
        //   setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
