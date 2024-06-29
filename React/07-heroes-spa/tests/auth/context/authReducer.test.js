import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";
describe("Pruebas en authReducer", () => {
  test("Debe de retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("Debe de (login) llamar el login autenticar y establecer el usuario ", () => {
    const action = {
      type: types.login,
      payload: {
        id: "122",
        name: "Kike",
      },
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("Debe de  (logout) borrar el name del usuario y el logged en false", () => {
    const action = {
      type: types.logout,
    };
    const state = authReducer(
      { logged: true, user: { id: "123", name: "kike" } },
      action
    );
    expect(state).toEqual({
      logged: false,
    });
  });
});
