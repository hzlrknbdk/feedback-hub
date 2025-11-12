"use client";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@/ui/dataDisplay";
import { MenuItem } from "@/lib/types/navigation";
import { useRouter, usePathname } from "next/navigation";
import { useMemo } from "react";
import { COLORS, SIZES, TRANSITIONS } from "@/styles";

interface SidebarMenuItemProps {
  item: MenuItem;
  isCollapsed: boolean;
}

const getButtonStyles = (isActive: boolean, isCollapsed: boolean) => ({
  borderRadius: SIZES.radius.md,
  transition: TRANSITIONS.smooth,
  justifyContent: isCollapsed ? "center" : "flex-start",
  bgcolor: isActive ? COLORS.primary : "transparent",
  color: "inherit",
  "& .MuiListItemText-primary": {
    color: isActive ? COLORS.text.light : COLORS.text.primary,
    fontWeight: isActive ? SIZES.fontWeight.medium : SIZES.fontWeight.normal,
  },
  "& .MuiListItemIcon-root .MuiSvgIcon-root": {
    fill: isActive ? COLORS.text.light : COLORS.text.primary,
  },
  "&:hover": isActive
    ? {
        transform: "translateX(0)",
        bgcolor: COLORS.primary,
        color: COLORS.text.light,
      }
    : {
        transform: "translateX(4px)",
        bgcolor: COLORS.hover,
        color: COLORS.primary,
        "& .MuiListItemText-primary": {
          color: COLORS.primary,
        },
        "& .MuiListItemIcon-root .MuiSvgIcon-root": {
          fill: COLORS.primary,
        },
      },
});

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
    <ListItem disablePadding sx={{ mb: SIZES.spacing.xs }}>
      <ListItemButton onClick={handleClick} sx={buttonStyles}>
        <ListItemIcon
          sx={{
            minWidth: isCollapsed ? "auto" : 36,
            color: isActive ? COLORS.text.light : COLORS.text.primary,
          }}
        >
          <IconComponent />
        </ListItemIcon>
        {!isCollapsed && <ListItemText primary={item.text} />}
      </ListItemButton>
    </ListItem>
  );
}
