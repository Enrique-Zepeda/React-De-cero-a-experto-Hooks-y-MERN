import { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";

const formData = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { email, password, onInputChange, formState } = useForm(formData);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailPassword(formState));
  };

  const onGoogleSignIn = () => {
    console.log("OnGoogleSignIn");

    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container spacing={2}>
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
          />

          <Grid container size={12} spacing={2}>
            <Grid size={{ xs: 12 }} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                fullWidth
                variant="contained"
              >
                Login
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Button
                fullWidth
                variant="contained"
                onClick={onGoogleSignIn}
                disabled={isAuthenticating}
              >
                <Google />
                <Typography marginLeft={1}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end" size={12}>
            <Link color="inherit" component={RouterLink} to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
