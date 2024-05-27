// Desestructuracion
// Asignacion Desestructurante

const persona = {
  nombre: "Kike",
  edad: 21,
  clave: "Siu",
};

//Destructuracion
const { nombre: nombre2, edad, clave } = persona;
//Lo que dice ahi es extrae lo que esta dentro de las llaves del siguiente objeto
//nombre:nombre2 es por si tenemos otra variable llamada igual y queremos darle otro name y nombre ya no se podra usar
console.log(nombre2);
console.log(edad);
console.log(clave);

const retornaPersona = (usuario) => {
  const { nombre: nombre2, edad, clave } = usuario;
  console.log(nombre2, edad, clave);
};

//Destructuracion se le puede agregar mas atributos
const retornaPersona1 = ({ nombre, edad, clave, rango = "capitan" }) => {
  console.log(nombre, edad, clave, rango);
};

const usarContext = ({ nombre, edad }) => {
  return {
    nombreClave: nombre,
    anios: edad,
    latlng: {
      lat: 12.31232,
      lng: -10.2321,
    },
  };
};
retornaPersona(persona);
retornaPersona1(persona);
//para desestructurar un objeto dentro de otro objeto ponemos el diccionario del objeto que queremos desatructurar seguido de dos puntos :
// y luego llaves ya que esto significa que lo que este dentro de ahi va a extraer los datos
const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = usarContext(persona);
//o tambien se puede desestructura el objeto
// const { lat, lng } = latlng
console.log("--------------------");
console.log(nombreClave);
console.log(anios);
console.log(lat);
console.log(lng);
