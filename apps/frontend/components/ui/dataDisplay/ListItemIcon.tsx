"use client";

import {
  ListItemIcon as MuiListItemIcon,
  ListItemIconProps,
} from "@mui/material";
import { COLORS, SIZES } from "@/styles";

interface CustomListItemIconProps extends ListItemIconProps {
  active?: boolean;
}

export const ListItemIcon = ({
  sx,
  active = false,
  children,
  ...rest
}: CustomListItemIconProps) => {
  return (
    <MuiListItemIcon
      {...rest}
      sx={{
        minWidth: 36,
        color: active ? COLORS.text.light : COLORS.text.tertiary,
        ...sx,
      }}
    >
      {children}
    </MuiListItemIcon>
  );
};
