import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";

export const HerosList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  //   console.log(heroes);

  return (
    <ul>
      {heroes.map((hero) => (
        <li key={hero.id}>{hero.characters}</li>
      ))}
    </ul>
  );
};
