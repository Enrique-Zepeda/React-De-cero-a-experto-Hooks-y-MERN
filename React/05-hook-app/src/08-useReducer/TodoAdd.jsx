import { useForm } from "../hooks/useForm";

export function TodoAdd({ onNewTodo }) {
  const { onInputChange, onReset, formState } = useForm({
    description: "",
  });

  //Tengo que desestruturar el formState para poder obtener los valores
  const { description } = formState;

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };
    onNewTodo(newTodo);
    onReset();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
}
