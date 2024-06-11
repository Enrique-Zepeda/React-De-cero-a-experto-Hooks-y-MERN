import { render, screen } from "@testing-library/react";
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
        onTogleTodoMock={onTogleTodoMock}
        onDeleteTodoMock={onDeleteTodoMock}
      />
    );
    const liElement = screen.getByRole("listitem");
    // console.log(liElement.innerHTML);
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    const spanElement = screen.getByLabelText("span");
    console.log(liElement.innerHTML);
    expect(spanElement.className).toContain("align-self-center");
  });
});
