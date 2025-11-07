"use client";

import { Avatar as MuiAvatar, AvatarProps } from "@mui/material";

interface CustomAvatarProps extends AvatarProps {
  name?: string;
}

export const Avatar = ({ sx, name, children, ...rest }: CustomAvatarProps) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <MuiAvatar
      {...rest}
      sx={{
        bgcolor: "#6366f1",
        color: "#ffffff",
        fontWeight: 600,
        fontSize: 14,
        width: 40,
        height: 40,
        ...sx,
      }}
    >
      {children || (name ? getInitials(name) : null)}
    </MuiAvatar>
  );
};
