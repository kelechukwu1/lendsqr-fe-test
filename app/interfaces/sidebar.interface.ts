import { IconName } from "../types/icon.type";

export interface SidebarItem {
  label: string;
  href: string;
  icon: IconName;
}

export interface SidebarCategory {
  category: string;
  items: SidebarItem[];
}
