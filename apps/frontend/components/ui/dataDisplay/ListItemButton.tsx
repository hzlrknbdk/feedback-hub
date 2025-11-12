"use client";

import {
  ListItemButton as MuiListItemButton,
  ListItemButtonProps as MuiListItemButtonProps,
} from "@mui/material";
import { COLORS, SIZES, TRANSITIONS } from "@/styles";

interface CustomListItemButtonProps extends MuiListItemButtonProps {
  active?: boolean;
}

export const ListItemButton = ({
  sx,
  active = false,
  children,
  ...rest
}: CustomListItemButtonProps) => {
  return (
    <MuiListItemButton
      {...rest}
      sx={{
        borderRadius: SIZES.radius.md,
        bgcolor: active ? COLORS.primary : "transparent",
        color: active ? COLORS.text.light : COLORS.text.tertiary,
        transition: TRANSITIONS.smooth,
        "&:hover": {
          bgcolor: active ? COLORS.primaryDark : COLORS.backgroundLight,
        },
        ...sx,
      }}
    >
      {children}
    </MuiListItemButton>
  );
};
