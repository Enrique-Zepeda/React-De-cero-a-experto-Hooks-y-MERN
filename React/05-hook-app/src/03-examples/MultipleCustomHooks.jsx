import { useFetch } from "../hooks";

export function MultipleCustomHooks() {
  const { data, error, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/3"
  );
  return (
    <>
      <h1>Pokemon Info</h1>
      <hr />
      <p>Poekmon</p>
      {isLoading && <p>Cargando..</p>}
      {/* Hacemos esto para poder ver el objeto que retorna la data */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      {/* Ponemos el signo de interrogacion porque al principio en el hook no tenemos data y el signo nos sirve para preguntar si existe la data y si existe se imprime y si no no */}
      <h2>{data?.name}</h2>
    </>
  );
}
