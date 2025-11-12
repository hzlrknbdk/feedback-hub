"use client";

import { List, Typography } from "@/ui/dataDisplay";
import { Box } from "@mui/material";
import { MAIN_MENU, ADMIN_MENU } from "@/config/navigation";
import { MenuItem } from "@/lib/types/navigation";
import { SidebarMenuItem } from "./SidebarMenuItem";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <Box
      sx={{
        width: isOpen ? 290 : 80,
        bgcolor: "white",
        borderRight: "1px solid #e2e8f0",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        transition: "width 0.3s ease-in-out",
        overflow: "hidden",
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: "auto", px: isOpen ? 1 : 0.5, mt: 2 }}>
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
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="caption"
              sx={{
                px: 1.5,
                py: 1,
                display: "block",
                color: "#94a3b8",
                fontWeight: 600,
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}
            >
              Admin
            </Typography>
            <List disablePadding sx={{ mt: 0.5 }}>
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
