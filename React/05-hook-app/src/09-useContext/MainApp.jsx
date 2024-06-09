import { Routes, Route, Navigate, Link } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import Navbar from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export function MainApp() {
  return (
    <UserProvider>
      {/* <h1>Main App</h1> */}
      {/* Es como la etiqueta a pero no renderiza toda la aplicacion es mas eficiente */}
      {/* <Link to="/">Home</Link> */}
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        {/* Esta es la manera correcta de navegar cuando la pagina no existe */}
        <Route path="/*" element={<Navigate to="/" />} />

        {/* <Route path="/*" element={<HomePage />} /> */}
      </Routes>
    </UserProvider>
  );
}
