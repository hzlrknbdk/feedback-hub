"use client";

import React, { FC } from "react";
import { List, Typography } from "@/ui/dataDisplay";
import { Box } from "@mui/material";
import { MAIN_MENU } from "@/config/navigation";
import { MenuItem } from "@/lib/types/navigation";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { COLORS, SIZES } from "@/styles";

interface SidebarProps {
  isOpen: boolean;
  onItemClick?: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onItemClick }) => {
  return (
    <Box
      sx={{
        width: isOpen ? 290 : 80,
        bgcolor: COLORS.background,
        borderRight: `1px solid ${COLORS.border}`,
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        transition: `width 0.3s ease-in-out`,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          overflow: "auto",
          px: isOpen ? SIZES.spacing.sm : SIZES.spacing.xs,
          mt: SIZES.spacing.md,
        }}
      >
        <List disablePadding>
          {MAIN_MENU.map((item: MenuItem) => (
            <SidebarMenuItem
              key={item.text}
              item={item}
              isCollapsed={!isOpen}
              onItemClick={onItemClick}
            />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
