// const newMessage = {
//   message: "Hola Mundo",
//   title: "Zepeda",
// };
export const FirstApp = () => {
  const getMessage = () => {
    return "hola";
  };
  return (
    <>
      {/* Si quisiera mandar a imprimir todo el objeto tendra que agregar JSON.stringify(Objeto) para poderlo imprimir o sino solo Objeto.Atributo*/}
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <h1>{getMessage()}</h1>
      <p>Soy un subtitulo</p>
    </>
  );
};
