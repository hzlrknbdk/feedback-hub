"use client";

import React, { FC } from "react";
import { Controller, Control } from "react-hook-form";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  Box,
  Typography,
} from "@mui/material";
import { COLORS, SIZES } from "@/styles";

interface TextareaFieldProps
  extends Omit<MuiTextFieldProps, "multiline" | "variant" | "name"> {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  helperText?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  maxRows?: number;
  minRows?: number;
  textColor?: string;
  placeholderColor?: string;
  placeholderFontSize?: string | number;
  onValueChange?: (value: string) => void;
}

const getTextareaSx = (
  textColor: string,
  placeholderColor: string,
  placeholderFontSize: string | number
) => ({
  "& .MuiInput-root": {
    color: textColor,
    overflow: "hidden",
  },
  "& .MuiInput-underline:before, & .MuiInput-underline:after": {
    borderBottomColor: "transparent !important",
  },
  "& .MuiInput-root:hover .MuiInput-underline:before": {
    borderBottomColor: `${COLORS.primaryLight} !important`,
  },
  "& .MuiInput-root:focus-within .MuiInput-underline:before": {
    borderBottomColor: `${COLORS.primary} !important`,
  },
  "& .MuiInputBase-input": {
    resize: "none" as const,
    overflow: "hidden",
    color: textColor,
    fontSize: SIZES.fontSize.md,
  },
  "& .MuiInputBase-input::placeholder": {
    color: placeholderColor,
    fontSize: placeholderFontSize,
    opacity: 0.7,
  },
});

export const TextareaField: FC<TextareaFieldProps> = ({
  name,
  control,
  label,
  placeholder,
  helperText,
  description,
  required = false,
  disabled = false,
  maxRows = 4,
  minRows = 2,
  textColor = COLORS.text.primary,
  placeholderColor = COLORS.text.tertiary,
  placeholderFontSize = SIZES.fontSize.md,
  onValueChange,
  sx,
  ...rest
}) => {
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    currentValue: string
  ) => {
    if (e.key === "Enter") {
      const lines = currentValue?.split("\n").length || 1;
      if (lines >= maxRows!) {
        e.preventDefault();
      }
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
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

          <MuiTextField
            {...field}
            {...rest}
            label={label}
            placeholder={placeholder}
            multiline
            minRows={minRows}
            maxRows={maxRows}
            variant="standard"
            fullWidth
            disabled={disabled}
            error={!!error}
            onKeyDown={(e) => {
              handleKeyDown(e, field.value || "");
            }}
            onChange={(e) => {
              field.onChange(e);
              onValueChange?.(e.target.value);
            }}
            sx={{
              ...getTextareaSx(
                textColor,
                placeholderColor,
                placeholderFontSize
              ),
              ...sx,
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
