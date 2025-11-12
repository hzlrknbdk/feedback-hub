"use client";

import { Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsInputSvideoOutlinedIcon from "@mui/icons-material/SettingsInputSvideoOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { Avatar } from "@/ui/dataDisplay/Avatar";
import { Badge } from "@/ui/dataDisplay/Badge";
import { IconButton } from "@/ui/dataDisplay/IconButton";
import { Dropdown } from "@/ui/base/Dropdown";
import { SearchBar } from "@/ui/form/SearchBar";
import { COLORS, SIZES, TRANSITIONS, SHADOWS } from "@/styles";

interface NavbarProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

export default function Navbar({ onMenuClick, isMenuOpen }: NavbarProps) {
  const userMenuItems = [
    {
      label: "Profile",
      icon: <AccountCircleOutlinedIcon />,
      onClick: () => console.log("Profile clicked"),
    },
    {
      label: "Settings",
      icon: <SettingsInputSvideoOutlinedIcon />,
      onClick: () => console.log("Settings clicked"),
    },
    {
      label: "Logout",
      icon: <LogoutIcon />,
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
            fontSize: "1.5rem",
            mx: SIZES.spacing.md,
          }}
        >
          FormMind
        </Typography>
        <IconButton
          sx={{
            ml: 10,
          }}
        >
          <MenuIcon
            sx={{
              fontSize: 22,
              transition: "transform 0.3s ease-in-out",
              transform: isMenuOpen ? "rotate(0deg)" : "rotate(180deg)",
            }}
            onClick={onMenuClick}
          />
        </IconButton>
      </Box>

      <Box sx={{ flexGrow: 1, maxWidth: 600, px: SIZES.spacing.md }}>
        <SearchBar placeholder="Search..." />
      </Box>

      <Box
        sx={{ display: "flex", alignItems: "center", gap: SIZES.spacing.sm }}
      >
        <IconButton>
          <LightModeOutlinedIcon />
        </IconButton>

        <IconButton>
          <FullscreenIcon />
        </IconButton>

        <IconButton>
          <Badge badgeContent={3}>
            <NotificationsNoneIcon />
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
              <KeyboardArrowDownIcon
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
}
