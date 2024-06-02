import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";
describe("Pruebas en GifItem", () => {
  const title = "Titulo";
  const url = "https://www.algo.com/";
  test("Probando snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test("Debe de mostrar la imagen con el url y alt indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    console.log(screen.getByRole("img").src);
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
