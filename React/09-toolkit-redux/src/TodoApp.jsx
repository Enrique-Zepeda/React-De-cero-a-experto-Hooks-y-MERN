import { useState } from "react";
import { useGetTodosByIdQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  //   const { data: todos = [], isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodosByIdQuery(todoId);

  const prevTodo = () => {
    if (todoId === 1) {
      return;
    }
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>Isloading:{isLoading ? "True" : "False"}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "Done" : "Pending"}</strong>
            <span> {todo.title}</span>
          </li>
        ))}
      </ul> */}

      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={() => setTodoId(todoId + 1)}>Next Todo</button>
    </>
  );
};
