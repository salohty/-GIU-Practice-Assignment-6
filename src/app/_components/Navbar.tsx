"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/todos", label: "Todos" },
  { href: "/help/todos/create", label: "Help" },
  { href: "/archive", label: "Archive" },
  { href: "/playground/a", label: "Playground" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)) ? "active" : ""}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
