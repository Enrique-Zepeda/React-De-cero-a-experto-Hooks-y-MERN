import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />

        {/* Otra manera de hacer la rutas publicas donde puedas ver las rutas publicas */}
        {/* <Route
          path="login/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<LoginPage />} />
                <Route path="/*" element={<Fotos />} />
                <Route path="/*" element={<Inicio />} />
              </Routes>
            </PublicRoute>
          }
        /> */}

        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}
      </Routes>
    </>
  );
};
