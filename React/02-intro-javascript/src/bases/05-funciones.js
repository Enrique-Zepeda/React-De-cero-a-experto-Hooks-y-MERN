// Funciones JS
//Esta manera esta mal porque es muy facil interferir por eso hay que usar un const
// function saludar(nombre) {
//   return `hola, ${nombre}`;
// }

//Esta es la manera correcta de crear una funcion
const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

//Funcion flecha
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

//Funcion flecha si solo lo que tiene es un return
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => "Hola Mundo";

console.log(saludar("Goku"));
console.log(saludar2("Vegeta"));
console.log(saludar3("Amlo"));
console.log(saludar4());

// console.log(saludar) manda a llamar la referencia de la funcion
// console.log(saludar()) retorna lo que esta dentro de la funcion

//Esta funcion flecha no se puede hacer de una linea
const getUser = () => {
  return {
    uid: "ABC1234",
    username: "ZepZam",
  };
};
//Pero si podemos quitarle el return quitando los primeros {} y quitando la palabra return y agregando ()
const getUser1 = () => ({
  uid: "ZSDADA",
  username: "Tfue",
});
const user = getUser();
console.log(user);
console.log(getUser1());

//tarea
//1. transformarlo a arrow function ✔
//2. retornar un objeto implicito ✔
//3. Pruebas
//El return implicito es cuando la funcion o el objeto no tiene declarado return
const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Kike");
console.log(usuarioActivo);
