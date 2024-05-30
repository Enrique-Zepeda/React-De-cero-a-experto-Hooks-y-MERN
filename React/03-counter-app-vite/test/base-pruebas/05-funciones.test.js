import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  //   test("getUser debe de retornar un objeto", () => {
  //     const testUser = {
  //       uid: "ABC123",
  //       username: "El_Papi1502",
  //     };
  //     const user = getUser();
  //     console.log(user);
  //     expect(testUser).toStrictEqual(user);
  //   });
  test("getUsuarioActivo debe de retornar un objeto", () => {
    const nombre = "fernando";
    const user = getUsuarioActivo(nombre);
    expect(user).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
