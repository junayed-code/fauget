"use client";

import Link from "next/link";
import { navItems } from "@/config";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { LogoutIcon } from "./icons";

function NavItems() {
  const pathname = usePathname();
  const { status } = useSession();

  return (
    <ul className="space-y-4">
      {navItems.map(item => (
        <li
          key={item.name}
          className={"font-semibold flex gap-x-3 duration-200 ".concat(
            pathname === item.href
              ? "text-[var(--color-primary-400)]"
              : "hover:opacity-75",
          )}
        >
          <span className="mt-[1px]">{item.icon}</span>
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
      {status === "authenticated" && (
        <li
          key="logout-button"
          className={"font-semibold flex gap-x-3 duration-200 hover:opacity-75"}
        >
          <span className="mt-[1px] pl-[1px]">
            <LogoutIcon className="text-xl" />
          </span>
          <button
            onClick={() => {
              signOut({ callbackUrl: "/?modal=signin" }).catch(console.error);
            }}
          >
            Logout
          </button>
        </li>
      )}
    </ul>
  );
}

export default NavItems;
