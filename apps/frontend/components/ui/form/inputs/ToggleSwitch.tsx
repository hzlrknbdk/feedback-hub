"use client";

import {
  Switch as MuiSwitch,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";

interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
}

export const ToggleSwitch = ({
  checked = false,
  onChange,
  label,
  description,
  disabled = false,
}: ToggleSwitchProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <FormControlLabel
        control={
          <MuiSwitch
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked)}
            disabled={disabled}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#6366f1",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#6366f1",
              },
            }}
          />
        }
        label={
          <Box>
            {label && (
              <Typography variant="body2" fontWeight={500}>
                {label}
              </Typography>
            )}
            {description && (
              <Typography variant="caption" color="textSecondary">
                {description}
              </Typography>
            )}
          </Box>
        }
      />
    </Box>
  );
};
