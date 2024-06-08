import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";

export function TodoApp() {
  const {
    todos,
    handleDeleteTodo,
    onNewTodo,
    handleTogleTodo,
    todosCount,
    pendingTodosCount,
  } = useTodo();

  return (
    <>
      <h1>
        Todo App: {todosCount}
        <small>Pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onTogleTodo={handleTogleTodo}
          />
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
