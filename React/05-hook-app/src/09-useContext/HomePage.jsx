import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export function HomePage() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h1>HomePage</h1>
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
    </>
  );
}
