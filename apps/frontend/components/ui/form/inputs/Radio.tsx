"use client";

import {
  Radio as MuiRadio,
  RadioProps,
  FormControlLabel,
  FormControlLabelProps,
  RadioGroup,
  RadioGroupProps,
  FormControl,
  FormLabel,
} from "@mui/material";

interface CustomRadioProps extends Omit<FormControlLabelProps, "control"> {
  radioProps?: RadioProps;
}

export const Radio = ({ label, radioProps, sx, ...rest }: CustomRadioProps) => {
  return (
    <FormControlLabel
      control={
        <MuiRadio
          {...radioProps}
          sx={{
            color: "#64748b",
            "&.Mui-checked": {
              color: "#6366f1",
            },
            "&:hover": {
              backgroundColor: "rgba(99, 102, 241, 0.04)",
            },
            ...radioProps?.sx,
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

interface CustomRadioGroupProps extends RadioGroupProps {
  label?: string;
  children: React.ReactNode;
}

export const RadioGroupComponent = ({
  label,
  children,
  ...rest
}: CustomRadioGroupProps) => {
  return (
    <FormControl component="fieldset">
      {label && (
        <FormLabel
          component="legend"
          sx={{
            color: "#0f172a",
            "&.Mui-focused": {
              color: "#6366f1",
            },
          }}
        >
          {label}
        </FormLabel>
      )}
      <RadioGroup {...rest}>{children}</RadioGroup>
    </FormControl>
  );
};
