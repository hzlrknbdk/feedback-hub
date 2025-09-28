"use client";

import NextLink from "next/link";
import { Stack, Typography, Grid, Link, Divider } from "@mui/material";
import { Button } from "../../../../components/ui/Button";
import { TextField } from "../../../../components/ui/TextField";
import Image from "next/image";

export default function RegisterForm() {
  return (
    <form>
      <Stack spacing={2}>
        <Typography variant="h4">Create an account</Typography>

        <Typography variant="body1">
          Already have an account?{" "}
          <Link
            component={NextLink}
            href="/login"
            underline="hover"
            sx={{ color: "#6366f1" }}
          >
            Log in
          </Link>
        </Typography>

        <Grid container spacing={0}>
          <Grid item xs={6} sx={{ pr: 1 }}>
            <TextField
              label="First name"
              name="firstName"
              autoComplete="given-name"
              required
            />
          </Grid>
          <Grid item xs={6} sx={{ pl: 1 }}>
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

        <Divider sx={{ color: "gray" }}>Or register with</Divider>

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
