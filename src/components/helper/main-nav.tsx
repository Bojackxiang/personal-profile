"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import { MENU_ITEMS } from '@/constant'
import { cn } from "@/lib/utils"

interface MainNavProps {

}

const MainNav: React.FC<MainNavProps> = ({

}) => {
  const pathname = usePathname();

  const routes = MENU_ITEMS.map((item) => ({
    href: `/${item.name}`,
    label: item.name,
    active: pathname === `/${item.name}`,
  }));

  return (
    <nav
      className="mx-6 flex items-center space-x-4 lg:space-x-6"
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
};

export default MainNav;
