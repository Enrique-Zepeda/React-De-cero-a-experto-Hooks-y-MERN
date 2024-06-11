import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en el componente <HomePage />", () => {
  const user = {
    id: 1,
    name: "Kike",
  };
  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    console.log(preTag.innerHTML);
    expect(preTag.innerHTML).toBe("null");
    // screen.debug();
  });

  test("Debe de mostrar el usuario", () => {
    render(
      <UserContext.Provider value={{ user: user }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    console.log(preTag.innerHTML);
    const userData = JSON.parse(preTag.textContent);
    expect(userData).toEqual({
      id: 1,
      name: "Kike",
    });
    // screen.debug();
  });
});
