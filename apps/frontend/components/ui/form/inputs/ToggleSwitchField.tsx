"use client";

import React, { FC } from "react";
import { Controller, Control } from "react-hook-form";
import {
  Switch as MuiSwitch,
  FormControlLabel,
  Box,
  Typography,
  SwitchProps as MuiSwitchProps,
} from "@mui/material";
import { COLORS, SIZES } from "@/styles";

interface ToggleSwitchFieldProps
  extends Omit<MuiSwitchProps, "name" | "onChange"> {
  name: string;
  control: Control<any>;
  label?: string;
  description?: string;
  helperText?: string;
  required?: boolean;
  onChange?: (checked: boolean) => void;
}

const SWITCH_SX = {
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: COLORS.primary,
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: COLORS.primary,
  },
  "& .MuiSwitch-switchBase": {
    color: COLORS.text.secondary,
  },
  "& .MuiSwitch-track": {
    backgroundColor: COLORS.border,
  },
};

export const ToggleSwitchField: FC<ToggleSwitchFieldProps> = ({
  name,
  control,
  label,
  description,
  helperText,
  required = false,
  disabled = false,
  onChange,
  sx,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field, fieldState: { error } }) => (
        <Box>
          {description && (
            <Typography
              sx={{
                fontSize: SIZES.fontSize.xs,
                color: COLORS.text.tertiary,
                mb: SIZES.spacing.xs,
              }}
            >
              {description}
            </Typography>
          )}

          <FormControlLabel
            control={
              <MuiSwitch
                {...field}
                {...rest}
                checked={field.value || false}
                disabled={disabled}
                onChange={(e) => {
                  field.onChange(e.target.checked);
                  onChange?.(e.target.checked);
                }}
                sx={{
                  ...SWITCH_SX,
                  ...sx,
                }}
              />
            }
            label={
              <Box>
                {label && (
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: SIZES.fontWeight.medium,
                      color: disabled
                        ? COLORS.text.tertiary
                        : COLORS.text.primary,
                    }}
                  >
                    {label}
                    {required && <span style={{ color: "#d32f2f" }}> *</span>}
                  </Typography>
                )}
              </Box>
            }
            sx={{
              gap: SIZES.spacing.md,
            }}
          />

          {error ? (
            <Typography
              sx={{
                fontSize: SIZES.fontSize.xs,
                color: "#d32f2f",
                mt: SIZES.spacing.xs,
              }}
            >
              {error.message}
            </Typography>
          ) : (
            helperText && (
              <Typography
                sx={{
                  fontSize: SIZES.fontSize.xs,
                  color: COLORS.text.tertiary,
                  mt: SIZES.spacing.xs,
                }}
              >
                {helperText}
              </Typography>
            )
          )}
        </Box>
      )}
    />
  );
};
