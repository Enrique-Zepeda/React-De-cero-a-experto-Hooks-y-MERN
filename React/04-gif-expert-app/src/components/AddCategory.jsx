import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
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
    // setCategories((categories) => [inputValue, ...categories]);

    //esto es solo mandanlo los props la padre
    onNewCategory(inputValue.trim());
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
