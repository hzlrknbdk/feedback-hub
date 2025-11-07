"use client";

import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
} from "@mui/material";

interface CustomCheckboxProps extends Omit<FormControlLabelProps, "control"> {
  checkboxProps?: CheckboxProps;
}

export const Checkbox = ({
  label,
  checkboxProps,
  sx,
  ...rest
}: CustomCheckboxProps) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          {...checkboxProps}
          sx={{
            color: "#64748b",
            "&.Mui-checked": {
              color: "#6366f1",
            },
            "&:hover": {
              backgroundColor: "rgba(99, 102, 241, 0.04)",
            },
            ...checkboxProps?.sx,
          }}
        />
      }
      label={label}
      sx={{
        "& .MuiFormControlLabel-label": {
          fontSize: "14px",
          color: "#0f172a",
        },
        ...sx,
      }}
      {...rest}
    />
  );
};
