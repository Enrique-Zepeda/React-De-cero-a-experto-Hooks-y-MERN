import PropTypes from "prop-types";
// const newMessage = {
//   message: "Hola Mundo",
//   title: "Zepeda",
// };
export const FirstApp = ({ title, subTitle, name }) => {
  // const getMessage = () => {
  //   return "hola";
  // };
  return (
    <>
      {/* Si quisiera mandar a imprimir todo el objeto tendra que agregar JSON.stringify(Objeto) para poderlo imprimir o sino solo Objeto.Atributo*/}
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      {/* <h1>{getMessage()}</h1> */}
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};
