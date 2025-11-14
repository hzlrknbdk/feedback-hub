import { MenuItem } from "@/lib/types/navigation";
import { ICONS } from "@/config/icons";

export const MAIN_MENU: MenuItem[] = [
  {
    text: "Dashboard",
    icon: ICONS.dashboard,
    href: "/dashboard",
    active: true,
  },
  {
    text: "Analytics",
    icon: ICONS.analytics,
    href: "/analytics",
  },
  {
    text: "Forms",
    icon: ICONS.forms,
    href: "/forms",
  },
  {
    text: "Notifications",
    icon: ICONS.notifications,
    href: "/notifications",
  },
  {
    text: "Popups",
    icon: ICONS.popups,
    href: "/popups",
  },
  {
    text: "Surveys",
    icon: ICONS.surveys,
    href: "/surveys",
  },
  {
    text: "NPS",
    icon: ICONS.nps,
    href: "/nps",
  },
  {
    text: "Responses",
    icon: ICONS.responses,
    href: "/responses",
  },
  {
    text: "Integrations",
    icon: ICONS.integrations,
    href: "/integrations",
  },
  {
    text: "Settings",
    icon: ICONS.settings,
    href: "/settings",
  },
  {
    text: "Security",
    icon: ICONS.security,
    href: "/security",
  },
  {
    text: "Help",
    icon: ICONS.help,
    href: "/help",
  },
];
