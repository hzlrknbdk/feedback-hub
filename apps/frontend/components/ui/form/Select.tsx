"use client";

import {
  Select as MuiSelect,
  SelectProps,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { ReactNode } from "react";

interface CustomSelectProps extends Omit<SelectProps, "variant"> {
  helperText?: string;
  variant?: "outlined" | "filled" | "standard";
  children: ReactNode;
}

export const Select = ({
  sx,
  label,
  helperText,
  fullWidth = true,
  variant = "outlined",
  error,
  ...rest
}: CustomSelectProps) => {
  return (
    <FormControl fullWidth={fullWidth} variant={variant} error={error}>
      {label && <InputLabel>{label}</InputLabel>}
      <MuiSelect
        label={label}
        {...rest}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0f172a",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0f172a",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#6366f1",
          },
          ...sx,
        }}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
