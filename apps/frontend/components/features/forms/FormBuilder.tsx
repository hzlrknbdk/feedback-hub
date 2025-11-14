"use client";

import React, { FC } from "react";
import { Box } from "@mui/material";
import { Button } from "@/ui/base/Button";
import { COLORS, SIZES } from "@/styles";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import FormElementList from "./FormElementList";
import FormCanvas from "./FormCanvas";
import FieldSettings from "./FieldSettings";

interface FormBuilderProps {}

const FormBuilder: FC<FormBuilderProps> = () => {
  return (
    <Box
      sx={{ display: "flex", height: "100vh", bgcolor: COLORS.backgroundLight }}
    >
      <Box sx={{ flex: "0 0 360px" }}>
        <FormElementList />
      </Box>

      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: SIZES.spacing.md,
            p: SIZES.spacing.sm,
            borderBottom: `1px solid ${COLORS.border}`,
            bgcolor: COLORS.background,
            borderRadius: SIZES.radius.md,
          }}
        >
          <Button width="120px" startIcon={<VisibilityOutlinedIcon />}>
            Preview
          </Button>
          <Button width="120px" startIcon={<SaveOutlinedIcon />}>
            Save
          </Button>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            gap: SIZES.spacing.md,
            py: SIZES.spacing.md,
            overflow: "hidden",
          }}
        >
          <FormCanvas />
          <FieldSettings />
        </Box>
      </Box>
    </Box>
  );
};

export default FormBuilder;
