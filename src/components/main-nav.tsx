"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-7 md:flex">
      {navLinks.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "relative text-sm font-medium transition-colors hover:text-cardinal",
              active ? "text-cardinal" : "text-foreground/70",
            )}
          >
            {link.label}
            {active && (
              <span className="absolute -bottom-1.5 left-0 h-px w-full bg-cardinal" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
