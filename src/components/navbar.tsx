import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserMenu } from "./user-menu";
import { ModeToggle } from "./mode-toggle";

export const menus = [
  {
    id: 1,
    label: "Dashboard",
    href: "#dashboard",
  },
  {
    id: 2,
    label: "Orders",
    href: "#orders",
  },
  {
    id: 3,
    label: "Products",
    href: "#products",
  },
  {
    id: 4,
    label: "Customers",
    href: "#customers",
  },
  {
    id: 5,
    label: "Analytics",
    href: "#analytics",
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-100">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          {/* <Package2 className="h-6 w-6" /> */}
          <span className="text-3xl font-extrabold underline">solid<span className="text-primary">App</span></span>
        </Link>
        {menus.map((menu, i) => (
          <div key={i}>
            <Link
              href={menu.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {menu.label}
            </Link>
          </div>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              {/* <Package2 className="h-6 w-6" /> */}
              <span className="text-4xl border-2 border-solid">solid<span className="text-primary">App</span></span>
            </Link>
            {menus.map((menu, i) => (
              <div key={i}>
                <Link
                  href={menu.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {menu.label}
                </Link>
              </div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex gap-3 items-center justify-between">
          <ModeToggle />
          {/* <ColorToggle /> */}
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
