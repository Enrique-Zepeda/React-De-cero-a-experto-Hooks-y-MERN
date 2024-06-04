import { useCounter } from "../hooks/useCounter";
export function CounterWithCustomHook() {
  // se destructura asi porque es un objeto si fuera un arreglo seria con llaves []
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Counter with Hook:{counter}</h1>
      <hr />
      {/* Pasarle un valor por parametro */}
      <button className="btn btn-info" onClick={() => increment(10)}>
        +1
      </button>
      <button className="btn btn-secondary" onClick={reset}>
        reset
      </button>
      <button className="btn btn-danger" onClick={decrement}>
        -1
      </button>
    </>
  );
}
