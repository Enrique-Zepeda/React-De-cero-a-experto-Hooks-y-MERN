import { useState } from "react";

export function CounterApp() {
  // el useState puede ser tambien un objeto
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  // Tenemos que desestructurar el objeto del estado para depues poder copiar el estado y se pueda mantener igual
  const { counter1, counter2, counter3 } = counter;
  return (
    <>
      <h1>Counter: </h1>
      <h3>Contador1 : {counter1}</h3>
      <h3>Contador2 : {counter2}</h3>
      <h3>Contador3 : {counter3}</h3>
      <hr />
      {/* Cuando llamamos a la funcion del contador asi el estado muta y pasa de ser un objeto a ser solo un valor numerico */}
      {/* <button onClick={() => setCounter(counter1 + 1)}>+1</button> */}

      {/* Asi es la manera correcta de cambiar el estado cuando el estado es un objeto */}
      <button
        className="btn btn-info"
        onClick={() => setCounter({ ...counter, counter1: counter1 + 1 })}
      >
        +1
      </button>
    </>
  );
}
