import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en el useForm", () => {
  const initialForm = {
    name: "Kike",
    email: "Zepeda@gmail.com",
  };
  test("Debe de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      formState: initialForm,
      onInputChange: expect.any(Function),
      onReset: expect.any(Function),
    });
  });

  test("Debe de cambiar el nombre del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { formState, onInputChange } = result.current;
    const newValue = "Enrique";
    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });
    console.log(result.current.formState);
    expect(result.current.formState.name).toBe(newValue);
  });

  test("Debe de realizar el reset del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { formState, onInputChange, onReset } = result.current;
    const newValue = "Enrique";
    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
      onReset();
    });
    expect(result.current.formState.name).toBe(initialForm.name);
    console.log(result.current.formState);
  });
});
