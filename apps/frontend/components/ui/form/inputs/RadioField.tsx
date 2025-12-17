"use client";

import React, { FC, ReactNode } from "react";
import { Controller, Control } from "react-hook-form";
import {
  Radio as MuiRadio,
  RadioProps as MuiRadioProps,
  FormControlLabel,
  FormControlLabelProps,
  RadioGroup,
  RadioGroupProps,
  FormControl,
  FormLabel,
  Box,
  Typography,
} from "@mui/material";
import { COLORS, SIZES } from "@/styles";

interface RadioFieldProps
  extends Omit<FormControlLabelProps, "control" | "name"> {
  value: string | number;
  disabled?: boolean;
  radioProps?: MuiRadioProps;
}

export const RadioField: FC<RadioFieldProps> = ({
  value,
  label,
  disabled = false,
  radioProps,
  sx,
  ...rest
}) => {
  return (
    <FormControlLabel
      value={value}
      disabled={disabled}
      control={
        <MuiRadio
          {...radioProps}
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
            ...radioProps?.sx,
          }}
        />
      }
      label={label}
      sx={{
        "& .MuiFormControlLabel-label": {
          fontSize: SIZES.fontSize.md,
          color: disabled ? COLORS.text.tertiary : COLORS.text.primary,
        },
        ...sx,
      }}
      {...rest}
    />
  );
};

interface RadioGroupFieldProps extends Omit<RadioGroupProps, "name"> {
  name: string;
  control: Control<any>;
  label?: string;
  children: ReactNode;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  row?: boolean;
  spacing?: number;
  description?: string;
}

export const RadioGroupField: FC<RadioGroupFieldProps> = ({
  name,
  control,
  label,
  children,
  helperText,
  required = false,
  disabled = false,
  row = false,
  spacing = 2,
  description,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box>
          <FormControl component="fieldset" error={!!error} disabled={disabled}>
            {label && (
              <FormLabel
                component="legend"
                sx={{
                  color: COLORS.text.primary,
                  fontSize: SIZES.fontSize.md,
                  fontWeight: SIZES.fontWeight.semibold,
                  mb: SIZES.spacing.sm,
                  "&.Mui-focused": {
                    color: COLORS.primary,
                  },
                  "&.Mui-disabled": {
                    color: COLORS.text.tertiary,
                  },
                }}
              >
                {label}
                {required && <span style={{ color: "#d32f2f" }}> *</span>}
              </FormLabel>
            )}

            {description && (
              <Typography
                sx={{
                  fontSize: SIZES.fontSize.xs,
                  color: COLORS.text.tertiary,
                  mb: SIZES.spacing.sm,
                }}
              >
                {description}
              </Typography>
            )}

            <RadioGroup
              {...field}
              row={row}
              sx={{
                gap: spacing,
              }}
              {...rest}
            >
              {children}
            </RadioGroup>
          </FormControl>

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
