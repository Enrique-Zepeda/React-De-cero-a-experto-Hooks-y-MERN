import { useState } from "react";

// un custom hook es solo una funcion que retorna algo y siempre llevan use al principio
export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);
  //   retornamos asi lo que queremos porque es un objeto

  //pasarle un valor por parametro
  const increment = (value) => {
    setCounter(counter + value);
  };

  const decrement = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter: counter,
    increment,
    decrement,
    reset,
  };

  //   si quisiera retornar un arreglo seria asi y la destructuracion seria con llaves []
  //   return [
  //     counter: counter,
  //   ];
};
