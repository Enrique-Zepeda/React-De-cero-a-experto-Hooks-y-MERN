const activo = true;

// let mensaje = "";

// if (!activo) {
//   mensaje = "Activo";
// } else {
//   mensaje = "Inactivo";
// }

// Ternario
// const mensaje = !activo ? "Activo" : "Inactivo";
//Devuelve null pero se puede hacer que no devuelva nada
// const mensaje = !activo ? "Activo" : null;
// Devuelve falso si no se cumple
const mensaje = !activo && "Activo";
console.log(mensaje);
