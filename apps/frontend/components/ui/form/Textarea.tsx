"use client";

import { TextField, TextFieldProps } from "@mui/material";

interface TextareaProps extends Omit<TextFieldProps, "multiline"> {
  minRows?: number;
  maxRows?: number;
}

export const Textarea = ({
  minRows = 4,
  maxRows = 8,
  sx,
  fullWidth = true,
  variant = "outlined",
  ...rest
}: TextareaProps) => {
  return (
    <TextField
      multiline
      minRows={minRows}
      maxRows={maxRows}
      fullWidth={fullWidth}
      variant={variant}
      {...rest}
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
