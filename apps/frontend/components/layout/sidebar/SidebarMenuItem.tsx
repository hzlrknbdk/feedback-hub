"use client";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Chip,
} from "@/ui/dataDisplay";
import { MenuItem } from "@/lib/types/navigation";
import { useRouter, usePathname } from "next/navigation";
import { useMemo } from "react";

const COLORS = {
  primary: "#6366f1",
  text: {
    dark: "#0E172A",
    light: "#ffffff",
  },
  hover: {
    bg: "#E0E1FC",
  },
  badge: {
    success: "#10b981",
    danger: "#ef4444",
  },
};

const getButtonStyles = (isActive: boolean, isCollapsed: boolean) => ({
  borderRadius: 2,
  py: 1.25,
  px: isCollapsed ? 1 : 1.5,
  transition: "all 0.2s ease-in-out",
  justifyContent: isCollapsed ? "center" : "flex-start",
  bgcolor: isActive ? COLORS.primary : "transparent",
  color: "inherit",
  "& .MuiListItemText-primary": {
    color: isActive ? COLORS.text.light : COLORS.text.dark,
    fontSize: "1rem",
    fontWeight: isActive ? 500 : 400,
  },
  "& .MuiListItemIcon-root .MuiSvgIcon-root": {
    fill: isActive ? COLORS.text.light : COLORS.text.dark,
  },
  "&:hover": isActive
    ? {
        transform: "translateX(0)",
        bgcolor: COLORS.primary,
        color: COLORS.text.light,
      }
    : {
        transform: "translateX(4px)",
        bgcolor: COLORS.hover.bg,
        color: COLORS.primary,
        "& .MuiListItemText-primary": {
          color: COLORS.primary,
        },
        "& .MuiListItemIcon-root .MuiSvgIcon-root": {
          fill: COLORS.primary,
        },
      },
});

interface SidebarMenuItemProps {
  item: MenuItem;
  isCollapsed: boolean;
}

export function SidebarMenuItem({ item, isCollapsed }: SidebarMenuItemProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = useMemo(() => pathname === item.href, [pathname, item.href]);

  const IconComponent = item.icon;

  const handleClick = () => {
    router.push(item.href);
  };

  const buttonStyles = useMemo(
    () => getButtonStyles(isActive, isCollapsed),
    [isActive, isCollapsed]
  );

  return (
    <ListItem disablePadding sx={{ mb: 0.5 }}>
      <ListItemButton onClick={handleClick} sx={buttonStyles}>
        <ListItemIcon
          sx={{
            minWidth: isCollapsed ? "auto" : 36,
            color: isActive ? COLORS.text.light : COLORS.text.dark,
          }}
        >
          <IconComponent />
        </ListItemIcon>

        {!isCollapsed && (
          <>
            <ListItemText primary={item.text} />
            {item.badge && (
              <Chip
                label={item.badge}
                size="small"
                sx={{
                  height: 20,
                  fontSize: 11,
                  bgcolor: COLORS.badge.success,
                  color: COLORS.text.light,
                  fontWeight: 600,
                }}
              />
            )}
            {item.notification && (
              <Chip
                label={item.notification}
                size="small"
                sx={{
                  height: 20,
                  minWidth: 20,
                  fontSize: 11,
                  bgcolor: COLORS.badge.danger,
                  color: COLORS.text.light,
                  fontWeight: 600,
                }}
              />
            )}
          </>
        )}
      </ListItemButton>
    </ListItem>
  );
}
