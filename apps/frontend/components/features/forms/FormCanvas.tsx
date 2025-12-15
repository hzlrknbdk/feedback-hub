"use client";

import React, { FC } from "react";
import { Box, Typography, Card, TextField } from "@mui/material";
import { COLORS, SIZES, SHADOWS } from "@/styles";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { Textarea } from "@/components/ui/form/inputs/Textarea";

interface FormCanvasProps {}

const FormCanvas: FC<FormCanvasProps> = () => {
  return (
    <Card
      sx={{
        width: "100%",
        height: 600,
        maxWidth: "70%",
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        p: SIZES.spacing.lg,
        boxShadow: SHADOWS.sm,
        bgcolor: COLORS.background,
        borderRadius: SIZES.radius.md,
      }}
    >
      <Box
        sx={{
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <TextField placeholder="Title" variant="standard" sx={{ pb: 2 }} />

        <Textarea
          placeholder="Form description (optional)"
          placeholderColor={COLORS.text.tertiary}
          textColor={COLORS.text.tertiary}
          maxRows={2}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: SIZES.spacing.md,
          py: SIZES.spacing.md,
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: SIZES.radius.lg,
            bgcolor: COLORS.primaryLighter,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <WidgetsOutlinedIcon
            sx={{
              fontSize: 40,
              color: COLORS.primaryLight,
            }}
          />
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: SIZES.fontSize.lg,
              fontWeight: SIZES.fontWeight.semibold,
              color: COLORS.text.primary,
              mb: SIZES.spacing.xs,
            }}
          >
            Empty Form
          </Typography>
          <Typography
            sx={{
              fontSize: SIZES.fontSize.md,
              color: COLORS.text.tertiary,
            }}
          >
            Select a field type from the left sidebar to get started
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default FormCanvas;
