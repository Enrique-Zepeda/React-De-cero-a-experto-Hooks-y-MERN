import React from "react";
import ReactDOM from "react-dom/client";
// import HelloWorldApp from "./HelloWorldApp";
import "./index.css";
import { CounterApp } from "./CounterApp";
// import { FirstApp } from "./FirstApp";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={20} />
    {/* <FirstApp title="Hola, Soy Goku" /> */}
  </React.StrictMode>
);
