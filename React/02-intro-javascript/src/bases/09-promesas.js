import { getHeroeById } from "../data/heroes";
// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Tarea
//     const p1 = getHeroeById(5);

//     resolve(p1);
//     // reject("No se pudo encontrar el heroe");
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("Heroe", heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      const p1 = getHeroeById(id);
      p1 === undefined ? reject("No se pudo encontrar al heroe") : resolve(p1);

      // reject("No se pudo encontrar el heroe");
    }, 2000);
  });
};
//Podemos simplificar los log siempre y cuando resivan un argumento y ese argumento es mandado a otra funcion podemos dejar los console.log del .then y .catch mas limpios porque resiven el primer argumento que tengan
getHeroeByIdAsync(5).then(console.log).catch(console.warn);
