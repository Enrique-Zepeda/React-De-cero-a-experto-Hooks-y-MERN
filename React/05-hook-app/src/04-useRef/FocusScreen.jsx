import { useRef } from "react";

export function FocusScreen() {
  const inputRef = useRef();
  const onClick = () => {
    console.log(inputRef);
    inputRef.current.select();
  };
  return (
    <>
      <h1>Focus Screem</h1>
      <hr />
      <input
        type="text"
        placeholder="Ingrese Su nombre"
        className="form-control"
        ref={inputRef}
      />
      <button onClick={onClick} className="btn btn-info mt-2">
        Set Focus
      </button>
    </>
  );
}
