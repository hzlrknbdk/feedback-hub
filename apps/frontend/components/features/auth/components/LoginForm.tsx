"use client";

import NextLink from "next/link";
import { Stack, Typography, Link, Box } from "@mui/material";
import { Button } from "@/components/ui/base/Button";
import { TextField } from "@/components/ui/form/TextField";
import { COLORS, SIZES } from "@/styles";

export default function LoginForm() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: SIZES.maxWidth,
        mx: "auto",
      }}
    >
      <form>
        <Stack spacing={SIZES.spacing.lg}>
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
            autoComplete="current-password"
            required
          />

          <Button type="submit">Log in</Button>
        </Stack>
      </form>
    </Box>
  );
}
