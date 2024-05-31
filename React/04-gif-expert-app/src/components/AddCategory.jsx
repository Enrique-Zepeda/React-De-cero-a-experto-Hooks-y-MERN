import { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    //Es para que no se pueda mandar datos vacios
    if (inputValue.trim().length <= 1) return;
    // Esto lo hice mandandole tambien las categorias por prop pero se puede evitar
    // setCategories([inputValue, ...categories]);
    //Asi se usa la funcion sin depender del prop de categorias
    setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
