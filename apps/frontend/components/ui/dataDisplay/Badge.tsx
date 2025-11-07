"use client";

import { Badge as MuiBadge, BadgeProps } from "@mui/material";

export const Badge = ({
  sx,
  color = "error",
  children,
  ...rest
}: BadgeProps) => {
  return (
    <MuiBadge
      color={color}
      {...rest}
      sx={{
        "& .MuiBadge-badge": {
          fontSize: 10,
          height: 18,
          minWidth: 18,
          fontWeight: 600,
        },
        ...sx,
      }}
    >
      {children}
    </MuiBadge>
  );
};
