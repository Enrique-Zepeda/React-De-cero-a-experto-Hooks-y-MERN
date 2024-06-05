import { useState } from "react";

// un custom hook es solo una funcion que retorna algo y siempre llevan use al principio
export const useCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);
  //   retornamos asi lo que queremos porque es un objeto

  //pasarle un valor por parametro
  const increment = () => {
    setCounter(counter + initialValue);
  };

  const decrement = () => {
    if (counter === 0) return;
    setCounter(counter - initialValue);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };

  //   si quisiera retornar un arreglo seria asi y la destructuracion seria con llaves []
  //   return [
  //     counter: counter,
  //   ];
};
