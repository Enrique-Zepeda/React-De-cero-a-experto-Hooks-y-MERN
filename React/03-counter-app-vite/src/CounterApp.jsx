import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  return (
    <>
      <h1>Contador</h1>
      <h2>{value}</h2>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
