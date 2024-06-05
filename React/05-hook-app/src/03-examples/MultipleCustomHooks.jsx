import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import PokemonCard from "./PokemonCard";

export function MultipleCustomHooks() {
  const { increment, decrement, counter } = useCounter(1);
  const { data, error, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );
  return (
    <>
      <h1>Pokemon Info</h1>
      <hr />
      <p>Poekmon</p>
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard id={data.id} name={data.name} sprites={data.sprites} />
      )}
      {/* Hacemos esto para poder ver el objeto que retorna la data */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      {/* Ponemos el signo de interrogacion porque al principio en el hook no tenemos data y el signo nos sirve para preguntar si existe la data y si existe se imprime y si no no */}

      <button
        className="btn btn-primary mt-2"
        onClick={counter > 1 ? decrement : null}
      >
        Anterior
      </button>
      <button className="btn btn-primary mt-2" onClick={increment}>
        Siguiente
      </button>
    </>
  );
}
