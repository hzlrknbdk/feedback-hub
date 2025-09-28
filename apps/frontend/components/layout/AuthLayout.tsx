"use client";

import Image from "next/image";
import { Grid, Box } from "@mui/material";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid container sx={{ height: "100vh", overflow: "hidden" }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          height: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src="/auth.png"
            alt="Authentication Illustration"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          height: { xs: "auto", md: "100%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 8,
        }}
      >
        <Box sx={{ width: "100%" }}>{children}</Box>
      </Grid>
    </Grid>
  );
}
