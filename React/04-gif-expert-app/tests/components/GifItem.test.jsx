import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";
describe("Pruebas en GifItem", () => {
  test("Probando snapshot", () => {
    const { container } = render(
      <GifItem title="titulo" url="https://www.algo.com" />
    );
    expect(container).toMatchSnapshot();
  });
});
