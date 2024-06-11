import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en el componente <LoginPage />", () => {
  test("Debe mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    // console.log(preTag.innerHTML);
    expect(preTag.innerHTML).toBe("null");
  });

  test("Debe de llamar el setUser cuando se hace click", () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const buton = screen.getByLabelText("boton");
    fireEvent.click(buton);
    screen.debug();
    expect(setUserMock).toHaveBeenCalledWith({
      id: 123,
      name: "Enrique Adair",
      email: "kike@gmail.com",
    });
  });
});
