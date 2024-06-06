import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (itarationNumber = 100) => {
  for (let i = 0; i < itarationNumber; i++) {
    console.log("Ahi vamos");
  }
  return `${itarationNumber} done`;
};

export function MemoHook() {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizeValue}</h4>
      <button className="btn btn-info" onClick={increment}>
        +1
      </button>
      <button className="btn btn-info" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
}
