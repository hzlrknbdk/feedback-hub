import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { COLORS, SIZES, TRANSITIONS } from "@/styles";

interface CustomButtonProps extends Omit<MuiButtonProps, "color"> {
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  variant?: "contained" | "outlined" | "text";
  width?: string | number;
}

export const Button = ({
  sx,
  children,
  size = "large",
  fullWidth = true,
  variant = "contained",
  startIcon,
  endIcon,
  width,
  ...rest
}: CustomButtonProps) => {
  const isOutlined = variant === "outlined";

  return (
    <MuiButton
      fullWidth={fullWidth}
      variant={variant}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      {...rest}
      sx={{
        textTransform: "none",
        borderRadius: SIZES.radius.md,
        fontWeight: SIZES.fontWeight.medium,
        transition: TRANSITIONS.smooth,
        width,

        // Contained
        ...(variant === "contained" && {
          backgroundColor: COLORS.primary,
          color: COLORS.text.light,
          "&:hover": {
            backgroundColor: COLORS.primaryDark,
          },
          "& .MuiSvgIcon-root": {
            fill: COLORS.text.light,
          },
        }),

        // Outlined
        ...(isOutlined && {
          borderColor: COLORS.border,
          color: COLORS.text.primary,
          "&:hover": {
            backgroundColor: COLORS.backgroundLight,
            borderColor: COLORS.primary,
            color: COLORS.primary,
            bgcolor: COLORS.hover,
            "& .MuiSvgIcon-root": {
              fill: COLORS.primary,
            },
          },
        }),

        // Text
        ...(variant === "text" && {
          color: COLORS.text.primary,
          "&:hover": {
            backgroundColor: COLORS.backgroundLight,
          },
        }),

        ...sx,
      }}
    >
      {children}
    </MuiButton>
  );
};
