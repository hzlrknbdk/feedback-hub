"use client";

import NextLink from "next/link";
import { Stack, Typography, Link } from "@mui/material";
import { Button } from "../../../../components/ui/Button";
import { TextField } from "../../../../components/ui/TextField";

export default function LoginForm() {
  return (
    <form>
      <Stack spacing={2}>
        <Typography variant="h4">Welcome back</Typography>

        <Typography variant="body1">
          Don’t have an account?{" "}
          <Link
            component={NextLink}
            href="/register"
            underline="hover"
            sx={{ color: "#6366f1" }}
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
  );
}
