import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";
describe("Pruebas en el componente <PublicRoute />", () => {
  test("Debe de mostrar el children si no esta autentificado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );
    // screen.debug();
    expect(screen.getByText("Ruta publica")).toBeTruthy();
  });

  test("Debe de navegar si esta autentificado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Kike",
        id: "123",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <h1>Ruta publica</h1>
                </PublicRoute>
              }
            />
            <Route path="/marvel" element={<h1>Pagina Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    screen.debug();

    expect(screen.getByText("Pagina Marvel")).toBeTruthy();
  });
});
