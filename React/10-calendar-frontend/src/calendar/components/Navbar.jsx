import { useState } from "react";
import { useAuthStore } from "../../hooks";

export const Navbar = () => {
  const { startLogout, user } = useAuthStore();
  const [animate, setAnimate] = useState("");
  const logOut = () => {
    setAnimate("animate__animated animate__fadeOutDown");

    setTimeout(() => {
      startLogout();
    }, 1000);
  };

  return (
    <div className={`navbar navbar-dark bg-dark mb-4 px-4 ${animate}`}>
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt m-2"></i>
        {user.name}
      </span>
      <button className="btn btn-outline-danger" onClick={logOut}>
        <i className="fas fa-sign-out-alt m-2"></i>
        &nbsp;
        <span>Salir</span>
      </button>
    </div>
  );
};
