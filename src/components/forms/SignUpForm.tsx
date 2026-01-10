"use client";
import { useFetch } from "@/hooks/useFetch";
import Api from "@/utils/api";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { AuthType } from "./AuthModal";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

type Props = {
  setAuthType: (type: AuthType) => void;
};

export const SignUpForm = ({ setAuthType }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const { fetchData, isLoading, error: serverError } = useFetch();
  const onSubmit = (data: FormData) => {
    const body = JSON.stringify({ email: data.email, password: data.password });
    const result = fetchData(Api.sign.up, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
  };

  return (
    <Box>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5" align="center" gutterBottom>
          Регистрация
        </Typography>
        <TextField
          label="Электронная почта"
          type="email"
          fullWidth
          margin="normal"
          {...register("email", {
            required: "Введите электронную почту",
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Пароль"
          type="password"
          fullWidth
          margin="normal"
          {...register("password", {
            required: "Введите пароль",
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          label="Подтверждение пароля"
          type="password"
          fullWidth
          margin="normal"
          {...register("confirmPassword", {
            required: "Введите пароль повторно",
            validate: (value) =>
              value === watch("password") || "Пароли не совпадают",
          })}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress sx={{ color: "white" }} size="1.5rem" />
          ) : (
            "Регистрация"
          )}
        </Button>
      </Box>
      <Box display="flex" flexDirection="row" gap={1} pt={1}>
        Уже есть аккаунт?
        <Typography
          onClick={() => setAuthType("sign-in")}
          color="primary"
          sx={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Войти
        </Typography>
      </Box>

      {serverError?.message && (
        <Alert severity="error" sx={{ mt: "5%" }}>
          {serverError?.message}
        </Alert>
      )}
    </Box>
  );
};
