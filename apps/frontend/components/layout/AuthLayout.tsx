"use client";

import Image from "next/image";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SIZES } from "@/styles";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid container sx={{ height: "100vh", overflow: "hidden" }}>
      <Grid
        size={{ xs: 12, md: 6 }}
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
            src="/images/auth.png"
            alt="Authentication Illustration"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Grid>

      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          height: { xs: "auto", md: "100%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: SIZES.spacing.xl,
        }}
      >
        <Box sx={{ width: "100%" }}>{children}</Box>
      </Grid>
    </Grid>
  );
}
