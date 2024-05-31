import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
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
