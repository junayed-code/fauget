import { HomeIcon, MusicIcon, SettingsIcon } from "@/components/icons";
import type { NavItem } from "../types";

export const navItems: NavItem[] = [
  {
    href: "/",
    name: "Home",
    icon: <HomeIcon className="text-xl" />,
  },
  {
    href: "/podcast",
    name: "Podcast",
    icon: <MusicIcon className="text-xl" />,
  },
  {
    href: "/settings",
    name: "Settings",
    icon: <SettingsIcon className="text-xl" />,
  },
];

export const playListItems = [
  "Playlist #A",
  "Playlist #B",
  "Playlist #C",
  "Add New +",
];

export const musicTypes = [
  "For You",
  "Popular",
  "Trend",
  "Pop",
  "Edm",
  "Rock",
  "More",
];
