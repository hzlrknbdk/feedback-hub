"use client";

import { List, Typography } from "@/ui/dataDisplay";
import { Box } from "@mui/material";
import { MAIN_MENU, ADMIN_MENU } from "@/config/navigation";
import { MenuItem } from "@/lib/types/navigation";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { COLORS, SIZES, TRANSITIONS } from "@/styles";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
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
            />
          ))}
        </List>

        {isOpen && (
          <Box sx={{ mt: SIZES.spacing.lg }}>
            <Typography
              variant="caption"
              sx={{
                px: 1.5,
                py: 1,
                display: "block",
                color: COLORS.text.tertiary,
                fontWeight: SIZES.fontWeight.semibold,
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}
            >
              Admin
            </Typography>
            <List disablePadding sx={{ mt: SIZES.spacing.xs }}>
              {ADMIN_MENU.map((item: MenuItem) => (
                <SidebarMenuItem
                  key={item.text}
                  item={item}
                  isCollapsed={!isOpen}
                />
              ))}
            </List>
          </Box>
        )}
      </Box>
    </Box>
  );
}
