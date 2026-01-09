"use client";
import { useFetch } from "@/hooks/useFetch";
import Api from "@/utils/api";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

interface SignInData {
  email: string;
  password: string;
}

export const SignInForm = () => {
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
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: "30%", pt: "10%" }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Sign In
      </Typography>

      <TextField
        label="Email address"
        type="email"
        fullWidth
        margin="normal"
        {...register("email", { required: "Email is required" })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        {...register("password", { required: "Password is required" })}
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
        {isLoading ? "Signing In..." : "Sign In"}
      </Button>

      {serverError?.message && (
        <Alert severity="error" sx={{ mt: "5%" }}>
          {serverError?.message}
        </Alert>
      )}
    </Box>
  );
};
