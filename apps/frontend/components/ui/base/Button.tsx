import { Button as MuiButton, ButtonProps } from "@mui/material";

export const Button = ({
  sx,
  children,
  size = "large",
  fullWidth = true,
  variant = "contained",
  ...rest
}: ButtonProps) => {
  return (
    <MuiButton
      fullWidth={fullWidth}
      variant={variant}
      size={size}
      {...rest}
      sx={{
        textTransform: "none",
        borderRadius: 2,
        backgroundColor: variant === "outlined" ? "transparent" : "#6366f1",
        color: variant === "outlined" ? "#0f172a" : "white",
        borderColor: variant === "outlined" ? "#0f172a" : "transparent",
        "&:hover": {
          backgroundColor: variant === "outlined" ? "#6366f1" : "#4f46e5",
          color: "white",
          borderColor: variant === "outlined" ? "#6366f1" : "transparent",
        },
        ...sx,
      }}
    >
      {children}
    </MuiButton>
  );
};
