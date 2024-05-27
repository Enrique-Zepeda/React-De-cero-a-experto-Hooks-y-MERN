// Destructuracion de arreglos

const personajes = ["Goku", "Vegeta", "Trunks"];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);
console.log("--------------");
// Destructuracion del arreglo
// Ponemos , si algun elemento no nos interesa
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => ["ABC", 123];
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1. primer valor del arreglo se llamara nombre
//2. setiarNombre
const retornState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre, setiarNombre] = retornState("Zepeda");
console.log(nombre);
setiarNombre();
