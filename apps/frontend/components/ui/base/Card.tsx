"use client";

import {
  Card as MuiCard,
  CardProps,
  CardContent,
  CardHeader,
  CardActions,
} from "@mui/material";

export const Card = ({ sx, children, ...rest }: CardProps) => {
  return (
    <MuiCard
      {...rest}
      sx={{
        borderRadius: "12px",
        boxShadow:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        border: "1px solid #e2e8f0",
        ...sx,
      }}
    >
      {children}
    </MuiCard>
  );
};

export { CardContent, CardHeader, CardActions };
