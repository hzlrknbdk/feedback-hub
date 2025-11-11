"use client";

import { Typography as MuiTypography, TypographyProps } from "@mui/material";

export const Typography = ({ sx, children, ...rest }: TypographyProps) => {
  return (
    <MuiTypography
      {...rest}
      sx={{
        ...sx,
      }}
    >
      {children}
    </MuiTypography>
  );
};
