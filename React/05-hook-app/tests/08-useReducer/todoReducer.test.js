const { render } = require("@testing-library/react");
const { todoReducer } = require("../../src/08-useReducer/todoReducer");

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "demo todo",
      done: false,
    },
  ];

  test("Debe de retornar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("Debe de agregar un todo", () => {
    const action = {
      type: "[TODO]: Add Todo",
      payload: {
        id: 2,
        description: "todo2",
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("Debe de eliminar un todo", () => {
    const action = {
      type: "[TODO]: Delete Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test("Debe de hacer el cambio en el done un todo", () => {
    const action = {
      type: "[TODO]: Togle Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    console.log(newState);
    expect(newState.done).toBeTruthy;
  });
});
