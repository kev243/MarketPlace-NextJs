"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { navbarLinks } from "./NavbarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MobileMenu() {
  const location = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"secondary"}>
          <Menu className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="mt-5 flex px-2 space-y-1 flex-col">
          {navbarLinks.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className={cn(
                location === item.href
                  ? "bg-muted"
                  : "hover:bg-muted hover:bg-opacity-75",
                "group flex items-center px-2 py-2 font-medium rounded-md"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
