import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  const pokemonState = useSelector((state) => state.pokemons);
  const { isLoading, pokemons = [], page } = pokemonState;

  useEffect(() => {
    dispatch(getPokemons(0));
    console.log(pokemonState);
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoading ? "True" : "False"}</span>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <span>{pokemon.name}</span>
          </li>
        ))}
      </ul>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
