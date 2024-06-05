export default function PokemonCard({ id, name, sprites = [] }) {
  console.log(sprites);
  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">
        #{id} - {name}
      </h2>

      <div className="card" style={{ width: 150 }}>
        <img src={sprites.front_default} alt={name} />
      </div>
    </section>
  );
}
