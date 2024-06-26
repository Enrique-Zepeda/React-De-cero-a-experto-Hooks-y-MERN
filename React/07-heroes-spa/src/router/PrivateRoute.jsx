import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  //   console.log(logged);

  const { pathname, search } = useLocation();
  //   console.log(location);

  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);

  console.log("render");

  return logged ? children : <Navigate to="/login" />;
};
