import { useEffect, useState } from "react";
import { Message } from "./Message";

export function SimpleForm() {
  const [formState, setFormState] = useState({
    username: "kike",
    email: "kike@gmail.com",
  });
  const { username, email } = formState;

  //desestructuro el target
  const onInputChange = ({ target }) => {
    //puedo desestructurar mas el target para obtener el name y el value
    const { name, value } = target;
    // Para guardar el estado hacemos lo siguiente porque es un objeto
    setFormState({
      // desestructuramos el estado para mantener todos los estados del formulario
      ...formState,
      //usamos las propiedades computadas de los objetos poniendo llaves [] y esa es la propiedad que se va a establecer en el objeto y el valor es lo que sigue value    [name]: value,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("useEffect");
  }, []);

  useEffect(() => {
    // console.log("formState");
  }, [formState]);

  useEffect(() => {
    // console.log("emailChange");
  }, [email]);

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        // El name me sirve para saber que elemento es el que esta cambiando
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
      {username === "strider2" && <Message />}
    </>
  );
}
