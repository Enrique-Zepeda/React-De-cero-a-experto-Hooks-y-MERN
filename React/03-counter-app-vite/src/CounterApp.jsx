import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  //Cada vez que cambie un estado de algun hook se vuelve a disparar y se puede evitar con otro hook
  console.log("render");
  const [counter, setCounter] = useState(value);
  const incrementar = () => setCounter(counter + 1);
  const decrementar = () => setCounter(counter - 1);
  const reset = () => setCounter(value);
  return (
    <>
      <h1>Contador</h1>
      <h2>{counter}</h2>
      <button onClick={incrementar}>+1</button>
      <button onClick={decrementar}>-1</button>
      <button aria-label="btn-reset" onClick={reset}>
        Reset
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
