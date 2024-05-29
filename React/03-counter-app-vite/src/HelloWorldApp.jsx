import { FirstApp } from "./FirstApp";
import PropTypes from "prop-types";

function HelloWorldApp({ title, subTitle, name }) {
  return (
    <>
      <h1>Enrique Zepeda</h1>
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      <h5>{name}</h5>
      {/* <FirstApp /> */}
    </>
  );
}

HelloWorldApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

HelloWorldApp.defaultProps = {
  title: "No hay titulo",
  subTitle: "No hay Subtitulo",
  name: "Enrique Zepeda",
};

export default HelloWorldApp;
