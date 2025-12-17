"use client";

import React, { FC, ReactNode } from "react";
import { Controller, Control } from "react-hook-form";
import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  FormControl,
  InputLabel,
  FormHelperText,
  Box,
  Typography,
  OutlinedInput,
  Checkbox,
  ListItemText,
  InputAdornment,
  CircularProgress,
  MenuItem,
} from "@mui/material";
import { COLORS, SIZES } from "@/styles";

interface SelectFieldProps extends Omit<MuiSelectProps, "variant" | "name"> {
  name: string;
  control: Control<any>;
  label?: string;
  helperText?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  multiple?: boolean;
  loading?: boolean;
  maxMenuHeight?: number;
  selectWidth?: number | string;
  onChange?: (value: any) => void;
  isOptionDisabled?: (value: string | number) => boolean;
  fullWidth?: boolean;
  children: ReactNode;
}

const CHECKBOX_STYLE = {
  color: COLORS.text.secondary,
  "& .MuiSvgIcon-root": {
    fill: `${COLORS.primary} !important`,
  },
};

const SCROLLBAR_STYLE = {
  scrollbarWidth: "thin" as const,
  scrollbarColor: `${COLORS.primary} transparent`,
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: COLORS.primary,
    borderRadius: "3px",
    "&:hover": {
      backgroundColor: COLORS.primaryLight,
    },
  },
};

const INPUT_LABEL_STYLE = {
  color: COLORS.text.secondary,
  "&.Mui-focused": {
    color: COLORS.primary,
  },
  "&.Mui-disabled": {
    color: COLORS.text.tertiary,
  },
};

const SELECT_SX = {
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: COLORS.border,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: COLORS.primaryLight,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: COLORS.primary,
  },
  "& .MuiInputLabel-root": {
    color: COLORS.text.secondary,
  },
  "& .MuiInputBase-input": {
    fontSize: SIZES.fontSize.md,
    color: COLORS.text.primary,
  },
  "&.Mui-disabled": {
    color: COLORS.text.tertiary,
  },
};

const renderMultipleValue = (selected: string[]): React.ReactNode => (
  <span
    style={{
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "block",
      maxWidth: "100%",
    }}
    title={selected.join(", ")}
  >
    {selected.join(", ")}
  </span>
);

export const SelectField: FC<SelectFieldProps> = ({
  name,
  control,
  label,
  helperText,
  description,
  required = false,
  disabled = false,
  variant = "outlined",
  size = "medium",
  multiple = false,
  loading = false,
  maxMenuHeight = 300,
  selectWidth = "100%",
  onChange,
  isOptionDisabled,
  fullWidth = true,
  children,
  sx,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
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

          <FormControl
            fullWidth={fullWidth}
            variant={variant as any}
            error={!!error}
            disabled={disabled || loading}
            size={size as any}
            sx={{ width: selectWidth }}
          >
            {label && (
              <InputLabel shrink={true} sx={INPUT_LABEL_STYLE}>
                {label}
                {required && <span style={{ color: "#d32f2f" }}> *</span>}
              </InputLabel>
            )}

            <MuiSelect
              {...field}
              {...rest}
              label={label}
              displayEmpty={true}
              multiple={multiple}
              disabled={disabled || loading}
              value={field.value || (multiple ? [] : "")}
              onChange={(event) => {
                field.onChange(event);
                onChange?.(event.target.value);
              }}
              input={
                variant === "outlined" ? (
                  <OutlinedInput label={label} />
                ) : undefined
              }
              renderValue={(selected) => {
                if (
                  !selected ||
                  (Array.isArray(selected) && selected.length === 0)
                ) {
                  return (
                    <span style={{ color: COLORS.text.tertiary }}>
                      Select an option
                    </span>
                  );
                }

                return Array.isArray(selected)
                  ? renderMultipleValue(selected)
                  : selected;
              }}
              endAdornment={
                loading && (
                  <InputAdornment position="end">
                    <CircularProgress color="inherit" size={20} />
                  </InputAdornment>
                )
              }
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: maxMenuHeight,
                    ...SCROLLBAR_STYLE,
                  },
                },
              }}
              sx={{
                ...SELECT_SX,
                ...sx,
              }}
            >
              {React.Children.map(children, (child) => {
                if (!React.isValidElement<any>(child)) return child;

                const childValue = (child.props as any).value;
                const childLabel = (child.props as any).children;
                const isDisabled = isOptionDisabled?.(childValue) || false;
                const isSelected = multiple
                  ? (field.value as string[])?.includes(childValue)
                  : field.value === childValue;

                if (multiple) {
                  return (
                    <MenuItem
                      key={childValue}
                      value={childValue}
                      disabled={isDisabled}
                    >
                      <Checkbox checked={isSelected} sx={CHECKBOX_STYLE} />
                      <ListItemText primary={childLabel} />
                    </MenuItem>
                  );
                }

                return (
                  <MenuItem
                    key={childValue}
                    value={childValue}
                    disabled={isDisabled}
                  >
                    {childLabel}
                  </MenuItem>
                );
              })}
            </MuiSelect>

            {error ? (
              <FormHelperText sx={{ color: "#d32f2f" }}>
                {error.message}
              </FormHelperText>
            ) : (
              helperText && (
                <FormHelperText sx={{ color: COLORS.text.tertiary }}>
                  {helperText}
                </FormHelperText>
              )
            )}
          </FormControl>
        </Box>
      )}
    />
  );
};
