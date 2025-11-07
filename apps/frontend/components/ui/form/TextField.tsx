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

export const TextField = ({
  sx,
  type,
  fullWidth = true,
  variant = "outlined",
  ...rest
}: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <MuiTextField
      fullWidth={fullWidth}
      variant={variant}
      type={isPassword ? (showPassword ? "text" : "password") : type}
      {...rest}
      InputProps={{
        endAdornment: isPassword && (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword((prev) => !prev)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
        ...rest.InputProps,
      }}
      sx={{
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#6366f1",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#0f172a",
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#0f172a",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#6366f1",
          },
        ...sx,
      }}
    />
  );
};
