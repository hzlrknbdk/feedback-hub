"use client";

import React, { FC } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/base/Button";
import { TextField } from "@/components/ui/form/inputs/TextField";
import { Stack, Typography, Link, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { COLORS, SIZES } from "@/styles";
import { registerSchema, RegisterFormData } from "@/lib/types/auth";

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      console.log("Form Data:", data);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={SIZES.spacing.md}>
        <Typography variant="h4">Create an account</Typography>

        <Typography variant="body1">
          Already have an account?{" "}
          <Link
            component={NextLink}
            href="/login"
            underline="hover"
            sx={{ color: COLORS.primary }}
          >
            Log in
          </Link>
        </Typography>

        <Grid container spacing={SIZES.spacing.sm}>
          <Grid size={{ xs: 6 }}>
            <TextField
              required
              control={control}
              label="First name"
              name="firstName"
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField
              required
              control={control}
              label="Last name"
              name="lastName"
            />
          </Grid>
        </Grid>

        <TextField
          required
          control={control}
          label="Email"
          name="email"
          type="email"
        />

        <TextField
          required
          control={control}
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
        />

        <TextField
          required
          control={control}
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
        />

        <Button type="submit" fullWidth disabled={isSubmitting}>
          {isSubmitting ? "Creating account..." : "Create account"}
        </Button>

        <Divider sx={{ color: COLORS.text.tertiary }}>Or register with</Divider>

        <Button
          variant="outlined"
          fullWidth
          startIcon={
            <Image
              src="/icons/google.svg"
              alt="Google"
              width={20}
              height={20}
              style={{ display: "block" }}
            />
          }
        >
          Google
        </Button>
      </Stack>
    </form>
  );
};

export default RegisterForm;
