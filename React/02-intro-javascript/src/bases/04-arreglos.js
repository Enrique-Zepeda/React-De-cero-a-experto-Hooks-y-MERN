//Un arreglo es una coleccion de informacion que se encuntra dentro de una misma variable
// const arreglo = new Array(100); crea un arreglo con colecciones vacias
const arreglo = [1, 2, 3, 4];
// arreglo.push(1); no es recomendable usar el push porque modifica el objeto principal

let arreglo2 = [...arreglo, 5];
//La funcion map crea un nuevo arreglo
//Si no tiene un return implicito va a devolver todos los valores como undefined
let arreglo3 = arreglo2.map((numero) => {
  return numero * 2;
});
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
