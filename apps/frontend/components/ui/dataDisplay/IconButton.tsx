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
        borderRadius: 0.5,
        width: 40,
        height: 40,
        color: "#0E172A",
        transition: "all 0.2s ease-in-out",
        "& .MuiSvgIcon-root": {
          fill: "#0E172A",
        },
        "&:hover": {
          bgcolor: "#E0E1FC",
          color: "#6366f1",
          "& .MuiSvgIcon-root": {
            fill: "#6366f1",
          },
        },
        ...sx,
      }}
    >
      {children}
    </MuiIconButton>
  );
};
