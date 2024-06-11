import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "../../src/08-useReducer/TodoItem";
describe("Pruebas en el componente <TodoItem />", () => {
  const todo = {
    id: 1,
    description: "Piedra del alma",
    todo: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onTogleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("Debe de mostrar el todo pendiente de completar", () => {
    render(
      <TodoItem
        todo={todo}
        onTogleTodo={onTogleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const liElement = screen.getByRole("listitem");
    // console.log(liElement.innerHTML);
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    const spanElement = screen.getByLabelText("span");
    console.log(liElement.innerHTML);
    //usamos to contain si llega a tener espacios
    expect(spanElement.className).toContain("align-self-center");
  });

  test("Debe de mostrar el todo todo completado", () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onTogleTodo={onTogleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("El span debe de llamar al togle todo onClick", () => {
    render(
      <TodoItem
        todo={todo}
        onTogleTodo={onTogleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onTogleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("El boton debe de borrar el todo", () => {
    render(
      <TodoItem
        todo={todo}
        onTogleTodo={onTogleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const buttonElement = screen.getByLabelText("button");
    fireEvent.click(buttonElement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
