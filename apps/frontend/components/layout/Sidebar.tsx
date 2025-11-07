import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Chip,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import DescriptionIcon from "@mui/icons-material/Description";
import ExtensionIcon from "@mui/icons-material/Extension";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MessageIcon from "@mui/icons-material/Message";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FolderIcon from "@mui/icons-material/Folder";
import SettingsIcon from "@mui/icons-material/Settings";
import SecurityIcon from "@mui/icons-material/Security";
import HelpIcon from "@mui/icons-material/Help";

const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    href: "/dashboard",
    active: true,
  },
  { text: "Analytics", icon: <BarChartIcon />, href: "/analytics" },
  { text: "Users", icon: <PeopleIcon />, href: "/users" },
  { text: "Products", icon: <ShoppingCartIcon />, href: "/products" },
  { text: "Orders", icon: <ReceiptIcon />, href: "/orders" },
  { text: "Forms", icon: <DescriptionIcon />, href: "/forms", badge: "New" },
  {
    text: "Elements",
    icon: <ExtensionIcon />,
    href: "/elements",
    badge: "New",
    expandable: true,
  },
  { text: "Reports", icon: <AssessmentIcon />, href: "/reports" },
  {
    text: "Messages",
    icon: <MessageIcon />,
    href: "/messages",
    notification: 3,
  },
  { text: "Calendar", icon: <CalendarTodayIcon />, href: "/calendar" },
  { text: "Files", icon: <FolderIcon />, href: "/files" },
];

const adminItems = [
  { text: "Settings", icon: <SettingsIcon />, href: "/settings" },
  { text: "Security", icon: <SecurityIcon />, href: "/security" },
  { text: "Help & Support", icon: <HelpIcon />, href: "/help" },
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 260,
        bgcolor: "white",
        borderRight: "1px solid #e2e8f0",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: "auto", py: 2, px: 2 }}>
        <List disablePadding>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                sx={{
                  borderRadius: 2,
                  py: 1.25,
                  px: 1.5,
                  bgcolor: item.active ? "#6366f1" : "transparent",
                  color: item.active ? "white" : "#64748b",
                  "&:hover": {
                    bgcolor: item.active ? "#6366f1" : "#f1f5f9",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 36,
                    color: item.active ? "white" : "#64748b",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: item.active ? 600 : 500,
                  }}
                />
                {item.badge && (
                  <Chip
                    label={item.badge}
                    size="small"
                    sx={{
                      height: 20,
                      fontSize: 11,
                      bgcolor: "#10b981",
                      color: "white",
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
                      bgcolor: "#ef4444",
                      color: "white",
                      fontWeight: 600,
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>

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
            {adminItems.map((item) => (
              <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  sx={{
                    borderRadius: 2,
                    py: 1.25,
                    px: 1.5,
                    color: "#64748b",
                    "&:hover": {
                      bgcolor: "#f1f5f9",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36, color: "#64748b" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}
