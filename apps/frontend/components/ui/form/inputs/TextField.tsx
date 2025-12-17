"use client";

import { FC, useState } from "react";
import { Controller, Control } from "react-hook-form";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  IconButton,
  InputAdornment,
  Typography,
  Box,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { COLORS, SIZES } from "@/styles";

interface TextFieldProps extends Omit<MuiTextFieldProps, "variant" | "name"> {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  variant?: "outlined" | "standard" | "filled";
  focusBorderColor?: string;
  autoComplete?: string;
}

export const TextField: FC<TextFieldProps> = ({
  name,
  control,
  label,
  placeholder,
  variant = "outlined",
  autoComplete = "off",
  focusBorderColor = COLORS.primary,
  sx,
  type,
  fullWidth = true,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <Box>
          <MuiTextField
            {...field}
            {...rest}
            label={label}
            placeholder={placeholder}
            variant={variant as any}
            type={isPassword ? (showPassword ? "text" : "password") : type}
            fullWidth={fullWidth}
            error={!!error}
            autoComplete="off"
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
            }}
            sx={{
              "& .MuiInputLabel-root": {
                color: COLORS.text.secondary,
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: focusBorderColor,
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: COLORS.border,
                },
                "&:hover fieldset": {
                  borderColor: COLORS.primaryLight,
                },
                "&.Mui-focused fieldset": {
                  borderColor: focusBorderColor,
                },
              },
              ...sx,
            }}
          />
          {error && (
            <Typography
              sx={{
                fontSize: SIZES.fontSize.xs,
                color: "#d32f2f",
                mt: SIZES.spacing.xs,
              }}
            >
              {error.message}
            </Typography>
          )}
        </Box>
      )}
    />
  );
};
