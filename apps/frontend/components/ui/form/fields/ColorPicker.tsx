"use client";

import { useState } from "react";
import { Box, Popover, TextField, Stack } from "@mui/material";
import { TextFieldProps } from "@mui/material";

interface ColorPickerProps extends Omit<TextFieldProps, "onChange"> {
  value?: string;
  onChange?: (color: string) => void;
}

export const ColorPicker = ({
  value = "#6366f1",
  onChange,
  label = "Renk Seç",
  ...rest
}: ColorPickerProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [color, setColor] = useState(value);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    onChange?.(newColor);
  };

  const open = Boolean(anchorEl);

  const presetColors = [
    "#6366f1",
    "#8b5cf6",
    "#ec4899",
    "#ef4444",
    "#f59e0b",
    "#10b981",
    "#06b6d4",
    "#3b82f6",
  ];

  return (
    <>
      <TextField
        {...rest}
        label={label}
        value={color}
        onClick={handleClick}
        InputProps={{
          readOnly: true,
          startAdornment: (
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: "4px",
                backgroundColor: color,
                border: "1px solid #e2e8f0",
                mr: 1,
                cursor: "pointer",
              }}
            />
          ),
        }}
        sx={{
          cursor: "pointer",
          "& .MuiInputBase-input": {
            cursor: "pointer",
          },
        }}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack spacing={2} sx={{ p: 2, width: 240 }}>
          <input
            type="color"
            value={color}
            onChange={(e) => handleColorChange(e.target.value)}
            style={{
              width: "100%",
              height: "40px",
              border: "none",
              cursor: "pointer",
            }}
          />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
            }}
          >
            {presetColors.map((presetColor) => (
              <Box
                key={presetColor}
                onClick={() => handleColorChange(presetColor)}
                sx={{
                  width: "100%",
                  height: 40,
                  backgroundColor: presetColor,
                  borderRadius: "4px",
                  cursor: "pointer",
                  border:
                    color === presetColor
                      ? "2px solid #0f172a"
                      : "1px solid #e2e8f0",
                  "&:hover": {
                    opacity: 0.8,
                  },
                }}
              />
            ))}
          </Box>
        </Stack>
      </Popover>
    </>
  );
};
