"use client";

import { IconButton as MuiIconButton, IconButtonProps } from "@mui/material";
import { COLORS, SIZES, TRANSITIONS } from "@/styles";

export const IconButton = ({
  sx,
  color = "default",
  children,
  ...rest
}: IconButtonProps) => {
  return (
    <MuiIconButton
      {...rest}
      sx={{
        borderRadius: SIZES.radius.sm,
        width: SIZES.buttonHeight,
        height: SIZES.buttonHeight,
        color: COLORS.text.primary,
        transition: TRANSITIONS.smooth,
        "& .MuiSvgIcon-root": {
          fill: COLORS.text.primary,
        },
        "&:hover": {
          bgcolor: COLORS.hover,
          color: COLORS.primary,
          "& .MuiSvgIcon-root": {
            fill: COLORS.primary,
          },
        },
        ...sx,
      }}
    >
      {children}
    </MuiIconButton>
  );
};
