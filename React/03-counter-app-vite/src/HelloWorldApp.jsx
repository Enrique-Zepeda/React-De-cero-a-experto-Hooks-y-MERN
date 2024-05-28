import { FirstApp } from "./FirstApp";

function HelloWorldApp({ title = "Hola soy kike", subTitle }) {
  console.log(title);
  return (
    <>
      <h1>Enrique Zepeda</h1>
      <h2>{title}</h2>
      <h3>{subTitle + 1}</h3>
      <FirstApp />
    </>
  );
}

export default HelloWorldApp;
