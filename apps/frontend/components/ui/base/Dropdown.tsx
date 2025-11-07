"use client";

import { useState, ReactNode } from "react";
import { Menu, MenuItem, MenuProps, Box } from "@mui/material";

interface DropdownProps extends Omit<MenuProps, "open" | "onClose"> {
  trigger: ReactNode;
  items: {
    label: string;
    onClick?: () => void;
    icon?: ReactNode;
  }[];
}

export const Dropdown = ({ trigger, items, ...menuProps }: DropdownProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (onClick?: () => void) => {
    onClick?.();
    handleClose();
  };

  return (
    <>
      <Box onClick={handleOpen} sx={{ cursor: "pointer" }}>
        {trigger}
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        {...menuProps}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: 2,
            minWidth: 180,
            mt: 1,
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          },
          ...menuProps.sx,
        }}
      >
        {items.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => handleItemClick(item.onClick)}
            sx={{
              fontSize: 14,
              py: 1.25,
              display: "flex",
              gap: 1.5,
            }}
          >
            {item.icon}
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
