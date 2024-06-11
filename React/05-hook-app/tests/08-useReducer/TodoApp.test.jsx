import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");

describe("pruebas en el componente <TodoApp />", () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, description: "Todo1", todo: false },
      { id: 2, description: "Todo2", todo: true },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleDeleteTodo: jest.fn(),
    onNewTodo: jest.fn(),
    handleTogleTodo: jest.fn(),
  });
  test("debe de mostrar el componente correctamente", () => {
    render(<TodoApp />);
    // screen.debug();
    expect(screen.getByText("Todo1")).toBeTruthy();
    expect(screen.getByText("Todo2")).toBeTruthy();
  });
});
