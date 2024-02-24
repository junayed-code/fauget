import NavItems from "./NavItems";
import Logo from "./shared/Logo";
import PlayListItems from "./PlayListItems";
import SidebarHeader from "./shared/SidebarHeader";

function Sidebar() {
  return (
    <aside className="w-[var(--sidebar-width)] bg-[var(--color-gray-500)] text-white px-6 hidden lg:flex flex-col py-6">
      <Logo />

      <nav className="mt-10 mb-5">
        <SidebarHeader name="Menu" />
        <NavItems />
      </nav>

      <div className="mt-auto">
        <SidebarHeader name="My Playlist" lineWidth="30%" />
        <PlayListItems />
      </div>
    </aside>
  );
}

export default Sidebar;
