import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export function CallBackHook() {
  const [counter, setCounter] = useState(1);

  const incrementFather = useCallback(() => {
    console.log("setCounter(counter + 1);");
    setCounter((value) => value + 1);
  }, []);

  return (
    <>
      <h1>useCallBack Hook: {counter}</h1>
      <hr />

      <ShowIncrement setCounter={setCounter} increment={incrementFather} />
    </>
  );
}
