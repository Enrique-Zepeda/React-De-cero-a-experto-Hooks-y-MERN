import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
  if (alter_ego === characters) return <></>;

  return <p>{characters}</p>;
};

export const HeroesCard = ({ hero }) => {
  const heroUrl = `/assets/heroes/${hero.id}.jpg`;

  // const characters = ( <p>{hero.characters}</p>)

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroUrl} className="card-img" alt={hero.superhero} />
          </div>

          <div className="col-8">
            <div className="car-body">
              <h5 className="card-title">{hero.superhero}</h5>
              <p className="card-text">{hero.alter_ego}</p>

              {/* <p className="card-text">{hero.characters}</p> */}
              <CharactersByHero
                characters={hero.characters}
                alter_ego={hero.alter_ego}
              />

              <p className="card-text">
                <small className="text-muted">{hero.first_appearance}</small>
              </p>

              <Link to={`/hero/${hero.id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
