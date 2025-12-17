"use client";

import React, { FC } from "react";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack, Typography, Link, Box } from "@mui/material";
import { Button } from "@/components/ui/base/Button";
import { TextField } from "@/components/ui/form/inputs";
import { COLORS, SIZES } from "@/styles";
import { loginSchema, LoginFormData } from "@/lib/types/auth";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = () => {
  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Form Data:", data);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: SIZES.maxWidth.md, mx: "auto" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={SIZES.spacing.md}>
          <Typography variant="h4">Welcome back</Typography>

          <Typography variant="body1">
            Don't have an account?{" "}
            <Link
              component={NextLink}
              href="/register"
              underline="hover"
              sx={{ color: COLORS.primary }}
            >
              Sign up
            </Link>
          </Typography>

          <TextField
            control={control}
            name="email"
            label="Email"
            type="email"
            placeholder="example@email.com"
          />

          <TextField
            control={control}
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••"
          />

          <Button type="submit">Log in</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
