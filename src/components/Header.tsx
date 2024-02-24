"use client";

import { useSession } from "next-auth/react";
import Logo from "./shared/Logo";
import SearchBar from "./SearchBar";
import Avatar from "./shared/Avatar";
import AuthSection from "./AuthSection";
import Skeleton from "./shared/Skeleton";
import avatarImg from "@/assets/images/avatar.jpg";
import MobileNavbar from "./MobileNavbar";

function Header() {
  const { data, status } = useSession();

  return (
    <header className="min-h-[var(--header-height)] py-5 px-5 sm:px-8 flex items-center justify-between">
      <Logo className="lg:hidden" />
      <h4 className="text-xl font-bold hidden lg:block">
        {status === "loading" && <Skeleton className="h-7 w-72 rounded-md" />}
        {status === "authenticated" && <span>Welcome, {data.user?.name}</span>}
        {status === "unauthenticated" && (
          <span>Welcome to fauget music services</span>
        )}
      </h4>

      <div className="flex items-center gap-x-4">
        {status === "loading" && (
          <>
            <Skeleton className="h-8 w-52 rounded-md hidden lg:block" />
            <Skeleton className="h-11 w-11 rounded-full" />
          </>
        )}
        {status === "authenticated" && (
          <>
            <SearchBar />
            <Avatar
              size="38"
              className="mr-2"
              src={avatarImg.src}
              alt="Profile picture"
            />
          </>
        )}
        {status === "unauthenticated" && (
          <AuthSection className="hidden lg:flex items-center gap-x-3" />
        )}

        {/* Mobile navigation bar */}
        <MobileNavbar />
      </div>
    </header>
  );
}

export default Header;
