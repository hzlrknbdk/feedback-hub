"use client";

import NextLink from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/base/Button";
import { TextField } from "@/components/ui/form/TextField";
import { Stack, Typography, Link, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { COLORS, SIZES } from "@/styles";

export default function RegisterForm() {
  return (
    <form>
      <Stack spacing={SIZES.spacing.lg}>
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
              label="First name"
              name="firstName"
              autoComplete="given-name"
              required
            />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField
              label="Last name"
              name="lastName"
              autoComplete="family-name"
              required
            />
          </Grid>
        </Grid>

        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
        />

        <Button type="submit">Create account</Button>

        <Divider sx={{ color: COLORS.text.tertiary }}>Or register with</Divider>

        <Button
          variant="outlined"
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
}
