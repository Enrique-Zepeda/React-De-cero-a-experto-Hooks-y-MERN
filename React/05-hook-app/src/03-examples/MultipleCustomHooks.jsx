import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");

describe("Pruebas en el componente <MultipleCustomHooks />", () => {
  test("Debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({ data: null, error: null, isLoading: true });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.getByText("Pokemon Info")).toBeInTheDocument();
    // screen.debug();
  });

  test("Debe de mostrar un pokemon", () => {
    const mockData = {
      id: 1,
      name: "Bulbasaur",
      sprites: { front_default: "https://example.com/bulbasaur.png" },
    };
    useFetch.mockReturnValue({ data: mockData, error: null, isLoading: false });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Pokemon Info")).toBeInTheDocument();
    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
    // screen.debug();
  });
});
