import { usContext } from "../../src/base-pruebas/06-deses-obj";
describe("Prueba 06-deses-obj", () => {
  test("Prueba de usContext", () => {
    const clave = "ABC345";
    const edad = 21;
    const user = usContext({ clave, edad });
    console.log(user);
    expect(user).toEqual({
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
