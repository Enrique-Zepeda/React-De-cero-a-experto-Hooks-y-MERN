import { heroes } from "../data/heroes";

//como yo lo hice
// const getHeroeById = (id) => {
//el find resive una funcion como argumento que usualmente se le conoce como callback
//el find(heroe) va a recorrer cada una de los elementos y por cada vuelta va a sacar un heroe hasta que encuentre la similitud y ahi termina
//   const resultado = heroes.find((heroe) => heroe.id === id);
//   return console.log(resultado);
// };

export const getHeroeById = (id) => heroes.find((heroes) => heroes.id === id);

// console.log(getHeroeById(5));

//Find solo regresa un resultado y como queremos todos los resuktados utilizamos filter
export const getHeroeByOwners = (owner) =>
  heroes.filter((heroes) => heroes.owner === owner);

// console.log(getHeroeByOwners("Marvel"));
