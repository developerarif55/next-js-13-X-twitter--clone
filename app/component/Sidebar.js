"use client";
import { signOut, useSession } from "next-auth/react";
import { BiLogOut } from "react-icons/bi";
import { BsBellFill, BsFillBookmarkFill, BsHouseFill } from "react-icons/bs";

import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import SidebarItem from "./SidebarItem";

const items = [
  {
    icon: BsHouseFill,
    label: "Home",
    href: "/",
  },
  {
    icon: BsBellFill,
    label: "Notifications",
    href: "/notifications",
  },

  {
    icon: FaUser,
    label: "Profile",
    href: `/profile`,
  },
  {
    icon: BsFillBookmarkFill,
    label: "Bookmark",
    href: `/bookmark`,
  },
];
function Sidebar() {
  const { data: currentUser } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    console.log("Sign Out");
    await signOut();
    router.push("/"); // Redirect to the home page after sign-out
  };

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end text-white">
        <div className="space-y-4 lg:w-[230px]">
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              Icon={item.icon}
              label={item.label}
            />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={handleSignOut}
              Icon={BiLogOut}
              label="Logout"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
