"use client";

import {
  ListItemIcon as MuiListItemIcon,
  ListItemIconProps,
} from "@mui/material";

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
        color: active ? "white" : "#64748b",
        ...sx,
      }}
    >
      {children}
    </MuiListItemIcon>
  );
};
