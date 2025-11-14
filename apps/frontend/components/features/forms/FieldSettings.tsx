"use client";

import React, { FC } from "react";
import { Box, Card, Typography } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { COLORS, SHADOWS, SIZES } from "@/styles";

interface FieldSettingsProps {}

const FieldSettings: FC<FieldSettingsProps> = () => {
  return (
    <Card
      sx={{
        maxWidth: "30%",
        width: "100%",
        bgcolor: COLORS.background,
        borderRadius: SIZES.radius.md,
        boxShadow: SHADOWS.sm,
        px: SIZES.spacing.sm,
        height: 350,
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: SIZES.spacing.sm,
          p: SIZES.spacing.md,
          borderBottom: `1px solid ${COLORS.border}`,
          bgcolor: COLORS.background,
          flexShrink: 0,
        }}
      >
        <TuneIcon sx={{ fontSize: 20, color: COLORS.primary }} />
        <Typography
          sx={{
            fontSize: SIZES.fontSize.md,
            fontWeight: SIZES.fontWeight.semibold,
            color: COLORS.text.primary,
          }}
        >
          Field Settings
        </Typography>
      </Box>
      <Box
        sx={{
          p: SIZES.spacing.md,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: SIZES.spacing.md,
          textAlign: "center",
          minHeight: 200,
        }}
      >
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: SIZES.radius.lg,
            bgcolor: COLORS.primaryLighter,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <TuneIcon sx={{ fontSize: 28, color: COLORS.border }} />
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: SIZES.fontSize.sm,
              fontWeight: SIZES.fontWeight.semibold,
              color: COLORS.text.primary,
              mb: SIZES.spacing.xs,
            }}
          >
            Select a Field to Edit
          </Typography>

          <Typography
            sx={{
              fontSize: SIZES.fontSize.xs,
              color: COLORS.text.tertiary,
              lineHeight: 1.4,
            }}
          >
            Click on a field in the canvas to edit its settings
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default FieldSettings;
