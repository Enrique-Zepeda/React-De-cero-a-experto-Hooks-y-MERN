import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";
describe("Pruebas en CounterApp", () => {
  const value = 10;
  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el valor inicial de 100", () => {
    render(<CounterApp value={100} />);
    expect(screen.getAllByText(100)).toBeTruthy();
  });

  test("Debe de incremntar con el boton +1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });

  test("Debe de decrementar con el boton -1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    screen.debug();
    expect(screen.getByText("9")).toBeTruthy();
  });

  test("Debe de funcionar el boton de Reset", () => {
    render(<CounterApp value={355} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // fireEvent.click(screen.getByText("Reset"));
    screen.getByRole("button", { name: "btn-reset" });
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    // screen.debug();
    expect(screen.getByText(355)).toBeTruthy();
  });
});
