import { MenuItem } from "@/lib/types/navigation";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import DynamicFormOutlinedIcon from "@mui/icons-material/DynamicFormOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import DevicesFoldOutlinedIcon from "@mui/icons-material/DevicesFoldOutlined";

export const MAIN_MENU: MenuItem[] = [
  {
    text: "Dashboard",
    icon: DashboardCustomizeOutlinedIcon,
    href: "/dashboard",
    active: true,
  },
  {
    text: "Analytics",
    icon: InsightsOutlinedIcon,
    href: "/analytics",
  },
  {
    text: "Forms",
    icon: DynamicFormOutlinedIcon,
    href: "/forms",
  },
  {
    text: "Templates",
    icon: DevicesFoldOutlinedIcon,
    href: "/templates",
  },
  {
    text: "Files",
    icon: FolderCopyOutlinedIcon,
    href: "/files",
  },
  {
    text: "Users",
    icon: PeopleAltOutlinedIcon,
    href: "/users",
  },
  {
    text: "Calendar",
    icon: CalendarMonthOutlinedIcon,
    href: "/calendar",
  },
  {
    text: "Security",
    icon: GppGoodOutlinedIcon,
    href: "/security",
  },
  {
    text: "Help",
    icon: HelpOutlineOutlinedIcon,
    href: "/help",
  },
];

export const ADMIN_MENU: MenuItem[] = [
  {
    text: "Settings",
    icon: SettingsSuggestOutlinedIcon,
    href: "/settings",
  },
  {
    text: "Security",
    icon: GppGoodOutlinedIcon,
    href: "/security",
  },
  {
    text: "Help & Support",
    icon: HelpOutlineOutlinedIcon,
    href: "/help",
  },
];
