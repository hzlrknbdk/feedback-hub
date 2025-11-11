export interface MenuItem {
  text: string;
  icon: React.ElementType;
  href: string;
  active?: boolean;
  badge?: string;
  notification?: number;
  expandable?: boolean;
  children?: MenuItem[];
}
