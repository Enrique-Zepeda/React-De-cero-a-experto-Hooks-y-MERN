import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
describe("Pruebas en Counter", () => {
  test("Debe de retomar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    console.log(result);
    const { counter, decrement, increment, reset } = result.current;
    expect(counter).toBe(1);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });
  test("Debe de retornar 100", () => {
    const initialValue = 100;
    const { result } = renderHook(() => useCounter(initialValue));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test("Debe de incrementar el contador", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment } = result.current;
    act(() => {
      // Si quiero implementar dos llamas a la funcion ocupo el valor mas actual asi que en useCounte ocupo actualizar el use state asi setCounter((current) => current + initialValue); y ya podriamos hacer pruebas en un solo act con dos funciones
      increment();
      //   increment(3);
    });
    // ocupamos el valor actual siempre
    expect(result.current.counter).toBe(2);
  });

  test("Debe de retornar el valor iniciarl", () => {
    const { result } = renderHook(() => useCounter(20));
    const { counter, increment, reset } = result.current;
    act(() => {
      increment(5);
      reset();
    });
    console.log(result.current.counter);
    expect(result.current.counter).toBe(20);
  });
});
