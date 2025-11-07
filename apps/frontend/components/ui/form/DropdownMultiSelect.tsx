"use client";

import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  ListItemText,
  SelectProps,
  FormHelperText,
  Chip,
  Box,
} from "@mui/material";

interface Option {
  value: string | number;
  label: string;
}

interface DropdownMultiSelectProps
  extends Omit<SelectProps<string[]>, "variant"> {
  options: Option[];
  helperText?: string;
  variant?: "outlined" | "filled" | "standard";
}

export const DropdownMultiSelect = ({
  label,
  options,
  value = [],
  onChange,
  helperText,
  fullWidth = true,
  variant = "outlined",
  error,
  ...rest
}: DropdownMultiSelectProps) => {
  return (
    <FormControl fullWidth={fullWidth} variant={variant} error={error}>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        multiple
        value={value}
        onChange={onChange}
        label={label}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {(selected as string[]).map((val) => {
              const option = options.find((opt) => opt.value === val);
              return (
                <Chip
                  key={val}
                  label={option?.label || val}
                  size="small"
                  sx={{
                    backgroundColor: "#6366f1",
                    color: "#ffffff",
                  }}
                />
              );
            })}
          </Box>
        )}
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
          ...rest.sx,
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Checkbox
              checked={
                (value as string[]).indexOf(option.value.toString()) > -1
              }
              sx={{
                color: "#64748b",
                "&.Mui-checked": {
                  color: "#6366f1",
                },
              }}
            />
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
