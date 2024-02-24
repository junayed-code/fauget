"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/config";
import { MenuIcon, CloseIcon } from "./icons";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import AuthSection from "./AuthSection";

function MobileNavbar() {
  const pathname = usePathname();
  const { status } = useSession();
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    if (isOpen) setOpen(false);
  };

  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(prev => !prev)} className="relative z-50">
        {isOpen ? (
          <CloseIcon className="text-3xl" />
        ) : (
          <MenuIcon className="text-3xl" />
        )}
      </button>

      <div
        className={"fixed inset-0 bg-[var(--color-black-800)] z-40 p-[var(--header-height)_1.5rem_1.5rem] grid justify-items-center content-start gap-y-7 duration-150 ".concat(
          isOpen
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
      >
        <ul onClick={handleClose} className="space-y-4 text-xl text-center">
          {navItems.map(item => (
            <li
              key={item.name}
              className={"font-semibold duration-200 ".concat(
                pathname === item.href
                  ? "text-[var(--color-primary-400)]"
                  : "hover:opacity-75",
              )}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
          {status === "authenticated" && (
            <li
              key="logout-button"
              className="font-semibold duration-200 hover:opacity-75"
            >
              <button
                onClick={() => {
                  signOut({ callbackUrl: "/?modal=signin" }).catch(
                    console.error,
                  );
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        {status === "unauthenticated" && (
          <AuthSection
            onClick={handleClose}
            className="flex items-center gap-x-4"
          />
        )}
      </div>
    </div>
  );
}

export default MobileNavbar;
