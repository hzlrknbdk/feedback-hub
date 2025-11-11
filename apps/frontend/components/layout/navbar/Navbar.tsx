"use client";

import { Box, Typography, IconButton as MuiIconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import LightModeIcon from "@mui/icons-material/LightMode";
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

export default function Navbar() {
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
        bgcolor: "white",
        borderBottom: "1px solid #e2e8f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 3,
        flexShrink: 0,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Typography
          fontWeight={500}
          sx={{ color: "#6366f1", fontSize: "1.5rem", mx: 2 }}
        >
          FormMind
        </Typography>
        <MuiIconButton
          sx={{
            color: "#64748b",
            width: 40,
            height: 40,
            ml: 10,
          }}
        >
          <MenuIcon />
        </MuiIconButton>
      </Box>

      <Box sx={{ flexGrow: 1, maxWidth: 600, px: 3 }}>
        <SearchBar placeholder="Search..." shortcut="Ctrl+K" />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
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
                gap: 1,
                px: 1.5,
                py: 0.75,
                ml: 0.5,
                borderRadius: 2,
                transition: "all 0.2s",
                "&:hover": {
                  bgcolor: "#f8fafc",
                },
              }}
            >
              <Avatar name="Hazal Budak" sx={{ width: 32, height: 32 }} />
              <Typography
                variant="body2"
                fontWeight={500}
                sx={{ fontSize: 14 }}
              >
                Hazal Budak
              </Typography>
              <KeyboardArrowDownIcon sx={{ color: "#6366F1", fontSize: 18 }} />
            </Box>
          }
        />
      </Box>
    </Box>
  );
}
