import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export function FormWithCustomHook() {
  // Llamamos al custom hook y le pasamos nuestros valores iniciales y estraemos el fomulario y el input
  const { onInputChange, formState, onReset } = useForm({
    username: "",
    email: "",
    password: "",
  });
  //desestruturo el formState  se puede desestructurar en el hook en el retorno poniedno ...formState y cunaod estraigo el useForm ahi los desestructuro const { onInputChange, formState, username, password, email } = useForm({
  const { username, password, email } = formState;

  return (
    <>
      <h1>Formulario con custom Hooks</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button className="btn btn-primary mt-2" onClick={onReset}>
        Reset
      </button>
    </>
  );
}
