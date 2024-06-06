import { useLayoutEffect, useRef, useState } from "react";

export default function PokemonCard({ id, name, sprites = [] }) {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect());
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width: width, height: height });
  }, [name]);
  return (
    <section style={{ height: 200 }}>
      <h2 ref={pRef} className="text-capitalize">
        #{id} - {name}
      </h2>

      <div
        className="card"
        style={{ width: 400, display: "flex", flexDirection: "row" }}
      >
        <img src={sprites.front_default} alt={name} />
        <img src={sprites.front_shiny} alt={name} />
        <img src={sprites.back_default} alt={name} />
        <img src={sprites.back_shiny} alt={name} />
      </div>
      <code>{JSON.stringify(boxSize)}</code>
    </section>
  );
}
