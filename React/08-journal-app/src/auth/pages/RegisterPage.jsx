import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El email debe de tener un @"],
  password: [
    (value) => value.length >= 6,
    "El password debe de tener mas de 6 letras",
  ],
  displayName: [
    (value) => value.length >= 3,
    "El nombre debe de tener mas de tres caracteres",
  ],
};

export const RegisterPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  console.log("ErrorMesagge", errorMessage);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm(formData, formValidations);

  // console.log(displayNameValid);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    console.log(formState);
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Register">
      {/* <h1>FormValid {isFormValid ? "Valido" : "Incorrecto"}</h1> */}
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container spacing={2}>
          <TextField
            fullWidth
            id="displayName"
            label="Nombre Completo"
            name="displayName"
            placeholder="Tu nombre"
            type="text"
            variant="outlined"
            autoComplete="o
            ff"
            value={displayName}
            onChange={onInputChange}
            error={!!displayNameValid && formSubmitted}
            helperText={formSubmitted && displayNameValid}
          />
          <TextField
            fullWidth
            id="email"
            label="Email"
            name="email"
            placeholder="correo@google.com"
            type="email"
            variant="outlined"
            autoComplete="off"
            value={email}
            onChange={onInputChange}
            error={!!emailValid && formSubmitted}
            helperText={formSubmitted && emailValid}
          />

          <TextField
            fullWidth
            id="password"
            label="Password"
            name="password"
            placeholder="password"
            type="password"
            variant="outlined"
            autoComplete="off"
            value={password}
            onChange={onInputChange}
            error={!!passwordValid && formSubmitted}
            helperText={formSubmitted && passwordValid}
          />

          <Grid container size={12} spacing={2}>
            <Grid size={{ xs: 12 }} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Button
                disabled={isCheckingAuthentication}
                type="submit"
                fullWidth
                variant="contained"
              >
                Register
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end" size={12}>
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link color="inherit" component={RouterLink} to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
