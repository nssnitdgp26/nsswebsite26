import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="NSS NIT Durgapur Home"
        >
          <img
            src="/logo.png"
            alt="NSS NIT Durgapur"
            className="h-10 w-auto object-contain"
          />

          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight text-foreground">
              NSS NIT Durgapur
            </p>

            <p className="text-xs text-muted-foreground">
              National Service Scheme
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav
          className="flex items-center gap-1 sm:gap-2"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                to={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
