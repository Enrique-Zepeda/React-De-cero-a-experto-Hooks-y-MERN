import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
const initialState = [
  {
    id: new Date().getTime(),
    description: "Aprender React",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Aprender JavaScript",
    done: false,
  },
];

export function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const onNewTodo = (todo) => {
    // console.log({ todo });
    const action = {
      type: "[TODO]: Add Todo",
      payload: todo,
    };
    dispatch(action);
  };
  return (
    <>
      <h1>
        Todo App: 1 <small>Pendientes: 4</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr />
          <TodoAdd onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  );
}
