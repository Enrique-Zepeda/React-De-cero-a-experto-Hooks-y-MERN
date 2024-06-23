import { AppRouter } from "../src/router/AppRouter";
import { AuthProvider } from "./auth/context";

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
