// Los objetos literas tambien son conocidos como diccionarios y se representan en consola con llaves {}
//al menos debe de tener dos instancia y puedes crear funcione mas diccionarios string booleanos etc..
const persona = {
  nombre: "Kike",
  apellido: "Zepeda",
  edad: 21,
  direccion: {
    cuidad: "Guadalajara",
    calle: "Copa Piston",
    numero: 117,
  },
};

// console.table(persona); esto nos sirve para verlo de mejor manera

//spread operator nos sirve para hacer una copia nueva del objeto que queramos copiar {..Objeto}
//Es un clon del objeto
const persona2 = { ...persona };
persona2.nombre = "Enrique";

console.log(persona);
console.log(persona2);
