"use client";

import { FC } from "react";
import { Controller, Control } from "react-hook-form";
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
  Box,
  Typography,
} from "@mui/material";
import { COLORS, SIZES } from "@/styles";

interface CheckboxFieldProps
  extends Omit<FormControlLabelProps, "control" | "name"> {
  name: string;
  control: Control<any>;
  label: string;
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
  description?: string;
  size?: "small" | "medium";
  indeterminate?: boolean;
  checkboxProps?: MuiCheckboxProps;
}

export const CheckboxField: FC<CheckboxFieldProps> = ({
  name,
  control,
  label,
  required = false,
  disabled = false,
  helperText,
  description,
  size = "medium",
  indeterminate = false,
  checkboxProps,
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
              <MuiCheckbox
                {...field}
                {...checkboxProps}
                size={size}
                color="primary"
                checked={field.value || false}
                indeterminate={indeterminate}
                disabled={disabled}
                sx={{
                  color: COLORS.text.secondary,
                  "&.Mui-checked": {
                    color: COLORS.primary,
                  },
                  "&:hover": {
                    backgroundColor: `rgba(99, 102, 241, 0.04)`,
                  },
                  "&.Mui-disabled": {
                    color: COLORS.text.tertiary,
                  },
                  "& .MuiSvgIcon-root": {
                    fill: `${COLORS.primary} !important`,
                  },
                  ...checkboxProps?.sx,
                }}
              />
            }
            label={
              <>
                {label}
                {required && <span style={{ color: "#d32f2f" }}> *</span>}
              </>
            }
            disabled={disabled}
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: SIZES.fontSize.md,
                color: disabled ? COLORS.text.tertiary : COLORS.text.primary,
              },
              ...sx,
            }}
            {...rest}
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

          {helperText && !error && (
            <Typography
              sx={{
                fontSize: SIZES.fontSize.xs,
                color: COLORS.text.tertiary,
                mt: SIZES.spacing.xs,
              }}
            >
              {helperText}
            </Typography>
          )}
        </Box>
      )}
    />
  );
};
