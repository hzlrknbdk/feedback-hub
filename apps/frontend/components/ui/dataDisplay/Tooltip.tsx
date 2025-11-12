"use client";

import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from "@mui/material";

export interface TooltipProps extends MuiTooltipProps {}

export function Tooltip({ children, ...props }: TooltipProps) {
  return <MuiTooltip {...props}>{children}</MuiTooltip>;
}
