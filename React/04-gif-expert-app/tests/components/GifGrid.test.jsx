import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en el componente <GifGrid />", () => {
  useFetchGifs.mockReturnValue({
    images: [],
    isLoading: true,
  });
  const category = "One Punch";
  test("Debe de mostrar el Loading", () => {
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
    // screen.debug();
  });

  test("Debe de mostrar items cuando se cargan las imagenes mediante el useFetchGifs", () => {
    const gifs = [
      {
        id: "abv",
        title: "Saitama",
        url: "https://www.algo.com",
      },
      {
        id: "a123",
        title: "Goku",
        url: "https://www.goku.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
