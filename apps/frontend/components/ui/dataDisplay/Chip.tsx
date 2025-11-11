"use client";

import { Chip as MuiChip, ChipProps } from "@mui/material";

interface CustomChipProps extends ChipProps {
  chipVariant?: "badge" | "notification" | "default";
}

export const Chip = ({
  sx,
  chipVariant = "default",
  size = "small",
  ...rest
}: CustomChipProps) => {
  const variantStyles = {
    badge: {
      height: 20,
      fontSize: 11,
      bgcolor: "#10b981",
      color: "white",
      fontWeight: 600,
    },
    notification: {
      height: 20,
      minWidth: 20,
      fontSize: 11,
      bgcolor: "#ef4444",
      color: "white",
      fontWeight: 600,
    },
    default: {},
  };

  return (
    <MuiChip
      size={size}
      {...rest}
      sx={{
        ...variantStyles[chipVariant],
        ...sx,
      }}
    />
  );
};
