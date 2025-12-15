"use client";

import { useState } from "react";
import {
  TextField as MuiTextField,
  TextFieldProps,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { COLORS, SIZES } from "@/styles";

interface CustomTextFieldProps extends Omit<TextFieldProps, "variant"> {
  variant?: "outlined" | "standard" | "filled";
  focusBorderColor?: string;
}

export const TextField = ({
  sx,
  type,
  fullWidth = true,
  variant = "outlined",
  focusBorderColor = COLORS.primary,
  slotProps,
  ...rest
}: CustomTextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <MuiTextField
      fullWidth={fullWidth}
      variant={variant as any}
      type={isPassword ? (showPassword ? "text" : "password") : type}
      {...rest}
      slotProps={{
        input: {
          endAdornment: isPassword && (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                edge="end"
                sx={{
                  color: COLORS.text.primary,
                  "&:hover": { color: COLORS.primary },
                }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        },
        ...slotProps,
      }}
      sx={{
        "& .MuiInputLabel-root": {
          color: COLORS.text.secondary,
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: focusBorderColor,
        },
        "& .MuiInputBase-input": {
          fontSize: SIZES.fontSize.md,
          color: COLORS.text.primary,
        },
        ...sx,
      }}
    />
  );
};
