import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroesCard } from "./HeroesCard";

export const HerosList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  //   console.log(heroes);

  return (
    <ul>
      {heroes.map((hero) => (
        <HeroesCard key={hero.id} hero={hero} />
      ))}
    </ul>
  );
};
