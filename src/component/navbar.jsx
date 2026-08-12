import React, { useEffect, useState } from "react";
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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    updateScrollProgress();

    window.addEventListener("scroll", updateScrollProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, [location.pathname]);

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

      {/* Scroll Progress Bar */}
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden">
        <div
          className="h-full transition-[width] duration-150 ease-out"
          style={{
            width: `${scrollProgress}%`,
            background:
              "linear-gradient(90deg, #2563eb 0%, #06b6d4 25%, #8b5cf6 55%, #ec4899 80%, #2563eb 100%)",
          }}
        />
      </div>
    </header>
  );
}