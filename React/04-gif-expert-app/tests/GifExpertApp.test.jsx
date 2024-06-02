import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
describe("Pruebas en el componente <GifExpertApp />", () => {
  test("No debe agregar una categoría duplicada", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "One Punch" } });
    fireEvent.submit(form);

    const categories = screen.getAllByText("One Punch");
    expect(categories.length).toBe(1);
  });
});
