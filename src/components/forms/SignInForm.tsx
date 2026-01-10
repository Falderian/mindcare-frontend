"use client";
import { useFetch } from "@/hooks/useFetch";
import Api from "@/utils/api";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { AuthType } from "./AuthModal";

interface SignInData {
  email: string;
  password: string;
}

type Props = {
  setAuthType: (type: AuthType) => void;
};

export const SignInForm = ({ setAuthType }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>();

  const { fetchData, isLoading, error: serverError } = useFetch();

  const onSubmit = (data: SignInData) => {
    const body = JSON.stringify({ email: data.email, password: data.password });
    const result = fetchData(Api.sign.in, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5" align="center" gutterBottom>
        Войти
      </Typography>

      <TextField
        label="Адрес электронной почты"
        type="email"
        fullWidth
        margin="normal"
        {...register("email", {
          required: "Требуется адрес электронной почты",
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label="Пароль"
        type="password"
        fullWidth
        margin="normal"
        {...register("password", { required: "Требуется пароль" })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3 }}
        disabled={isLoading}
      >
        {isLoading ? "Вход..." : "Войти"}
      </Button>

      <Box display="flex" flexDirection="row" gap={1} pt={1}>
        Новый пользователь?
        <Typography
          onClick={() => setAuthType("sign-up")}
          color="primary"
          sx={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Создать аккаунт
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
