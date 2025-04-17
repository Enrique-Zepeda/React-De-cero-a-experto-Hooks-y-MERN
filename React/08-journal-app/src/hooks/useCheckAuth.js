import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../store/auth/authSlice";
import { useEffect } from "react";
import { startLoadingNotes } from "../store/journal/thunks";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      // console.log(user);
      if (!user) return dispatch(logout());
      const { uid, displayName, photoURL, email } = user;
      dispatch(login({ uid, displayName, photoURL, email }));
      dispatch(startLoadingNotes());
    });
  }, []);

  return {
    status,
  };
};
