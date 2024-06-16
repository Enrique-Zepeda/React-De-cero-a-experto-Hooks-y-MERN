import { Routes, Route, Navigate } from "react-router-dom";
import { MarvelPage, DcPage } from "../src/heroes";
import { LoginPage } from "../src/auth/pages/LoginPage";
import Navbar from "../src/ui/components/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
