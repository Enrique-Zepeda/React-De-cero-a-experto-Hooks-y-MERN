import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
  // intentar parsear lo que estan en el localstorage de los todos, la primera vez que se inice la aplicacion puede ser nulo y si es nulo ocupamos regresar un arreglo vacion || []
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (todo) => {
    // console.log({ todo });
    const action = {
      type: "[TODO]: Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    // console.log(id);
    dispatch({
      type: "[TODO]: Delete Todo",
      payload: id,
    });
  };

  const handleTogleTodo = (id) => {
    // console.log({ id });
    dispatch({
      type: "[TODO]: Togle Todo",
      payload: id,
    });
  };

  return {
    todos,
    handleDeleteTodo,
    onNewTodo,
    handleTogleTodo,
  };
};
