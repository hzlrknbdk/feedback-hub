"use client";

import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Avatar } from "@/ui/dataDisplay/Avatar";
import { Badge } from "@/ui/dataDisplay/Badge";
import { IconButton } from "@/ui/dataDisplay/IconButton";
import { Dropdown } from "@/ui/base/Dropdown";
import { SearchBar } from "@/ui/form/SearchBar";
import { COLORS, SIZES, TRANSITIONS } from "@/styles";
import { UI_ICONS } from "@/config/icons";

interface NavbarProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

const Navbar: FC<NavbarProps> = ({ onMenuClick, isMenuOpen }) => {
  const userMenuItems = [
    {
      label: "Profile",
      icon: <UI_ICONS.profile />,
      onClick: () => console.log("Profile clicked"),
    },
    {
      label: "Settings",
      icon: <UI_ICONS.settings />,
      onClick: () => console.log("Settings clicked"),
    },
    {
      label: "Logout",
      icon: <UI_ICONS.logout />,
      onClick: () => console.log("Logout clicked"),
    },
  ];

  return (
    <Box
      sx={{
        height: 70,
        bgcolor: COLORS.background,
        borderBottom: `1px solid ${COLORS.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: SIZES.spacing.md,
        flexShrink: 0,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Typography
          fontWeight={SIZES.fontWeight.medium}
          sx={{
            color: COLORS.primary,
            fontSize: SIZES.fontSize["2xl"],
            mx: SIZES.spacing.md,
          }}
        >
          FeedBack Hub
        </Typography>
        <UI_ICONS.menu
          sx={{
            fontSize: SIZES.iconSize,
            transition: TRANSITIONS.smooth,
            transform: isMenuOpen ? "rotate(0deg)" : "rotate(180deg)",
            cursor: "pointer",
            ml: 5,
          }}
          onClick={onMenuClick}
        />
      </Box>

      <Box
        sx={{ flexGrow: 1, maxWidth: SIZES.maxWidth.md, px: SIZES.spacing.md }}
      >
        <SearchBar placeholder="Search..." />
      </Box>

      <Box
        sx={{ display: "flex", alignItems: "center", gap: SIZES.spacing.sm }}
      >
        <IconButton>
          <UI_ICONS.lightMode />
        </IconButton>

        <IconButton>
          <UI_ICONS.fullscreen />
        </IconButton>

        <IconButton>
          <Badge badgeContent={3}>
            <UI_ICONS.notifications />
          </Badge>
        </IconButton>

        <Dropdown
          items={userMenuItems}
          trigger={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: SIZES.spacing.sm,
                px: 1.5,
                py: 0.75,
                ml: SIZES.spacing.sm,
                borderRadius: SIZES.radius.md,
                cursor: "pointer",
                transition: TRANSITIONS.smooth,
                "&:hover": {
                  bgcolor: COLORS.backgroundLight,
                },
              }}
            >
              <Avatar name="Hazal Budak" sx={{ width: 32, height: 32 }} />
              <Typography
                variant="body2"
                fontWeight={SIZES.fontWeight.medium}
                sx={{ fontSize: SIZES.fontSize.md }}
              >
                Hazal Budak
              </Typography>
              <UI_ICONS.arrowDown
                sx={{
                  color: COLORS.primary,
                  fontSize: SIZES.iconSizeSmall,
                }}
              />
            </Box>
          }
        />
      </Box>
    </Box>
  );
};

export default Navbar;
