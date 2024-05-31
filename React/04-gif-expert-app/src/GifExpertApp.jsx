import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);
  console.log(categories);
  const onAddCategory = (newCategory) => {
    //para agregar una nueva categoria al arreglo al final
    // setCategories([...categories, "valorant"]);
    //para agregar una nueva categoria al arreglo al inicio
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

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
        {/* <li></li> */}
      </ol>
    </>
  );
};
