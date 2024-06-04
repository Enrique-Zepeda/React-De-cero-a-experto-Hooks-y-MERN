import { useEffect } from "react";

export function Message() {
  // siempre que ya no exista la funcion en el useEffect tenemos que desmontarlos en el return
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      console.log("Mesage UnMounted");
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
}
