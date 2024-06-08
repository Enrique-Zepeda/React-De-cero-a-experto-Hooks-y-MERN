import TodoItem from "./TodoItem";

export function TodoList({ todos, onDeleteTodo, onTogleTodo }) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onTogleTodo={onTogleTodo}
        />
      ))}
    </ul>
  );
}
