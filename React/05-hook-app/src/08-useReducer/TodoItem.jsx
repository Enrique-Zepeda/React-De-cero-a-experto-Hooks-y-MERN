export default function TodoItem({ todo, onDeleteTodo, onTogleTodo }) {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onTogleTodo(todo.id)}
        aria-label="span"
      >
        {todo.description}
      </span>
      <button
        aria-label="button"
        className="btn btn-danger"
        onClick={() => onDeleteTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
}
