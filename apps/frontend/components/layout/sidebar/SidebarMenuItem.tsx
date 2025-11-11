import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Chip,
} from "@/ui/dataDisplay";
import { MenuItem } from "@/lib/types/navigation";

const InactiveHoverStyles = {
  transform: "translateX(4px)",
  bgcolor: "#E0E1FC",
  color: "#6366f1",
  "& .MuiListItemText-primary": {
    color: "#6366f1",
  },
  "& .MuiListItemText-secondary": {
    color: "#6366f1",
  },
  "& .MuiListItemIcon-root .MuiSvgIcon-root": {
    fill: "#6366f1",
  },
};

const ActiveHoverStyles = {
  transform: "translateX(0)",
  bgcolor: "#6366f1",
  color: "#ffffff",
};

export function SidebarMenuItem({ item }: { item: MenuItem }) {
  const IconComponent = item.icon;

  return (
    <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
      <ListItemButton
        sx={{
          borderRadius: 2,
          py: 1.25,
          px: 1.5,
          transition: "transform 0.2s ease-in-out",
          transform: "translateX(0)",

          bgcolor: item.active ? "#6366f1" : "transparent",
          color: "inherit",
          "& .MuiListItemText-primary": {
            color: item.active ? "#ffffff" : "#0E172A",
          },
          "& .MuiListItemIcon-root .MuiSvgIcon-root": {
            fill: item.active ? "#ffffff" : "#0E172A",
          },

          "&:hover": item.active ? ActiveHoverStyles : InactiveHoverStyles,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 36,
            color: item.active ? "#ffffff" : "#0E172A",
          }}
        >
          <IconComponent />
        </ListItemIcon>
        <ListItemText
          primary={item.text}
          slotProps={{
            primary: {
              sx: {
                fontSize: "1rem",
                fontWeight: item.active ? 500 : 400,
              },
            },
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
  );
}
