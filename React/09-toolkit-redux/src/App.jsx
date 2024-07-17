import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./store/slices/counter/counterSlice";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(2);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />

        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Incrementar</button>
        <button onClick={() => dispatch(decrement())}>Decrementar</button>
        <div>
          <input
            type="number"
            placeholder="Ingresa un numero"
            value={counter}
            onChange={(e) => setCounter(e.target.value)}
          />
          <button onClick={() => dispatch(incrementByAmount(Number(counter)))}>
            Aumentar
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
