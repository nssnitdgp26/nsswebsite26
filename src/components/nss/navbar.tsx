'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu, X, TreePine } from 'lucide-react';
import { navigation, siteConfig } from '@/data/site';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-background/75 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/55">
      <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-brand-service via-primary to-brand-nature transition-[width] duration-150" style={{ width: `${scrollProgress}%` }} />
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        {/* Logo / Brand */}
        <Link href="/" className="group flex items-center gap-3 font-semibold text-foreground" aria-label="NSS NIT Durgapur home">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-primary to-[#708cff] text-primary-foreground shadow-[0_10px_25px_-12px_rgb(143_174_255/0.9)] transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
            <TreePine className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-tight sm:text-base">{siteConfig.name}</span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:block">{siteConfig.motto}</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex" role="menubar">
          {navigation.map((link) => (
            <li key={link.href} role="none">
              <Link
                href={link.href}
                role="menuitem"
                aria-current={pathname === link.href ? 'page' : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${pathname === link.href ? 'bg-white/[0.08] text-foreground' : 'text-muted-foreground hover:bg-white/[0.06] hover:text-foreground'}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/join">Join NSS</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation menu">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-white/10 bg-[#101722]/95 backdrop-blur-2xl">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-1 pt-8">
                {navigation.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    className={`rounded-xl px-3 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${pathname === link.href ? 'bg-white/[0.08] text-foreground' : 'text-foreground hover:bg-white/[0.06]'}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <hr className="my-3 border-border" />
                <Button asChild size="sm" className="w-full">
                  <Link href="/join" onClick={() => setOpen(false)}>Join NSS</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
