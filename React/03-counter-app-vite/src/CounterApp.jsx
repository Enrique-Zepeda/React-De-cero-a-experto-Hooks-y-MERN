import PropTypes from "prop-types";

const handleClick = (e) => {
  console.log(e);
};
export const CounterApp = ({ value }) => {
  return (
    <>
      <h1>Contador</h1>
      <h2>{value}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
