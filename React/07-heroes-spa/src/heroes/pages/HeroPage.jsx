import { Navigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  // console.log(id);

  const hero = getHeroeById(id);

  console.log(hero);

  if (!hero) return <Navigate to="/marvel" />;

  return (
    <>
      <h1>{hero.superhero}</h1>
      <hr />
    </>
  );
};
