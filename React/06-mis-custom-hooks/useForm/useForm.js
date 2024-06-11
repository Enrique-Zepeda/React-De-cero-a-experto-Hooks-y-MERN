import { useState } from "react";

// Le mandamos por parametro un objeto vacio poque quiero que este formulario pueda hacerse con mas campos diferentes
export function useForm(initialForm = {}) {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onReset = () => {
    setFormState(initialForm);
  };
  return {
    formState,
    onInputChange,
    onReset,
  };
}
