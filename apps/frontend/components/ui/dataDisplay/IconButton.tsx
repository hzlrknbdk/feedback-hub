"use client";

import { IconButton as MuiIconButton, IconButtonProps } from "@mui/material";

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
        width: 40,
        height: 40,
        color: color === "default" ? "#64748b" : undefined,
        "&:hover": {
          bgcolor: "rgba(99, 102, 241, 0.04)",
        },
        ...sx,
      }}
    >
      {children}
    </MuiIconButton>
  );
};
