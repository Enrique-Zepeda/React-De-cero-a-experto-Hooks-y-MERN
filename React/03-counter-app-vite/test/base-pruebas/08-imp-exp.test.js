import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe de retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    console.log(heroe);
    expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });
  test("getHeroeById debe de retornar undefined si no existe el id", () => {
    const id = 100;
    const heroe = getHeroeById(id);
    console.log(heroe);
    // expect(heroe).toEqual(undefined);
    expect(heroe).toBeFalsy;
  });

  test("getHeroeByOwner debe de retornar DC", () => {
    const owner = "DC";
    const heroe = getHeroesByOwner(owner);
    const expectHeroes = [
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ];
    console.log(heroe);

    expect(heroe).toEqual(expectHeroes);
    expect(heroe.length).toEqual(expectHeroes.length);

    // Manera correcta
    expect(heroe).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
  test("getHeroeByOwner debe de retornar Marvel", () => {
    const owner = "Marvel";
    const heroe = getHeroesByOwner(owner);
    const expectHeroes = [
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },
      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      },
    ];
    console.log(heroe);

    expect(heroe).toEqual(expectHeroes);
    expect(heroe.length).toEqual(expectHeroes.length);

    // Manera correcta
    expect(heroe).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
