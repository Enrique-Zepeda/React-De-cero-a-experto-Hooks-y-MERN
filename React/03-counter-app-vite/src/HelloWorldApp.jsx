import { FirstApp } from "./FirstApp";
import PropTypes from "prop-types";

function HelloWorldApp({ title, subTitle }) {
  return (
    <>
      <h1>Enrique Zepeda</h1>
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      <FirstApp />
    </>
  );
}

HelloWorldApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
};

export default HelloWorldApp;
