import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export function LoginPage() {
  // tenemos que usar el hook de useContext y entre los parentesis el contexto que deceamos aceder
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h1>
        LoginPage <small>{user?.name}</small>
      </h1>
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
      {/* <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.email}</p> */}
      <button
        aria-label="boton"
        onClick={() =>
          setUser({ id: 123, name: "Enrique Adair", email: "kike@gmail.com" })
        }
        className="btn btn-info rounded-3"
      >
        Establecer Usuario
      </button>
    </>
  );
}
