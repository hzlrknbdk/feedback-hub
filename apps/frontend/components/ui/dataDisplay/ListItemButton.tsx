"use client";

import {
  ListItemButton as MuiListItemButton,
  ListItemButtonProps as MuiListItemButtonProps,
} from "@mui/material";

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
        borderRadius: 2,
        py: 1.25,
        px: 1.5,
        bgcolor: active ? "#6366f1" : "transparent",
        color: active ? "white" : "#64748b",
        transition: "all 0.2s",
        "&:hover": {
          bgcolor: active ? "#5558e3" : "#f1f5f9",
        },
        ...sx,
      }}
    >
      {children}
    </MuiListItemButton>
  );
};
